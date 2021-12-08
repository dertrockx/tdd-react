import React from "react";
import { render, screen } from "@testing-library/react";
import App, { label } from "./App";
import userEvent from "@testing-library/user-event";

test("renders learn react link", () => {
	render(<App />);
	const linkElement = screen.getByText(/hello react/i);
	expect(linkElement).toBeInTheDocument();
});

test("generates a label", () => {
	const result = label("React");
	expect(result).toEqual("Hello REACT");
});

test("should update state when increment is called without shift", () => {
	const { getByTitle } = render(<App />);
	const counter = getByTitle("Current Count");
	expect(counter).toHaveTextContent("0");
	userEvent.click(counter);
	expect(counter).toHaveTextContent("1");
});

test("should update state when increment is called with shift", () => {
	const { getByTitle } = render(<App />);
	const counter = getByTitle("Current Count");
	expect(counter).toHaveTextContent("0");
	userEvent.click(counter, { shiftKey: true });
	expect(counter).toHaveTextContent("10");
});
