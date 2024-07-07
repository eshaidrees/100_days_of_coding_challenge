//   CLASS STATIC MEMBERS 

// Static members in a class are properties or methods that belong to the class itself, rather than to instances of the class.
// This means you can access them without creating an instance of the class. 
//They are defined using the static keyword in TypeScript. In this case, the static member nextId is used to manage unique IDs for all instances of the ProductStaticMembers class.
class ProductStaticMembers {
  // 'private' property
  private static nextId: number = 1;

  constructor(private id: number, private name: string) {}

  static generateNextId(): number {
    return ProductStaticMembers.nextId++;
  }

  getProductInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}`;
  }
}

// Generate unique IDs for products using the static method
const product1static = new ProductStaticMembers(
  ProductStaticMembers.generateNextId(),
  "Widget"
);
const product2static = new ProductStaticMembers(
  ProductStaticMembers.generateNextId(),
  "Gadget"
);

console.log(product1static.getProductInfo()); // ID: 1, Name: Widget
console.log(product2static.getProductInfo()); // ID: 2, Name: Gadget