import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Product } from '../utils/modals';

type ProductBasic = Pick<Product, 'title' | 'description' | 'price' | 'stock' | 'thumbnail'>;


const ProductDetails: React.FC<{ product: ProductBasic | null }> = ({ product }) => {
    if (product) {
        return (
            <View style={styles.container}>
                <Image source={{ uri: product?.thumbnail }} style={styles.thumbnail} resizeMode="contain" />
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.price}>${product.price.toFixed(2)}</Text>
                <Text style={[styles.stock, { color: product.stock > 0 ? 'green' : 'red', }]}>
                    {product.stock > 0 ? `In Stock: ${product.stock}` : 'Out of Stock'}
                </Text>
            </View>
        );
    } else return null
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
    },
    thumbnail: {
        width: '100%',
        height: 250,
        marginBottom: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
    },
    price: {
        fontSize: 22,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    stock: {
        fontSize: 14,
    },
});

export default ProductDetails;