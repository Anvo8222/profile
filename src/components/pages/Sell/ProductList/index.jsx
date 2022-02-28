import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fortmatPrice } from '../../../../Util/comom';
// import Cart from '../Cart';
import Catelogy from '../Catelogy';
import Pagination from '../Pagination';
import './style.scss';
ProductList.propTypes = {
    productList:PropTypes.array,
};
ProductList.propTypes = {
    productList:[],
};
function ProductList(props) {
    const {productList}=props;
    
    
    const [products, setProducts] = useState(productList.slice(0, 16))

    const [search, setSearch] = useState("")
    // //page
    // useEffect(() => {
    //     setProducts(productList.slice(products,handlePageChange))
        
    // }, [])
    const handlePageChangeNext=(newPage)=>{
        console.log("nexxt",newPage);
        setProducts(productList.slice(products.length,newPage));
    }
    //them 1 prop prev
    const handlePageChangePrev=(newPage)=>{
        console.log("prev",newPage);
        setProducts((newPage<0 ? productList.slice(0,16) : productList.slice(newPage,products.length)));
    }

    //Catelogy
    const handleCatelogyClick=(id)=>{
        
        setProducts(productList.filter((e)=>e.catelogyId===id))
    
        if(productList.filter((e)=>e.catelogyId===id).length===0){
            setTimeout(function(){
                alert("HIỆN KHÔNG CÓ SẢN PHẨM NÀO!!!!")
            }, 300);
        }
    }

    //chi tiet
    let navigate = useNavigate();
        const handleOnClick=(id)=>{
            //navigate to detailPage
            navigate(`/sell/details/${id}`);
        }
    return (
        <React.Fragment>
            <Catelogy onChange={handleCatelogyClick}>
                
            </Catelogy>
            <div className="col col-10">
            {/* <Filter onSubmit={handleFilterChange}></Filter> */}
            <div className="search__filter row height d-flex justify-content-center align-items-center">
             <div className="search__cart col-md-8">
            <div className="search">
                <input onChange={(e)=>{setSearch(e.target.value)}} type="text" className="form-control" placeholder="Search"/>
            </div>
                
            </div>
            </div>
            <h1>DANH SÁCH SẢN PHẨM</h1>
            <div className="product__list row gx-5">
                {
                    products.filter(value=>{
                        if(search===''){
                           return value;
                        } else if(
                            value.name.toLowerCase().includes(search.toLowerCase())
                            
                        ){
                            return value;
                        }
                    }).map((product) => {
                        return <div key={product.id} onClick={()=>handleOnClick(product.id)} className="product__item col-xs-12 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div className="product__link">
                            <img src={product.img} alt={product.name} className="product__img"/>
                            <div class="product__promotion-block">
                                <span class="product__percent">{product.promotion}%</span>
                                <span class="product__promotion">GIẢM</span>
                            </div>
                            <div className="product__dec">
                                <span className="product__name">{product.name}</span>
                                <span className="product__price">{fortmatPrice(product.price)}</span>
                            </div>
                        </div>
                    </div>
                    })
                } 
            </div>
            <div>
            <Pagination  onPageChangeNext={handlePageChangeNext} onPageChangePrev={handlePageChangePrev}>

            </Pagination>
            </div>
            
        </div>
        </React.Fragment>
    );
}

export default ProductList;