const newIntern = require("../lib/intern");

describe("newIntern", () => {
    it("Gets intern name", () => {
        const employee = new Intern("Burke", 1001, "lburke@test.com", "Penn State");
        const result = employee.getName();
        expect(result).toEqual("Burke");
    })
    it("Gets intern ID number", () => {
        const employee = new Intern("Burke", 1001, "lburke@test.com", "Penn State");
        const result = employee.getId();
        expect(result).toEqual(1001);
    })
    it("Gets intern email", () => {
        const employee = new Intern("Burke", 1001, "lburke@test.com", "Penn State");
        const result = employee.getEmail();
        expect(result).toEqual("lburke@test.com");
    })
    it("Gets intern school", () => {
        const employee = new Intern("Burke", 1001, "lburke@test.com", "Penn State");
        const result = employee.getSchool();
        expect(result).toEqual("Penn State");
    })
    it("Gets intern as role", () => {
        const employee = new Intern("Burke", 1001, "lburke@test.com", "Penn State");
        const result = employee.getRole();
        expect(result).toEqual("Intern");
    })
})