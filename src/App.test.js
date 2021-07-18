import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Provider } from 'react-redux';
import store from './store';

import App from "./App";
// jest.mock('react-redux', () => {
//     return {
//         connect: (mapStateToProps, mapDispatchToProps) => (App) => ({
//             mapStateToProps,
//             mapDispatchToProps,
//             App
//         }),
//         Provider: ({ children }) => children
//     }
// });

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
        render(<Provider store={store()}>
            <App onChecked={handleChange} />
        </Provider>, container);
    });
    expect(container.textContent).toBe("Hello StackBlitz!Start editing to see some magic happen :)Toogle Count 5");

    const button = document.querySelector("[data-testid=toggle]");

    act(() => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(handleChange).toHaveBeenCalledTimes(0);

});

it("renders with count", () => {
    const handleCount = jest.fn();
    act(() => {
        render(<Provider store={store()}>
            <App onCount={handleCount} />
        </Provider>, container);
    });
    expect(container.textContent).toBe("Hello StackBlitz!Start editing to see some magic happen :)Toogle Count 5");

    const button = document.querySelector("[data-testid=count]");

    act(() => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(handleCount).toHaveBeenCalledTimes(0);

});