import { useContext, useEffect } from "react";
import "./App.css";
import Routing from "./Router";
import { DataContext } from "./Components/DataProvider/DataProvider";
import { auth } from "./Utility/firebase";
import { type } from "./Utility/action.type";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      //auth.onAuthStateChanged: This method sets up a listener that triggers whenever the user's authentication state changes (e.g., login or logout).
      if (authUser) {
        dispatch({
          type: type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: type.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return <Routing />;
}

export default App;
