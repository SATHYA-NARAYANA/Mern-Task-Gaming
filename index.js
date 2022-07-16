<<<<<<< HEAD
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const boundary = new Boundries({
    position: {
        x: 0,
        y: 0
    }
})

=======
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const boundary = new Boundries({
    position: {
        x: 0,
        y: 0
    }
})

>>>>>>> e8b0906306f4c754bd04211ab7381b737db925de
boundary.draw()