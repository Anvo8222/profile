import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import avatar from '../../../img/avatar.jpg'
index.propTypes = {
    
};
function index(props) {
    return (
        <header className="header">
            <div className="header__avatar">
                <img src={avatar} alt="Avatar của An nè" className="header__img" />
            </div>
            <div className="header__info">
                <h1>
                    Võ Nguyễn Thái An
                </h1>
                <div className="header__info__group">
                    <div className="header__info__group-left">
                        <h2>Sinh Viên</h2>
                        <span>Giới tính: Nam</span>
                        <ul>
                            <li>
                                <span>FaceBook</span>
                                
                                <a href="https://facebook.com/thaian02012k">
                                    <i class="fa-brands fa-facebook icon"></i>
                                </a>
                            </li>
                            <li>
                                <span>Linkedin</span>
                                <a href="https://www.linkedin.com/in/nguy%E1%BB%85n-an-70a741229/">
                                    <i class="fa-brands fa-linkedin icon"></i>
                                </a>
                            </li>
                            <li>
                                <span>Github</span>
                                <a href="https://github.com/Anvo8222">
                                <i class="fa-brands fa-github icon"></i>
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="header__info__group-right">
                        <div className="header__info__group-mailPhone">
                            <span>EMAIL
                                <br></br>
                             anvo8222@gmail.com</span>
                            <span>SĐT
                            <br></br>
                                 0387967435</span>
                        </div>
                        <div className="header__info__group-dateAddress">
                            <span>NGÀY SINH
                            <br></br> 02/01/2000</span>
                            <span>ĐỊA CHỈ<br></br> Quảng Nam, Việt Nam</span>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
}

export default index;