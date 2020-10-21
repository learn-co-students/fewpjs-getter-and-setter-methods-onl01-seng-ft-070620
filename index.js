class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius*2
    }

    get circumference() {
        return this.diameter*Math.PI
    }

    get area() {
        return this.circumference*this.radius/2
    }

    set diameter(newDiameter) {
        this.radius = newDiameter/2
    }

    set circumference(newCirc) {
        this.radius = newCirc/(2*Math.PI)
    }
}