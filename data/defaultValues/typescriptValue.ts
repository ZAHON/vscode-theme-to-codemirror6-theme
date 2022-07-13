export const typescriptValue = `interface PersonID<T> {
  id: T;
}

type PersonTypes = "executive" | "manager" | "employee";

const peopleRecord: Record<PersonTypes, PersonID<string | number>> = {
  executive: { id: "001" },
  manager: { id: "254" },
  employee: { id: "875" },
};

console.log(peopleRecord.executive);
// Output: { id: "001" }`;
