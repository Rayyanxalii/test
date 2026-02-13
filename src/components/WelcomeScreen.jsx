import { useState, useEffect } from 'react'

function WelcomeScreen({ onClose }) {
    const [show, setShow] = useState(true)

    useEffect(() => {
        // Auto close after 5 seconds
        const timer = setTimeout(() => {
            setShow(false)
            setTimeout(onClose, 1000) // Wait for fade out animation
        }, 5000)

        return () => clearTimeout(timer)
    }, [onClose])

    const handleSkip = () => {
        setShow(false)
        setTimeout(onClose, 1000)
    }

    return (
        <div
            className={`fixed inset-0 bg-gradient-to-br from-pink-500 via-red-500 to-rose-500 z-50 flex items-center justify-center transition-opacity duration-1000 ${show ? 'opacity-100' : 'opacity-0'
                }`}
        >
            {/* Floating hearts background */}
            <div className="absolute inset-0 overflow-hidden">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute text-6xl opacity-20 animate-ping"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${2 + Math.random() * 2}s`,
                        }}
                    >
                        💕
                    </div>
                ))}
            </div>

            {/* Main content */}
            <div className="relative z-10 text-center px-8 animate-fadeIn">
                <div className="mb-8 text-9xl animate-bounce">💝</div>
                <h1
                    className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl animate-slideDown"
                    style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                    For My Dearest
                </h1>
                <h2
                    className="text-7xl md:text-9xl font-extrabold text-white mb-8 drop-shadow-2xl animate-slideUp"
                    style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                    Lintuu 💕
                </h2>
                <p className="text-2xl md:text-3xl text-white/90 italic mb-12 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
                    A special journey through Valentine's week, made just for you
                </p>

                {/* Skip button */}
                <button
                    onClick={handleSkip}
                    className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white rounded-full font-semibold backdrop-blur-md transition-all duration-300 hover:scale-110 border-2 border-white/50"
                >
                    Enter →
                </button>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                @keyframes slideDown {
                    from {
                        transform: translateY(-50px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
                @keyframes slideUp {
                    from {
                        transform: translateY(50px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 1s ease-out forwards;
                }
                .animate-slideDown {
                    animation: slideDown 1s ease-out forwards;
                }
                .animate-slideUp {
                    animation: slideUp 1s ease-out forwards;
                }
            `}</style>
        </div>
    )
}

export default WelcomeScreen
