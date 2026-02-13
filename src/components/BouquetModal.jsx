import { useState, useEffect } from 'react'

function BouquetModal({ isOpen, onClose }) {
    const [visibleFlowers, setVisibleFlowers] = useState(0)

    useEffect(() => {
        if (isOpen) {
            setVisibleFlowers(0)
            // Create flowers one by one
            const interval = setInterval(() => {
                setVisibleFlowers(prev => {
                    if (prev >= 30) {
                        clearInterval(interval)
                        return prev
                    }
                    return prev + 1
                })
            }, 150) // Each flower appears 150ms after the previous one

            return () => clearInterval(interval)
        } else {
            setVisibleFlowers(0)
        }
    }, [isOpen])

    if (!isOpen) return null

    // Dense arrangement of roses - all red roses 🌹
    const flowers = [
        // Bottom row - 7 roses
        { x: '-120px', y: '80px', rotation: -20, size: 'text-8xl' },
        { x: '-80px', y: '85px', rotation: -10, size: 'text-8xl' },
        { x: '-40px', y: '88px', rotation: -5, size: 'text-8xl' },
        { x: '0px', y: '90px', rotation: 0, size: 'text-9xl' },
        { x: '40px', y: '88px', rotation: 5, size: 'text-8xl' },
        { x: '80px', y: '85px', rotation: 10, size: 'text-8xl' },
        { x: '120px', y: '80px', rotation: 20, size: 'text-8xl' },

        // Second row - 7 roses
        { x: '-110px', y: '40px', rotation: -18, size: 'text-8xl' },
        { x: '-75px', y: '45px', rotation: -12, size: 'text-8xl' },
        { x: '-35px', y: '48px', rotation: -6, size: 'text-8xl' },
        { x: '0px', y: '50px', rotation: 0, size: 'text-9xl' },
        { x: '35px', y: '48px', rotation: 6, size: 'text-8xl' },
        { x: '75px', y: '45px', rotation: 12, size: 'text-8xl' },
        { x: '110px', y: '40px', rotation: 18, size: 'text-8xl' },

        // Third row - 6 roses
        { x: '-90px', y: '5px', rotation: -15, size: 'text-7xl' },
        { x: '-55px', y: '8px', rotation: -8, size: 'text-8xl' },
        { x: '-20px', y: '10px', rotation: -3, size: 'text-8xl' },
        { x: '20px', y: '10px', rotation: 3, size: 'text-8xl' },
        { x: '55px', y: '8px', rotation: 8, size: 'text-8xl' },
        { x: '90px', y: '5px', rotation: 15, size: 'text-7xl' },

        // Fourth row - 5 roses
        { x: '-70px', y: '-30px', rotation: -12, size: 'text-7xl' },
        { x: '-35px', y: '-28px', rotation: -6, size: 'text-7xl' },
        { x: '0px', y: '-25px', rotation: 0, size: 'text-8xl' },
        { x: '35px', y: '-28px', rotation: 6, size: 'text-7xl' },
        { x: '70px', y: '-30px', rotation: 12, size: 'text-7xl' },

        // Top row - 5 roses
        { x: '-50px', y: '-60px', rotation: -10, size: 'text-6xl' },
        { x: '-20px', y: '-62px', rotation: -5, size: 'text-7xl' },
        { x: '0px', y: '-65px', rotation: 0, size: 'text-7xl' },
        { x: '20px', y: '-62px', rotation: 5, size: 'text-7xl' },
        { x: '50px', y: '-60px', rotation: 10, size: 'text-6xl' },
    ]

    return (
        <div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div
                className="bg-gradient-to-br from-white/95 via-rose-50/95 to-pink-50/95 rounded-3xl p-6 md:p-10 max-w-3xl w-full relative overflow-visible shadow-2xl overflow-hidden md:overflow-visible"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 md:top-4 md:right-4 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-2xl md:text-3xl transition-all duration-300 hover:scale-110 z-50 shadow-lg"
                >
                    ×
                </button>

                {/* Title */}
                <div className="text-center mb-4 md:mb-6 mt-4 md:mt-0">
                    <h2 className="text-3xl md:text-6xl font-bold text-rose-600 mb-2 md:mb-3">
                        For You, My Love 💕
                    </h2>
                    <p className="text-base md:text-xl text-rose-700/90 font-medium">
                        A bouquet of roses, just for you
                    </p>
                </div>

                {/* Massive Bouquet Container */}
                <div className="relative h-[350px] md:h-[500px] flex items-center justify-center overflow-visible scale-75 md:scale-100 origin-center">
                    {/* Beautiful Vase */}
                    <div className="absolute bottom-0 w-48 h-56 bg-gradient-to-b from-pink-300 via-pink-400 to-pink-500 rounded-t-[3rem] shadow-2xl z-0">
                        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-pink-200 to-pink-300 rounded-t-[3rem] border-b-4 border-pink-400"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-8 bg-pink-600"></div>
                        {/* Decorative hearts on vase */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-pink-500/20 text-5xl">
                            ❤️
                        </div>
                        <div className="absolute top-1/3 left-1/4 text-pink-500/15 text-3xl">❤️</div>
                        <div className="absolute top-1/3 right-1/4 text-pink-500/15 text-3xl">❤️</div>
                    </div>

                    {/* Dense Rose Bouquet - appears flower by flower */}
                    <div className="relative w-full h-full flex items-center justify-center">
                        {flowers.map((flower, index) => (
                            <div
                                key={index}
                                className={`absolute ${flower.size} transition-all duration-600 ease-out ${index < visibleFlowers
                                    ? 'opacity-100 scale-100'
                                    : 'opacity-0 scale-0'
                                    }`}
                                style={{
                                    transform: index < visibleFlowers
                                        ? `translate(${flower.x}, ${flower.y}) rotate(${flower.rotation}deg)`
                                        : `translate(0px, 150px) scale(0) rotate(0deg)`,
                                    zIndex: 30 - index,
                                    filter: index < visibleFlowers ? 'drop-shadow(0 6px 12px rgba(220, 38, 38, 0.3))' : 'none',
                                }}
                            >
                                🌹
                            </div>
                        ))}
                    </div>

                    {/* Sparkles - appear progressively */}
                    {/* ... sparkles logic identical ... */}
                    {visibleFlowers > 10 && (
                        <div className="absolute top-5 left-10 text-4xl animate-ping opacity-60">✨</div>
                    )}
                    {visibleFlowers > 15 && (
                        <div className="absolute top-10 right-10 text-3xl animate-ping opacity-60" style={{ animationDelay: '0.2s' }}>✨</div>
                    )}
                    {visibleFlowers > 20 && (
                        <div className="absolute bottom-60 left-5 text-3xl animate-ping opacity-60" style={{ animationDelay: '0.4s' }}>✨</div>
                    )}
                    {visibleFlowers > 25 && (
                        <div className="absolute bottom-60 right-5 text-4xl animate-ping opacity-60" style={{ animationDelay: '0.6s' }}>✨</div>
                    )}
                    {visibleFlowers >= 30 && (
                        <>
                            <div className="absolute top-1/3 left-2 text-3xl animate-ping opacity-60" style={{ animationDelay: '0.8s' }}>✨</div>
                            <div className="absolute top-1/3 right-2 text-3xl animate-ping opacity-60" style={{ animationDelay: '1s' }}>✨</div>
                            <div className="absolute top-1/2 left-8 text-2xl animate-ping opacity-60" style={{ animationDelay: '1.2s' }}>💫</div>
                            <div className="absolute top-1/2 right-8 text-2xl animate-ping opacity-60" style={{ animationDelay: '1.4s' }}>💫</div>
                        </>
                    )}
                </div>

                {/* Message - appears after bouquet is complete */}
                <div className={`mt-2 md:mt-6 text-center transition-all duration-1000 ${visibleFlowers >= 30 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                    <p className="text-xl md:text-3xl text-rose-700 font-bold italic mb-2 md:mb-3">
                        "Every rose represents a reason I love you"
                    </p>
                    <p className="text-lg md:text-xl text-rose-600 font-medium">
                        And there are infinite more... 🌹💕
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BouquetModal
