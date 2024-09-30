import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { Review } from '../utils/modals';

const ReviewCard: FC<Review> = (props) => {

    const {
        rating = 0,
        comment = '',
        date = '',
        reviewerName = 'Anonymous',
        reviewerEmail = '',
    } = props

    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.name}>{reviewerName}</Text>
                <Text style={styles.email}>{reviewerEmail}</Text>
            </View>
            <Text style={styles.date}>{date}</Text>
            <AirbnbRating
                count={5}
                ratingContainerStyle={{ alignItems: "flex-start" }}
                showRating={false}
                defaultRating={rating}
                size={20}
                isDisabled
            />
            <Text style={styles.comment}>{comment}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    email: {
        fontStyle: 'italic',
        color: '#888',
    },
    date: {
        fontSize: 12,
        color: '#999',
        marginBottom: 8,
    },
    comment: {
        marginTop: 12,
        fontSize: 14,
        color: '#333',
    },
});

export default ReviewCard;
