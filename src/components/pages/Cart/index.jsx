import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../Sell/Header';
import './style.scss'
import { createSelector } from "@reduxjs/toolkit";
import { Link, useNavigate } from 'react-router-dom';
import {  cartItemList, cartTotalSelector } from './selector';
import { useDispatch, useSelector } from 'react-redux';
import { removeFormCart, setQuantity, showListItem, showMiniCart } from './cartSlice';
import { fortmatPrice } from '../../../Util/comom';

CartFeature.propTypes = {
    
};

function CartFeature(props) {
    const cartTotal=useSelector(cartTotalSelector);
    //lay danh sach cart trong gio hang tu redux
    const cartList=useSelector(cartItemList);
    // const itemTotal=useSelector();
    const [cartListItem, setCartList] = useState([])
    useEffect(() => {
        setCartList(cartList)
    }, [])
    //nut xoa san pham trong gio hang
    const dispatch = useDispatch()
    const handleDeleteToItem=(item)=>{
        setCartList(cartListItem.filter(x => x.id !== item.id))
        const action =removeFormCart(item.id);
        dispatch(action)
    }
    // nut sua so luong trong gio hang
    console.log("cartListItem",cartListItem);
    
    // const handleReduceCartQuantityItem=(quantity)=>{
    //     console.log("quantity: ",quantity);
    //     const newQuantyti=quantity;
    //     console.log("newQuantyti",newQuantyti-1);

    // }
    // let newQuantity=1;
    // const handleIcreseCartQuantityItem=(quantity)=>{
    //     // nut tang
    //     console.log("newQuantity");
    // }

    const handleChangeQuantity=(item,e)=>{
        let newQuantity=Number(e.target.value);
        const newItem={...item}
        const action =setQuantity({id: newItem.id, quantity:newQuantity, });
        
        dispatch(action)
        return newItem.productItem[0].price*newQuantity
    }
    return (
        <div>
            <Header></Header>
            <div className="container cart__page">
                <div className="cart__page-btns">
                    <Link to="/sell" className="btn continueBuy">
                        Ti???p t???c mua h??ng 
                    </Link>
                </div>
                <table class="table">
                    <thead>
                        <tr  className="cart__header">
                        <th scope="col">H??nh ???nh</th>
                        <th scope="col">S???n ph???m</th>
                        <th scope="col">T??nh tr???ng</th>
                        <th scope="col">????n gi??</th>
                        <th scope="col">S??? l?????ng</th>
                        {/* <th scope="col">Th??nh ti???n</th> */}
                        <th scope="col">X??a</th>
                        </tr>
                    </thead>
                        <tbody>
                            {cartListItem.map((item,index)=>(
                               
                                <tr key={index}>
                            <th scope="row"><img src={item.productItem[0].img} alt={item.productItem[0].name} /></th>
                            <td>
                            <div className="table__product_des">
                                        <h2 className="table__product_des-name">
                                        {item.productItem[0].name}
                                        </h2>
                                        <div className="table__product-idGroup">
                                            <span className="table__product_des-id">
                                                M?? s???n ph???m: <span className="table__product_des-id">
                                                {item.productItem[0].id}
                                                            </span>
                                            </span>
                                        </div>
                                        <span>
                                            Size: <span>
                                           {item.size}
                                        </span>
                                        </span>
                                        
                                    </div>
                                </td>
                            <td>H??ng c?? s???n</td>
                            <td>{fortmatPrice(item.productItem[0].price)}</td>
                            <td>
            
                            {/* value={item.quantity} */}
                                {/* <button className="cart__btn-redu" onClick={()=>handleReduceCartQuantityItem(item.quantity)}> - </button> */}
                                    <input type="number" min="1" max="100" defaultValue={item.quantity} onChange={(e)=>handleChangeQuantity(item,e)} />
                                {/* <button className="cart__btn-icrese"onClick={()=>handleIcreseCartQuantityItem(item.quantity)}> + </button> */}
                            </td>
                            {/*  */}
                            {/* <td>
                            
                                {fortmatPrice(Number(item.productItem[0].price*item.quantity))}</td> */}
                            <td><button onClick={()=>handleDeleteToItem(item)} className="btn btn-primary">X??a
                                </button></td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="pay">
                        <div className="pays">
                            <div className="pay__item">
                                <span>Ti???n h??ng: </span>
                                <span>{fortmatPrice(cartTotal)}</span>
                            </div>
                            <div className="pay__item">
                                <span>Ph?? ship: </span>
                                <span>0</span>
                            </div>
                        </div>
                        <div className="pay__item">
                            <span>S??? ti???n c???n thanh to??n: </span>
                            <span>{fortmatPrice(cartTotal)}</span>
                        </div>
                        <button className="btn btn-primary">?????t h??ng</button>
                    </div>
            </div>
        </div>
    );
}

export default CartFeature;