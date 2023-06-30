import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ServiceCard } from "./ServiceCard";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      draggable: true,
      autoplay: true,
      autoplaySpeed: 30000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2,
      arrows: false,
    };

    const infoCards = [
      {
        title: "Programación Web",
        subtitle: "1. Tenes que adaptarte.",
        body: "Hoy por hoy, la hiper-digitalización hizo que la vara suba, Si no te acomodas a los estándares del mercado, es un hecho que estas perdiendo dinero y clientes. Tu marca tiene que tener presencia en la web, por eso te ofrecemos páginas webs para que el mundo sepa quien sos y ecommerce para poder llevar tu producto a todas partes. Trabajamos con las mejores tecnologías web para que el rendimiento de tu página esté a la vanguardia y contamos con un equipo de diseñadores dispuesto a plasmar tu identidad en cada diseño.",
      },

      {
        title: "Marketing",
        subtitle: "2. Tenes que publicitarte.",
        body: "Hoy por hoy, la hiper-digitalización hizo que la vara suba, Si no te acomodas a los estándares del mercado, es un hecho que estas perdiendo dinero y clientes. Tu marca tiene que tener presencia en la web, por eso te ofrecemos páginas webs para que el mundo sepa quien sos y ecommerce para poder llevar tu producto a todas partes. Trabajamos con las mejores tecnologías web para que el rendimiento de tu página esté a la vanguardia y contamos con un equipo de diseñadores dispuesto a plasmar tu identidad en cada diseño.",
      },

      {
        title: "Diseño",
        subtitle: "3. Tenes que modernizarte.",
        body: "Hoy por hoy, la hiper-digitalización hizo que la vara suba, Si no te acomodas a los estándares del mercado, es un hecho que estas perdiendo dinero y clientes. Tu marca tiene que tener presencia en la web, por eso te ofrecemos páginas webs para que el mundo sepa quien sos y ecommerce para poder llevar tu producto a todas partes. Trabajamos con las mejores tecnologías web para que el rendimiento de tu página esté a la vanguardia y contamos con un equipo de diseñadores dispuesto a plasmar tu identidad en cada diseño.",
      },
    ];
    return (
      <Slider {...settings}>
        {infoCards.map((item) => {
          return (
            <ServiceCard
              title={item.title}
              subtitle={item.subtitle}
              body={item.body}
            />
          );
        })}
      </Slider>
    );
  }
}
