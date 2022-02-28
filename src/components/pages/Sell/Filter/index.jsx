import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss'
Filter.propTypes = {
    onSubmit:PropTypes.func,
};
Filter.defaultProps = {
    onSubmit:null,
}
function Filter(props) {
    const {onSubmit}=props;
    const [search, setSearch] = useState('')
    const typingTimeRef = useRef(null)
    const handleOnChange=(e)=>{
        setSearch(e.target.value)
        if(!onSubmit) return;
        if(typingTimeRef.current){
            clearTimeout(typingTimeRef.current)
        }
        typingTimeRef.current=setTimeout(() => {
            const searchValue={
                search:e.target.value
            };
            onSubmit(searchValue)
        }, 300);
    }
    return (
    <div className="search__filter row height d-flex justify-content-center align-items-center">
        <div className="search__cart col-md-8">
            <div className="search">
                <input value={search} onChange={handleOnChange} type="text" className="form-control" placeholder="Search"/>
            </div>
        </div>
    </div>
    );
}

export default Filter;