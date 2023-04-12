import { ReactComponent as DecorEl } from "../../assets/img/decor-element.svg";
// Swiper
import { Navigation, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/effect-fade";

// Gallery Images
import { gallery } from "../../data/gallery";
import uuid from 'react-uuid';

function Gallery() {
    return <section className="gallery" data-scroll-section>
    <div className="decor-el-container">
      <DecorEl />
    </div>
    <h2>Gallery</h2>
    <div className="swiper container" data-scroll>
      <Swiper
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3
          }
        }}
        slidesPerView={1}
        spaceBetween={30}
        direction={"horizontal"}
        transition={"fade"}
        modules={[Navigation, EffectFade]}
        speed={300}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        loop={true}
        grabCursor={true}
        watchOverflow={true}
        onSlideChange={() => console.log("slide changed")} 
        centeredSlides={false}
        centerInsufficientSlides={true}
        initialSlide={1}
      >
        {gallery.map(img => {
          return <SwiperSlide key={uuid()}>
            <img className="gallery__image" src={img.image} alt="" />
          </SwiperSlide>
        })}
      </Swiper>
      <div className="swiper-buttons">
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  </section>;
}

export default Gallery;