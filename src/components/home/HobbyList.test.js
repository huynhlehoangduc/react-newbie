import React from "react";
import ReactDom from "react-dom";
import HobbyList from "./HobbyList";
import {render, screen} from "@testing-library/react";

const hobbies = [
    {id: 1, name: 'Hobby 1'},
    {id: 2, name: 'Hobby 2'},
];

it("Render without crashing", () => {
    const div = document.createElement('div');
    ReactDom.render(<HobbyList hobbies={ hobbies }/>, div);
});

it('Render correctly data', () => {
    render(<HobbyList hobbies={ hobbies }/>);
    const linkElement = screen.getByText(/hobby list/i);
    const hobby1 = screen.getByText(/Hobby 1/i);
    const hobby2 = screen.getByText(/Hobby 2/i);
    expect(linkElement).toBeInTheDocument();
    expect(hobby1).toBeInTheDocument();
    expect(hobby2).toBeInTheDocument();
});
