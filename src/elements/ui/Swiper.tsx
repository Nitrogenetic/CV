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
            backgroundImage: bg || 'none',
          }}
          data-swiper-parallax="-25%"
        />
        <div className="swiper-button-prev w-7vw h-7vw bg-red-100 text-transparent">
          1
        </div>
        <div className="swiper-button-next w-7vw h-7vw bg-red-100 text-transparent">
          2
        </div>
      </Swiper>
    </>
  );
});

SwiperParallax.displayName = 'SwiperParallax';

export { SwiperParallax };
