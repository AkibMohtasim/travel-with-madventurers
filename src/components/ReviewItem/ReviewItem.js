import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, _id } = props.product;
    const { handleRemove } = props;
    return (
        <div>
            <div>
                <h4>{name}</h4>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={() => handleRemove(_id)} >Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;