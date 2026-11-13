function multiplyValue(value: number, multiplier?: number): number {
  if (typeof multiplier === "undefined") {
    return value * 2;
  } else {
    return value * multiplier;
  }
}


function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  return value === true ? "Active" : "Inactive";
}


function formatCoordinate(
  values: readonly [latitude: number, longitude: number, location: string],
): string {
  const [latitude, longitude, location] = values;

  return `"Location: ${location} (${latitude} ${longitude})"`;
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];

  for (const array of arrays) {
    for (const item of array) {
      result.push(item);
    }
  }
  return result;
}


interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  return courses.filter(
    (val) => val.isPublished === true && val.students >= minStudents,
  );
}


function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item: T) => item[key]);
}


class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails() {
    return `"Employee: ${this.name}, Base Salary: ${this.baseSalary}"`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo() {
    return `"Manager of ${this.department}: ${this.name}"`;
  }
}


async function validateAgeAsync(age: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => resolve("Access Granted"), 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });

}

