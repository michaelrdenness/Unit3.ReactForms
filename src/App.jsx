import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";
import { useState } from "react";

const [token, setToken] = useState(null);

export default function App() {
  const [token, setToken] = useState(null);

  return (
    <>
            
      <SignUpForm token={token} setToken={setToken} />
            
      <Authenticate token={token} setToken={setToken} />
          
    </>
  );
};
