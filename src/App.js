import "./App.css";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Hi i'm new developer.");

function App() {
  return (
    <div>
      <button className='btn btn-primary' onClick={notify}>
        Click me!
      </button>
      <Toaster />
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>;
    </div>
  );
}

export default App;
