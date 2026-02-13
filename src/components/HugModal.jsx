function HugModal({ isOpen, onClose }) {
    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div
                className="bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 rounded-3xl p-8 md:p-12 max-w-3xl w-full relative overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-3xl transition-all duration-300 hover:scale-110 z-50 shadow-lg"
                >
                    ×
                </button>

                {/* Title */}
                <div className="text-center mb-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-pink-800 mb-3">
                        A Virtual Hug For You 🤗
                    </h2>
                    <p className="text-xl text-pink-700 italic">
                        Until I can hold you in my arms
                    </p>
                </div>

                {/* Hugging Couple */}
                <div className="relative bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-12 mb-6 min-h-[400px] flex items-center justify-center">
                    {/* Floating hearts */}
                    <div className="absolute top-5 left-5 text-5xl animate-ping opacity-50">💕</div>
                    <div className="absolute top-10 right-5 text-4xl animate-ping opacity-50" style={{ animationDelay: '0.3s' }}>💖</div>
                    <div className="absolute bottom-10 left-10 text-4xl animate-ping opacity-50" style={{ animationDelay: '0.6s' }}>❤️</div>
                    <div className="absolute bottom-5 right-10 text-5xl animate-ping opacity-50" style={{ animationDelay: '0.9s' }}>💗</div>
                    <div className="absolute top-1/2 left-5 text-3xl animate-ping opacity-50" style={{ animationDelay: '1.2s' }}>💝</div>
                    <div className="absolute top-1/2 right-5 text-3xl animate-ping opacity-50" style={{ animationDelay: '1.5s' }}>💞</div>

                    {/* Hugging emoji couple */}
                    <div className="relative">
                        <div className="text-[180px] animate-pulse">
                            🫂
                        </div>
                        {/* Extra hearts around the hug */}
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-6xl animate-bounce">
                            ❤️
                        </div>
                    </div>
                </div>

                {/* Message */}
                <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6">
                    <p className="text-2xl md:text-3xl font-bold text-pink-900 mb-3">
                        "In your arms, I find my home, my peace, and my happiness"
                    </p>
                    <p className="text-lg text-pink-800 italic">
                        Sending you a thousand warm hugs! 🤗💕
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HugModal
