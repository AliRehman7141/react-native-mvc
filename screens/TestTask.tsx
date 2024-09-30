
import React from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

import ReviewItem from '../components/ReviewItem';
import ProductDetails from '../components/ProductInfo';

import useProduct from '../utils/useProducts';
import { Review } from '../utils/modals';

const TestTask = () => {
    const {
        productsData,
        isLoading,
        error
    } = useProduct()

    const reviews = productsData?.reviews ?? []

    const renderItem = ({ item }: { item: Review }) => (
        <ReviewItem {...item} />
    )

    const renderListEmptyComponent = () => {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                {isLoading ?
                    <ActivityIndicator size={"large"} />
                    :
                    <Text>{error ?? "No data found"}</Text>
                }
            </View>
        )
    }

    const renderListHeaderComponent = () => {
        if (isLoading) {
            return null
        } else {
            return <ProductDetails product={productsData} />
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={reviews}
                extraData={reviews}
                renderItem={renderItem}
                keyExtractor={((i, index) => `reviews_${index}`)}
                ListHeaderComponent={renderListHeaderComponent}
                ListEmptyComponent={renderListEmptyComponent}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1, padding: 20 }}
            />
        </View>
    );
};

export default TestTask;
