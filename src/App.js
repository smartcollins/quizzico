import Modal from "./components/Modal"
import Progress from "./components/Progress"

function App() {
  
  return (
    <div className="App">
      <Progress/>
      <Modal
        visible={true}
        desc="Sucessful!"
        txt="Please wait a moment, we are preparing for you..."
      />
    </div>
  );
}

export default App;
