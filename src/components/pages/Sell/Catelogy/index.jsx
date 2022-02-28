import React,{ useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import catelogyList from '../../../../API/catelogy.json'
Catelogy.propTypes = {
    onChange: PropTypes.func,
};

function Catelogy(props) {
    const {onChange}=props;
   //lay danh sach cac danh muc
   const [catelogy, setCatelogy] = useState([])
   useEffect(() => {
        const respone=catelogyList.catelogys
        setCatelogy(respone)
   }, [])
   
    const handleCatelogyClick=(value)=>{
        if(value){
            onChange(value.id)
        }
    }
    return (
        <div className="catelogy col col-2">
            <h4 className="catelogy__name">
                DANH MỤC SẢN PHẨM
            </h4>
            <ul className="catelogy__list">
                {catelogy.map((value)=>(
                    <li key={value.id} onClick={() => handleCatelogyClick(value)} className="catelogy__item">{value.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Catelogy;