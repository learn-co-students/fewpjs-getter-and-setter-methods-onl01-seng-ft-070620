class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return this.radius * 2
  }

  get circumference() {
    return Math.PI * this.diameter
  }

  get area() {
    return ( (Math.PI) * ( (this.radius) ** 2) )
  }

  // diameter / 2 => radius
  set diameter(d) {
    this.radius = (d / 2)
  }

  // circumference / pi => diameter
  // diameter / 2 => radius
  set circumference(c) {
    this.radius = ( (c / Math.PI) / 2 )
  }
}
