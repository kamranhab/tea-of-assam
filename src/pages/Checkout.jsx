import { useState, useEffect } from 'react';
import "../styles/checkout.css";
function Checkout() {
  // State for form fields
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [mobile, setMobile] = useState("");

  // State for validation messages
  const [validationMessage, setValidationMessage] = useState("");

  // Load countries
  const countries = csc.getAllCountries();

  // Update states when country changes
  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);

    try {
      const fetchedStates = csc.getStatesOfCountry(selectedCountry);
      setStates(fetchedStates || []);
      setSelectedState('');
    } catch (error) {
      console.error("Error fetching states:", error);
      setStates([]);
    }
  };

  // Function to validate form fields
  function validateForm() {
    if (!fName.trim()) return "First name is required.";
    if (!lName.trim()) return "Last name is required.";
    if (!streetAddress.trim()) return "Street address is required.";
    if (!city.trim()) return "City is required.";
    if (!zip.trim()) return "Zip code is required.";
    if (!country) return "Country is required.";
    if (!selectedState) return "State is required.";
    if (!mobile.trim()) return "Mobile number is required.";
    if (!/^\d+$/.test(mobile)) return "Mobile number must be numeric.";
    return "";
  }

  // Function to handle form submission
  function order(submit) {
    submit.preventDefault();
    const message = validateForm();
    if (message) {
      setValidationMessage(message);
      return;
    }
    console.log(fName, lName, streetAddress, city, zip, country, selectedState, mobile);
  }

  return (
    <>
      <form onSubmit={order}>
        <input
          type="text"
          name="fname"
          placeholder="First Name"
          value={fName}
          onChange={(e) => setFName(e.target.value)}
        />
        <input
          type="text"
          name="lname"
          placeholder="Last Name"
          value={lName}
          onChange={(e) => setLName(e.target.value)}
        />
        <input
          type="text"
          name="streetAddress"
          placeholder="Street Address"
          value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          name="zip"
          placeholder="Zip Code"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />

        <select 
          name="country" 
          value={country} 
          onChange={handleCountryChange}
        >
          <option value="">Select Country</option>
          {countries.map((country, index) => (
            <option key={index} value={country.isoCode}>
              {country.name}
            </option>
          ))}
        </select>

        <select
  name="state"
  value={selectedState}
  onChange={(e) => setSelectedState(e.target.value)}
  disabled={!states.length}
>
  <option value="">Select State</option>
  {states.map((state, index) => (
    <option key={index} value={state.isoCode}>
      {state.name}
    </option>
  ))}
</select>

        <input
          type="number"
          name="mobile"
          placeholder="Mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <input type="submit" value="Order Now" />
        {validationMessage && <div className="error">{validationMessage}</div>}
      </form>
    </>
  );
}

export default Checkout;
