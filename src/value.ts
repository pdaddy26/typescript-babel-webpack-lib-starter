export class Value {
  private value = 10
 
  getValue(): number {
    return this.value;
  }

  setValue(value: number): void {
    this.value = value;
  }
}
