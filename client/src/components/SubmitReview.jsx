import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from '../globals'

function ReviewForm(props) {
    const handleSubmit = (e) => {
        props.addReview(e);
    };

    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState([])

    // useEffect(() => {
    //     getReviews();
    // }, []);
    // const getReviews = async () => {
    //     const res = await axios.get(`http://localhost:3001/api/reviews`);
    //     setReviews(res.data.reviews);
    //     console.log(res.data.reviews);
    //     console.log(res.data.reviews[1]);
    // }

    const newReviewFunction = () => {
        let currentReviews = reviews;
        let postReview = newReview
        currentReviews.push(postReview)
        setReviews(currentReviews)
        axios.post(`${BASE_URL}/reviews`, postReview)
    }
    return (
        <div>
            <h1>Add A Review</h1>
            <form onSubmit={handleSubmit}>
                <input
                    name='name'

                />
                <input
                    name='comments'
                />
                <input
                    name='ratings'
                />
                <button>Submit</button>
            </form>
        </div>

    );
}

export default ReviewForm;