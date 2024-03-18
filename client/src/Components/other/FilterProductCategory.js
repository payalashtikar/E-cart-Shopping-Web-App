import React, { useEffect, useState } from 'react'

const FilterProductCategory = ({ products, setFilteredProducts }) => {
    const [selectedCategory, setSelectedCategory] = useState(''); // State for selected category

    useEffect(() => {
        // if a category is selected
        if (selectedCategory) {
            const filtered = products.filter((product) => product.category === selectedCategory);
            setFilteredProducts(filtered); // Updating filtered products
        } else {
            setFilteredProducts(products); // If there is no category selected, show all products
        }
    }, [selectedCategory, products]); // will Update when selected category or products change

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value)
    };
    return (
        <div>
            <select className='font-serif w-60 border rounded-lg p-2' onChange={handleCategoryChange} value={selectedCategory}>
                <option className='font-serif' defaultValue='select category'>Select Category</option>
                <option className='font-serif' value='laptops'>Laptops</option>
                <option className='font-serif' value='smartphones'>Smartphones</option>
                <option className='font-serif' value='fragrances'>Fragrances</option>
                <option className='font-serif' value='groceries' >Groceries</option>
                <option className='font-serif' value='skincare' >Skincare</option>
                <option className='font-serif' value='home-decoration' >Home-decoration</option>
                <option className='font-serif' value='Others' >Others</option>
            </select>
        </div>
    )
}

export default FilterProductCategory