import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NormalPage from "./pages/NormalPage";
import UsingLocalStoragePage from "./pages/UsingLocalStoragePage";
import SelfPage from "./pages/SelfPage";

// import 'bootstrap/dist/js/bootstrap.bundle.min';
function App() {
  return (
    <>
      {/* <NormalPage /> */}
      <UsingLocalStoragePage />
      {/* <SelfPage/> */}
    </>
  );
}

export default App;
