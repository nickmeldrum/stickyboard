class Dog {

  bark() {
    console.log(`woof, i'm ${this.name} and i'm a good boi`)
  }
}

const x = new Dog()
x.name = 'rover'
x.bark()
