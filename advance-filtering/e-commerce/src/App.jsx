// import { useState } from "react";

// import Navigation from "./Navigation/Nav";
// import Products from "./Products/Product";
// import products from "./db/data";
// import Recommended from "./Recommended/Recommended";
// import Sidebar from "./Sidebar/Sidebar";
// import Card from "./components/Card";
// import Button from "./components/Button";
// import Input from "./components/Input";
// import "./index.css";

// function App() {
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   // ----------- Input Filter -----------
//   const [query, setQuery] = useState("");

//   const handleInputChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const filteredItems = products.filter(
//     (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
//   );

//   // ----------- Radio Filtering -----------
//   const handleChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   // ------------ Button Filtering -----------
//   const handleClick = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   function filteredData(products, selected, query) {
//     let filteredProducts = products;

//     // Filtering Input Items
//     if (query) {
//       filteredProducts = filteredItems;
//     }

//     // Applying selected filter
//     if (selected) {
//       filteredProducts = filteredProducts.filter(
//         ({ category, color, company, newPrice, title }) =>
//           category === selected ||
//           color === selected ||
//           company === selected ||
//           newPrice === selected ||
//           title === selected
//       );
//     }

//     return filteredProducts.map(
//       ({ img, title, star, reviews, prevPrice, newPrice }) => (
//         <Card
//           key={Math.random()}
//           img={img}
//           title={title}
//           star={star}
//           reviews={reviews}
//           prevPrice={prevPrice}
//           newPrice={newPrice}
//         />
//       )
//     );
//   }

//   const result = filteredData(products, selectedCategory, query);

//   return (
//     <>
//       <Sidebar handleChange={handleChange} />
//       <Navigation query={query} handleInputChange={handleInputChange} />
//       <Recommended handleClick={handleClick} />
//       <Products result={result} />
//     </>
//   );
// }

// export default App;

import { useState } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Product";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // Input filter
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Radio filter
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Button filter
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filtering logic
  const filteredItems = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  const getFilteredData = (items, category, query) => {
    let updatedItems = items;

    if (query) {
      updatedItems = filteredItems;
    }

    if (category) {
      updatedItems = updatedItems.filter(
        ({ category: cat, color, company, newPrice, title }) =>
          cat === category ||
          color === category ||
          company === category ||
          newPrice === category ||
          title === category
      );
    }

    return updatedItems.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={title} 
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  };

  const result = getFilteredData(products, selectedCategory, query);

  return (
    <div className="app">
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </div>
  );
}

export default App;
