import React from 'react'
import product_data from "./product_data"
import Product from "./product"

const DisplayProducts = (props) => {

    console.log(props.selectedProductCategory);
    let display_products;
    switch(props.selectedProductCategory) {
        case "Cars":
            // for(let i = 0; i < product_data.Cars.length; i++) {
            //     console.log(product_data.Cars[i].productName);
            // }

            display_products = product_data.Cars.map((product) => {
                return <Product productName={product.productName} imageSrc={product.imageSrc} price={product.price} key={product.productName} />
            });
            break;

        case "Books":
            display_products = product_data.Books.map((product) => {
                return <Product productName={product.productName} imageSrc={product.imageSrc} price={product.price} key={product.productName} />
            });
            break;

        case "Shooes":
            display_products = product_data.Shooes.map((product) => {
                return <Product productName={product.productName} imageSrc={product.imageSrc} price={product.price} key={product.productName} />
            });
            break;

        case "Toys":
            display_products = product_data.Toys.map((product) => {
                return <Product productName={product.productName} imageSrc={product.imageSrc} price={product.price} key={product.productName} />
            });
            break;

        case "Mobiles":
            display_products = product_data.Mobiles.map((product) => {
                return <Product productName={product.productName} imageSrc={product.imageSrc} price={product.price} key={product.productName} />
            });
            break;

        case "Clothes":
            display_products = product_data.Clothes.map((product) => {
                return <Product productName={product.productName} imageSrc={product.imageSrc} price={product.price} key={product.productName} />
            });
             break;

        default:
            display_products = product_data.Books.map((product) => {
                return <Product productName={product.productName} imageSrc={product.imageSrc} price={product.price} key={product.productName} />
            });
            break;
    }

    return(
        <div className="bg-secondary">
            <div className="row bg-info mx-4 py-2 row">
                {display_products}
            </div>
        </div>
    );
}

export default DisplayProducts;