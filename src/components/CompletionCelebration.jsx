import { useEffect, useState } from 'react'

function CompletionCelebration({ isComplete, onClose }) {
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (isComplete) {
            setShow(true)
            // Auto close after 6 seconds
            const timer = setTimeout(() => {
                setShow(false)
                setTimeout(onClose, 1000)
            }, 6000)
            return () => clearTimeout(timer)
        }
    }, [isComplete, onClose])

    if (!show) return null

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center animate-fadeIn">
            {/* Confetti effect */}
            <div className="absolute inset-0 overflow-hidden">
                {Array.from({ length: 50 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute text-4xl animate-confetti"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: '-50px',
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${3 + Math.random() * 2}s`,
                        }}
                    >
                        {['🎉', '🎊', '✨', '💕', '❤️', '💖', '🌟', '⭐'][Math.floor(Math.random() * 8)]}
                    </div>
                ))}
            </div>

            {/* Main message */}
            <div className="relative z-10 bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl p-12 max-w-2xl mx-4 shadow-2xl text-center border-4 border-pink-300">
                <div className="text-8xl mb-6 animate-bounce">🎉</div>
                <h2 className="text-5xl font-bold text-pink-600 mb-4" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
                    You've Explored Everything!
                </h2>
                <p className="text-2xl text-pink-700 mb-6 italic" style={{ fontFamily: '"Crimson Text", serif' }}>
                    Thank you for experiencing this entire journey with me, Lintuu
                </p>
                <div className="flex justify-center gap-3 text-5xl mb-6">
                    <span className="animate-bounce" style={{ animationDelay: '0s' }}>❤️</span>
                    <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>💕</span>
                    <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>💖</span>
                    <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>💗</span>
                    <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>💝</span>
                </div>
                <p className="text-xl text-pink-800 font-medium">
                    Every day, every moment, I love you more 💕
                </p>

                <button
                    onClick={() => {
                        setShow(false)
                        setTimeout(onClose, 1000)
                    }}
                    className="mt-8 px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-bold text-lg transition-all duration-300 hover:scale-110 shadow-lg"
                >
                    Close
                </button>
            </div>

            <style jsx>{`
                @keyframes confetti {
                    0% {
                        transform: translateY(0) rotate(0deg);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(100vh) rotate(720deg);
                        opacity: 0;
                    }
                }
                .animate-confetti {
                    animation: confetti linear forwards;
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out;
                }
            `}</style>
        </div>
    )
}

export default CompletionCelebration
