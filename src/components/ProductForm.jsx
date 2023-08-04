import React, { useState } from "react";
import "../App.css";

const ProductForm = ({ onAddProduct, brands }) => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [productName, setProductName] = useState("");

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
  };

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedBrand.trim() === "" || productName.trim() === "") return;
    onAddProduct(selectedBrand, productName);
    setSelectedBrand("");
    setProductName("");
  };

  return (
    <div className="product-form-container">
      <h2>Add a New Product</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="brandSelect">Select a brand:</label>
        <select
          id="brandSelect"
          onChange={handleBrandChange}
          value={selectedBrand}
        >
          <option value="">Select a brand</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
        <label htmlFor="productName">Enter Product name:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={handleProductNameChange}
        />
        <button
          type="submit"
          disabled={selectedBrand.trim() === "" || productName.trim() === ""}
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
