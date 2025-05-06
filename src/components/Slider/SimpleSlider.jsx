import React from "react";
import Slider from "react-slick";
import './SimpleSlider.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';


function SamplePrevArrow(props) {


  return (
    <div {...props}>
      <button><FontAwesomeIcon icon={faArrowAltCircleLeft} /></button>
    </div>
  );
}

function SimpleSlider() {
  const settings = {
    dots: true,
    arrows: false,
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://cdn.pixabay.com/photo/2025/01/18/14/05/architecture-9342358_1280.jpg" alt="" />
        </div>
        <div>
          <img src="https://media.istockphoto.com/id/913722652/photo/st-marks-square-venice-italy.jpg?s=2048x2048&w=is&k=20&c=VtC9C3bPyrREpRy4c5k8o6d8IjosgjG4_aiRp2S3TtI=" alt="" />
        </div>
        <div>
          <img src="https://media.istockphoto.com/id/1186326193/photo/san-marco-square-at-sunrise-venice-italy.jpg?s=2048x2048&w=is&k=20&c=KDF0YqrhC3b8c5Jx6TPVM14XrtxkIWxZ9FMKEyiwePU=" alt="" />
        </div>
        <div>
          <img src="https://media.istockphoto.com/id/2171315771/photo/car-for-traveling-with-a-mountain-road.jpg?s=2048x2048&w=is&k=20&c=50_KkjWLxAdySp31FJiM9i2Z2jgtQSFaaoMKeUI2_K8=" alt="" />
        </div>
        <div>
          <img src="https://media.istockphoto.com/id/1423663487/photo/car-parked-near-mountain-ridge-and-forest-in-yosemite-national-park.jpg?s=2048x2048&w=is&k=20&c=h5OrHw-6rrOOM6o4Z0awdw2YLxXnpUHIqhCW2_xYM7Y=" alt="" />
        </div>
        <div>
          <img src="https://media.istockphoto.com/id/1303911286/photo/driving-suv-through-red-rock-canyons.jpg?s=2048x2048&w=is&k=20&c=WqWZAoQmT7lSiaGYWuYCRLT8zU5zY87ApasEqoyufvg=" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
