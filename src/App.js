import { Header, Footer } from "./components/AllComponents";
import { AllRoutes } from "./routes/AllRoutes";
import "./App.css";

function App() {
  return (
    <div className="App bg-bodybg dark:bg-darkbg">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
