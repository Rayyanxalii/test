function KissModal({ isOpen, onClose }) {
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
                className="bg-gradient-to-br from-red-50 via-pink-50 to-rose-50 rounded-3xl p-6 md:p-12 max-w-3xl w-full relative overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Title */}
                <div className="text-center mb-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-3">
                        Sealed With A Kiss 💋
                    </h2>
                    <p className="text-xl text-red-700 italic">
                        Every kiss tells our love story
                    </p>
                </div>

                {/* Kissing Couple */}
                <div className="relative bg-gradient-to-br from-red-100 to-pink-100 rounded-3xl p-12 mb-6 min-h-[400px] flex items-center justify-center overflow-hidden">
                    {/* Floating hearts and kisses */}
                    <div className="absolute top-5 left-5 text-5xl animate-ping opacity-60">💋</div>
                    <div className="absolute top-10 right-5 text-4xl animate-ping opacity-60" style={{ animationDelay: '0.2s' }}>❤️</div>
                    <div className="absolute bottom-10 left-10 text-4xl animate-ping opacity-60" style={{ animationDelay: '0.4s' }}>💕</div>
                    <div className="absolute bottom-5 right-10 text-5xl animate-ping opacity-60" style={{ animationDelay: '0.6s' }}>💋</div>
                    <div className="absolute top-1/3 left-10 text-3xl animate-ping opacity-60" style={{ animationDelay: '0.8s' }}>💖</div>
                    <div className="absolute top-1/3 right-10 text-3xl animate-ping opacity-60" style={{ animationDelay: '1s' }}>💗</div>
                    <div className="absolute bottom-1/3 left-5 text-4xl animate-ping opacity-60" style={{ animationDelay: '1.2s' }}>💝</div>
                    <div className="absolute bottom-1/3 right-5 text-4xl animate-ping opacity-60" style={{ animationDelay: '1.4s' }}>💞</div>

                    {/* Kissing couple */}
                    <div className="relative z-10">
                        <div className="text-[180px] animate-pulse">
                            💏
                        </div>
                        {/* Heart explosion around them */}
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-7xl animate-bounce">
                            ❤️
                        </div>
                        <div className="absolute top-1/2 -left-10 text-5xl animate-bounce" style={{ animationDelay: '0.3s' }}>
                            💕
                        </div>
                        <div className="absolute top-1/2 -right-10 text-5xl animate-bounce" style={{ animationDelay: '0.6s' }}>
                            💖
                        </div>
                    </div>
                </div>

                {/* Message */}
                <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6">
                    <p className="text-2xl md:text-3xl font-bold text-red-900 mb-3">
                        "Every kiss with you feels like the first time"
                    </p>
                    <p className="text-lg text-red-800 italic">
                        Magical, unforgettable, and full of love 💋💕
                    </p>
                </div>
            </div>
        </div>
    )
}

export default KissModal
