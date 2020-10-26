class Circle{
  constructor(radius){
    this.radius = radius;
  }

  get diameter(){
    return this.radius * 2
  }

  get circumference(){
    return Math.PI * this.diameter
  }

  get area(){
    return Math.PI * (this.radius ** 2)
  }

  set diameter(diameter){
    return this.radius = diameter / 2
  }

  set circumference(circumference){
    return this.radius = (circumference / Math.PI) / 2
  }

  set area(area){
    return this.radius = (area / Math.PI) ** -2
  }
}