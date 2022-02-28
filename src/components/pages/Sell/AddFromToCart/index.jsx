import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import './style.scss'
import {  Link, useNavigate } from 'react-router-dom';
AddFromToCart.propTypes = {
    onSubmit:PropTypes.func,
};
// const schema = yup.object().shape({
//     quanlity:yup.number().min(1,'Nhập số lượng').required('Số lượng phải lớn hơn hoặc bằng 1'),
// });

function AddFromToCart({ onSubmit }) {
 
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onChangeSecond = value => console.log('number:', value)
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form__addToCart">
                {/* <span onClick={handleIncrease}>-</span> */}
                    <input  
                    placeholder="Nhập số lượng" className="input__quantyti-cart" 
                    type="number" name="number" id="number"
                    {...register("number",{required:true,min:1,max:100,})}/>
                    <div className="form__addToCart-size">
                        <span >Chọn SIZE</span>
                        <select {...register("size")}>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                    </div>
                    
                {/* <span onClick={handleReduction}>+</span> */}
                {errors.number && <span className="input__quantyti-message">Số lượng phải lớn hơn 0 hoặc nhỏ hơn 100</span>}
                <button type="submit" Class="input__quantyti-submit btn btn-primary">Add to cart</button>
                
                
            </div>
        </form>
    
    );
}

export default AddFromToCart;