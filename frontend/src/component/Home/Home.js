import React, { Fragment, useEffect } from 'react'
import Slideshow from './slideshow/slideshow'
import './Home.css'
import ProductCard from './ProductCard'
import MetaData from '../layout/MetaData'
import { clearErrors, getProduct } from '../../actions/productActions'
import {useSelector, useDispatch} from 'react-redux'
import Loader from '../layout/Loader/Loader'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {

  const toastOptions = {
    position: "bottom-center",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const dispatch = useDispatch();
  const {loading, error, products, productsCount } = useSelector((state) => state.products);
  
  useEffect(() => {

    if(error) {
      toast.error(error, toastOptions);
      <ToastContainer />
      return;
    }
    dispatch(getProduct());
  }, [dispatch, error])
  
  return (
    <Fragment>
      <h2 className="FeaturedHeading">Featured Products</h2>
      <Slideshow />
        <MetaData title = {"Art Vista"}/>
        {loading ? (<Loader/ >) : (
          <div style={{marginTop: "100px"}}>
          <h2 className="homeHeading">All Products</h2>
          <div className="container">
            {products &&  
              products.map((product) => ( 
                <ProductCard key={product._id} product={product} />
                ))}
              </div>
        </div>
        )}
        <ToastContainer />
    </Fragment>
    
  )
}

export default Home