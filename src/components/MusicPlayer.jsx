import { useState, useRef, useEffect } from 'react'

function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [showTooltip, setShowTooltip] = useState(true)
    const [volume, setVolume] = useState(0.5)
    const [showControls, setShowControls] = useState(false)
    const audioRef = useRef(null)

    useEffect(() => {
        // Hide tooltip after 5 seconds
        const timer = setTimeout(() => setShowTooltip(false), 5000)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume
        }
    }, [volume])

    const toggleMusic = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause()
            } else {
                audioRef.current.play().catch(e => console.log("Audio play failed", e))
            }
            setIsPlaying(!isPlaying)
        }
    }

    return (
        <div className="fixed top-6 right-6 z-40">
            {/* Tooltip */}
            {showTooltip && !isPlaying && (
                <div className="absolute -left-48 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg text-sm font-medium text-pink-600 whitespace-nowrap animate-pulse">
                    Click for romantic music 🎵
                    <div className="absolute right-0 top-1/2 transform translate-x-2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white/90"></div>
                </div>
            )}

            {/* Volume control panel */}
            {showControls && (
                <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-md px-3 py-2 rounded-lg shadow-lg">
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={volume}
                        onChange={(e) => setVolume(parseFloat(e.target.value))}
                        className="w-20 h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer accent-pink-500"
                        style={{
                            transform: 'rotate(-90deg)',
                            transformOrigin: 'center',
                        }}
                    />
                </div>
            )}

            {/* Music button */}
            <button
                onClick={toggleMusic}
                onMouseEnter={() => setShowControls(true)}
                onMouseLeave={() => setShowControls(false)}
                className="w-16 h-16 bg-white/80 hover:bg-white text-pink-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 border-2 border-pink-200"
                title={isPlaying ? 'Pause music' : 'Play music'}
            >
                <span className="text-3xl">
                    {isPlaying ? '🔊' : '🎵'}
                </span>
            </button>

            {/* Audio element - Romantic piano instrumental */}
            <audio
                ref={audioRef}
                loop
                src="https://cdn.pixabay.com/audio/2022/03/10/audio_4a468ce262.mp3"
            />
        </div>
    )
}

export default MusicPlayer
