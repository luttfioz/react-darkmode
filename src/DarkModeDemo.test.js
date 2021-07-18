import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import DarkModeDemo from "./DarkModeDemo";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

function handleChange(event) {
    console.log(event);
}

it("renders with checked", () => {
    const handleChange = jest.fn();
    act(() => {
        render(<DarkModeDemo checked={true} onChecked={handleChange} />, container);
    });
    expect(container.textContent).toBe("Hello StackBlitz!Start editing to see some magic happen :)");


    const button = document.querySelector("[data-testid=toggle]");

    act(() => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
});