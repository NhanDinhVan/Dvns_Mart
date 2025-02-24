import { memo, useState } from "react";
import "./style.scss"
import { Link } from "react-router-dom";
import { formater } from "../../../../utils/formater";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

import { IoMailUnreadOutline } from "react-icons/io5";
import { ROUTERS } from "../../../../utils/router";
const Header = () => {

    const [menus, setMenus] = useState([
        {
            name: "Trang chủ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Cửa hàng",
            path: ROUTERS.USER.PRODUCTS,
        },
        {
            name: "Sản phẩm",
            path: ROUTERS.USER.PRODUCTS,
            isShowSubMenu: false,
            child: [
                {
                    name: "Thịt",
                    path: ""
                },
                {
                    name: "Rau củ",
                    path: ""
                },
                {
                    name: "Đồ uống",
                    path: ""
                },
                {
                    name: "Thức ăn nhanh",
                    path: ""
                },
            ]
        },
        {
            name: "Bài viết",
            path: ROUTERS.USER.POST,
        },
        {
            name: "Liên hệ",
            path: ROUTERS.USER.CONTACT,
        },
    ])

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
                    <div className="col-xl-3 col-lg-3 col-sm-3">
                        <div className="header__logo">
                            <h2>Dvnsmart</h2>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-3 col-sm-3">
                        <nav className="header__menu">
                            <ul>
                                {
                                    menus?.map((menu, menuKey) => {
                                        return <>
                                            <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                                <Link to={menu?.path}>{menu?.name}</Link>
                                                <ul>
                                                </ul>
                                            </li>
                                        </>
                                    })
                                }
                            </ul>
                        </nav>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-sm-3">
                        <div className="header__cart">
                            <div className="header__cart__price">
                                <span>{formater(1500000)}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to={"#"}>
                                        <IoCartOutline />
                                    </Link>
                                    <span>
                                        5
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default memo(Header);
