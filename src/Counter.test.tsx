import React from "react";
import userEvent from "@testing-library/user-event";
import { render, fireEvent } from "@testing-library/react";
import { Counter } from "./Counter";

test("should render a label and counter", () => {
	const handler = jest.fn();
	const { getByTestId } = render(
		<Counter count={0} onCounterIncrease={handler} />
	);

	const label = getByTestId("counter-label");
	expect(label).toBeInTheDocument();
	const counter = getByTestId("counter");
	expect(counter).toBeInTheDocument();
});

test("should render a counter with custom label", () => {
	const handler = jest.fn();
	const { getByTestId } = render(
		<Counter count={0} onCounterIncrease={handler} />
	);
	const label = getByTestId("counter-label");
	expect(label).toBeInTheDocument();
});

test("should start at zero", () => {
	const { getByTestId } = render(<Counter />);
	const counter = getByTestId("counter");
	expect(counter).toHaveTextContent("0");
});

test("should start at another value", () => {
	const { getByTestId } = render(<Counter count={10} />);
	const counter = getByTestId("counter");
	expect(counter).toHaveTextContent("10");
});

// test("should increment the count by one", () => {
// 	const { getByTestId } = render(<Counter />);
// 	const counter = getByTestId("counter");
// 	expect(counter).toHaveTextContent("0");
// 	fireEvent.click(counter);
// 	expect(counter).toHaveTextContent("1");
// });

// test("should increment the count by 10", () => {
// 	const { getByTestId } = render(<Counter />);
// 	const counter = getByTestId("counter");
// 	expect(counter).toHaveTextContent("0");
// 	userEvent.click(counter, { shiftKey: true });
// 	expect(counter).toHaveTextContent("10");
// });

test("should call the incrementor function", () => {
	const handler = jest.fn();

	const { getByTestId } = render(
		<Counter count={0} onCounterIncrease={handler} />
	);
	const counter = getByTestId("counter");
	fireEvent.click(counter);
	expect(handler).toBeCalledWith(false);
});
