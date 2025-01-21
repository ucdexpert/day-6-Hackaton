import React from "react";
import Hero from "../components/hero";
import ProductLics from "@/components/ProductLists";
import Carousel from "@/components/Carsole";
import OurProduct from "@/components/OurProdutct";




export default function  page() {
  return (
    <div>
        
      <Hero/>
      <ProductLics/>
      <Carousel/>
      <OurProduct/>
      
    </div>
  );
}
