"use client";

import { useEffect, useRef, useState } from "react";

interface AudioWaveformProps {
  audioUrl: string;
  onClose: () => void;
  onLoaded?: () => void;
}

export default function AudioWaveform({ audioUrl, onClose, onLoaded }: AudioWaveformProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const AudioCtx = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const context = new AudioCtx();
    const source = context.createMediaElementSource(audio);
    const analyserNode = context.createAnalyser();
    
    analyserNode.fftSize = 256;
    source.connect(analyserNode);
    analyserNode.connect(context.destination);
    
    setAnalyser(analyserNode);

    // Handle audio events
    const handleCanPlay = () => {
      setIsLoading(false);
      if (onLoaded) onLoaded();
      audio.play().catch(err => {
        console.error('Failed to play audio:', err);
        setIsLoading(false);
      });
    };

    const handleError = () => {
      console.error('Failed to load audio');
      setIsLoading(false);
    };

    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('error', handleError);
    
    // Start loading
    audio.load();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('error', handleError);
      audio.pause();
      audio.currentTime = 0;
      context.close();
    };
  }, [audioUrl, onLoaded]);

  useEffect(() => {
    if (!analyser || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      animationRef.current = requestAnimationFrame(draw);
      
      analyser.getByteFrequencyData(dataArray);
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const barWidth = (canvas.width / bufferLength) * 2.5;
      let barHeight;
      let x = 0;
      
      for (let i = 0; i < bufferLength; i++) {
        barHeight = (dataArray[i] / 255) * canvas.height * 0.9;
        
        const gradient = ctx.createLinearGradient(0, canvas.height - barHeight, 0, canvas.height);
        gradient.addColorStop(0, "rgba(232, 93, 37, 0.8)");
        gradient.addColorStop(0.5, "rgba(204, 51, 17, 0.9)");
        gradient.addColorStop(1, "rgba(139, 58, 31, 1)");
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        
        x += barWidth + 1;
      }
    };

    draw();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [analyser]);

  return (
    <div 
      className="absolute inset-0 z-40"
      onClick={onClose}
    >
      <div className="absolute bottom-0 left-0 right-0 h-24">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-poster-dark/50">
            <div className="text-poster-cream text-sm rodeo-heading">LOADING AUDIO...</div>
          </div>
        )}
        <canvas 
          ref={canvasRef}
          width={400}
          height={100}
          className="w-full h-full"
        />
        <audio 
          ref={audioRef}
          src={audioUrl}
          preload="auto"
          className="hidden"
        />
      </div>
    </div>
  );
}