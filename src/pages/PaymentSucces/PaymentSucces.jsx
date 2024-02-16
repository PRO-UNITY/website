import { useLocation } from "react-router-dom";
import "./PaymentSuccess.css";
import { useEffect } from "react";
import { PaymentSuccesUser } from "../../services";

const PaymentSuccess = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("ender");
    const searchParams = new URLSearchParams(location.search);
    const sessionIdParam = searchParams.get("session_id");
    if (sessionIdParam) {
      PaymentSuccesUser({ session_id: sessionIdParam })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  }, [location.search]);
  return (
    <div className="payment-success-container">
      <h1>Payment Success</h1>
      <p>Thank you for your payment!</p>
    </div>
  );
};

export default PaymentSuccess;
