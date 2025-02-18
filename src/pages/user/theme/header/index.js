import { memo } from "react";
import "./style.scss"
import { Link } from "react-router-dom";
import { formater } from "../../../../utils/formater";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

import { IoMailUnreadOutline } from "react-icons/io5";
const Header = () => {
    return (
        <>
            <div className="header_top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 header_top_left">
                            <ul>
                                <li>
                                    <IoMailUnreadOutline />
                                    Dvnsmart@gmail.com
                                </li>
                                <li>
                                    Free shipping for orders from {formater(200000)}
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 header_top_right">
                            <ul>
                                <li>
                                    <Link to={""}>
                                        <CiFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <FaInstagram />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <FaLinkedin />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <FaSquareTwitter />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <FaUser />
                                        <span>
                                            Login
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3">
                        LOGO
                    </div>
                    <div className="col-xl-6">
                        MENUS
                    </div>
                    <div className="col-xl-3">
                        PHONE
                    </div>
                </div>
            </div>

        </>
    );
};

export default memo(Header);
