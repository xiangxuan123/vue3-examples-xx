export interface Course {
  id?: number;
  name?: string;
  createTime?: string;
}

export interface User {
  id?: number;
  name?: string;
  address?: string;
  insertTime?: string;
  sex?: string;
  courses?: Course[];
}
