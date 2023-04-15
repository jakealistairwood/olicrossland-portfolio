

export const staggerChildElements = (staggerTiming) => {
    return {
        animate: {
            transition: {
                staggerChildren: staggerTiming
            }
        }
    }
}

export const fadeElementInAndUp = (initialY, duration) => {
    return {
        initial: {
            opacity: 0,
            y: initialY,
            transition: {
                duration: duration,
            }
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: duration
            }
        }
    }
}