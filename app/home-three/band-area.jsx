import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const brandData = {
  brandImage: [
    { image: "12.jpg" },
    { image: "13.jpg" },
    { image: "14.jpg" },
    { image: "15.jpg" },
    { image: "16.jpg" },
    { image: "17.jpg" },
    { image: "12.jpg" },
    { image: "13.jpg" },
    { image: "14.jpg" },
    { image: "15.jpg" },
    { image: "16.jpg" },
    { image: "17.jpg" },
    // { image: "/img/icon/1.png" },
    // { image: "/img/icon/2.png" },
    // { image: "/img/icon/3.png" },
    // { image: "/img/icon/4.png" },
    // { image: "/img/icon/5.png" },
    // { image: "/img/icon/6.png" },
  ],
};

const { brandImage } = brandData;

const Bandarea = () => {
  return (
<div className="band__area">
		<div className="container">
			<div className="row band__area-border">
				<div className="col-xl-12">
           <h3>Our Top Recruiter</h3>
           <Swiper
  slidesPerView={6}
  autoplay={{
    delay: 1500,
  }}
  loop={true}
  modules={[Autoplay]}
  breakpoints={{
    // when window width is >= 320px (common mobile screen)
    320: {
      slidesPerView: 2,
    },
    // when window width is >= 768px (tablet screen)
    768: {
      slidesPerView: 4,
    },
    // when window width is >= 1024px (desktop screen)
    1024: {
      slidesPerView: 6,
    },
  }}
>
  {brandImage?.map((data, id) => (
    <SwiperSlide className="band__area-item" key={id}>
      <img src={data.image} alt="image" />
    </SwiperSlide>
  ))}
</Swiper>

    </div>
    </div>
    </div>
    </div>
  );
};

export default Bandarea;
