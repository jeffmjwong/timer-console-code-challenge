export default class NumberCollections {
  private collection: { [key: number]: number };

  constructor() {
    this.collection = {};
  }

  getCollection(): { [key: number]: number } {
    return this.collection;
  }

  set(key: number): void {
    const currentValue = this.collection[key];

    this.collection[key] = currentValue ? currentValue + 1 : 1;
  }

  toString(): string {
    return Object                         // { 1: 2, 2: 8, 3: 5, 4: 6 }
      .entries(this.collection)           // [ [1, 2], [2, 8], [3, 5], [4, 6] ]
      .sort((a, b) => b[1] - a[1])        // [ [2, 8], [4, 6], [3, 5], [1, 2] ]
      .map(arr => `${arr[0]}:${arr[1]}`)  // [ "2:8", "4:6", "3:5", "1:2" ]
      .join(", ");
  }
}
