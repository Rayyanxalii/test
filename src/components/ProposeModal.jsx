import { useState } from 'react'

function ProposeModal({ isOpen, onClose }) {
    const [noButtonPosition, setNoButtonPosition] = useState({ top: '50%', left: '50%' })
    const [showCelebration, setShowCelebration] = useState(false)

    const moveNoButton = () => {
        // Generate random position
        const randomTop = Math.floor(Math.random() * 150) + 10 // 10% to 80%
        const randomLeft = Math.floor(Math.random() * 150) + 10 // 10% to 80%
        setNoButtonPosition({ top: `${randomTop}%`, left: `${randomLeft}%` })
    }

    const handleYes = () => {
        setShowCelebration(true)
        setTimeout(() => {
            setShowCelebration(false)
            onClose()
        }, 3000)
    }

    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div
                className="bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 rounded-3xl p-8 md:p-12 max-w-2xl w-full relative overflow-visible shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-3xl transition-all duration-300 hover:scale-110 z-50 shadow-lg"
                >
                    ×
                </button>

                {!showCelebration ? (
                    <>
                        {/* Proposal Content */}
                        <div className="text-center mb-6 md:mb-8">
                            <div className="text-6xl md:text-8xl mb-4 md:mb-6 animate-bounce">💍</div>
                            <h2 className="text-3xl md:text-5xl font-bold text-rose-600 mb-2 md:mb-4">
                                A Special Question...
                            </h2>
                            <p className="text-xl md:text-3xl text-rose-700 font-medium italic mb-6 md:mb-8">
                                "Will you be mine forever?"
                            </p>
                        </div>

                        {/* Buttons Container - Relative positioning for NO button */}
                        <div className="relative h-40">
                            {/* YES Button - Fixed position */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                                <button
                                    onClick={handleYes}
                                    className="px-12 py-4 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white rounded-2xl font-bold text-2xl shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                                >
                                    YES! 💕
                                </button>
                            </div>

                            {/* NO Button - Moves on hover */}
                            <button
                                onMouseEnter={moveNoButton}
                                className="absolute px-8 py-3 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-2xl font-bold text-xl shadow-lg transition-all duration-300"
                                style={{
                                    top: noButtonPosition.top,
                                    left: noButtonPosition.left,
                                    transform: 'translate(-50%, -50%)',
                                    transition: 'top 0.3s ease, left 0.3s ease',
                                }}
                            >
                                No
                            </button>
                        </div>

                        {/* Hint text */}
                        <div className="text-center mt-8">
                            <p className="text-rose-600 italic text-lg">
                                💝 Choose wisely... 💝
                            </p>
                        </div>
                    </>
                ) : (
                    // Celebration Screen
                    <div className="text-center py-12">
                        <div className="text-9xl mb-6 animate-bounce">🎉</div>
                        <h2 className="text-5xl md:text-6xl font-bold text-rose-600 mb-4">
                            Yay! 💕
                        </h2>
                        <p className="text-3xl text-rose-700 font-medium mb-6">
                            I am the luckiest person alive!
                            Love you forever💕
                        </p>
                        <div className="flex justify-center gap-4 text-6xl">
                            <span className="animate-ping">❤️</span>
                            <span className="animate-ping" style={{ animationDelay: '0.2s' }}>💕</span>
                            <span className="animate-ping" style={{ animationDelay: '0.4s' }}>💖</span>
                            <span className="animate-ping" style={{ animationDelay: '0.6s' }}>💗</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProposeModal
