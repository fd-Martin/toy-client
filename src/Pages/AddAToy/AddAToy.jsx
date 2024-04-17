import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'

const AddAToy = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
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
                    }).then(() => {
                        reset()
                    });
                }
            });
        console.log(data);


    };
    console.log(errors);

    return (
        <div className='bg-base-200'>
            <div className=" place-content-center  px-6 md:px-20 lg:px-36">
                <div className="flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold py-8">Add A Toy</h1>
                    </div>
                    <div className="card shrink-0 w-full shadow-2xl bg-base-100 ">
                        <form className="card-body " onSubmit={handleSubmit(onSubmit)} >
                            <div className='grid grid-cols-1 md:grid-cols-2  gap-4'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold"> Photo Url</span>
                                    </label>
                                    <input type="url" placeholder="Photo Url" className="input input-bordered" {...register("Photo URL", {})} required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold"> Toy Name</span>
                                    </label>
                                    <input type="text" placeholder="Toy Name" className="input input-bordered" {...register("Toy Name", {})} required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold"> Sub-Category</span>
                                    </label>
                                    <select {...register("Sub-Catagory")} className="input input-bordered">
                                        <option value="a">a</option>
                                        <option value="b">b</option>
                                        <option value="c">c</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold"> Seller Name</span>
                                    </label>
                                    <input type="text" placeholder="Seller Name" className="input input-bordered"  {...register("Seller Name", {})} required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold"> Seller Email</span>
                                    </label>

                                    <input type="email" placeholder="Seller Email" className="input input-bordered" {...register("Seller Email", {})} required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold"> Price</span>
                                    </label>
                                    <input type="number" step="0.01" placeholder="Price" className="input input-bordered" {...register("Price", {})} required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold"> Rating</span>
                                    </label>
                                    <input type="number" step="0.01" min="0.00" max="5.00" placeholder="Rating" className="input input-bordered" {...register("Rating", {})} required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Available Quantity</span>
                                    </label>
                                    <input type="number" placeholder="Available Quantity" className="input input-bordered" {...register("Available Quantity", {})} required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Detail Description</span>
                                </label>
                                <textarea type="text" placeholder="Detail Description" className="input input-bordered p-2" {...register("Detail Description", {})} required />
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