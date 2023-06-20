"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import styles from "./Slider.module.scss";
import Link from "next/link";

export const Slider = () => {
  const slides = [
    {
      image: "overview",
      link: "./overview",
      h2: "Overview",
      p: "A secure and transparent salary payment app using blockchain technology for reliable and timely transactions.",
    },
    {
      image: "internal",
      link: "./internalstaff",
      h2: "Internal",
      p: "Manage payroll, salary calculations, employee records, and payment scheduling for internal employees.",
    },
    {
      image: "outsource",
      link: "./outsourcedworkers",
      h2: "Outsource",
      p: "Simplify payment processes for freelancers with tools for contracts, real-time earnings tracking, and transparent payment releases.",
    },
    {
      image: "history",
      link: "history",
      h2: "History",
      p: "Track and review payment transactions, contracts, and activities for a comprehensive payment history.",
    },
    {
      image: "settings",
      link: "./settings",
      h2: "Settings",
      p: "Customize payment preferences, adjust notifications, manage account information, and personalize the app.",
    },
    {
      image: "documentation",
      link: "https://github.com/Alexpn69/newFlowary.git",
      h2: "Documentation",
      p: "Access detailed guides, tutorials, and resources to enhance user knowledge and maximize the app benefits.",
    },
  ];
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className={styles.swiper}
    >
      {slides.map((slide, index) => (
        <SwiperSlide className={styles.slide} key={slide.image}>
          <Image
            src={`/image/swiper/${slide.image}.png`}
            fill
            quality={100}
            alt={`slide-${slide.image}`}
            className={styles.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={slide.image === "overview"}
          />
          <div className={styles.text}>
            <h2>
              <Link href={slide.link}>{slide.h2}</Link>
            </h2>
            <p>{slide.p}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
