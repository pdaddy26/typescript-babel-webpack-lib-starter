export class Value {
  private value = 10;
  public getValue(): number {
    return this.value;
  }

  public setValue(value: number): void {
    this.value = value;
  }
}
