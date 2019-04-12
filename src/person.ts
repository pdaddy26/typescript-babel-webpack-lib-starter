export class Person {
  
  private firstname: string;
  private lastname: string;

  constructor(fn: string, ln: string) {
    this.firstname = fn;
    this.lastname = ln;
  }

  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  }
  
}