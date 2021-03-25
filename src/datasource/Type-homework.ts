export interface Course {
  name: string; // 名称
  term: number; // 学期
  point: number; // 学分
}

export interface User {
  id?: number;
  level?: number;
  name?: string;
  address?: string;
  insertTime?: string;
  sex?: string;
  courses?: Course[];
}
