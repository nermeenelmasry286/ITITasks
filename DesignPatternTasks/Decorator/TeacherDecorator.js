export class TeacherDecorator {
    constructor(teacher) {
        this.teacher = teacher;
    }

    setSalary(salary) {
        this.salary = salary;
    }

    setNationality(nationality) {
        this.nationality = nationality;
    }

    setStreet(street) {
        this.street = street;
    }

    getDescription() {
        let description = this.teacher.getDescription();
        if (this.salary) {
            description += `, Salary: ${this.salary}`;
        }
        if (this.nationality) {
            description += `, Nationality: ${this.nationality}`;
        }
        if (this.street) {
            description += `, Street: ${this.street}`;
        }
        return description;
    }
}
