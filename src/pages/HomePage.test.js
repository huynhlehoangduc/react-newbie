import {render, screen} from "../test-util";
import React from "react";
import HomePage from "./HomePage";

it('Render correctly data', () => {
    render(<HomePage/>);
    const buttonAddHobby = screen.getByText(/Add hobby/i);
    expect(buttonAddHobby).toBeInTheDocument();
});

it('Render correctly data when click add hobby', () => {
    render(<HomePage/>);
    const buttonAddHobby = screen.getByText(/Add hobby/i);
    expect(buttonAddHobby).toBeInTheDocument();

    buttonAddHobby.click();
    const hobby1 = screen.getByText(/Hobby 1/i);
    expect(hobby1).toBeInTheDocument();

    buttonAddHobby.click();
    const hobby2 = screen.getByText(/Hobby 2/i);
    expect(hobby2).toBeInTheDocument();
});
