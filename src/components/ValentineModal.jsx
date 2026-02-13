import { useState, useEffect } from 'react'

function ValentineModal({ isOpen, onClose }) {
    const [showFireworks, setShowFireworks] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => setShowFireworks(true), 500)
        } else {
            setShowFireworks(false)
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            {/* Close button - Fixed to top right of screen on mobile, absolute on desktop */}
            <button
                onClick={onClose}
                className="fixed top-4 right-4 z-[60] w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-2xl md:text-3xl transition-all duration-300 hover:scale-110 shadow-lg md:absolute md:top-6 md:right-6"
            >
                ×
            </button>

            <div
                className="bg-gradient-to-br from-red-50 via-pink-50 to-rose-50 rounded-3xl p-6 md:p-12 max-w-4xl w-full relative overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Title */}
                <div className="text-center mb-8">
                    <h2 className="text-5xl md:text-6xl font-bold text-red-600 mb-4 animate-pulse">
                        Happy Valentine's Day! ❤️
                    </h2>
                    <p className="text-2xl text-red-700 italic font-medium">
                        To my one and only, Lintuu
                    </p>
                </div>

                {/* Main Content */}
                <div className="relative bg-gradient-to-br from-red-100 to-pink-100 rounded-3xl p-10 mb-8 min-h-[450px] flex flex-col items-center justify-center">
                    {/* Animated hearts explosion */}
                    {showFireworks && (
                        <>
                            <div className="absolute top-10 left-10 text-6xl animate-ping opacity-70">❤️</div>
                            <div className="absolute top-5 right-10 text-5xl animate-ping opacity-70" style={{ animationDelay: '0.1s' }}>💕</div>
                            <div className="absolute top-20 left-1/4 text-4xl animate-ping opacity-70" style={{ animationDelay: '0.2s' }}>💖</div>
                            <div className="absolute top-20 right-1/4 text-4xl animate-ping opacity-70" style={{ animationDelay: '0.3s' }}>💗</div>
                            <div className="absolute bottom-20 left-10 text-5xl animate-ping opacity-70" style={{ animationDelay: '0.4s' }}>💝</div>
                            <div className="absolute bottom-10 right-10 text-6xl animate-ping opacity-70" style={{ animationDelay: '0.5s' }}>💞</div>
                            <div className="absolute bottom-20 left-1/3 text-4xl animate-ping opacity-70" style={{ animationDelay: '0.6s' }}>💓</div>
                            <div className="absolute bottom-20 right-1/3 text-4xl animate-ping opacity-70" style={{ animationDelay: '0.7s' }}>💘</div>
                            <div className="absolute top-1/2 left-5 text-5xl animate-ping opacity-70" style={{ animationDelay: '0.8s' }}>❣️</div>
                            <div className="absolute top-1/2 right-5 text-5xl animate-ping opacity-70" style={{ animationDelay: '0.9s' }}>💟</div>
                        </>
                    )}

                    {/* Center couple */}
                    <div className="relative z-10 text-center">
                        <div className="text-[150px] mb-6 animate-bounce">
                            💑
                        </div>
                        <div className="text-8xl mb-8 animate-pulse">
                            ❤️
                        </div>
                    </div>
                </div>

                {/* Love Letter */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
                    <div className="text-center mb-6">
                        <h3 className="text-3xl font-bold text-red-800 mb-4">
                            My Love Letter To You
                        </h3>
                    </div>
                    <div className="space-y-4 text-lg text-red-900">
                        <p className="italic">
                            "You are my everything, today and always. Every moment with you is a treasure, every smile you give me is a gift, and every day with you is a blessing."
                        </p>
                        <p className="italic">
                            "Thank you for being you, for loving me, for making my life complete. I promise to cherish you, support you, and love you with all my heart, forever and always."
                        </p>
                        <p className="text-center font-bold text-2xl mt-6">
                            I Love You, Lintuu! 💕
                        </p>
                        <p className="text-center text-xl italic">
                            Forever yours, ❤️
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ValentineModal
