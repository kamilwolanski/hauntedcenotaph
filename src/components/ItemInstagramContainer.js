import React from 'react';

const ItemInstagramContainer = ({url, link}) => {
    return(
        <a href={link} target="_blank" className="item" rel="noreferrer">
            <img src={url} alt=""/>
        </a>
    )
}

export default ItemInstagramContainer