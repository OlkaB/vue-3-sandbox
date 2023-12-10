export class Person {
  name;
  height;
  construct({name, height} = {}) {
    this.name = name;
    this.height = height;
  }
}