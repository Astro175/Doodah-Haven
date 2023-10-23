import React, { useState } from 'react';
import './admin.scss'

const CreateProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: 0,
        brand: '',
        stock_quantity: 0,
        photo1: null,
        photo2: null,
        photo3: null,
        reviews: [], // You may need to update this if you want to add reviews
        label: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handlePhotoChange = (e) => {
        const { name, files } = e.target;
        setProduct({ ...product, [name]: files[0] });
      };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('description', product.description);
        formData.append('price', product.price);
        formData.append('brand', product.brand);
        formData.append('stock_quantity', product.stock_quantity);
        formData.append('label', product.label);
        formData.append('photo1', product.photo1);
        formData.append('photo2', product.photo2);
        formData.append('photo3', product.photo3);
    
        const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiO…jk2fQ.C8CiJa1f23IvvKAb1ID7Zz5swZmoEBDdHNbWbxQ-Dew';
    
        const headers = {
            'Authorization': `Bearer ${jwt}`,
        };
    
        const response = await fetch('http://localhost:4000/api/products/add', {
        method: 'POST',
        headers,
        body: formData
        });
    
        if (response.ok) {
        const data = await response.json();
        console.log('Product added successfully', data);
        } else {
        console.error('Error adding product:', response.statusText)
        }
    };

    return (
        <div className='dashboard'>
            
        <form onSubmit={handleSubmit}>
            <h1>Add Products</h1>
            <label htmlFor='name'>Product name:</label><br />
            <input type='text' name='name' value={product.name} onChange={handleInputChange} /><br />

            <label htmlFor='description'>Product Description</label><br />
            <textarea name='description' value={product.description} onChange={handleInputChange} /><br />

            <label htmlFor='price'>Price:</label><br />
            <input type='number' name='price' value={product.price} onChange={handleInputChange} /><br />


            <label htmlFor='brand'>Brand Name:</label><br />
            <input type='text' name='brand' value={product.brand} onChange={handleInputChange} /><br />

            <label htmlFor='stock_quantity'>Number of Items in stock:</label><br />
            <input type='number' name='stock_quantity' value={product.stock_quantity} onChange={handleInputChange} /><br />

            <label htmlFor="photo1">Product Photo 1:</label>
            <br />
            <input type="file" name="photo1" accept="image/*" onChange={handlePhotoChange} />
            <br />

            <label htmlFor="photo2">Product Photo 2:</label>
            <br />
            <input type="file" name="photo2" accept="image/*" onChange={handlePhotoChange} />
            <br />

            <label htmlFor="photo3">Product Photo 3:</label>
            <br />
            <input type="file" name="photo3" accept="image/*" onChange={handlePhotoChange} />
            <br />
            
            <label htmlFor="label">Product Label:</label>
            <br />
            <input
            type="text"
            name="label"
            value={product.label}
            onChange={handleInputChange}
            />
            <br />


            <button type='submit' className='submit'>Add Product</button>
        </form>
        </div>  
    )
}

export default CreateProduct;