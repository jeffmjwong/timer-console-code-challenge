import NumberCollections from '../src/number-collections';

describe("NumberCollections class", () => {
  const numberCollections = new NumberCollections();

  beforeAll(() => {
    expect(numberCollections).toBeDefined();
    expect(numberCollections.getCollection()).toEqual({});
  });

  describe("set method", () => {
    it("sets the value of 1 for new keys", () => {
      numberCollections.set(2);
      numberCollections.set(5);
      expect(numberCollections.getCollection()).toEqual({ 2: 1, 5: 1 });
    });

    it("increments the value for existing keys", () => {
      numberCollections.set(2);
      expect(numberCollections.getCollection()).toEqual({ 2: 2, 5: 1 });
    });
  });

  describe("toString method", () => {
    it("displays correct string format of numberCollections class", () => {
      expect(numberCollections.toString()).toEqual("2:2, 5:1");
    });

    it("displays correct frequency descending order of list of numbers in numberCollections", () => {
      numberCollections.set(5);
      numberCollections.set(5);
      expect(numberCollections.toString()).toEqual("5:3, 2:2");
    });

    it("displays correct frequency descending order when frequency of new number exceed existing numbers", () => {
      numberCollections.set(8);
      numberCollections.set(8);
      numberCollections.set(8);
      numberCollections.set(8);
      numberCollections.set(8);
      expect(numberCollections.toString()).toEqual("8:5, 5:3, 2:2");
    });
  });
});
