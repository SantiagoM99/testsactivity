/* Test to check if likes start at 0 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Like from "../likes";
test("Likes start at 0", () => {
render(<Like />);
 expect(screen.getByText("Likes: 0")).toBeInTheDocument();
});


test("Likes increment when Like button is clicked", () => {
    render(<Like />);
    fireEvent.click(screen.getByText("Like"));
    expect(screen.getByText("Likes: 1")).toBeInTheDocument();
    }
);


test("Likes decrement when Dislike button is clicked", () => {
    render(<Like />);
    fireEvent.click(screen.getByText("Dislike"));
    expect(screen.getByText("Likes: -1")).toBeInTheDocument();
    }
);
