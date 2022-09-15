const Employee = require("../lib/employee");

describe("newEmployee", () => {
    it("Creates new employee object with name, email, and id if given", () => {
        const employee = new Employee("Adam", 1, "adam@test.com");
        expect(employee.name).toEqual("Adam");
        expect(employee.id).toEqual(1);
        expect(employee.email).toEqual("adam@test.com");
    })
    it("Gets employee name", () => {
        const employee = new Employee("Adam", 1, "adam@test.com");
        const result = employee.getName();
        expect(result).toEqual("Adam");
    })
    it("Gets employee ID number", () => {
        const employee = new Employee("Adam", 1, "adam@test.com");
        const result = employee.getId();
        expect(result).toEqual(1);
    })
    it("Gets employee email", () => {
        const employee = new Employee("Adam", 1, "adam@test.com");
        const result = employee.getEmail();
        expect(result).toEqual("adam@test.com");
    })
    it("Gets employee as role", () => {
        const employee = new Employee("Adam", 1, "adam@test.com");
        const result = employee.getRole();
        expect(result).toEqual("Employee");
    })
})
