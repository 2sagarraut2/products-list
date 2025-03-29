import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

// Component to verify the user
const AuthPage = ({ onVerify }) => {
  const [verified, setVerified] = useState(false);

  const key = "6Ld1qP8qAAAAANi5WCd05zlwCRzsAGVWEvuEi9dJ";

  // Handle reCAPTCHA verification
  const handleRecaptcha = (token) => {
    if (token) {
      setVerified(true);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Please Verify You're Human</h2>
      <ReCAPTCHA sitekey={key} onChange={handleRecaptcha} />
      <button
        onClick={() => onVerify()}
        disabled={!verified}
        className="recaptcha-button"
      >
        Continue to Products
      </button>
    </div>
  );
};

export default AuthPage;
