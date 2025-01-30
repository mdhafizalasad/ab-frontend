import React from 'react';
import people1 from '../../assets/image/people1.jpeg'
import people2 from '../../assets/image/people2.jpg'
import people3 from '../../assets/image/people3.jpg'
import quote from '../../assets/image/quote.png'
import Review from './Review';
const Reviews = () => {
    const testimonial = [
        {
            _id: 1,
            name: 'Winson Herry',
            img: people1,
            review: 'It is a long established fact that by the readable connect of a lot layout. The point of using lorem a more-or-less normal distribute to using Content here, content',
            location: 'California'
        },
        {
            _id: 2,
            name: 'Winson Herry',
            img: people2,
            review: 'It is a long established fact that by the readable connect of a lot layout. The point of using lorem a more-or-less normal distribute to using Content here, content',
            location: 'California'
        },
        {
            _id: 3,
            name: 'Winson Herry',
            img: people3,
            review: 'It is a long established fact that by the readable connect of a lot layout. The point of using lorem a more-or-less normal distribute to using Content here, content',
            location: 'California'
        },
        {
            _id: 4,
            name: 'Winson Herry',
            img: people3,
            review: 'It is a long established fact that by the readable connect of a lot layout. The point of using lorem a more-or-less normal distribute to using Content here, content',
            location: 'California'
        },
    ]
    return (
       <div className="my-12 px-5 mx-auto">
         <div className="flex justify-between">
            <div>
            <h2 className="text-4xl text-primary font-semibold">Testimonial</h2>
            <h4 className="text-2xl">People Says about us</h4>
            </div>

            <div>
                <img className="w-20 h-20" src={quote} alt="" />
                <blockquote>:</blockquote>
            </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
        {
            testimonial.slice(0, 3).map((singleReview)=> (<Review key={singleReview._id} singleReview={singleReview}></Review>

            ))}
        </div>
       </div>
        
    );
};

export default Reviews;