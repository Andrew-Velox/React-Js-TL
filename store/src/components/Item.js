import React, { useState, useEffect } from 'react'
import ProductDetails from './ProductDetails'

export default function Item() {
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showDetails, setShowDetails] = useState(false);

    useEffect(()=>{
        setLoading(true);
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data);
        }).catch((e)=> console.log(e)).finally(()=>setLoading(false));

    },[]);

    // Filter products based on selected category
    const filteredData = selectedCategory === 'all' 
        ? data 
        : data.filter(item => item.category === selectedCategory);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleViewDetails = (product) => {
        setSelectedProduct(product);
        setShowDetails(true);
    };

    const handleBackToProducts = () => {
        setShowDetails(false);
        setSelectedProduct(null);
    };

    // If showing product details, render ProductDetails component
    if (showDetails && selectedProduct) {
        return <ProductDetails product={selectedProduct} onBack={handleBackToProducts} />;
    }

  return (
    <>  


        <div className="container">
            <h2 className='text-center'>Items</h2>
            <hr />

            {loading && (<div>
                <h1  className='text-center'>Loading...</h1>
                </div>)}
            <div className='items d-flex'>
                <div className='categories-container p-5 border '>
                    <h1>Categories</h1>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="category"
                            id="category-all"
                            value="all"
                            checked={selectedCategory === 'all'}
                            onChange={() => handleCategoryChange('all')}
                        />
                        <label className="form-check-label" htmlFor="category-all">
                            All Products
                        </label>
                    </div>
                    {[...new Set(data.map(item => item.category))].map((category, idx) => (
                        <div className="form-check" key={category}>
                            <input
                                className="form-check-input"
                                type="radio"
                                name="category"
                                id={`category-${idx}`}
                                value={category}
                                checked={selectedCategory === category}
                                onChange={() => handleCategoryChange(category)}
                            />
                            <label className="form-check-label" htmlFor={`category-${idx}`}>
                                {category}
                            </label>
                        </div>
                    ))}
                </div>


                <div className="row g-4">
                {filteredData.map((item) =>(
                    <div key={item.id} className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card h-100 shadow-sm">
                            <img src={item.image} className="card-img-top" alt={item.title} style={{height: "250px", objectFit: "contain", padding: "15px"}}/>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title" style={{fontSize: "1rem", fontWeight: "600"}}>{item.title.substring(0, 50)}...</h5>
                                <p className="card-text text-muted small">{item.description.substring(0, 80)}...</p>
                                <div className="">
                                    <button className='btn btn-dark btn-sm'>{item.category}</button>    
                                </div>
                                <div className="mt-auto">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <span className="h5 text-success mb-0">${item.price}</span>
                                        <small className="text-muted">⭐ {item.rating.rate} ({item.rating.count})</small>
                                    </div>
                                    <button 
                                        className="btn btn-primary w-100"
                                        onClick={() => handleViewDetails(item)}
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>

        </div>
    </>
  )
}
