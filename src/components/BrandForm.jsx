import React, { useState } from "react";
import "../App.css";

const BrandForm = ({ onAddBrand, existingBrands }) => {
  const [newBrand, setNewBrand] = useState("");

  const handleBrandChange = (e) => {
    setNewBrand(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newBrand.trim() === "") return;
    if (existingBrands.includes(newBrand)) {
      alert("Brand already exists!");
      return;
    }
    onAddBrand(newBrand); // Fix: Add this line to add the new brand
    setNewBrand("");
  };

  return (
    <div>
      <h2>Add a New Brand</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="brandInput">Enter a new brand:</label>
        <input
          type="text"
          id="brandInput"
          value={newBrand}
          onChange={handleBrandChange}
        />
        <button type="submit" disabled={newBrand.trim() === ""}>
          Add Brand
        </button>
      </form>
    </div>
  );
};

export default BrandForm;
