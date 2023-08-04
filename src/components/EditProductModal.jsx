import React, { useState } from "react";
import "../App.css";

const EditProductModal = ({ isOpen, onClose, product, onUpdateProduct }) => {
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const handleProductNameChange = (e) => {
    setEditedProduct({ ...editedProduct, name: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProduct(product.brand, editedProduct.name); // Pass brand and name only
    onClose(); // Close the modal after submitting
  };

  return (
    <div className={`modal ${isOpen ? "is-open" : ""}`}>
      <div className="modal-content">
        <h2>Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            value={editedProduct.name}
            onChange={handleProductNameChange}
          />
          <button type="submit">Update Product</button>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;
