import React from 'react';

const FeaturedProducts = ({ products }) => {

    const featuredMateProducts = products.filter(
        (product) => product.featured && product.category === 'Mate'
    );

    const featuredJoyeriaProducts = products.filter(
        (product) => product.featured && product.category === 'Joyeria'
    );
        
    return (
        <div>
            <section id="seleccion-mates">
                <div className='text-center p-5 mt-10'>
                    <h1 className="font-bold font-serif text-4xl pb-1">Nuestra selección de Mates</h1>
                    <p>Aquí te presento una pequeña selección de nuestros mates artesanales que despiertan lo más agudo de los sentidos. </p>
                </div>
                <div>
                    <div className="md:flex my-10 gap-3 lg:gap-10 lg:mx-[10vw] justify-center flex-wrap">
                        {featuredMateProducts.slice(0, 3).map((product) => (
                            <div key={product.id} className="card md:w-1/4 bg-base-100 shadow-xl">
                                <figure>
                                    <img src={product.image} alt={product.name} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {product.name}
                                        {product.isNew && <div className="badge badge-secondary">Nuevo</div>}
                                    </h2>
                                    <p>{product.categoryDescription}</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">{product.category}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex align-middle justify-center'>
                        <p className="py-2.5 px-4 italic">Sin duda alguna, en cada cebada se encuentra una gran pasión.</p>
                        <a href="mate"><button className="btn btn-outline">Ver todos los mates</button></a>
                    </div>
                </div>
            </section>
            <section id="seleccion-joyeria">
                <div className='text-center p-5 mt-10'>
                    <h1 className="font-bold font-serif text-4xl pb-1">Nuestra selección de Joyeria criolla</h1>
                    <p>Nuestra selección te cautivará con su encanto único, cada pieza artesanal despierta los sentidos, refleja la pasión y la tradición de nuestra cultura. </p>
                </div>
                <div className="md:flex my-10 gap-3 lg:gap-10 lg:mx-[10vw] justify-center flex-wrap">
                    {featuredJoyeriaProducts.slice(0, 3).map((product) => (
                        <div key={product.id} className="card md:w-1/4 bg-base-100 shadow-xl">
                            <figure>
                                <img src={product.image} alt={product.name} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {product.name}
                                    {product.isNew && <div className="badge badge-secondary">Nuevo</div>}
                                </h2>
                                <p>{product.categoryDescription}</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">{product.category}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex align-middle justify-center'>
                    <p class="py-2.5 px-4 italic">Descubrí el brillo y la belleza que se entrelazan en cada joya, convirtiendo cada instante en un momento especial.</p>
                    <a href="mate"><button class="btn btn-outline">Ver todas las joyas</button></a>
                </div>
            </section>
        </div>
    );
};

export default FeaturedProducts
