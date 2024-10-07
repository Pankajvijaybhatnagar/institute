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
           <h3>Recruiter</h3>
      <Swiper
        slidesPerView={6}
        autoplay={{
          delay: 1500,
        }}
        loop={true}
        modules={[Autoplay]}
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
