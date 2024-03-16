import RouterComponent from "./routes/RouterComponent";
import { BrowserRouter } from "react-router-dom";
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
