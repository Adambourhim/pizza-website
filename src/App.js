import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero/index";
import Products from "./components/Product";
import { productData, productDataTwo } from "./components/Product/data";
import Feature from "./components/Feature/index";
import Footer from "./components/Footer/index";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products headings="Choose your favorite" data={productData} />
      <Feature />
      <Products headings="Sweet Treats for you" data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
