import React, { FC, memo } from 'react';
import cls from 'classnames';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation } from 'swiper';

export interface SwiperParallaxProps {
  bg?: string;
  className?: string;
  slides: { title?: string; subtitle?: string; text?: string }[];
}

const SwiperParallax: FC<SwiperParallaxProps> = memo((props) => {
  const { bg, className, slides } = props;

  return (
    <>
      <Swiper
        style={{
          '--swiper-pagination-color': '#fff',
        }}
        speed={300}
        parallax={false}
        pagination={false}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className={cls('mySwiper', className)}
      >
        <div
          slot="container-start"
          className={
            'parallax-bg absolute bg-cover bg-no-repeat w-100vw h-full'
          }
          style={{
            backgroundImage: bg,
          }}
          data-swiper-parallax="-25%"
        />
        <div className="swiper-button-prev w-7vw h-7vw bg-red-100 text-transparent">
          1
        </div>
        <div className="swiper-button-next w-7vw h-7vw bg-red-100 text-transparent">
          2
        </div>
        {slides.map((slide) => {
          return (
            <SwiperSlide className={'p-3vw'}>
              <div
                className={'title text-7vw font-extralight mb-6vw'}
                data-swiper-parallax="-300"
              >
                {slide?.title}
              </div>
              {/* <div
                className={'subtitle text-5vw font-light mb-1vw'}
                data-swiper-parallax="-200"
              >
                {slide?.subtitle}
              </div> */}
              <div
                className={'text text-2vw font-light px-6vw'}
                data-swiper-parallax="-100"
              >
                <p>{slide?.text}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
});

SwiperParallax.displayName = 'SwiperParallax';

export { SwiperParallax };
