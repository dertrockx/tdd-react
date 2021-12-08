import React, { useState } from "react";
import "./App.css";
import Heading from "./Heading";
import { Counter } from "./Counter";

export function label(name: string) {
	return `Hello ${name.toUpperCase()}`;
}

const initialState = { count: 0 };
export type CounterState = Readonly<typeof initialState>;

function App() {
	const [state, setState] = useState(initialState);

	function increment(isShift: boolean) {
		const inc: number = isShift ? 10 : 1;
		setState((prevState) => ({ count: prevState.count + inc }));
	}
	return (
		<div className="App">
			<Heading />
			<Heading name="World" />
			<Counter onCounterIncrease={increment} count={state.count} />
		</div>
	);
}

export default App;
