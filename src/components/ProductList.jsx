import React, { useState } from 'react';
import PriceConverter from './PriceConverter';

const ProductList = ({ products }) => {
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [setSelectedProduct] = useState(null);
    
    const handleBuyNow = (product) => {
        const message = `Hola JOYAMATE, me interesaría comprar el/la ${product.name}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappLink = `https://api.whatsapp.com/send?phone=5493875069982&text=${encodedMessage}`;
        window.open(whatsappLink, '_blank');
      };
    
    const handleCategoryFilterChange = (category) => {
        setCategoryFilter(category);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        window[`modal_${product.id}`].showModal(); 
    };

    const handleModalClose = () => {
        setSelectedProduct(null);
    };

    const filteredProducts = products.filter((product) => {
        return (
            (categoryFilter === 'all' || product.category === categoryFilter) &&
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    return (
        <div className="p-5">
            <div className="navbar bg-base-100 pb-10">
                <div className="navbar-start">
                    <div className="mx-10">
                        <label htmlFor="category-filter" className="mr-2">
                            Categoría:
                        </label>
                        <select
                            id="category-filter"
                            value={categoryFilter}
                            onChange={(e) => handleCategoryFilterChange(e.target.value)}
                            className="px-2 py-1 border rounded-md"
                        >
                            <option value="all">Todas</option>
                            <option value="Mate">Mate</option>
                            <option value="Bombillas">Bombillas</option>
                            <option value="Joyeria">Joyería</option>
                            <option value="Combos">Combos</option>
                        </select>
                    </div>
                </div>
                <div className="navbar-end">
                    <input
                        id="search-input"
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Buscar producto"
                        className="px-4 py-2 border rounded-lg"
                    />
                </div>
            </div>

            <div className="flex flex-wrap gap-5 justify-center mx-10">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="card md:w-1/3 xl:w-1/5 bg-base-100 shadow-xl hover:scale-105 transition-all delay-100 cursor-pointer" onClick={() => handleProductClick(product)}>
                        <figure className="w-full h-80">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title font-serif">
                                {product.name}
                                {product.isNew && <div className="badge badge-secondary font-sans">Nuevo</div>}
                            </h2>
                            <p>{product.categoryDescription}</p>
                            <div className="card-actions justify-between">
                                <PriceConverter priceInUSD={product.price} />
                                <div className="badge badge-outline p-3">{product.category}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredProducts.map((product) => (
                <dialog key={product.id} id={`modal_${product.id}`} className="modal">
                    <form method="dialog" className="modal-box max-w-3xl">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleModalClose}>✕</button>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" />
                            </div>
                            <div className="flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-serif font-bold">{product.name}</h3>
                                    <p className="text-gray-600 mb-4 py-10">{product.description}</p>
                                </div>
                                <div className="flex justify-between">
                                    <PriceConverter priceInUSD={product.price}/>
                                    <button className="btn btn-primary" onClick={() => handleBuyNow(product)}>Comprar</button>
                                </div>
                            </div>
                        </div>
                    </form>



                </dialog>
            ))}
        </div>
    );
};

export default ProductList;
