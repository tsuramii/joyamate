import React from 'react';
import ProductList from '../components/ProductList.jsx';
import productsData from '../data/products.json';
function Shop() {

  return (
    <div className='pb-10'>
      <h1 className="text-center p-5 mt-10 font-bold font-serif text-4xl pb-1">Todos nuestros productos</h1>
      <ProductList products={productsData} />
    </div>
  );
};

export default Shop;
