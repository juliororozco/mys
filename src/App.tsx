import RouterComponent from "./routes/RouterComponent";
import { BrowserRouter } from "react-router-dom";
import "./App.css"
function App() {
  return (
    <>
      <BrowserRouter>
        <RouterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
