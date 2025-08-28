"use client";

import { useState, useEffect } from "react";

interface AppSettings {
  autoplayAudio: boolean;
  kenBurnsEffect: boolean;
  showTooltips: boolean;
  animatedText: boolean;
}

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
  settings: AppSettings;
  onSettingsChange: (settings: AppSettings) => void;
}

export default function Settings({ isOpen, onClose, settings, onSettingsChange }: SettingsProps) {
  const [localSettings, setLocalSettings] = useState(settings);

  useEffect(() => {
    setLocalSettings(settings);
  }, [settings]);

  const handleSave = () => {
    onSettingsChange(localSettings);
    localStorage.setItem('appSettings', JSON.stringify(localSettings));
    onClose();
  };

  const handleReset = () => {
    const defaultSettings = {
      autoplayAudio: false,
      kenBurnsEffect: true,
      showTooltips: true,
      animatedText: true
    };
    setLocalSettings(defaultSettings);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-poster-dark/80 z-[100] animate-fadeIn"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[90%] max-w-md animate-slideUp">
        <div className="vintage-border p-6 md:p-8 bg-poster-cream">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="western-name text-2xl md:text-3xl text-rodeo-red">
              SETTINGS
            </h2>
            <button
              onClick={onClose}
              className="text-poster-dark hover:text-rodeo-red transition-colors text-2xl leading-none pb-1"
              aria-label="Close settings"
            >
              ×
            </button>
          </div>

          {/* Settings Options */}
          <div className="space-y-6">
            {/* Audio Autoplay */}
            <div className="flex items-center justify-between">
              <label htmlFor="autoplay" className="rodeo-heading text-poster-dark text-sm">
                AUTOPLAY AUDIO
              </label>
              <button
                id="autoplay"
                onClick={() => setLocalSettings({...localSettings, autoplayAudio: !localSettings.autoplayAudio})}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  localSettings.autoplayAudio ? 'bg-rodeo-red' : 'bg-poster-brown'
                }`}
              >
                <span className="sr-only">Toggle autoplay audio</span>
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-poster-cream transition-transform ${
                    localSettings.autoplayAudio ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Ken Burns Effect */}
            <div className="flex items-center justify-between">
              <label htmlFor="kenburns" className="rodeo-heading text-poster-dark text-sm">
                IMAGE ANIMATIONS
              </label>
              <button
                id="kenburns"
                onClick={() => setLocalSettings({...localSettings, kenBurnsEffect: !localSettings.kenBurnsEffect})}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  localSettings.kenBurnsEffect ? 'bg-rodeo-red' : 'bg-poster-brown'
                }`}
              >
                <span className="sr-only">Toggle image animations</span>
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-poster-cream transition-transform ${
                    localSettings.kenBurnsEffect ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Show Tooltips */}
            <div className="flex items-center justify-between">
              <label htmlFor="tooltips" className="rodeo-heading text-poster-dark text-sm">
                SHOW TOOLTIPS
              </label>
              <button
                id="tooltips"
                onClick={() => setLocalSettings({...localSettings, showTooltips: !localSettings.showTooltips})}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  localSettings.showTooltips ? 'bg-rodeo-red' : 'bg-poster-brown'
                }`}
              >
                <span className="sr-only">Toggle tooltips</span>
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-poster-cream transition-transform ${
                    localSettings.showTooltips ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Animated Text */}
            <div className="flex items-center justify-between">
              <label htmlFor="animations" className="rodeo-heading text-poster-dark text-sm">
                TEXT ANIMATIONS
              </label>
              <button
                id="animations"
                onClick={() => setLocalSettings({...localSettings, animatedText: !localSettings.animatedText})}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  localSettings.animatedText ? 'bg-rodeo-red' : 'bg-poster-brown'
                }`}
              >
                <span className="sr-only">Toggle text animations</span>
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-poster-cream transition-transform ${
                    localSettings.animatedText ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t-2 border-poster-dark my-6"></div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleSave}
              className="flex-1 px-4 py-2 bg-rodeo-red text-poster-cream impact-text text-sm border-2 border-poster-dark hover:bg-rodeo-orange transition-colors"
            >
              SAVE
            </button>
            <button
              onClick={handleReset}
              className="flex-1 px-4 py-2 bg-poster-cream text-poster-dark impact-text text-sm border-2 border-poster-dark hover:bg-vintage-yellow transition-colors"
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </>
  );
}