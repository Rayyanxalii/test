function ChocolateModal({ isOpen, onClose }) {
    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div
                className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 rounded-3xl p-8 md:p-12 max-w-3xl w-full relative overflow-hidden shadow-2xl"
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
                    <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-3">
                        Sweet Moments Together 🍫
                    </h2>
                    <p className="text-xl text-amber-700 italic">
                        Life is sweeter with you
                    </p>
                </div>

                {/* Couple Illustration */}
                <div className="relative bg-gradient-to-br from-pink-100 to-orange-100 rounded-3xl p-8 mb-6 min-h-[400px] flex items-center justify-center">
                    {/* Couple sitting together */}
                    <div className="relative w-full max-w-md">
                        {/* Background hearts */}
                        <div className="absolute top-5 left-5 text-4xl opacity-30 animate-pulse">💕</div>
                        <div className="absolute top-10 right-5 text-3xl opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}>💖</div>
                        <div className="absolute bottom-10 left-10 text-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>❤️</div>
                        <div className="absolute bottom-5 right-10 text-4xl opacity-30 animate-pulse" style={{ animationDelay: '1.5s' }}>💗</div>

                        {/* Couple */}
                        <div className="flex items-end justify-center gap-4">
                            {/* Person 1 (You) */}
                            <div className="flex flex-col items-center">
                                <div className="text-8xl mb-2">👨</div>
                                <div className="text-6xl -mt-8">🍫</div>
                                <p className="text-lg font-bold text-amber-800 mt-2">You</p>
                            </div>

                            {/* Heart between them */}
                            <div className="text-6xl mb-8 animate-bounce">
                                ❤️
                            </div>

                            {/* Person 2 (Lintuu) */}
                            <div className="flex flex-col items-center">
                                <div className="text-8xl mb-2">👩</div>
                                <div className="text-6xl -mt-8">🍫</div>
                                <p className="text-lg font-bold text-amber-800 mt-2">Lintuu</p>
                            </div>
                        </div>

                        {/* Chocolates around them */}
                        <div className="absolute top-1/2 left-0 text-5xl animate-bounce" style={{ animationDelay: '0.2s' }}>🍫</div>
                        <div className="absolute top-1/2 right-0 text-5xl animate-bounce" style={{ animationDelay: '0.4s' }}>🍫</div>
                        <div className="absolute bottom-0 left-1/4 text-4xl animate-bounce" style={{ animationDelay: '0.6s' }}>🍫</div>
                        <div className="absolute bottom-0 right-1/4 text-4xl animate-bounce" style={{ animationDelay: '0.8s' }}>🍫</div>
                    </div>
                </div>

                {/* Message */}
                <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6">
                    <p className="text-3xl md:text-4xl font-bold text-amber-900 mb-3">
                        "This is Me and You"
                    </p>
                    <p className="text-xl text-amber-800 italic">
                        Sharing sweet moments, creating sweet memories 🍫💕
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ChocolateModal
