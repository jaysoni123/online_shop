import React, {useState} from 'react'
import DisplayProducts from "./display_products"

const productCategories = ["Cars", "Books", "Shooes", "Toys", "Mobiles", "Clothes"];

const productCategoriesOption = productCategories.map((categoryValue) => {
    return <option value={categoryValue} key={categoryValue}>{categoryValue}</option>;
});

const Dashboard = () => {

    const [selectedCategory, updateSelectedCategory] = useState("Cars");

    console.log(productCategoriesOption);
    console.log(selectedCategory);

    return(
        <div style={{backgroundColor:"deepskyblue"}}>
            <div className="row font-weight-bold justify-content-end px-3 py-2">
                <div className="col-auto d-flex">
                    <label htmlFor="select_category">Select Category :</label>
                </div>
                <div className="col-auto d-flex">
                    <select className="browser-default custom-select" id="select_category" onChange={(e) => updateSelectedCategory(e.target.value)}>
                        {productCategoriesOption}
                    </select>
                </div>
            </div>
            <DisplayProducts selectedProductCategory={selectedCategory} />
        </div>
    );
}

export default Dashboard;