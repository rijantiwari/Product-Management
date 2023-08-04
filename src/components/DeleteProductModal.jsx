import React from "react";
import "../App.css";

const DeleteProductModal = ({ isOpen, onClose, product, onDeleteProduct }) => {
  const handleDelete = () => {
    onDeleteProduct(product.brand);
  };

  return (
    <div className={`modal ${isOpen ? "is-open" : ""}`}>
      <div className="modal-content">
        <h2>Delete Product</h2>
        <p>Are you sure you want to delete {product.name}?</p>
        <div className="modal-buttons">
          <button className="confirm-delete-button" onClick={handleDelete}>
            Confirm Delete
          </button>
          <button className="cancel-delete-button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProductModal;
