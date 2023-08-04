import React from "react";
import "../App.css";

const ProductTable = ({ brands, products, onEditProduct, onDeleteProduct }) => {
  return (
    <div>
      <h2>Product Table</h2>
      <table>
        <thead>
          <tr>
            {brands.map((brand) => (
              <th key={brand}>{brand}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {brands.map((brand) => (
              <td key={brand}>
                <ul>
                  {products[brand]?.map((product) => (
                    <li key={product}>
                      {product}{" "}
                      <span>
                        <button
                          onClick={() =>
                            onEditProduct({ brand, name: product })
                          }
                        >
                          Edit
                        </button>{" "}
                        <button
                          onClick={() =>
                            onDeleteProduct({ brand, name: product })
                          }
                        >
                          Delete
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
