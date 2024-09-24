
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
