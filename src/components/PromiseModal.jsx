import { useState } from 'react'

function PromiseModal({ isOpen, onClose }) {
    const [currentPromise, setCurrentPromise] = useState(0)

    const promises = [
        { icon: '🤝', text: 'I promise to always stand by your side', color: 'from-purple-400 to-pink-400' },
        { icon: '💪', text: 'I promise to support you in everything you do', color: 'from-pink-400 to-rose-400' },
        { icon: '😊', text: 'I promise to make you smile every single day', color: 'from-rose-400 to-red-400' },
        { icon: '🌟', text: 'I promise to be your light in dark times', color: 'from-red-400 to-pink-400' },
        { icon: '❤️', text: 'I promise to love you unconditionally, forever', color: 'from-pink-500 to-purple-500' },
    ]

    const nextPromise = () => {
        setCurrentPromise((prev) => (prev + 1) % promises.length)
    }

    const prevPromise = () => {
        setCurrentPromise((prev) => (prev - 1 + promises.length) % promises.length)
    }

    if (!isOpen) return null

    const promise = promises[currentPromise]

    return (
        <div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div
                className="bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 rounded-3xl p-8 md:p-12 max-w-3xl w-full relative overflow-hidden shadow-2xl"
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
                <div className="text-center mb-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-3">
                        My Promises To You 🤝
                    </h2>
                    <p className="text-xl text-purple-700 italic">
                        Forever and always
                    </p>
                </div>

                {/* Promise Card */}
                <div className={`bg-gradient-to-br ${promise.color} rounded-3xl p-12 mb-8 min-h-[300px] flex flex-col items-center justify-center transform transition-all duration-500`}>
                    <div className="text-9xl mb-6 animate-bounce">
                        {promise.icon}
                    </div>
                    <p className="text-2xl md:text-3xl font-bold text-white text-center leading-relaxed drop-shadow-lg">
                        "{promise.text}"
                    </p>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center gap-6 mb-4">
                    <button
                        onClick={prevPromise}
                        className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-xl font-bold transition-all duration-300 hover:scale-110"
                    >
                        ← Previous
                    </button>
                    <span className="text-purple-800 font-bold text-lg">
                        {currentPromise + 1} / {promises.length}
                    </span>
                    <button
                        onClick={nextPromise}
                        className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-xl font-bold transition-all duration-300 hover:scale-110"
                    >
                        Next →
                    </button>
                </div>

                {/* Dots indicator */}
                <div className="flex justify-center gap-2">
                    {promises.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentPromise ? 'bg-purple-600 scale-125' : 'bg-purple-300'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PromiseModal
