import React from 'react';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    const subject = encodeURIComponent('Contact Form Submission');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    const mailtoLink = `mailto:joyamatebusiness@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center h-full">
        <div className="md:w-1/2 bg-white p-8 rounded shadow-lg">
          <div className="h-full flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">¿Dudas o consultas?</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label htmlFor="name" className="font-medium">Tu nombre</label>
                <input
                  type="text"
                  id="name"
                  className="input input-primary"
                  placeholder="Juan Cruz"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="font-medium">Tu email</label>
                <input
                  type="email"
                  id="email"
                  className="input input-primary"
                  placeholder="juancruz@ejemplo.com"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="font-medium">Mensaje</label>
                <textarea
                  id="message"
                  className="textarea textarea-primary"
                  placeholder="Hola, quisiera información sobre..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-outline btn-primary w-full"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
        <div className="md:w-1/2 p-8">
          <div className="h-full flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Contacto</h2>
            <p className="text-gray-500 text-sm mb-12">
    Estamos aquí para ayudarte. ¡Contáctanos y te responderemos lo antes posible!
  </p>
            <div className="mb-6">
              <p className="font-medium">WhatsApp:</p>
              <a href="https://wa.link/wvzfe1" target="_blank" rel="noreferrer" className='link link-hover'><p className="text-gray-700">+54 (387) 506 9982</p></a>
            </div>
            <div className="mb-6">
              <p className="font-medium">Email:</p>
              <p className="text-gray-700">joyamatebusiness@gmail.com</p>
            </div>
            <div className="mb-6">
              <p className="font-medium">Facebook</p>
              <p className="text-gray-700">JoyaMate</p>
            </div>
            <div>
              <p className="font-medium">Instagram:</p>
              <a href="https://www.instagram.com/joyamatesalta/" target="_blank" rel="noreferrer" className='link link-hover'><p className="text-gray-700">@joyamatesalta</p></a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
