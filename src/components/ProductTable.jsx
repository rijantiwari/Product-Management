import React, { useState } from "react";
import "../App.css";
import { Pencil, Trash } from "react-bootstrap-icons";

const ProductTable = ({ brands, products, onEditProduct, onDeleteProduct }) => {
  // State to hold the search query for each brand
  const [searchQueries, setSearchQueries] = useState({});

  // Sort the brands alphabetically
  const sortedBrands = [...brands].sort((a, b) => a.localeCompare(b));

  const sortedProducts = (brand) => {
    const productsForBrand = products[brand]
      ?.slice()
      .sort((a, b) => a.localeCompare(b));
    const searchQuery = searchQueries[brand]?.toLowerCase().trim();
    if (!searchQuery) {
      return productsForBrand;
    }
    return productsForBrand.filter((product) =>
      product.toLowerCase().includes(searchQuery)
    );
  };

  const handleSearchChange = (brand, event) => {
    const { value } = event.target;
    setSearchQueries((prevQueries) => ({
      ...prevQueries,
      [brand]: value,
    }));
  };

  return (
    <div className="product-table-container">
      <h2>Product Table</h2>
      <table className="product-table">
        <tbody>
          <tr>
            {sortedBrands.map((brand) => (
              <th key={brand}>
                {brand}
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQueries[brand] || ""}
                  onChange={(event) => handleSearchChange(brand, event)}
                />
              </th>
            ))}
          </tr>
          <tr>
            {sortedBrands.map((brand) => (
              <td key={brand}>
                <ul>
                  {sortedProducts(brand).map((productName, index) => (
                    <li key={productName}>
                      <span className="product-number">{index + 1}.</span>{" "}
                      {productName}
                      <span>
                        <button
                          onClick={() =>
                            onEditProduct({ brand, name: productName })
                          }
                          className="edit"
                        >
                          <Pencil size={16} />
                        </button>

                        <button
                          className="delete-button"
                          onClick={() =>
                            onDeleteProduct({ brand, name: productName })
                          }
                        >
                          <Trash size={16} />
                        </button>
                      </span>
                    </li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
