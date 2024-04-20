import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import { AuthContext } from '../AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const AddAToy = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { user } = useContext(AuthContext);
    useTitle('Add A Toy')
    const onSubmit = data => {
        fetch("http://localhost:3000/allToys", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if (result?.insertedId) {
                    Swal.fire({
                        title: "Toy Successfully Added",
                        text: "Add More Toys",
                        icon: "success"
                    })
                }
            });
    };

    return (
        <div className='bg-base-200'>
            <div className=" place-content-center ">
                <div className="flex-col">
                <div className="hero min-h-72" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1511415518647-9e5da4fd803f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Add A Toy</h1>
                    </div>
                </div>
            </div>
                    <div className="card shrink-0 w-full shadow-2xl bg-base-100  px-4 md:px-20 lg:px-36">
                        
                        <form className="card-body border-1 border-black" onSubmit={handleSubmit(onSubmit)} >
                            <div className='grid grid-cols-1 md:grid-cols-2  gap-4'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold"> Photo Url</span>
                                    </label>
                                    <input type="url" placeholder="Photo Url" className="input input-bordered" {...register("photo_url", {})} required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold"> Toy Name</span>
                                    </label>
                                    <input type="text" placeholder="Toy Name" className="input input-bordered" {...register("toy_name", {})} required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold"> Sub-Category</span>
                                    </label>
                                    <select {...register("subcategory")} className="input input-bordered">
                                        <option value="a">a</option>
                                        <option value="b">b</option>
                                        <option value="c">c</option>
                                    </select>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold"> Seller Name</span>
                                    </label>
                                    <input type="text" placeholder="Seller Name" className="input input-bordered"  {...register("seller_name", { value: user.displayName })} required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold"> Seller Email</span>
                                    </label>

                                    <input type="email" placeholder="Seller Email" className="input input-bordered" {...register("seller_email", { value: user.email })} required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold"> Price</span>
                                    </label>
                                    <input type="number" step="0.01" placeholder="Price" className="input input-bordered" {...register("price", {})} required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold"> Rating</span>
                                    </label>
                                    <input type="number" step="0.01" min="0.00" max="5.00" placeholder="Rating" className="input input-bordered" {...register("rating", {})} required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Available Quantity</span>
                                    </label>
                                    <input type="number" placeholder="Available Quantity" className="input input-bordered" {...register("quantity", {})} required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Detail Description</span>
                                </label>
                                <textarea type="text" placeholder="Detail Description" className="input input-bordered p-2" {...register("description", {})} required />
                            </div>
                            <div className="form-control mt-6 ">
                                <input type="submit" className="btn btn-primary  btn-block" value="Add A Toy" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AddAToy;