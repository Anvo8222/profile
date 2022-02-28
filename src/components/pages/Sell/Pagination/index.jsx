import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
Pagination.propTypes = {
   
    onPageChangeNext: PropTypes.func,
    onPageChangePrev:PropTypes.func,
};
Pagination.preventDefault = {
    onPageChangeNext: null,
    onPageChangePrev: null,
}

function Pagination(props) {
    var limit=10;
    const {  onPageChangeNext ,onPageChangePrev} = props;
    //tong so item / so item tren trang lay phan tren 5.1=6
    const handleNextPageChange = newPage => {
        if (onPageChangeNext) {
            onPageChangeNext(newPage);
        }
    }
    const handlePrevPageChange = newPage => {
        if (onPageChangePrev) {
            onPageChangePrev(newPage);
        }
    }
    return (
        // <div>
        //     <button disabled={_page <= 1} onClick={() => handlePageChange(_page - 1)}>
        //         PREV
        //     </button>
        //     <button disabled={_page === totalPages} onClick={() => handlePageChange(_page + 1)}>
        //         NEXT
        //     </button>
        // </div>
        <div className="button__page">
        <div className="button__group">
            <button className="btn"  onClick={() => handlePrevPageChange(limit-=16)}>
                PREV
            </button>
            <button className="btn"  onClick={() => handleNextPageChange(limit+=16)}>
                NEXT
            </button>
        </div>
    </div>
    );
}

export default Pagination;