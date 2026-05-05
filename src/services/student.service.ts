import path from "path";
import fs from "fs";
import type { Student } from "../types/student.js";

class StudentService {
  private studentsMap: Map<string, Student> = new Map();

  loadData() {
    const filePath = path.join(process.cwd(), "/data/students_100k.json");
    const raw = fs.readFileSync(filePath, "utf-8");
    const students: Student[] = JSON.parse(raw);

    students.forEach((student) => {
      this.studentsMap.set(student.id, student);
    });

    console.log(`Loaded ${this.studentsMap.size} student into memory`);
  }

  findById(id: string): Student | null {
    return this.studentsMap.get(id) || null;
  }
}

export const studentService = new StudentService();