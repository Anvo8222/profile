import React, { useState } from 'react';
import './style.scss';
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
                    <h2>
                        Giới thiệu
                    </h2>
                    <p>
                        Em hiện là sinh viên năm 4 của trường ĐH Duy Tân. Em đang theo đuổi công việc lập trình web về mảng FrontEnd, cụ thể là ReactJS. 
                        Em hy vọng đc đi thực tập ở vị trí Intern Front-end để cải thiện kỹ năng của bản thân cũng như tích lũy thêm nhiều kinh nghiệm để tạo ra những sản phẩm chất lượng.
                    </p>
                </div>
                <div className={option ===2 ? "content__item content__introduce active" : "content__item content__introduce"}>
                    <h2>
                        Kỹ năng
                    </h2>
                    <p>
                        <span>HTML,CSS,SCSS,Responsive,JavaScript,ReactJS</span>
                        
                    </p>
                    <h3>Đã làm được:</h3>
                     eljwnejklwnejklwnekjwnekjwnkj
                </div>
                
                <div className={option ===3 ? "content__item content__introduce active" : "content__item content__introduce"}>
                    <h2>
                        Mục tiêu
                    </h2>
                    <p>
                        củng cố kiến thức, 
                        Trở thành Dev FullStack
                    </p>
                </div>
                <div className={option ===4 ? "content__item content__introduce active" : "content__item content__introduce"}>
                    <h2>
                        Sở thích
                    </h2>
                    <p>
                        ư;;djokwjdolsdlks
                    </p>
                </div>


            </div>
            
        </React.Fragment>
        
    );
    
}

export default Action;