import { useEffect, useState } from "react";
import Loader from "./components/loader/Loader";

function App() {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
   const timeOut = setTimeout(() => setSpinner(false), 3500);
   return () => timeOut
  }, []);
  
  

  return spinner ? <Loader /> : <div className="App">hello</div>;
}

export default App;
