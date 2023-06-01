import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, History } from 'swiper';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Slider.module.scss';

export const Slider = () => {
  return (
    <Swiper
      spaceBetween={10}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, History]}
      className={styles.swiper}
    >
      <SwiperSlide data-history="1" className={styles.slide}>
        <Image
          src="/image/swiper/overview.png"
          fill
          alt="overview"
          className={styles.image}
        />
      </SwiperSlide>
      <SwiperSlide data-history="Slide 2" className={styles.slide}>
        <Image
          src="/image/swiper/internal.png"
          fill
          alt="internal"
          className={styles.image}
        />
      </SwiperSlide>
      <SwiperSlide data-history="3" className={styles.slide}>
        <Image
          src="/image/swiper/outsource.png"
          fill
          alt="outsource"
          className={styles.image}
        />
      </SwiperSlide>
      <SwiperSlide data-history="Slide 4" className={styles.slide}>
        <Image
          src="/image/swiper/history.png"
          fill
          alt="history"
          className={styles.image}
        />
      </SwiperSlide>
      <SwiperSlide data-history="5" className={styles.slide}>
        <Image
          src="/image/swiper/settings.png"
          fill
          alt="settings"
          className={styles.image}
        />
      </SwiperSlide>
      <SwiperSlide data-history="Slide 6" className={styles.slide}>
        <Image
          src="/image/swiper/docs.png"
          fill
          alt="docs"
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </SwiperSlide>
    </Swiper>
  );
};
