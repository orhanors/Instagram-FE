import React, {useState} from "react";
import "./feed.scss";
import Stories from "../stories/Stories";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// export default function Feed() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 2,
//   };
//   return (
//     <div className="container-feed d-flex align-items-center my-4 border-3">
//       {/* <Slider {...settings} className="">
//                 <div className="d-flex">
//                     {Array.from({ length: 6 }, (_, i) => i + 1).map((n) =><div><Stories key={n} /></div> )}
//                 </div>

//             </Slider> */}
//       <Slider {...settings}>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//       </Slider>
//     </div>
//   );
// }
export default function Feed(){
    const [marginLeft, setMarginLeft] = useState(0)



    return(
        <div className="slider mb-4">
            <button onClick={()=>setMarginLeft(marginLeft + 100)}>prev</button>
            <button onClick={()=>setMarginLeft(marginLeft - 100)}>next</button>
            <div className="slide-container" style={{width: '300%', marginLeft: `${marginLeft}%`}}>
                <div className="slide">
                    <div className="story">1.1</div>
                    <div className="story">1.2</div>
                    <div className="story">1.3</div>
                </div>
                <div className="slide">
                <div className="story">2.1</div>
                    <div className="story">2.2</div>
                    <div className="story">2.3</div>

                </div>
                <div className="slide">
                <div className="story">3.1</div>
                    <div className="story">3.2</div>
                    <div className="story">3.3</div>

                </div>
           
            </div>
        </div>
    )
}