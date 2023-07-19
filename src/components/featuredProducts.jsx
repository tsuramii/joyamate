import React, { useState } from 'react';
import PriceConverter from './PriceConverter';

const FeaturedProducts = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    window[`modal_${product.id}`].showModal();
  };

  const handleBuyNow = (product) => {
    const message = `Hola JOYAMATE, me interesaría comprar el/la ${product.name}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://api.whatsapp.com/send?phone=5493875069982&text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
  };

  const featuredMateProducts = products.filter(
    (product) => product.featured && product.category === 'Mate'
  );

  const featuredJoyeriaProducts = products.filter(
    (product) => product.featured && product.category === 'Joyeria'
  );

  return (
    <div>
      <section id="seleccion-mates">
        <div className="text-center p-5 mt-10">
          <h1 className="font-bold font-serif text-4xl pb-1">Nuestra selección de Mates</h1>
          <p>Aquí te presento una pequeña selección de nuestros mates artesanales que despiertan lo más agudo de los sentidos. </p>
        </div>
        <div>
          <div className="md:flex my-10 mx-5 gap-3 lg:gap-10 justify-center flex-wrap">
            {featuredMateProducts.slice(0, 3).map((product) => (
              <div
                key={product.id}
                className="card my-5 md:w-1/3 xl:w-1/5 bg-base-100 shadow-xl hover:scale-105 transition-all delay-100 cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
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
          <div className="flex align-middle justify-center">
            <p className="py-2.5 px-4 italic">Sin duda alguna, en cada cebada se encuentra una gran pasión.</p>
          </div>
        </div>
      </section>
      <section id="seleccion-joyeria">
        <div className="text-center p-5 mt-10">
          <h1 className="font-bold font-serif text-4xl pb-1">Nuestra selección de Joyeria criolla</h1>
          <p>Nuestra selección te cautivará con su encanto único, cada pieza artesanal despierta los sentidos, refleja la pasión y la tradición de nuestra cultura. </p>
        </div>
        <div className="md:flex my-10 gap-3 justify-center flex-wrap">
          {featuredJoyeriaProducts.slice(0, 3).map((product) => (
            <div
            key={product.id}
            className="card my-10 mx-5 md:w-1/3 xl:w-1/5 bg-base-100 shadow-xl hover:scale-105 transition-all delay-100 cursor-pointer"
            onClick={() => handleProductClick(product)}
          >
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
        {featuredJoyeriaProducts.map((product) => (
          <dialog key={product.id} id={`modal_${product.id}`} className="modal">
            <form method="dialog" className="modal-box max-w-3xl">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => window[`modal_${product.id}`].close()}
              >
                ✕
              </button>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-bold">{product.name}</h3>
                    <p className="text-gray-600 mb-4 py-10">{product.description}</p>
                  </div>
                  <div className="flex justify-between">
                    <PriceConverter priceInUSD={product.price} />
                    <button className="btn btn-primary" onClick={() => handleBuyNow(product)}>Comprar</button>
                  </div>
                </div>
              </div>
            </form>
          </dialog>
        ))}
      </section>
    </div>
  );
};

export default FeaturedProducts;
