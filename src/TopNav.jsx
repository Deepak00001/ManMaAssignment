import React from "react";
import "./TopNav.css";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';

const TopNav = () => {
    return(
        <>
            <div id="top1">
                <div id="left1">
                    <img src="../img/manma_png.png" alt="manma" id="logo"/>
                </div>
                <div id="right1">
                    <div id="right2">
                        <div id="up1"><MailOutlineIcon></MailOutlineIcon> <span><a href="mailto:guptadeepak01072001@gmail.com">Mail Us Today</a></span></div>
                        <div id="down1">contact@manmaservices.com</div>
                    </div>
                    <div id="right3">
                        <div id="up1"><CallIcon></CallIcon> <span><a href="tel:+91-8929825225">Contact Us</a></span></div>
                        <div id="down1">+91-8929825225</div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default TopNav;