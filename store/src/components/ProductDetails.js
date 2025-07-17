import React from 'react'

export default function ProductDetails({ product, onBack }) {
    if (!product) {
        return <div>Product not found</div>
    }

    return (
        <div className="container mt-4">
            <button className="btn btn-secondary mb-4" onClick={onBack}>
                ← Back to Products
            </button>
            
            <div className="row">
                <div className="col-md-6">
                    <div className="product-image-container">
                        <img 
                            src={product.image} 
                            alt={product.title}
                            className="img-fluid"
                            style={{
                                height: "500px",
                                objectFit: "contain",
                                width: "100%",
                                border: "1px solid #eee",
                                borderRadius: "8px",
                                padding: "20px"
                            }}
                        />
                    </div>
                </div>
                
                <div className="col-md-6">
                    <div className="product-details">
                        <span className="badge bg-dark mb-3">{product.category}</span>
                        <h1 className="h3 mb-3">{product.title}</h1>
                        
                        <div className="mb-3">
                            <span className="h4 text-success">${product.price}</span>
                        </div>
                        
                        <div className="mb-4">
                            <div className="d-flex align-items-center">
                                <span className="me-2">⭐ {product.rating.rate}</span>
                                <small className="text-muted">({product.rating.count} reviews)</small>
                            </div>
                        </div>
                        
                        <div className="mb-4">
                            <h5>Description</h5>
                            <p className="text-muted">{product.description}</p>
                        </div>
                        
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary btn-lg">
                                Add to Cart - ${product.price}
                            </button>
                            <button className="btn btn-outline-secondary">
                                Add to Wishlist
                            </button>
                        </div>
                        
                        <div className="mt-4">
                            <small className="text-muted">
                                <strong>Product ID:</strong> {product.id}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
