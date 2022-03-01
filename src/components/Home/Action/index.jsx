import React, { useState } from 'react';
import './style.scss';
import cart from '../../../img/cart.png';
import travel from '../../../img/travel.png';
import movie from '../../../img/movie.png';
import music from '../../../img/music.png';
import { Link } from "react-router-dom";
Action.propTypes = {
    
};
function Action(props) {
    const [option, setOptionSate] = useState(2)
    const toggle=(index)=>{

        setOptionSate(index)
    }
    return (
        <React.Fragment>
            <div className="option col-3">
                <ul className="option__items">
                    <li onClick={()=>toggle(1)} className={option ===1 ? "option__item active" : "option__item"}>
                    <lord-icon className="option__icon" src="https://cdn.lordicon.com/eszyyflr.json" trigger="hover" colors="primary:#121331,secondary:#08a88a" style={{width: '70px', height: '70px'}}>
                    </lord-icon>
                        <span>Giới thiệu</span>
                    </li>
                    <li onClick={()=>toggle(2)} className={option ===2 ? "option__item active" : "option__item"}>
                    <lord-icon src="https://cdn.lordicon.com/wxnxiano.json" trigger="morph" colors="primary:#121331,secondary:#08a88a" style={{width: '70px', height: '70px'}}>
                    </lord-icon>
                        <span>Học vấn</span>
                    </li>
                    
                    <li onClick={()=>toggle(3)} className={option ===3 ? "option__item active" : "option__item"}>
                    <lord-icon src="https://cdn.lordicon.com/iltqorsz.json" trigger="morph" colors="primary:#121331,secondary:#08a88a" style={{width: '70px', height: '70px'}}>
                    </lord-icon>
                        <span>Mục tiêu</span>
                    </li>
                    <li onClick={()=>toggle(4)} className={option ===4 ? "option__item active" : "option__item"}>
                    <lord-icon src="https://cdn.lordicon.com/rjzlnunf.json" trigger="hover" colors="primary:#121331,secondary:#08a88a" style={{width: '70px', height: '70px'}}>
                    </lord-icon>
                        <span>Sở thích</span>
                    </li>
                </ul>
            </div>
            <div className="content col-9 ">
                <div className={option ===1 ? "content__item content__introduce active" : "content__item content__introduce"}>
                    <h2 className="content__item-intro-header">
                        Giới thiệu
                    </h2>
                    <p className="content__item-intro">
                        Em hiện là sinh viên năm 4 của trường ĐH Duy Tân. Em đang theo đuổi công việc lập trình web về mảng FrontEnd, cụ thể là ReactJS. 
                        Em hy vọng đc đi thực tập ở vị trí Intern Front-end để cải thiện kỹ năng của bản thân cũng như tích lũy thêm nhiều kinh nghiệm để tạo ra những sản phẩm chất lượng.
                    </p>
                </div>
                <div className={option ===2 ? "content__item content__introduce active" : "content__item content__introduce"}>
                    <h2 className="content__item-skill">
                        Kỹ năng
                    </h2>
                    <p className="content__item-skills">
                        <span>HTML, CSS, SCSS, Responsive, JavaScript, ReactJS</span>
                    </p>
                    <h3>Đã làm được:</h3>
                     <div className="container">
                     <div className="row">
                            <div className="col col-lg-6 col-md-12">
                                <div className="content__project">
                                    <img src={cart} className="content__project-img" alt="cart" />
                                    <h2>Giỏ hàng</h2>

                                    <Link to="/sell" className="content__project-desc">
                                        <span>Các thư viện sử dụng: <p>Reactjs, Redux toolkit, React Hook Form, React-router</p></span>
                                        <span>Chức năng: <p>Lọc theo danh mục, tìm kiếm, xem chi tiết sản phẩm, thêm, sửa, xóa giỏ hàng</p></span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col col-lg-6 col-md-12">
                                <div className="content__project">
                                    <img src={travel} className="content__project-img" alt="tour" />
                                    <h2>Tour</h2>

                                    <a href="https://anvo8222.github.io/travel.github.io/" target="travel" className="content__project-desc">
                                        <span>Giao diện trang chủ web tour du lịch </span>
                                        <span>Sử dụng: <p>HTML, SCSS, JavaScript, Bootstrap, Wow</p></span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="content__project">
                                    <img src={movie} className="content__project-img" alt="movie" />
                                    <h2>Trang chủ web xem phim</h2>

                                    <a href="https://anvo8222.github.io/night.github.io/" target="movie" className="content__project-desc">
                                        <span>Giao diện website xem phim </span>
                                        <span>Luyện tập HTML CSS Grid</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="content__project">
                                    <img src={music} className="content__project-img" alt="music" />
                                    <h2>Music</h2>

                                    <a href="https://anvo8222.github.io/appmusic/" target="music" className="content__project-desc">
                                        <span>Luyện tập Javascript</span>
                                        <span>Chức năng: <p>Tự động lặp, next, prev, pause</p></span>
                                    </a>
                                </div>
                            </div>
                     </div>
                     </div>
                </div>
                
                <div className={option ===3 ? "content__item content__introduce active" : "content__item content__introduce"}>
                    <h2 className="target__name">
                        Mục tiêu: 
                    </h2>
                    <ul className="target__list">
                        <li className="target__item">Nâng cao kỹ năng lập trình web</li>
                        <li className="target__item">Học và rèn luyện Javascript</li>
                        <li className="target__item">Học và rèn luyện React Js</li>
                        <li className="target__item">Trở thành lập trình viên FullStack</li>
                    </ul>
                </div>
                <div className={option ===4 ? "content__item content__introduce active" : "content__item content__introduce"}>
                    <h2 className="love">
                        SỞ THÍCH
                    </h2>
                    <div>
                        <h3 className="love__name">
                            Chơi game
                        </h3>
                        <div className="love__game">
                            <div className="love__game-block">
                                <img className="love__game-img" src="https://cdn.vn.garenanow.com/web/lol-product/LOLwebsite/img/clear2.jpg" alt="lol" />
                                
                            </div>
                            <p>Liên minh huyền thoại</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="love__name">
                            Xem phim
                        </h3>
                        <div className="love__game">
                            <div className="love__game-block">
                                <img className="love__game-img" src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/b525c6c0ab6111e9bfc419677c208397.jpg" alt="Chúa tể của những chiếc nhẫn" />
                                
                            </div>
                            
                        </div>
                    </div>
                </div>


            </div>
            
        </React.Fragment>
        
    );
    
}

export default Action;