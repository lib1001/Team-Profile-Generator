const Manager = require("../lib/manager");

describe("newManager", () => {
    it("Gets manager name", () => {
        const employee = new Manager("LB", 1002, "test@test.com", 1111);
        const result = employee.getName();
        expect(result).toEqual("LB");
    })
    it("Gets manager ID number", () => {
        const employee = new Manager("LB", 1002, "test@test.com", 1111);
        const result = employee.getId();
        expect(result).toEqual(1002);
    })
    it("Gets manager email", () => {
        const employee = new Manager("LB", 1002, "test@test.com", 1111);
        const result = employee.getEmail();
        expect(result).toEqual("test@test.com");
    })
    it("Gets manager office number", () => {
        const employee = new Manager("LB", 1002, "test@test.com", 1111);
        const result = employee.getOffice();
        expect(result).toEqual(1111);
    })
    it("Gets manager as role", () => {
        const employee = new Manager("LB", 1002, "test@test.com", 1111);
        const result = employee.getRole();
        expect(result).toEqual("Manager");
    })
})