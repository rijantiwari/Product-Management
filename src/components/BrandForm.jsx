import React, { useState } from "react";
import "../App.css";

const BrandForm = ({ onAddBrand, existingBrands }) => {
  // set the state to add new brand
  const [newBrand, setNewBrand] = useState("");

  const handleBrandChange = (e) => {
    setNewBrand(e.target.value);
  };
  // handle submit for the add brand button
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newBrand.trim() === "") return;
    if (existingBrands.includes(newBrand)) {
      alert("Brand already exists!");
      return;
    }
    onAddBrand(newBrand);
    setNewBrand("");
  };

  return (
    <div className="brand-form-container">
      <p className="brand-add"> Didn't Found the Desired Brand ?</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="brandInput"
          value={newBrand}
          onChange={handleBrandChange}
          placeholder="Add your brand here"
        />

        <button type="submit" disabled={newBrand.trim() === ""}>
          Add Brand
        </button>
      </form>
    </div>
  );
};

export default BrandForm;
