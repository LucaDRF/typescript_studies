// TypeScript will use a never type to represent a state which shouldn’t exist.

// The never type is assignable to every type; however, no type is assignable to never (except never itself).
// This means you can use narrowing and rely on never turning up to do exhaustive checking in a switch statement.

type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape; // since its never arriving here, never can be used to garantee
      return _exhaustiveCheck;
  }
}

// if we change the kind or add another interface on Shape leading to fall on the default, TS will throw an error
