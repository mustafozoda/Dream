import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css";
import ItemForOverview from "./ItemForOverview";

export default function SwiperTask({ data, setData }) {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper h-full"
    >
      {data.map((el) => (
        <SwiperSlide key={el.id} className="w-full">
          <ItemForOverview data={data} el={el} setData={setData} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
