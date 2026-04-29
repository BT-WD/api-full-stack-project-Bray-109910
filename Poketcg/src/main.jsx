import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

function SignIn(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  document.getElementById("error").hidden = true; // Hide error message on new attempt
  // Perform validation (you can add more complex validation as needed)
  if (!email || !password) {
    document.getElementById("error").hidden = false;// Show error message
    document.getElementById("error").textContent = "Please enter both email and password.";
    return;
  }
}
export default SignIn;