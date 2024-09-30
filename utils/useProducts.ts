import { useState, useEffect, useCallback } from 'react';
import Axios from 'axios'
import { Product } from './modals'

const URL = `https://dummyjson.com/products/2`

const useProduct = () => {

    const [productsData, setProductData] = useState<Product | null>(null);
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getProduct()
    }, []);

    const getProduct = useCallback(async () => {
        try {
            const response = await Axios.get(URL)
            if (response.status === 200) {
                console.log("getProduct-response", response.data)
                setProductData(response.data)
            }
        } catch (error) {
            setError("Something went wrong, Try again.")
        } finally {
            setIsLoading(false)
        }
    }, []);

    return {
        productsData,
        isLoading,
        error
    };
};

export default useProduct;
