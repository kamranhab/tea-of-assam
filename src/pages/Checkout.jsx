import { useState } from "react";
import "../styles/checkout.css";
import usStates from "../data/States.jsx";

function Checkout() {
  // State for form fields
  const [custName, setcustName] = useState("");
  const [email, setEmail] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [country] = useState("United States of America");
  const [selectedState, setSelectedState] = useState("");
  const [mobile, setMobile] = useState("");

  // State for field validity
  const [custNameValid, setcustNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [streetAddressValid, setStreetAddressValid] = useState(true);
  const [cityValid, setCityValid] = useState(true);
  const [zipValid, setZipValid] = useState(true);
  const [selectedStateValid, setSelectedStateValid] = useState(true);
  const [mobileValid, setMobileValid] = useState(true);

  function validateForm() {
    let isValid = true;

    if (!custName.trim()) {
      setcustNameValid(false);
      isValid = false;
    } else {
      setcustNameValid(true);
    }

    if (!email.trim() || !email.includes("@")) {
      setEmailValid(false);
      isValid = false;
    } else {
      setEmailValid(true);
    }

    if (!streetAddress.trim()) {
      setStreetAddressValid(false);
      isValid = false;
    } else {
      setStreetAddressValid(true);
    }

    if (!city.trim()) {
      setCityValid(false);
      isValid = false;
    } else {
      setCityValid(true);
    }

    if (!zip.trim() || !/^\d{5}(-\d{4})?$/.test(zip)) {
      setZipValid(false);
      isValid = false;
    } else {
      setZipValid(true);
    }

    if (!selectedState) {
      setSelectedStateValid(false);
      isValid = false;
    } else {
      setSelectedStateValid(true);
    }

    if (!mobile.trim() || !/^\d+$/.test(mobile)) {
      setMobileValid(false);
      isValid = false;
    } else {
      setMobileValid(true);
    }

    return isValid;
  }

  function order(submit) {
    submit.preventDefault();
    if (validateForm()) {
      console.log(
        custName,
        email,
        streetAddress,
        city,
        zip,
        country,
        selectedState,
        mobile
      );
    }
  }

  return (
    <>
    <form onSubmit={order} className="checkout-form">
      <div className="checkout-left">
        <label>Name</label>
        <input
          type="text"
          name="custname"
          className={custNameValid ? "" : "error-input"}
          value={custName}
          onChange={(e) => setcustName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          className={emailValid ? "" : "error-input"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Street Address</label>
        <input
          type="text"
          name="streetAddress"
          className={streetAddressValid ? "" : "error-input"}
          value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
        />
        <div className="city-zip">
          <input
            placeholder="City"
            type="text"
            name="city"
            className={cityValid ? "" : "error-input"}
            id="mr"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <input
            placeholder="Zip Code"
            type="text"
            name="zip"
            id="ml"
            className={zipValid ? "" : "error-input"}
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
        </div>

        <div className="country-state">
          <input type="text" name="country" id="mr" value={country} readOnly />

          <input
            placeholder="State"
            id="ml"
            list="state-list"
            name="state"
            className={selectedStateValid ? "" : "error-input"}
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          />
          <datalist id="state-list">
            {usStates.map((state, index) => (
              <option key={index} value={state} />
            ))}
          </datalist>
        </div>

        <label>Mobile Number</label>
        <input
          type="tel"
          name="mobile"
          className={mobileValid ? "" : "error-input"}
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </div>

      <div className="checkout-right">
        {/* Order Summary */}
        {/* Order Summary */}
        {/* Order Summary */}

        <div className="order-summary">
          <div className="order-item">
            <span>Product</span>
            <span>Subtotal</span>
          </div>
          <div className="order-item">
            <span>Cotton Chinos × 1</span>
            <span>₹1,299.00</span>
          </div>

          <div className="order-totals">
            <div className="order-item">
              <span>Subtotal</span>
              <span>₹1,299.00</span>
            </div>
            <div className="order-item">
              <span>Shipping</span>
              <span>Free shipping</span>
            </div>
            <div className="order-item total">
              <span>Total</span>
              <span>₹1,299.00</span>
            </div>
          </div>
        </div>

        {/* Payment Options */}

        <div className="card-information">
          <label htmlFor="card-number">Card Number</label>
          <input
            type="text"
            id="card-number"
            placeholder="1234 1234 1234 1234"
          />
          <div className="card-icons"></div>

          <div className="expiry-cvc">
            <input type="text" id="expiry" placeholder="MM / YY" />
            <input type="text" id="cvc" placeholder="CVC" />
          </div>

          <label htmlFor="cardholder-name">Cardholder Name</label>
          <input
            type="text"
            id="cardholder-name"
            placeholder="Full name on card"
          />
        </div>

        <input type="submit" value="Place Order" />
      </div>
    </form>
    </>
  );
}

export default Checkout;
