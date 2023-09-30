import React,{ useRef } from 'react'
import './topnavbar.css'
import im1 from '../Svg/im1.png'
const TopNavProducts = () => {
	const scrollbarRef = useRef(null);
    const handleScrollbar = (product) => {
    const productElement = document.getElementById(product);
    if (productElement && scrollbarRef.current) {
      const offset = 80;
      const elementPosition = productElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      
      scrollbarRef.current.scrollTop = offsetPosition;
    }
  };

  return (
	<div>
	<div className='TopNavProducts'>
	<div className='top_nav'>
		<div
		onClick={() => handleScrollbar("product")}
		 className='top_nav_prod'
		>
           <img src={im1} alt="" />
		</div>

		<div
		 onClick={() => handleScrollbar("PreparedFoods")}
		className='top_nav_prod'
		>
		<img src={im1} alt="" />
		</div>

		<div
		onClick={() => handleScrollbar("CannedFoods")}
		className='top_nav_prod'
		>
		<img src={im1} alt="" />
		</div>

		<div
			onClick={() => handleScrollbar("Bakery")}
			className='top_nav_prod'
		>
		<img src={im1} alt="" />
		</div>

		<div
			onClick={() => handleScrollbar("Dairy")}
			className='top_nav_prod'
		>
		<img src={im1} alt="" />
		</div>
		
	</div>
	</div>
	</div>
  )
}

export default TopNavProducts