import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import img1 from '../../Assets/sider-img/Bologna.png'
import img2 from '../../Assets/sider-img/Edinburgh1.png'
import img3 from '../../Assets/sider-img/HarvardKennedy.png'
import img4 from '../../Assets/sider-img/HongKongUni1.png'
import img5 from '../../Assets/sider-img/IE.png'
import img6 from '../../Assets/sider-img/KTH.png'
import img7 from '../../Assets/sider-img/Leiden.png'
import img8 from '../../Assets/sider-img/LSE.png'
import img9 from '../../Assets/sider-img/Stanford.png'
import img10 from '../../Assets/sider-img/SwinburneUniversity.png'

const SliderComponent = () => {
    const settings = {
        dots: false,
        arrow: false,
        infinite: true,
        speed: 700,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 968,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              },
            },
      
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrow: false,
                infinite: true,
              },
            },
          ],
      
      };

      const sliderImg = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  return (
    <Slider {...settings}>
        {/* <div className="client-col mr-4">
          <div>
            <img src={ESC} alt="" />
          </div>
          <div className="text">
            <p>
              Studyportals is our most valued partner platform. The platform is
              actively engaged in facilitating and innovating the decison-making
              process that international students undergo before studying
              abroad. Since our collaboration, we have witnessed excellent
              results in terms of international student recruitment.
            </p>
            <br/>
            <span><strong>Mohamed Elzayedi,</strong></span> <br />
            <span>Recruitment manager</span>
          </div>
        </div>
        <div className="client-col">
          <div>
            <img src={cambridge} alt="" />
          </div>
          <div className="text">
            <p>
              I've known Studyportals since the very beginning and I trust their
              services and personalized advice. They care about having a strong
              and long-term relationship with their clients based on
              transparency and reaching common goals.
            </p>
            <br/>
            <span><strong>Silvana K. Tafur Yasuda-Bakker,</strong></span> <br />
            <span>Director of Marketing, Demand Generation</span>
          </div>
        </div>
        <div className="client-col">
        <div>
            <img src={studywest} alt="" />
          </div>
          <div className="text">
            <p>
              Study West Virginia and Studyportals teamed up to increase the
              number of international students in West Virginia by promoting the
              state and its schools as a study destination. As a consortia, we
              received a lot more traffic through Studyportals than we would
              have gotten on our own and I was impressed by how many referrals
              converted into inquiries for our universities. Additionally,
              Studyportals has been a great resource for knowledge in the field
              and has been very helpful in reviewing our analytics. I look
              forward to a continued partnership with Studyportals and would
              recommend them to other state consortia.
            </p>
            <br/>
            <span><strong>Dr. Clark Egnor,</strong></span> <br />
            <span>Director</span>

            
          </div>
        </div> */}
            {
                sliderImg.map((img)=>{
                    return (
                        <div>
                            <img src={img} alt="" />
                        </div>
                    )
                })
            }
    </Slider>
  )
}

export default SliderComponent