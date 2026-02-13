function TeddyModal({ isOpen, onClose }) {
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
                className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-3xl p-6 md:p-12 max-w-3xl w-full relative overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Title */}
                <div className="text-center mb-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-orange-800 mb-3">
                        A Warm Hug For You 🧸
                    </h2>
                    <p className="text-xl text-orange-700 italic">
                        Soft, cuddly, and full of love
                    </p>
                </div>

                {/* Giant Teddy Bear */}
                <div className="relative bg-gradient-to-br from-pink-100 to-orange-100 rounded-3xl p-12 mb-6 min-h-[400px] flex flex-col items-center justify-center">
                    {/* Floating hearts */}
                    <div className="absolute top-5 left-10 text-4xl animate-ping opacity-60">💕</div>
                    <div className="absolute top-10 right-10 text-3xl animate-ping opacity-60" style={{ animationDelay: '0.5s' }}>💖</div>
                    <div className="absolute bottom-10 left-5 text-3xl animate-ping opacity-60" style={{ animationDelay: '1s' }}>❤️</div>
                    <div className="absolute bottom-5 right-5 text-4xl animate-ping opacity-60" style={{ animationDelay: '1.5s' }}>💗</div>

                    {/* Giant Teddy */}
                    <div className="text-[200px] mb-4 animate-bounce">
                        🧸
                    </div>

                    {/* Bow on teddy */}
                    <div className="text-6xl -mt-32 mb-20 animate-pulse">
                        🎀
                    </div>
                </div>

                {/* Message */}
                <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6">
                    <p className="text-2xl md:text-3xl font-bold text-orange-900 mb-3">
                        "Just like this teddy, I want to be your comfort always"
                    </p>
                    <p className="text-lg text-orange-800 italic">
                        Sending you the warmest, coziest hug! 🤗💕
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TeddyModal
