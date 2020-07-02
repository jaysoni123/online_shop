import React from 'react'

const Product = (props) => {
    return(
        <div className="col-auto my-2">
            <div className="card">
                <img src={process.env.PUBLIC_URL+props.imageSrc} alt={props.productName} style={{width: "280px", height: "200px"}} />
                <div className="card-body text-center">
                    <h5 className="card-title">{props.productName}</h5>
                    <p className="font-weight-bold h5">Rs. {props.price}</p>
                    <button className="btn btn-info">view Details</button>
                </div>
            </div>
        </div>
    );
}

export default Product;