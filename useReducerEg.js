import React, { useReducer } from "react";
	function App() {
	  
	  const initialState = 0;
	  
	  const [state, dispatch] = useReducer(reducer, initialState, init);
	  
	  function init(a) {
	    return { count: a };
	  }
	  let reducer = (state, action) => {
	    switch (action.type) {
	      case "increase":
	        return { count: state.count + 1 };
	      case "decrease":
	        return { count: state.count - 1 };
	      case "reset":
	        return inti(action.payload);
	      default:
	        return new Error();
	    }
	  };
	 
	  return (
	    <div>
	      <h1>{count}</h1>
	      <button onClick={() => dispatch({ type: "increase" })}>Increase</button>
	      <button onClick={() => dispatch({ type: "decrease" })}>Decrease</button>
	      <button
	        onClick={() => dispatch({ type: "reset", payload: initialState })}
	      >
	        Reset
	      </button>
	    </div>
	  );

	// ===========================================================================//
	  //   const [state, dispatch] = useReducer(reducer, initialState, init);
	  // Rducer function
	  //   let reducer = (state, action) => {
	  //     switch (action.type) {
	  //       case "increase":
	  //         return { count: state.count + 1 };
	  //       case "decrease":
	  //         return { count: state.count - 1 };
	  //       case "reset":
	  //         return { count: 0 };
	  //       default:
	  //         return state;
	  //     }
	  //   };
	  //   const [state, dispatch] = useReducer(reducer, { count: 0 });

	// // dispatch({type:'increase'}) - is used to transfer action to reducer function
	  // // reducer(state,action->brought by dispatch)
	  //   return (
	  //     <div>
	  //       <h1>{count}</h1>
	  //       <button onClick={() => dispatch({type:'increase'})}>Increase</button>
	  //       <button onClick={() => dispatch({type:'decrease'})}>Decrease</button>
	  //       <button onClick={() => dispatch({type:'reset'})}>Reset</button>
	  //     </div>
	  //   );
	  //   const [count, setCount] = useState();
	  //   let Increase = () => {
	  //     setCount(count + 1);
	  //   };
	  //   let Decrease = () => {
	  //     setCount(count - 1);
	  //   };
	  //   let Reset = () => {
	  //     setCount(0);
	  //   };

	//   const [count, setCount] = useState();
	  //   let Increase = () => {
	  //     setCount(count + 1);
	  //   };
	  //   let Decrease = () => {
	  //     setCount(count - 1);
	  //   };
	  //   let Reset = () => {
	  //     setCount(0);
	  //   };
	  //   return (
	  //     <div>
	  //       <h1>{count}</h1>
	  //       <button onClick={() => Increase()}>Increase</button>
	  //       <button onClick={() => Decrease()}>Decrease</button>
	  //       <button onClick={() => Reset()}>Reset</button>
	  //     </div>
	  //   );



	//   ======================useContext================================//
	// import React, { useState, createContext, useContext } from "react";
	// const colorContext = createContext();
	// export const useColor =()=>{
	//     return useContext(colorContext)
	// }  
	// export const ThemeProvider = ({children}) => {
	//   const [color, setcolor] = useState("light");
	//   const colorToggler = () => {
	//      setcolor((pre) => (pre === "light" ? "dark" : "light"));
	//   };
	//   return (
	//     <colorContext.Provider
	//       val={{ color, colorToggler }}
	//     >
	//         {children}
	//     </colorContext.Provider>
	//   ); 
	// };
	
	// import React from 'react'
	// import {useColor} from "./contextProvider" 
	// function ComponentA() {
	//     const {colorToggler} = useColor() useContext(colorContext)
	//   return (
	//     <div>
	//         <button onClick={colorToggler}>color toggler</button>
	//     </div>
	//   )
	// }
	// export default ComponentA
	
	// import {useColor} from "./contextProvider" 
	// function ComponentB() {
	//     const {color} = useColor( )
	//   return (
	//     <div>color is {color}</div>
	//   )
	// }
	// export default ComponentB 
