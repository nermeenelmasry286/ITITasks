
import { Teacher } from "./Teacher.js";
import { TeacherDecorator } from "./TeacherDecorator.js";

const teacher = new Teacher("John Doe");
const decoratedTeacher = new TeacherDecorator(teacher);

decoratedTeacher.setSalary(50000);
decoratedTeacher.setNationality("American");
decoratedTeacher.setStreet("123 Main St");

console.log(decoratedTeacher.getDescription());
