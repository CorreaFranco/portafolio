
const main = document.querySelector("#main");

const CreateMain = () => {
    return`
            <div class="main__container">
            <section class="about__me">
                <div class="about__me--img--container">
                    <img class="about__me--img" src="./img/main/franco correa.png" alt="">
                </div>
                <div class="about__me--presentation">
                    <p class="about__me--presentation--content">Hola mundo</p>
                    <div class="about__me--presentation--content dinamic" >
                        <p class="about__me--presentation--content--dinamic">Soy</p>
                        <p class="about__me--presentation--content--dinamic">Franco Correa</p>  <!--esta parte sera dinamica -->
                    </div>
                </div>
                <div class="about__me--instruction">
                    <p class="about__me--instruction--content">Dezlisa hacia abajo para saber más sobre mi.</p>
                </div>
                <div class="about__me--social">
                    <div class="about__me--social--container">
                        <i class="fa-solid fa-arrow-down"></i>
                        <i class="fa-solid fa-arrow-down"></i>
                        <i class="fa-solid fa-arrow-down"></i>
                        <!-- <a href="https://github.com/CorreaFranco?tab=repositories" target="_blank"><i class="fa-brands fa-github"></i></a>
                        <a href="https://github.com/CorreaFranco?tab=repositories" target="_blank"><i class="fa-brands fa-github"></i></a>
                        <a href="https://github.com/CorreaFranco?tab=repositories" target="_blank"><i class="fa-brands fa-github"></i></a>
                        <a href="https://github.com/CorreaFranco?tab=repositories" target="_blank"><i class="fa-brands fa-github"></i></a>
                        <a href="https://github.com/CorreaFranco?tab=repositories" target="_blank"><i class="fa-brands fa-github"></i></a> -->
                    </div>
                </div>
                <!-- <div class="about__me--vd">
                    <p>IRA MI CV</p>
                </div> -->
                <div class="about__me--description">
                    <div class="descripton me">
                        <h2>Sobre mí</h2>
                        <p>Estudiante en:<br>- Desarrollo de sistemas de informacion.<br>- Desarrollo web fullstack.<br><br>Mi camino en el desarrollo web empezo el 2022.<br><br><em>Una meta es consolidar mi propia empresa de desarrollo de sofware.</em></p>
                    </div>
                    <div class="descripton ">
                        <h2 class="descripton__tile">Aptitudes</h2>
                        <ul class="descripton__list">
                            <li>Capacitacion constante.</li>
                            <li>Solucion de errores.</li>
                            <li>Responsabilidad.</li>
                            <li>Trabajo en equipo.</li>
                        </ul>
                    </div>
                    <div class="descripton ">
                        <h2 class="descripton__tile">Habilidades</h2>
                        <ul class="descripton__list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                        </ul>
                    </div>
                    <div class="descripton ">
                        <h2 class="descripton__tile">Cursos afines</h2>
                        <ul class="descripton__list">
                            <li>Lanzamiento de negocios online</li>
                            <li>WordPress</li>
                            <li>Shopify</li>
                            <li>Facebook Ads</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section class="proyectos" id="proyectos">
                <h2 class="proyectos__title">Proyectos</h2>
                <div class="proyectos__container">
                    <article class="proyecto">
                        <h3 class="proyecto__title">Rockacito Star</h3>
                        <div class="proyecto__img--container">
                            <img class="proyecto__img" src="./img/proyectos/sistemas/proyecto__rokacito-star.png" alt="">
                        </div>
                        <p class="proyecto__description">Sistema de ventas para mayoreo</p>
                    </article>

                    <article class="proyecto">
                        <h3 class="proyecto__title">Sistema para restaurantes</h3>
                        <div class="proyecto__img--container">
                            <img class="proyecto__img" src="./img/proyectos/sistemas/proyecto__toma-ordenes.png" alt="">
                        </div>
                        <p class="proyecto__description">Toma ordenes para boletas de venta</p>
                    </article>

                    <article class="proyecto">
                        <h3 class="proyecto__title">Proyecto egg</h3>
                        <div class="proyecto__img--container">
                            <img class="proyecto__img" src="./img/proyectos/sistemas/proyecto__egg.png" alt="">
                        </div>
                        <p class="proyecto__description">Segundo proyecto curso fullstack web</p>
                    </article>

                    <article class="proyecto">
                        <h3 class="proyecto__title">Esencia Importaciones</h3>
                        <div class="proyecto__img--container">
                            <img class="proyecto__img" src="./img/proyectos/sistemas/proyecto__esencia-importaciones.png" alt="">
                        </div>
                        <p class="proyecto__description">Tienda de regalos personalizados</p>
                    </article>

                    <article class="proyecto">
                        <h3 class="proyecto__title">Sistema de asistencia</h3>
                        <div class="proyecto__img--container">
                            <img class="proyecto__img" src="./img/proyectos/sistemas/proyecto__asistencia-alumnos.png" alt="">
                        </div>
                        <p class="proyecto__description">De mis primeros pasos</p>
                    </article>

                    <article class="proyecto">
                        <h3 class="proyecto__title">construccion</h3>
                        <div class="proyecto__img--container">
                            <img class="proyecto__img" src="./img/proyectos/sistemas/proyecto__en--construccion.png" alt="">
                        </div>
                        <p class="proyecto__description">Sistema administracion de servicio tecnico</p>
                    </article>
                </div>
            </section>

            <section class="construccion">
                <div class="construccion__container">
                    <p>Pagina en reconstrucción</p>
                    <img src="./media/construccion.gif" alt="">         
                </div>
            </section>

            <section class="arrow__whatsapp" id="contact">
                <div class="arrow__whatsapp-container"> <!-- Reciclado de arrow down -->
                    <h3 class="arrow__whatsapp--title">Contacto por wsp</h3>
                    <div class="about__me--social--container">
                        <i class="fa-solid fa-arrow-right"></i>
                        <i class="fa-solid fa-arrow-right"></i>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </section>

            <section class="main__contacto--wsp">
                <a href="https://wa.me/51902344231?text=HolaVengoDeTuPagina" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
            </section>
        </div>
    `
}
const InsertMain = () => {
    const inert =  CreateMain()
    main.innerHTML = inert
}
InsertMain()