import React from "react";
import "../App.css";

const DeleteProductModal = ({ isOpen, onClose, product, onDeleteProduct }) => {
  const handleDelete = () => {
    onDeleteProduct(product.brand, product.name); // Pass brand and name to onDeleteProduct
  };

  return (
    <div className={`modal ${isOpen ? "is-open" : ""}`}>
      <div className="modal-content">
        <h2>Delete Product</h2>
        <p>Are you sure you want to delete {product.name}?</p>
        <div>
          <button type="button" onClick={handleDelete}>
            Confirm Delete
          </button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProductModal;
