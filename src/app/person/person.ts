export class Person {
  uuid: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  patronymic: string | undefined;
  age: number | undefined;
  description: string | undefined;
}

// export class Person {
//   private _uuid: string;
//   private _firstName: string;
//   private _lastName: string;
//   private _patronymic: string;
//   private _age: number;
//   private _description: string;
//
//   get uuid(): string {
//     return this._uuid;
//   }
//
//   set uuid(value: string) {
//     this._uuid = value;
//   }
//
//   get firstName(): string {
//     return this._firstName;
//   }
//
//   set firstName(value: string) {
//     this._firstName = value;
//   }
//
//   get lastName(): string {
//     return this._lastName;
//   }
//
//   set lastName(value: string) {
//     this._lastName = value;
//   }
//
//   get patronymic(): string {
//     return this._patronymic;
//   }
//
//   set patronymic(value: string) {
//     this._patronymic = value;
//   }
//
//   get age(): number {
//     return this._age;
//   }
//
//   set age(value: number) {
//     this._age = value;
//   }
//
//   get description(): string {
//     return this._description;
//   }
//
//   set description(value: string) {
//     this._description = value;
//   }
//
//   constructor(uuid: string, firstName: string,
//               lastName: string, petronymic:
//                 string, age: number, description: string) {
//     this._uuid = uuid;
//     this._firstName = firstName;
//     this._lastName = lastName;
//     this._patronymic = petronymic;
//     this._age = age;
//     this._description = description;
//   }
// }
