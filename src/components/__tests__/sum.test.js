import { sum } from "../sum";

test("The sum function should calculate the sum of 2 given numbers", () => {

    const result = sum(5, 4);
    //Assertion
    expect(result).toBe(9);

})