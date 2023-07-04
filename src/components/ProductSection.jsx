import React from 'react';

function ProductSection() {
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
            <section id="mates">
                <div className='text-center p-5 mt-10'>
                    <h1 className="font-bold font-serif text-4xl pb-1">Nuestra selección</h1>
                    <p>Aquí te presento una pequeña selección de nuestros mates artesanales que despiertan lo más agudo de los sentidos. </p>
                </div>
                <div id="seleccion-mates" className="md:flex my-10 gap-3 lg:gap-10 lg:mx-[10vw] justify-center flex-wrap">

                    {/* Producto */}
                    <div className="card md:w-1/4 bg-base-100 shadow-xl">
                        <figure><img src="" alt="Mate Camionero" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Camionero
                                <div className="badge badge-secondary">Nuevo</div>
                            </h2>
                            <p>Diseño resistente para los amantes de la ruta y la aventura.</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Mate</div>
                            </div>
                        </div>
                    </div>

                    {/* Producto */}
                    <div className="card md:w-1/4 bg-base-100 shadow-xl">
                        <figure><img src="" alt="Mate Imperial" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Imperial
                                <div className="badge badge-secondary">Nuevo</div>
                            </h2>
                            <p>Elegancia y tradición en cada sorbo.</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Mate</div>
                            </div>
                        </div>
                    </div>

                    {/* Producto */}
                    <div className="card md:w-1/4 bg-base-100 shadow-xl">
                        <figure><img src="" alt="Mate Torpedo" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Torpedo
                                <div className="badge badge-secondary">Nuevo</div>
                            </h2>
                            <p>Intensidad y diseño vanguardista en una sola infusion.</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Mate</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex align-middle justify-center'>
                    <p class="py-2.5 px-4 italic">Sin duda alguna, en cada cebada se encuentra una gran pasión.</p>
                    <a href="mate"><button class="btn btn-outline">Ver todos los mates</button></a>
                </div>
            </section>
            <section id="joyeria">
                <div className='text-center p-5 mt-10'>
                    <h1 className="font-bold font-serif text-4xl pb-1">Joyeria criolla</h1>
                    <p>Nuestra selección te cautivará con su encanto único, cada pieza artesanal despierta los sentidos, refleja la pasión y la tradición de nuestra cultura. </p>
                </div>
                <div id="seleccion-joyas" className="md:flex my-10 gap-3 lg:gap-10 lg:mx-[10vw] justify-center flex-wrap">

                    {/* Producto */}
                    <div className="card md:w-1/4 bg-base-100 shadow-xl">
                        <figure><img src="" alt="Rosa de cobre" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Rosa
                            </h2>
                            <p>Elegancia en cada pétalo de cobre.</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Joyería</div>
                            </div>
                        </div>
                    </div>

                    {/* Producto */}
                    <div className="card md:w-1/4 bg-base-100 shadow-xl">
                        <figure><img src="" alt="Caja de té" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Caja de Té
                            </h2>
                            <p>Tradición y belleza en una joya funcional.</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Joyería</div>
                            </div>
                        </div>
                    </div>

                    {/* Producto */}
                    <div className="card md:w-1/4 bg-base-100 shadow-xl">
                        <figure><img src="" alt="Mate Torpedo" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Servilletero
                            </h2>
                            <p>Sofisticación en la mesa, encanto criollo.</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Joyería</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex align-middle justify-center'>
                    <p class="py-2.5 px-4 italic">Descubrí el brillo y la belleza que se entrelazan en cada joya, convirtiendo cada instante en un momento especial.</p>
                    <a href="mate"><button class="btn btn-outline">Ver todas las joyas</button></a>
                </div>
            </section>
        </section>
    )
}

export default ProductSection;
