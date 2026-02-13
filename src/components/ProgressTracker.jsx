import { useSelector } from 'react-redux'

function ProgressTracker({ viewedDays }) {
    const { valentineDays } = useSelector((state) => state.gift)
    const totalDays = valentineDays.length
    const viewedCount = viewedDays.size

    return (
        <div className="fixed top-4 md:top-auto md:bottom-6 left-1/2 transform -translate-x-1/2 z-40 bg-white/90 backdrop-blur-md rounded-full px-4 py-2 md:px-6 md:py-3 shadow-2xl border-2 border-pink-200 w-max max-w-[90%] transition-all duration-300">
            <div className="flex items-center gap-3 md:gap-4">
                {/* Progress text */}
                <div className="text-xs md:text-sm font-bold text-pink-600 whitespace-nowrap">
                    {viewedCount} / {totalDays} <span className="hidden sm:inline">days explored</span>
                </div>

                {/* Heart indicators */}
                <div className="flex gap-1">
                    {valentineDays.map((_, index) => (
                        <div
                            key={index}
                            className={`text-lg md:text-2xl transition-all duration-300 ${viewedDays.has(index)
                                ? 'opacity-100 scale-100 animate-bounce'
                                : 'opacity-30 scale-75 grayscale'
                                }`}
                        >
                            {viewedDays.has(index) ? '💖' : '🤍'}
                        </div>
                    ))}
                </div>

                {/* Completion badge */}
                {viewedCount === totalDays && (
                    <div className="ml-1 md:ml-2 text-xl md:text-2xl animate-bounce">
                        🎉
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProgressTracker
