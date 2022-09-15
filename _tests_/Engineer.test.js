const Engineer = require("../lib/engineer");

describe("newEngineer", () => {
    it("Gets engineer name", () => {
        const employee = new Engineer("Lauren", 1234, "lburke522@test.com", "lib1001");
        const result = employee.getName();
        expect(result).toEqual("Lauren");
    })
    it("Gets engineer ID number", () => {
        const employee = new Engineer("Lauren", 1234, "lburke522@test.com", "lib1001");
        const result = employee.getId();
        expect(result).toEqual(1234);
    })
    it("Gets engineer email", () => {
        const employee = new Engineer("Lauren", 1234, "lburke522@test.com", "lib1001");
        const result = employee.getEmail();
        expect(result).toEqual("lburke522@test.com");
    })
    it("Gets engineer GitHub", () => {
        const employee = new Engineer("Lauren", 1234, "lburke522@test.com", "lib1001");
        const result = employee.getGithub();
        expect(result).toEqual("lib1001");
    })
    it("Gets engineer as role", () => {
        const employee = new Engineer("Lauren", 1234, "lburke522@test.com", "lib1001");
        const result = employee.getRole();
        expect(result).toEqual("Engineer");
    })
})