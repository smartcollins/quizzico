import { useEffect, useState } from "react";
import Loader from "./components/loader/Loader";
import Carousel from "./components/Carousel";
import AccountType from "./components/AccountType";
import AccountTypePage from "./pages/AccountTypePage";

function App() {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
   const timeOut = setTimeout(() => setSpinner(false), 3500);
   return () => timeOut
  }, []);
  
  

  return(
    spinner ? <Loader /> : (
    <div className="App h-screen">
      {/* <Carousel/> */}
      <AccountTypePage/>
    </div>)
  );
}

export default App;
