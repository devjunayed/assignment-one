# any vs unknown vs never

any data structures recieve any type of data, unknown data type means it's data type is not known and maybe later it will have some kind of data type, wheter never means it will never have any kind data usually it means the data doesn't have any type or void.

## `any`

If a data as `any` type it can take any kind of data type and resassigning with another type of datat will not throw error.

``` typescript
type User = {
  name: string;
  age: number;
  isMarried: any;
}


// here assigning "no in isMarried"

let user: User = {
  name: "Junayed",
  age: 25,
  isMarried: "no"
}

// and here we are reassigning boolean value in is Married but no error"
user.isMarried = false

```

## unknown

`unkonwn` data type means we don't know the data type yet and later a data type will be assigned and after assign the type can be changed like any but we have to do type narrowing so it doesn't throw any error.

``` typescript
type User = {
  name: string;
  age: number;
  isMarried: unknown;
}


// here assigning "no" in isMarried which is string

let user: User = {
  name: "Junayed",
  age: 25,
  isMarried: "no"
}

// and here we are reassigning boolean value in is Married"
user.isMarried = false

// performing string operation now will throw error if we don't narrow it down

// this will trhow throw error
// user.isMarried.toUpperCase(); 

// narrow the type first

if(typeof user.isMarried === "string"){
  console.log(user.isMarried.toUpperCase());
}

```


## never

`never` means it will never finishes its operaton

``` typescript

// this is never because it throws error and never finishes
function throwError(message: string): never {
  throw new Error(message);
}

```


## Conclusion

We will use as less as possible the `any` type because it can lead to many unwanted error and we can use unknown when we know that a value will be assign to the type and the type is not known so we can be use that by narrowing it down. At last, we can use never when we are certain that the operaton will never be ended.