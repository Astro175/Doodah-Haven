import React, {useState, useEffect} from 'react';
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
    });

    const [tags, setTags] = useState([])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleImageChange = (e) => {
        const selectedImages = Array.from(e.target.files);
        const imageNames = selectedImages.map((image) => image.name);
        setProduct({ ...product, images: [...product.images, ...imageNames] });
    };

    const handleTagINputKeyDown = (event) => {
        console.log();
        if (product.tags === undefined) {
            product.tags = [];
          }
        event.preventDefault();
        if (event.key === "Enter" && event.target.value.trim() !== "") {
            setTags([...tags, event.target.value]);
            // props.selectedTags([...tags, event.target.value]);
            event.target.value = "";
        }
        console.log('Updated tags:', product.tags)
        console.error(product.tags)

      };

    const handleTagDelete = (index) => {
        const updatedTags = [...tags];
        updatedTags.splice(index, 1);
        setTags(updatedTags);
    
};

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (product === undefined) {
        return;
        }
    
        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('description', product.description);
        product.images.forEach((image, index) => {
        formData.append(`image-${index}`, image)
        });
        formData.append('price', product.price);
        formData.append('brand', product.brand);
        formData.append('specification', product.specification);
        formData.append('quantity', product.quantity);
    
        if (product.tags !== undefined) {
        product.tags.forEach((tag, index) => {
            formData.append(`tags-${index}`, tag)
        });
        }
    
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
            
        <form >
            <h1>Admin Dashboard</h1>
            <p>Welcome back </p>
            <label htmlFor='name'>Product name:</label><br />
            <input type='text' name='name' value={product.name} onChange={handleInputChange} /><br />

            <label htmlFor='description'>Product Description</label><br />
            <textarea name='description' value={product.description} onChange={handleInputChange} /><br />

            <label htmlFor='brand'>Brand Name:</label><br />
            <input type='text' name='brand' value={product.brand} onChange={handleInputChange} /><br />

            <label htmlFor='price'>Price:</label><br />
            <input type='number' name='price' value={product.price} onChange={handleInputChange} /><br />

            <label htmlFor='specification'>Specification:</label><br />
            <textarea name='specification' value={product.specification} onChange={handleInputChange} /><br />

            <label htmlFor='quantity'>Items Available</label><br />
            <input type='number' name='quantity' value={product.quantity} onChange={handleInputChange} /><br />

            <label htmlFor='images'>Product Images:</label><br />
            <input type='file' name='images' accept='image/' onChange={handleImageChange} multiple className='addImages'/><br />
            {product.images.length > 0 && (
            <ul className='imagenames'>
                {product.images.map((imageName, index) => (
                <li key={index}>{imageName}</li>
                ))}
            </ul>
            )}

            <label htmlFor='tags'>Product Tags:</label><br />
            <div className='tags-input'>
                <ul id='tags'>
                    {tags.map((tag, index) => (
                        <li key={index} className="tag">
                            <span>{tag}</span>
                        <button className="delete-button" onClick={() => handleTagDelete(index)}>
                            X
                        </button>
                        </li>
                    ))}
                </ul>
           
                    <input
                    type="text"
                    name="tags"
                    value={product.tag}
                    // onChange={(event) => setProduct({ ...product, tag: event.target.value })}
                    onKeyDown={(event) => handleTagINputKeyDown(event)}
                    placeholder="Add tags"
                    />
                {/* <button type='button' onClick={handleTagChange} className='addTag'>Add</button><br /> */}
            </div>


            <button type='submit' className='submit' onClick={handleSubmit}>Add Product</button>
        </form>
        </div>  
    )
}

export default AdminDashboard;