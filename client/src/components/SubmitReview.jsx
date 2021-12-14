import React, { useEffect, useState } from "react";
import axios from "axios"
import '../SubmitReview.css'

function SubmitReview(props) {
    const [newReview, setNewReview] = useState({
        name:``,
        comments:``,
        ratings:``,
        ride_id: props.match.params.rideId
    })
    const submit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3001/api/reviews`, {
            name: newReview.name,
            comments: newReview.comments,
            ratings: newReview.ratings,
            ride_id: newReview.ride_id
        })
        let anotherReview = {
            name:``,
            comments:``,
            ratings:``
        }
        setNewReview(anotherReview)
        window.location.reload()
    }
    const handle = (e) => {
        const newestReview = { ...newReview }
        newestReview[e.target.id] = e.target.value
        setNewReview(newestReview)
        console.log(newestReview)
    }
    
    return (
        <div className="sub-rev">
            <h1 className="form-title">Bagg on this ride!</h1>
            <form onSubmit={(e) => submit(e)}>
                <section className="inputs">
                <section className="input-cont">
                Name: <input type='text'
                    name='name'
                    value={newReview.name}
                    onChange={(e) => handle(e)}
                    type='text'
                    id='name'
                    />
                </section>
                <section className="input-cont">
                Comment: <input type='text'
                    name='comments'
                    value={newReview.comments}
                    onChange={(e) => handle(e)}
                    type='text'
                    id='comments'
                />
                </section>
                <section className="input-cont">
                Rating from 1-5: <input type='text'
                    name='ratings'
                    value={newReview.ratings}
                    onChange={(e) => handle(e)}
                    type='number'
                    id='ratings'
                />
                </section>
                </section>
                <button className = 'button'>Submit</button>
            </form>
        </div>
    );
}
export default SubmitReview;