import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import microsoftImg from '../Image/Microsoft.png'
import microsoftScreen from '../Image/Microsoft_screen.png'
import portfolioOneImg from '../Image/Portfolio-1.png'
import portfolioScreen from '../Image/Portfolio_screen.png'
import tamilBlogImg from '../Image/Tamil_blog.png'
import blogScreen from '../Image/Blog.png'
import coffeeBarImg from '../Image/coffee_bar.png'
import coffeeBarScreen from '../Image/Coffee Bar.png'
import { FaEye, FaEyeSlash } from "react-icons/fa";

const projectDetails = [
  { heading: 'Microsoft', img: microsoftImg, singleImg: microsoftScreen, gitLink: 'https://ricky-moses.github.io/Html-Css-Project/',content: "My first project was a Microsoft website clone built entirely using HTML and CSS. It was a great learning experience that helped me understand layout structuring, styling, and responsiveness. This project marked the beginning of my web development journey! 🚀",responsive: false },
  { heading: 'Portfolio', img: portfolioOneImg, singleImg: portfolioScreen, gitLink: 'https://ricky-moses.github.io/Portfolio-3/',content: "My second project was a personal portfolio website created using only HTML and CSS. It showcases information about me, my skills, and my work, helping me improve my design and layout skills. This project was a step forward in my web development journey! 🚀",responsive: true },
  { heading: 'Tamil Nadu Blog', img: blogScreen, singleImg: tamilBlogImg, gitLink: 'https://ricky-moses.github.io/Simple-Blog/',content: "My third project was a website about the rich culture of Tamil Nadu, built using HTML, CSS, JavaScript, and Bootstrap. This project helped me enhance my skills in interactive design, responsiveness, and dynamic elements while showcasing the heritage of Tamil Nadu. 🚀",responsive: true },
  { heading: 'Coffee Bar', img: coffeeBarScreen, singleImg: coffeeBarImg, gitLink: 'https://ricky-moses.github.io/Coffee-Shop-React/',content: "My fourth project was a Coffee Bar website built using HTML, CSS, Bootstrap, JavaScript, React, and various React packages. This project helped me explore React components, state management, and UI libraries to create a dynamic and interactive user experience.🚀",responsive: true },

]


export default function Project() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    const changeScreenSize = ()=>{
      setIsMobile(window.innerWidth < 992)
    }

    changeScreenSize()
    window.addEventListener('resize', changeScreenSize)

    return ()=> window.removeEventListener('resize', changeScreenSize)
  },[])

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="project py-2">
    <h1>Project</h1>
      <Slider className="slider p-2" {...settings}>
        {projectDetails.map(({ heading, img, singleImg, gitLink, content, responsive }) => (
          <div
            key={heading}
            className=" d-flex align-items-center justify-content-center"

          >
            <div className="slider-box border d-flex align-items-center p-1 w-100 m-3" >
              <div className="ba-img">
                <img src={singleImg} className="img-1 img-fluid w-100 h-100" alt="" />
              </div>
              <div className="fr-img d-flex align-items-center gap-2 p-1 border w-100 h-75">
                <div className="border scroll-img w-100 h-100 p-1">
                  <img className="img-fluid" src={img} alt="" />
                </div>
                <div className="content border w-100 h-100">
                  <p>{content}</p>
                </div>
                {isMobile && !responsive ? (
                  <button className="img-btn" onClick={()=> alert('This project is not responsible on mobile or tablet. Please use a laptop or desktop')}>
                    <FaEye />
                  </button>
                ) : (
                  <a href={gitLink} target="_blank" rel="noopener noreferrer">
                  <button className="img-btn">
                    <FaEye />
                  </button>
                </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
