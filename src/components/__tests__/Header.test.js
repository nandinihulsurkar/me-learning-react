import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should load Header Component with the login Button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    
    //const loginBtn = screen.getByRole("button");
    const loginBtn = screen.getByRole("button", { name: "Login"});  //If there are more buttons, and want to get login button
    //const loginBtn = screen.getByText("Login");  //Not a good way
    
    expect(loginBtn).toBeInTheDocument();
})

test("Should render Header Component with cart items equal to 0", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const cartCount = screen.getByText("0");
    
    expect(cartCount).toBeInTheDocument();
})

test("Should check for the string Online Status in the Header Component", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const chkOnlineStatus = screen.getByText(/Online Status/);
    expect(chkOnlineStatus).toBeInTheDocument();
})

test("Should change to Login button to Logout on click", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginBtn = screen.getByRole("button");
    fireEvent.click(loginBtn)
    const loginOut = screen.getByRole("button", {name: "Logout"});
    expect(loginOut).toBeInTheDocument();
})