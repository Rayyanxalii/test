function FloatingHearts() {
    const hearts = ['❤️', '💕', '💖', '💗', '💝', '💞', '💓']

    // Generate 15 hearts with random properties
    const floatingHearts = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        emoji: hearts[Math.floor(Math.random() * hearts.length)],
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 10}s`,
        animationDuration: `${15 + Math.random() * 10}s`,
        size: Math.random() > 0.7 ? 'text-4xl' : Math.random() > 0.4 ? 'text-3xl' : 'text-2xl',
        swayAmount: 20 + Math.random() * 40, // Random sway distance
    }))

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {floatingHearts.map((heart) => (
                <div
                    key={heart.id}
                    className={`absolute ${heart.size} opacity-30 animate-float`}
                    style={{
                        left: heart.left,
                        bottom: '-50px',
                        animationDelay: heart.animationDelay,
                        animationDuration: heart.animationDuration,
                        '--sway-amount': `${heart.swayAmount}px`,
                    }}
                >
                    {heart.emoji}
                </div>
            ))}
            <style jsx>{`
                @keyframes float {
                    0% {
                        transform: translateY(0) translateX(0) rotate(0deg);
                        opacity: 0;
                    }
                    10% {
                        opacity: 0.3;
                    }
                    25% {
                        transform: translateY(-25vh) translateX(var(--sway-amount)) rotate(90deg);
                    }
                    50% {
                        transform: translateY(-50vh) translateX(0) rotate(180deg);
                    }
                    75% {
                        transform: translateY(-75vh) translateX(calc(var(--sway-amount) * -1)) rotate(270deg);
                    }
                    90% {
                        opacity: 0.3;
                    }
                    100% {
                        transform: translateY(-100vh) translateX(0) rotate(360deg);
                        opacity: 0;
                    }
                }
                .animate-float {
                    animation: float linear infinite;
                }
            `}</style>
        </div>
    )
}

export default FloatingHearts
