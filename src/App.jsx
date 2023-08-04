import React, { useState } from "react";
import BrandForm from "./components/BrandForm";
import ProductForm from "./components/ProductForm";
import ProductTable from "./components/ProductTable";
import EditProductModal from "./components/EditProductModal";
import DeleteProductModal from "./components/DeleteProductModal";
import "./App.css";

const App = () => {
  // State to manage brands and products
  const [brands, setBrands] = useState(["Apple", "Samsung", "Google"]);
  const [products, setProducts] = useState({
    Apple: ["iPhone", "MacBook"],
    Samsung: ["Galaxy S", "Galaxy Book"],
    Google: ["Pixel", "Chromebook"],
  });

  // State and functions for modals
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  // Function to add a new brand
  const handleAddBrand = (brand) => {
    setBrands([...brands, brand]);
  };

  // Function to add a new product
  const handleAddProduct = (brand, product) => {
    setProducts({
      ...products,
      [brand]: [...(products[brand] || []), product],
    });
  };

  // Function to open the edit modal and set the editing product
  const handleEditProduct = (product) => {
    setIsEditModalOpen(true);
    setEditingProduct(product);
  };

  // Function to update the product in the state after editing
  const handleUpdateProduct = (brand, editedProduct) => {
    const updatedProducts = { ...products };
    updatedProducts[brand] = updatedProducts[brand].map((product) =>
      product === editingProduct ? editedProduct : product
    );
    setProducts(updatedProducts);
    setIsEditModalOpen(false);
    setEditingProduct(null);
  };

  // Function to open the delete modal and set the product to delete
  const handleDeleteProduct = (product) => {
    setIsDeleteModalOpen(true);
    setEditingProduct(product);
  };

  // Function to delete the product from the state
  const handleConfirmDeleteProduct = (brand) => {
    const updatedProducts = { ...products };
    updatedProducts[brand] = updatedProducts[brand].filter(
      (product) => product !== editingProduct.name
    );
    setProducts(updatedProducts);
    setIsDeleteModalOpen(false);
    setEditingProduct(null);
  };

  return (
    <div className="app-container">
      <h1>Manage Products of Different Brands</h1>
      <div className="form-container">
        <BrandForm onAddBrand={handleAddBrand} existingBrands={brands} />
        <ProductForm onAddProduct={handleAddProduct} brands={brands} />
      </div>
      <ProductTable
        brands={brands}
        products={products}
        onEditProduct={handleEditProduct}
        onDeleteProduct={handleDeleteProduct}
      />
      {isEditModalOpen && (
        <EditProductModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          product={editingProduct}
          onUpdateProduct={handleUpdateProduct}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteProductModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          product={editingProduct}
          onDeleteProduct={handleConfirmDeleteProduct}
        />
      )}
    </div>
  );
};

export default App;
