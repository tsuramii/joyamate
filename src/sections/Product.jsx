import React from 'react';
import FeaturedProducts from '../components/FeaturedProducts';
import productsData from '../data/products.json';
function Product() {
    return (
        <section id="products" className="lg:mx-10 py-5">
            <div className='flex'>
                <div className='card w-1/3'>
                    <div className='card-body text-center'>
                        <div className='text-4xl text-center'>
                            <ion-icon name="storefront-outline"></ion-icon>
                        </div>
                        <h2 className='card-title self-center font-serif'>Los enviamos</h2>
                        <p>A todo el país. Puerta a puerta</p>
                    </div>
                </div>
                <div className='card w-1/3'>
                    <div className='card-body text-center'>
                        <div className='text-4xl text-center'>
                            <ion-icon name="chatbubbles-outline"></ion-icon>
                        </div>
                        <h2 className='card-title self-center font-serif'>Atención Personalizada</h2>
                        <p>Teléfono, whatsapp, mail o redes sociales.</p>
                    </div>
                </div>

                <div className='card w-1/3'>
                    <div className='card-body text-center'>
                        <div className='text-4xl text-center'>
                            <ion-icon name="diamond-outline"></ion-icon>
                        </div>
                        <h2 className='card-title self-center font-serif'>Calidad asegurada</h2>
                        <p>Mates 100% artesanales y de calidad.</p>
                    </div>
                </div>
            </div>

            <FeaturedProducts products={productsData} />
        </section>
    )
}

export default Product;
