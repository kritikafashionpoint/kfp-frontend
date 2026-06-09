export function DecorativeLine() {
    return (
        <div className="relative my-5 w-full flex items-center justify-center">

            {/* Left Line */}
            <div
                className="h-px lg:w-[40%] w-20"
                style={{
                    background:
                        "linear-gradient(to right, transparent, #d4af37)"
                }}
            />

            {/* Diamond Center */}
            <div
                className="mx-4 w-3 h-3 rotate-45 rounded-sm"
                style={{
                    background:
                        "linear-gradient(135deg, #fff2b3, #d4af37, #8a6a12)",
                    boxShadow: "0 0 12px rgba(212,175,55,0.6)"
                }}
            />

            {/* Right Line */}
            <div
                className="h-px lg:w-[40%] w-20"
                style={{
                    background:
                        "linear-gradient(to left, transparent, #d4af37)"
                }}
            />
        </div>
    )
}