import React from "react";
import "./Main.css"

const Main = () => {
    return(
        <>
            <div id="main1">
                <div id="main2">
                    <div id="leftmain" >
                        <p id="p1"  data-aos="fade-down" data-aos-delay="50">An Indian </p>
                        <p id="p2"  data-aos="fade-down" data-aos-delay="50">Digital Marketing Agency</p>
                        <div id="maindiv" data-aos="fade-up" data-aos-delay="200">With global edge bussinesses grow online</div>
                        <button id="btn1" data-aos="ease-out" >Discover More</button>
                    </div>
                    <div id="rightmain">
                        <div id="image2">
                            <div data-aos="zoom-out" data-aos-delay="1500"><img src="../img/thumb_6.png" alt="21" id="image21"/></div>
                            <div data-aos="zoom-in" data-aos-delay="1200"><img src="../img/thumb_5.png" alt="22" id="image22"/></div>
                        </div>
                        <div ><img src="../img/thumb_1.png" alt="1" id="image1"/></div>
                        <div id="image3">
                            <div data-aos="slide-right" data-aos-delay="1000"><img src="../img/thumb_2.png" alt="31" id="image31"/></div>
                            <div data-aos="slide-left" data-aos-delay="800"><img src="../img/thumb_3.png" alt="32" id="image32"/></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Main;