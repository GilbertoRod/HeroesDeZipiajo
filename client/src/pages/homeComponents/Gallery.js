import React from 'react'
import './Gallery.css'
import RecipientCard from '../../components/RecipientCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft,faArrowRight} from '@fortawesome/free-solid-svg-icons'
const data=[{
  name:"Juan",
  image:'1.JPEG',
  summary:"23 Years old, can't walk or talk",
  sponsor:'Manuel M.'
},{
  name:"Jose",
  image:'2.JPEG',
  summary:"Born at 5 months resulting from domestic violence and is completely paralyzed.",
  sponsor:'Pablo S.'
},{
  name:"Guadalupe",
  image:'3.JPEG',
  summary:"5 years old, suffers from dwuarfism.",
  sponsor:'Guadalupe C.'
},{
  name:"Rosa",
  image:'4.JPEG',
  summary:"Cannot walk, talk, or stay upright. Also Suffers from seizzures.",
  sponsor:'Mireya M.'
},{
  name:"Alejandro",
  image:'5.JPEG',
  summary:"",
  sponsor:'Gabino M.'
},{
  name:"Miguel",
  image:'6.JPEG',
  summary:"",
  sponsor:'Alejandro A.'
},{
  name:"Sandra",
  image:'7.JPEG',
  summary:"",
  sponsor:'Miriam M.'
},{
  name:"Anette",
  image:'8.JPEG',
  summary:"",
  sponsor:'Carmen M.'
},{
  name:"Enrique",
  image:'9.JPEG',
  summary:"",
  sponsor:'Isidro S.'
},{
  name:"Jazuel",
  image:'10.JPEG',
  summary:"Undiagnosed but has all of the behavioral traits of autism.",
  sponsor:'Jocelyn'
},]


function NextArrow(props) {
  const { onClick } = props;
  return (
    <div 
    style={{position:"absolute",top:"50%",right:"0px",transform: "translate(0, -50%)"}}
    onClick={onClick}>
      <FontAwesomeIcon icon={faArrowRight} color='white' size='xl' className='right-carousel-arrow'/>
    </div>

  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div 
    style={{position:"absolute",top:"50%",left:"0px",transform: "translate(0, -50%)",zIndex:"100"}}
    onClick={onClick}>
      <FontAwesomeIcon icon={faArrowLeft} color='white' size='xl' className='left-carousel-arrow'/>
    </div>
  );
}
function Gallery() {
  const settings={
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 10000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />

  };
  return (
    <>
      <h1 className='gallery-title'>OUR SPECIAL RECIPIENTS</h1>
      <div className='gallery-body'>
        <div className='card-container'>
          <Slider {...settings} className='carousel-slider'>
            {data.map((info) => (
              <RecipientCard key={info.image} image={info.image} name={info.name} summary={info.summary} sponsor={info.sponsor}  />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Gallery