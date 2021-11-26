import axios from "axios";
import React from 'react';
import { useForm } from "react-hook-form";

import Sidebar from '../../Sidebar/Sidebar';

const Review = () => {
    const [imageURL, setImageURL] = React.useState(null);
    const [info, setInfo] = React.useState({});
    const handleBlur = e => {
        const newInfo = { ...info };
        console.log(e.target.name, e.target.value);
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const handleSubmit = (e) => {
        console.log(info);
        const data = {
            ...info,
            imageURL: imageURL
        }
        fetch('https://gentle-dawn-79844.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    console.log("database data ", data);
                    e.target.reset()
                }
            })
        e.preventDefault()

    };
    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set("key", 'fe20ca1c0f8185d2577f558e1ae96b6e');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <section className="container-fluid row">
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0 }}>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input class="form-control" onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Your name" required />
                    </div>
                    <div className="form-group">
                        <input class="form-control" onBlur={handleBlur} type="text" className="form-control" name="Cname" placeholder="Company's name Designation.." required />
                    </div>
                    <div className="form-group">
                        <input class="form-control" onBlur={handleBlur} type="text" className="form-control" name="rating" placeholder="Rating" required />
                    </div>
                  
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Your Opinion</label>
                        <textarea class="form-control" onBlur={handleBlur} name="description" id="exampleFormControlTextarea1" rows="3" placeholder="Description"></textarea>
                    </div>
                    <div class="col-md-6">
                        
                        <input type="file" class="form-control-file" onChange={handleImageUpload} id="Photo" required />
                    </div>

                    <input type="submit" class="btn btn-success m-3" />
                </form>
            </div>
        </section>
    );
};

export default Review;