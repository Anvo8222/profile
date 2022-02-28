import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import Header from '../Header';
import products from '../../../../API/products.json'
import { Link, useNavigate, useParams } from 'react-router-dom';
import AddFromToCart from'../AddFromToCart'
import ProductMenu from '../ProductMenu';
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Cart/cartSlice';
import Footer from '../Footer';
DetailPage.propTypes = {
    
};

function DetailPage(props) {

    let params = useParams();
    // const [productItem, setProductItem] = useState([])
    const dispatch = useDispatch()
    const respone=products.products
    const productItem=respone.filter((e)=>e.id==params.id);
    
//     useEffect(() => {
//         setProductItem(respone.filter((e)=>e.id==params.id))
        
//    }, [])


//form submit add to cart
    const navigate = useNavigate();
   const handleAddToCartSubmit=(formValues)=>{
       console.log('form submit',formValues);
        const action =addToCart({
            id:productItem[0].id,
            productItem,
            quantity:Number(formValues.number),
            size:formValues.size
        });
        console.log("action detailpage",action);
        dispatch(action)
        navigate('/sell/cart')
    
   }
   //handle change imageSub
   const [image, setImage] = useState(productItem[0].img)
   
   const handleChangeImage =(id)=>{
    setImage(id)
   }
   
   console.log("productItem:",productItem[0].subImg);

    return (
        <div className="container">
            <div className="row">
                <Header></Header>
            </div>
            <div className="detail">
                <div className="detail__cart">
                    
                </div>
                <div className="row detail__page">
                    <div className="col-4">
                        <div className="detail__img">
                            <img className="detail__img-parent" src={image} alt={productItem[0].name} />
                            <ul className="detail__img-group">
                                {productItem[0].subImg.map((value,index)=>(
                                    <li  key={index} className="detail__img-item active" onClick={()=>handleChangeImage(value)}>
                                        <img src={value} alt={productItem[0].name} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="detail__des">
                            <h1 className="detail__des-name">
                                {productItem[0].name.toUpperCase()}
                            </h1>
                            <div className="detail__des-block">
                                <span className="detail__des-id">Mã hàng: </span>
                                <span className="detail__des-imNumber">{productItem[0].id}</span>
                            </div>
                            <div className="detail__des-block">
                                <span className="detail__catelogy-id">Danh mục: </span>
                                <span className="detail__catelogy-imNumber">{productItem[0].catelogyName}</span>
                            </div>
                            <div className="detail__des-block">
                                <span className="detail__status-id">Tình trạng: </span>
                                <span className="detail__status-imNumber">{productItem[0].status}</span>
                            </div>
                            <div className="detail__des-block">
                                <h2 className="detail__price">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(productItem[0].price)}</h2>
                            </div>
                            
                            <AddFromToCart onSubmit={handleAddToCartSubmit}></AddFromToCart>
                            <Link to="/sell" Class="back btn btn-secondary">Quay lại trang sản phẩm</Link>
                            
                        </div>
                    </div>
                </div>
                <ProductMenu></ProductMenu>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default DetailPage;