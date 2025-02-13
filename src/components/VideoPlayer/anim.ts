export const view = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: () => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.6,
            ease: [0.45,0.07,0,0.99],
            
        }
    })
}

export const btn = {
    initial: {
        opacity: 0
    },

    animate : {
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 1
        }
    }
}