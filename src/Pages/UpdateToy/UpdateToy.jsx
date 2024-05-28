import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const UpdateToy = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    const currentData = useLoaderData();
    const navigate = useNavigate();
    const { description, photo_url, price, quantity, rating, toy_name, _id, subcategory } = currentData;
    useTitle('Update Toy')


    const onSubmit = data => {
        fetch(`https://toy-server-green.vercel.app/allToys/${_id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if (result?.modifiedCount > 0) {
                    Swal.fire({
                        title: "Toy Successfully updated",

                        icon: "success"
                    }).then(() => {
                        navigate('/myToys');

                    });

                }
            });
    };

    return (
        <div className='bg-base-200'>
            <div className=" place-content-center">
                <div className="flex-col">
                    <div className="hero min-h-72" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1511415518647-9e5da4fd803f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Update Toy</h1>
                            </div>
                        </div>
                    </div>
                    <div className="card shrink-0 w-full shadow-2xl bg-base-100 px-4 md:px-20 lg:px-36">
                        <form className="card-body " onSubmit={handleSubmit(onSubmit)} >
                            <div className='grid grid-cols-1 md:grid-cols-2  gap-4'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold"> Photo Url</span>
                                    </label>
                                    <input type="url" placeholder="Photo Url" className="input input-bordered" {...register("photo_url", { value: photo_url })} required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold"> Toy Name</span>
                                    </label>
                                    <input type="text" placeholder="Toy Name" className="input input-bordered" {...register("toy_name", { value: toy_name })} required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold"> Sub-Category</span>
                                    </label>
                                    <select {...register("subcategory", { value: subcategory })} className="input input-bordered">
                                        <option value="Truck">Truck</option>
                                        <option value="Sports Car">Sports Car</option>
                                        <option value="Regular Car">Regular Car</option>
                                        <option value="Mini Fire Truck">Mini Fire Truck</option>
                                        <option value="Mini Police Car">Mini Police Car</option>
                                    </select>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold"> Seller Name</span>
                                    </label>

                                    <input type="text" placeholder="Seller Name" className="input input-bordered" {...register("seller_name", { value: user.displayName, readOnly: true })} readOnly />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold"> Seller Email</span>
                                    </label>

                                    <input type="email" placeholder="Seller Email" className="input input-bordered" {...register("seller_email", { value: user.email, readOnly: true })} readOnly />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold"> Price</span>
                                    </label>
                                    <input type="number" step="0.01" placeholder="Price" className="input input-bordered" {...register("price", { value: price })} required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold"> Rating</span>
                                    </label>
                                    <input type="number" step="0.01" min="0.00" max="5.00" placeholder="Rating" className="input input-bordered" {...register("rating", { value: rating })} required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Available Quantity</span>
                                    </label>
                                    <input type="number" placeholder="Available Quantity" className="input input-bordered" {...register("quantity", { value: quantity })} required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Detail Description</span>
                                </label>
                                <textarea type="text" placeholder="Detail Description" className="input input-bordered p-2 " {...register("description", { value: description })} required />
                            </div>
                            <div className="form-control mt-6 ">
                                <input type="submit" className="btn btn-primary  btn-block" value="Update Toy" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default UpdateToy;