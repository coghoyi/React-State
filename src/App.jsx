import { useState } from "react";

const App = () => {
	const [counter, setCounter] =useState(0);

	return (
		<>
		<h1>{counter}</h1>
		<button onClick={()=>handleClick(counter, setCounter)}>CLICK ME</button>
		</>
	)
};


const handleClick = (counter, setCounter) =>{
		setCounter(counter + 1);
	}



export default App;
