
import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';

// Define the sound context interface
interface SoundContextType {
    playClick: () => void;
    playHover: () => void;
    playError: () => void;
    playSuccess: () => void;
    playTyping: () => void;
    toggleMute: () => void;
    isMuted: boolean;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

// Hook to use the sound context
export const useSound = () => {
    const context = useContext(SoundContext);
    if (!context) {
        throw new Error('useSound must be used within a SoundProvider');
    }
    return context;
};

interface SoundProviderProps {
    children: React.ReactNode;
}

export const SoundProvider: React.FC<SoundProviderProps> = ({ children }) => {
    const [isMuted, setIsMuted] = useState<boolean>(() => {
        const saved = localStorage.getItem('sound-muted');
        return saved ? JSON.parse(saved) : false;
    });

    const audioContextRef = useRef<AudioContext | null>(null);

    useEffect(() => {
        localStorage.setItem('sound-muted', JSON.stringify(isMuted));
    }, [isMuted]);

    // Initialize Audio Context on user interaction (handled implicitly by browsers usually)
    const getAudioContext = useCallback(() => {
        if (!audioContextRef.current) {
            const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
            if (AudioContext) {
                audioContextRef.current = new AudioContext();
            }
        }
        // Resume if suspended (common browser policy)
        if (audioContextRef.current?.state === 'suspended') {
            audioContextRef.current.resume();
        }
        return audioContextRef.current;
    }, []);

    const playTone = useCallback((frequency: number, type: OscillatorType, duration: number, volume: number = 0.1) => {
        if (isMuted) return;

        try {
            const ctx = getAudioContext();
            if (!ctx) return;

            const osc = ctx.createOscillator();
            const gainNode = ctx.createGain();

            osc.type = type;
            osc.frequency.setValueAtTime(frequency, ctx.currentTime);

            gainNode.gain.setValueAtTime(volume, ctx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

            osc.connect(gainNode);
            gainNode.connect(ctx.destination);

            osc.start();
            osc.stop(ctx.currentTime + duration);
        } catch (e) {
            console.error("Audio playback error:", e);
        }
    }, [isMuted, getAudioContext]);

    // Retro Click: Short, high pitch blip
    const playClick = useCallback(() => {
        playTone(800, 'square', 0.05, 0.1);
    }, [playTone]);

    // Retro Hover: Lower pitch, very short
    const playHover = useCallback(() => {
        playTone(400, 'sine', 0.03, 0.05); // low volume
    }, [playTone]);

    // Retro Error: Buzz
    const playError = useCallback(() => {
        playTone(150, 'sawtooth', 0.3, 0.1);
    }, [playTone]);

    // Retro Success: Upward chime effect
    const playSuccess = useCallback(() => {
        if (isMuted) return;
        const ctx = getAudioContext();
        if (!ctx) return;

        const now = ctx.currentTime;

        // Arpeggio
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'square';
            osc.frequency.setValueAtTime(freq, now + (i * 0.05));
            gain.gain.setValueAtTime(0.05, now + (i * 0.05));
            gain.gain.exponentialRampToValueAtTime(0.01, now + (i * 0.05) + 0.1);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + (i * 0.05));
            osc.stop(now + (i * 0.05) + 0.1);
        });
    }, [isMuted, getAudioContext]);

    // Typing sound (like mechanical keyboard)
    const playTyping = useCallback(() => {
        // White noise burst for clicky feel is hard with simple oscillators, 
        // using a high frequency short square wave for now.
        playTone(1200 + Math.random() * 500, 'square', 0.02, 0.05);
    }, [playTone]);

    const toggleMute = () => {
        setIsMuted(prev => !prev);
    };

    return (
        <SoundContext.Provider value={{ playClick, playHover, playError, playSuccess, playTyping, toggleMute, isMuted }}>
            {children}
        </SoundContext.Provider>
    );
};
