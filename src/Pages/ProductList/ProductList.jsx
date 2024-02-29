import React, { useEffect } from 'react';
import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/DeleteIcon';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import BorderColorIcon from '@mui/icons-material/BorderColorIcon';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import './product.css';
import { useNavigate } from 'react-router-dom';
import { useProduct } from '../../ContexProduct/ContextProduct';

const ProductList = () => {
    const { readProduct, product, deleteProduct ,getOneProduct, addBasket} = useProduct();
    useEffect(() => {
        readProduct();
    }, []);    


    function handleChange(){
        addBasket()
    }

const navigate=useNavigate()

    return (
        <div className='container'>
            
            <div className="productList">
                {product.map((el) => (
                    <div className="listProductBlock" key={el.id}>
                        <Card style={{ height: "400px" }}>
                            <CardActionArea>
                                <CardMedia 
                                onClick={()=>navigate(`/Details/${el.id}`)}
                                    component="img"
                                    height="300"
                                    image={el.image}
                                    alt="product"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {el.name}
                                    </Typography>

                                    <Typography className='a1'  variant="body2" color="text.secondary">
                                        {el.price}

                                        <Button sx={{
                                            color: "red",
                                            fontSize: "30px"
                                        }} onClick={()=>{
                                            navigate("/basket")
                                       getOneProduct(el.id);
                                       handleChange()

                                        }}>
                                            <ShoppingCartIcon/>
                                        </Button>
                                        <Button onClick={() => deleteProduct(el.id)}>
                                        <MdDelete />
                                        </Button>
                                            <Button sx={{
                                                color: "#000",
                                                fontSize: "22px"
                                            }} onClick={()=>navigate(`/edit/${el.id}`)}>
                                                    <FaEdit />
                                            </Button>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;