import React from "react";

function Banner() {
  const heroImageURL = "https://plus.unsplash.com/premium_photo-1682390303528-0ef38fd25bfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80";
  
  return (
    <section id="banner" className="hero min-h-screen bg-center bg-cover bg-fixed bg-black/50" style={{ backgroundImage: `url("${heroImageURL}")` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-2xl">
          <h2 className="mb-5 text-xl sm:text-3xl font-serif fadeIn">¿Qué esperas para tener los mejores mates artesanales del Noroeste Argentino?</h2>
          <a href="#products"><button className="btn btn-primary btn-sm md:btn-md">Quiero lo mejor</button></a>
        </div>
      </div>
    </section>
  );
}

export default Banner;
