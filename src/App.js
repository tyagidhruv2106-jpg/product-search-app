import React, { useState } from "react";
import "./App.css";

function App() {

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 60000 },
  { id: 2, name: "Headphones", category: "Electronics", price: 2000 },
  { id: 3, name: "T-shirt", category: "Clothing", price: 800 },
  { id: 4, name: "Shoes", category: "Clothing", price: 2500 },
  { id: 5, name: "Coffee Mug", category: "Home", price: 300 }
];

const [searchTerm, setSearchTerm] = useState("");
const [category, setCategory] = useState("All");

const filteredProducts = products.filter((product) => {

const matchesSearch =
product.name.toLowerCase().includes(searchTerm.toLowerCase());

const matchesCategory =
category === "All" || product.category === category;

return matchesSearch && matchesCategory;

});

return (
<div className="container">

<h1>Product Search</h1>

<input
className="searchBox"
type="text"
placeholder="Search products..."
value={searchTerm}
onChange={(e)=>setSearchTerm(e.target.value)}
/>

<select
className="dropdown"
value={category}
onChange={(e)=>setCategory(e.target.value)}
>
<option value="All">All</option>
<option value="Electronics">Electronics</option>
<option value="Clothing">Clothing</option>
<option value="Home">Home</option>
</select>

<div className="products">

{filteredProducts.length > 0 ? (
filteredProducts.map((product)=>(
<div className="card" key={product.id}>

<h3>{product.name}</h3>
<p>{product.category}</p>
<p className="price">₹{product.price}</p>

</div>
))
) : (
<p>No products found</p>
)}

</div>

</div>
);
}

export default App;