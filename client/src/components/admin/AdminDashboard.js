import React, {useState} from 'react';
import './admin.scss'

const AdminDashboard  = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        brand: '',
        price: '',
        specification: '',
        images: [],
        quantity: '',
        tag: '',
        tags: []
    });

   

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleImageChange = (e) => {
        const selectedImages = Array.from(e.target.files);
        setProduct({ ...product, image: [...product.images, ...selectedImages] });
    };

    const handleTagChange = () => {
        if (product.tag.trim() !== '') {
          setProduct({ ...product, tags: [...product.tags, product.tag], tag: '' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('description', product.description);
        product.images.forEach((image, index) => {
          formData.append(`image-${index}`, image)
       })
        formData.append('price', product.price);
        formData.append('brand', product.brand);
        formData.append('specification', product.specification);
        formData.append('quantity', product.quantity);
        product.tags.forEach((tag, index) => {
            formData.append(`tags-${index}`, tag)
        });

        const jwt = 'JWT-TOKEN';

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
            <label htmlFor='name'>Product name:</label><br />
            <input type='text' name='name' value={product.name} onChange={handleInputChange} /><br />

            <label htmlFor='description'>Product Description</label><br />
            <textarea name='description' value={product.description} onChange={handleInputChange} /><br />

            <label htmlFor='brand'>Brand Name:</label><br />
            <input type='text' name='brand' value={product.brand} onChange={handleInputChange} /><br />

            <label htmlFor='price'>Price:</label><br />
            <textarea name='price' value={product.price} onChange={handleInputChange} /><br />

            <label htmlFor='specification'>Specification:</label><br />
            <textarea name='specification' value={product.specification} onChange={handleInputChange} /><br />

            <label htmlFor='quantity'>Items Available</label><br />
            <input type='number' name='quantity' value={product.quantity} onChange={handleInputChange} /><br />

            <label htmlFor='images'>Product Images:</label><br />
            <input type='file' name='images' accept='image/' onChange={handleImageChange} multiple className='addImages'/><br />

            <label htmlFor='tags'>Product Tags:</label><br />
            <input type='text' name='tags' value={product.tag} onChange={handleInputChange} placeholder="Add tags" />
            <button type='button' onClick={handleTagChange} className='addTag'>Add</button><br />

            <div className="tags">
          {product.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>


            <button type='submit' className='submit'>Add Product</button>
        </form>
        </div>  
    )
}

export default AdminDashboard;