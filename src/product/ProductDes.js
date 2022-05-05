import React from 'react';

const ProDes = ({ description }) => {
    return (
        <div className='product_content web_only' dangerouslySetInnerHTML={{ __html: description }} />
    );
}

export default ProDes;