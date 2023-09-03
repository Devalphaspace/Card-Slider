import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";

const data = [
  {
    id: 1,
    photo:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    location: "2, 3 BHK Luxury Apartment in Panjabari, Guwahati",
    title: "Shakti Nirvana",
    desc: "Shakti residency is one of guwahati's most sought after destination for apartments and this 3 bhk flat in gs road.",
    price: "50 L ",
    size: "1,382 sq.ft.",
  },
  {
    id: 2,
    photo:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    location: "2 BHK Luxury Apartment in Silpukhuri",
    title: "Dayasagar Apartment",
    desc: "This is your chance to own a 2 bhk residential apartment in dayasagar apartment, silpukhuri, guwahati where luxury comes with affordability.",
    price: "80 L",
    size: "1,382 sq.ft.",
  },
  {
    id: 3,
    photo:
      "https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    location: "2 BHK Luxury Apartment in Hatigaon",
    title: "Regent Paradise",
    desc: "Its a 2.5 bhk specious flat, with grills in all the balconies. The flat is in good condition, recently done painting. ",
    price: "77 L",
    size: "1,382 sq.ft.",
  },
];

const App = () => {
  useEffect(() => {
    const swiper = new Swiper(".blog-slider", {
      spaceBetween: 30,
      effect: "fade",
      loop: true,
      mousewheel: {
        invert: false,
      },
      pagination: {
        el: ".blog-slider__pagination",
        clickable: true,
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div class="blog-slider">
      <div class="blog-slider__wrp swiper-wrapper">
        {/* ----- Map Data---- */}
        {data.map((data) => (
          <div key={data.id} class="blog-slider__item swiper-slide">
            <div class="blog-slider__img">
              <img src={data.photo} alt="" />
            </div>
            <div class="blog-slider__content">
              <span class="blog-slider__code">{data.location}</span>
              <div class="blog-slider__title">{data.title}</div>
              <div class="blog-slider__text">{data.desc}</div>
              <div class="blog-slider__code">
                <p> ₹ {data.price}</p>
                <p> {data.size}</p>
              </div>
              <button class="blog-slider__button">BOOK NOW</button>
            </div>
          </div>
        ))}

        {/* ----- Map Data---- */}
      </div>
    </div>
  );
};

export default App;
