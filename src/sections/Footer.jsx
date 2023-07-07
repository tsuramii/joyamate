import React from 'react';

function Footer() {
    return (
        <section id="footer">
            <footer className="footer p-10 bg-neutral text-base text-white">
                <div>
                    <img src="src/assets/logo-transparent.png" alt="Joyamate logo" className='h-[100px] mx-auto' />
                    <p className='font-bold'>2023 © | JOYAMATE. Todos los derechos reservados</p>
                </div>
                <div>
                    <span className="footer-title">JOYAMATE</span>
                    <p className="max-w-md">En Joyamate fusionamos el arte del mate con la artesanía de la joyería para brindarte piezas llenas de encanto y distinción.</p>
                </div>
                <div>
                    <span className="footer-title">Productos</span>
                    <a className="link link-hover">Mates Artesanales</a>
                    <a className="link link-hover">Joyería Criolla</a>
                </div>
                <div>
                    <span className="footer-title">Contactános</span>
                    <a className="link link-hover" href='https://www.instagram.com/joyamatesalta/' target="_blank"><ion-icon name="logo-instagram"></ion-icon> Instagram: @joyamatesalta</a>
                    <a className="link link-hover" href='mailto:joyamatebusiness@gmail.com' target="_blank"><ion-icon name="mail-outline"></ion-icon> Email: joyamatebusiness@gmail.com</a>
                    <a className="link link-hover" href='https://wa.link/wvzfe1' target="_blank"><ion-icon name="logo-whatsapp"></ion-icon> WhatsApp: +54 (9) 387 506-9982 </a>
                </div>
            </footer>
        </section>
    )
}

export default Footer;
