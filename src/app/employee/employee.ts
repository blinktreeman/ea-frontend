import {Person} from "../person/person";
import {Post} from "../post/post";

export interface Employee {
  uuid: string;
  person: Person;
  post: Post;
  createdOn: Date;
  updatedOn: Date;
  isWorking: boolean;
}
