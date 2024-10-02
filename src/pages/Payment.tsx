import React, { useState } from "react";
import { useNavigate,useParams } from "react-router-dom";


const Payment: React.FC = () => {
    const { id } = useParams<{ id: string }>(); 
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [creditCardDetails, setCreditCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolderName: "",
  });
  const navigate = useNavigate();
  const [paypalEmail, setPaypalEmail] = useState<string>("");
  const [bankDetails, setBankDetails] = useState({
    accountNumber: "",
    routingNumber: "",
    accountHolderName: "",
  });

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment submission logic for each method
    if (paymentMethod === "credit-card") {
      console.log("Processing credit card payment:", creditCardDetails);
      // Call API for credit card payment processing
    } else if (paymentMethod === "paypal") {
      console.log("Processing PayPal payment:", paypalEmail);
      // Call API for PayPal payment processing
    } else if (paymentMethod === "bank-transfer") {
      console.log("Processing bank transfer:", bankDetails);
      // Call API for bank transfer payment processing
    }
    alert("Payment processed!");
    navigate(`/success/${id}`); 
  };

  return (
    <div className="max-w-xl mx-auto mt-40 p-6 font-serif">
      <h1 className="text-3xl font-bold mb-6">Payment Details</h1>
      <form onSubmit={handlePaymentSubmit}>
        <div className="mb-4">
          <label className="block text-lg font-medium">Payment Method:</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Select payment method</option>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank-transfer">Bank Transfer</option>
          </select>
        </div>

        {/* Credit Card Payment */}
        {paymentMethod === "credit-card" && (
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-4">Credit Card Details</h2>
            <label className="block mb-2">Card Holder Name:</label>
            <input
              type="text"
              value={creditCardDetails.cardHolderName}
              onChange={(e) =>
                setCreditCardDetails({
                  ...creditCardDetails,
                  cardHolderName: e.target.value,
                })
              }
              className="w-full p-2 border rounded mb-2"
              required
            />
            <label className="block mb-2">Card Number:</label>
            <input
              type="text"
              value={creditCardDetails.cardNumber}
              onChange={(e) =>
                setCreditCardDetails({
                  ...creditCardDetails,
                  cardNumber: e.target.value,
                })
              }
              className="w-full p-2 border rounded mb-2"
              required
            />
            <label className="block mb-2">Expiry Date:</label>
            <input
              type="text"
              value={creditCardDetails.expiryDate}
              onChange={(e) =>
                setCreditCardDetails({
                  ...creditCardDetails,
                  expiryDate: e.target.value,
                })
              }
              className="w-full p-2 border rounded mb-2"
              required
            />
            <label className="block mb-2">CVV:</label>
            <input
              type="text"
              value={creditCardDetails.cvv}
              onChange={(e) =>
                setCreditCardDetails({
                  ...creditCardDetails,
                  cvv: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
        )}

        {/* PayPal Payment */}
        {paymentMethod === "paypal" && (
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-4">PayPal Payment</h2>
            <label className="block mb-2">PayPal Email:</label>
            <input
              type="email"
              value={paypalEmail}
              onChange={(e) => setPaypalEmail(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        )}

        {/* Bank Transfer Payment */}
        {paymentMethod === "bank-transfer" && (
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-4">Bank Transfer Details</h2>
            <label className="block mb-2">Account Holder Name:</label>
            <input
              type="text"
              value={bankDetails.accountHolderName}
              onChange={(e) =>
                setBankDetails({
                  ...bankDetails,
                  accountHolderName: e.target.value,
                })
              }
              className="w-full p-2 border rounded mb-2"
              required
            />
            <label className="block mb-2">Account Number:</label>
            <input
              type="text"
              value={bankDetails.accountNumber}
              onChange={(e) =>
                setBankDetails({
                  ...bankDetails,
                  accountNumber: e.target.value,
                })
              }
              className="w-full p-2 border rounded mb-2"
              required
            />
            <label className="block mb-2">Routing Number:</label>
            <input
              type="text"
              value={bankDetails.routingNumber}
              onChange={(e) =>
                setBankDetails({
                  ...bankDetails,
                  routingNumber: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
        )}

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default Payment;
