import React, {useEffect, useState} from 'react';
import { useToken } from '../context/tokenContext';
import { useParams } from 'react-router-dom';
import './layout.scss'

const EditProduct = () => {
    const [editedProduct, setEditedProduct] = useState();
    const { token } = useToken();
    // const [imagePreviews, setImagePreviews] = useState();
    const { productId } = useParams();
    

    async function fetchProductDetails() {
        try {
          const response = await fetch(`http://localhost:4000/api/products/${productId}`);
          if (!response.ok) {
            console.error('API response does not indicate success');
            return;
          }
      
          const data = await response.json();
          console.log('Data:', data);
      
          // Set the state of the form inputs to the product details
          setEditedProduct(data.product);
        } catch (error) {
          console.error('Error fetching product', error);
        }
      }
      
      useEffect(() => {
        fetchProductDetails();
      }, [productId]);
    //   console.log('Edited product', editedProduct);
    // //   console.log('image previews', imagePreviews)
    //   if (!editedProduct) {
    //     return <div>Loading...</div>;
    //   }
       
    //   const arrayBufferToBase64 = (buffer) => {
    //     const binary = [];
    //     const bytes = new Uint8Array(buffer);
    //     bytes.forEach((byte) => binary.push(String.fromCharCode(byte)));
    //     return window.btoa(binary.join(''));
    //   }

      const handleInputChange = (e) => {
        if (e.target) {
            const { name, value } = e.target;
            setEditedProduct({
                ...editedProduct,
                [name]: value,
            });
        }
    };

    if (editedProduct) {
        console.log('Edited product', editedProduct);
      } else {
        console.log('Edited product is undefined');
      }
      

    // const handlePhotoChange = (e) => {
    //     const { name, files } = e.target;
    //     const reader = new FileReader();

    //     reader.onload = (event) => {
    //         setEditedProduct({
    //             ...editedProduct,
    //             [name]: event.target.result,
    //         });
    //     };

    //     if (files[0]) {
    //         reader.readAsDataURL(files[0]);
    //     }
    // };

      const handleEditSubmit = async (e) => {
        e.preventDefault();

        if (!editedProduct) {
            return;
        }
        try {
            const headers = {
                'Authorization': token,
            };
            console.log('headers', headers)
            const response = await fetch(`http://localhost:4000/api/products/update/${productId}`,{
                method: 'PUT',
                headers: headers
                
                // body: JSON.stringify(editedProduct),
            })
            
            if (response.ok) {
                console.log('Product updated successfully');
                window.alert('Product Updated Successfully')
            } else {
                console.error('Error updating product:', response.statusText)
            }
        } catch (error) {
            console.error('Error updating products', error);
        }
      }
    return (
        <div className='editedForm'>
            <form onSubmit={handleEditSubmit}>
            <label htmlFor='name'>Product name:</label><br />
            <input type='text' name='name' value={editedProduct?.name} onChange={handleInputChange} required/><br />

            <label htmlFor='description'>Product Description</label><br />
            <textarea name='description' value={editedProduct?.description} onChange={handleInputChange} required/><br />

            <label htmlFor='price'>Price:</label><br />
            <input type='number' name='price' value={editedProduct?.price} onChange={handleInputChange} required/><br />


            <label htmlFor='brand'>Brand Name:</label><br />
            <input type='text' name='brand' value={editedProduct?.brand} onChange={handleInputChange} /><br />

            <label htmlFor='stock_quantity'>Number of Items in stock:</label><br />
            <input type='number' name='stock_quantity' value={editedProduct?.stock_quantity} onChange={handleInputChange} required/><br />
{/* 
            <label htmlFor="photo1">Product Photo 1:</label>
            <br />
            <input type="file" name="photo1" accept="image/*" onChange={handlePhotoChange} required/>
            {editedProduct.photo1 && (
                <img src={`data:image/jpeg;base64,${arrayBufferToBase64(editedProduct.photo1.data.data)}`} alt='Photo 1 preview' style={{ maxWidth: '200px' }} />
            )}
            <br />

            <label htmlFor="photo2">Product Photo 2:</label>
            <br />
            <input type="file" name="photo2" accept="image/*" onChange={handlePhotoChange} />
            {editedProduct.photo2 && (
                <img src={`data:image/jpeg;base64,${arrayBufferToBase64(editedProduct.photo2.data.data)}`} alt='Photo 2 preview' style={{ maxWidth: '200px' }} />
            )}
            <br />

            <label htmlFor="photo3">Product Photo 3:</label>
            <br />
            <input type="file" name="photo3" accept="image/*" onChange={handlePhotoChange} />
            {editedProduct.photo3 && (
                <img src={`data:image/jpeg;base64,${arrayBufferToBase64(editedProduct.photo3.data.data)}`} alt='Photo 3 preview' style={{ maxWidth: '200px' }} />
            )} */}
            <br />
            
            <label htmlFor="label">Label:</label>
            {/* <br /> */}
            {/* <input type="text" name="label" value={product.label} onChange={handleInputChange} /> */}
            <select
                className="label-select"
                name="label"
                value={editedProduct?.label}
                onChange={handleInputChange}
                required
                >
                <option >popular</option>
                <option >hot</option>
                <option >regular</option>
                </select>
            <br />
            {/* Other input fields for brand, stock quantity, price, etc. */}
            <button type="submit">Save Changes</button>
            </form>

        </div>
    )
}
export default EditProduct;