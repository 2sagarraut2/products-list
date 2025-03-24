import ProductContainer from "./container/ProductContainer";
import "./styles.css";
import AuthPage from "./components/AuthPage";
import { useState } from "react";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div className="App">
      {isAuthenticated ? (
        <ProductContainer />
      ) : (
        <AuthPage onVerify={() => setIsAuthenticated(true)} />
      )}
    </div>
  );
}
