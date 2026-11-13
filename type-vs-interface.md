
# Difference between `type` and `interface`

In typescript we can define the type of an variable using type alias and interface. Type alias and interface can be use based on our preferences and need. We can do almost same kind of things using type alias and interface despite some differences.

## `type` alias

We can declare any kind of type using type alias from object to string,.

``` typescript
type User = {
  name: string;
  age: number;
  isMarried: boolean;
}
```

## `interface`

We can declare objects, functions and class using interface. interface can't be implemented on primitive data structures.

``` typescript
interface User{
  name: string;
  age: number;
  isMarried: boolean;
}
```

## Conclusion

We can extends a type alias using `&` intersection and `|` union types, where we extends interface using extends. When we redeclare an interface in same block it gets merged but in case of type alias it throws error.