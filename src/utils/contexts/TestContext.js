import { createContext } from "react";

const TestContext = createContext({
    testName: "Test Name Here",
    testGender: "Male",
});

export default TestContext;