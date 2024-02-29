import React, { createContext, useContext, useState} from 'react';
import axios from 'axios';
const productContext = createContext(undefined);
export const useProduct = ()=> {
    const context = useContext(productContext);
    if (!context) {
    }
    return context;
};

const ProductProvider = ({ children })=> {
    const API_PRODUCTS = 'http://localhost:3000/product';
    const API_BASKET = 'http://localhost:3000/basket';
    const [Basket, setBasket]=useState([])
    const [product, setProduct] = useState([]);
    const [oneProduct, setOneProduct] = useState(null); 
    const [data, setData]=useState(null)

    async function AddProduct(newProduct){
        await axios.post(API_PRODUCTS, newProduct);
    }

    async function readProduct() {
        const { data } = await axios(`${API_PRODUCTS}`);
        setProduct(data);
        
    }

    async function deleteProduct(id) {
        await axios.delete(`${API_PRODUCTS}/${id}`);
        readProduct();
    }

    async function getOneProduct(id){ 
        const { data } = await axios(`${API_PRODUCTS}/${id}`);
        setOneProduct(data);
    }

    async function  addBasket(){
        await axios.post(API_BASKET, oneProduct);
    
    }

    async function editProduct(id, editProduct) {
        await axios.patch(`${API_PRODUCTS}/${id}`, editProduct); 
        readProduct();
    }

async function ReadBasket(){
    let {data}=await axios(API_BASKET)
    setBasket(data)
}
console.log(Basket);
    const values = { 
        AddProduct,
        readProduct,
        deleteProduct,  
        product,
        getOneProduct,
        oneProduct,
        editProduct,
        setData,
        ReadBasket,
        addBasket,
        Basket
    };

    return <productContext.Provider value={values}>{children}</productContext.Provider>;
};

export default ProductProvider;