import React from 'react';
import { useForm } from 'react-hook-form';


const HookForm = ({ handleAddBill }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/api/add-billing', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                handleAddBill();
                console.log(data)
            })

    };
    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Your name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Type Full Name here"
                        class="input input-bordered input-sm w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Name is required"
                            },
                            pattern: {
                                value: /^([a-zA-Z ]){3,30}$/,
                                message: 'Provide a valid Name'
                            }
                        })} />
                    <label class="label">
                        {errors.name?.type === 'required' && <span
                            className="label-text-alt text-red-500">{errors.name.message}</span>}
                        {errors.name?.type === 'pattern' && <span
                            className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Email here"
                        class="input input-bordered input-sm w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Email is required"
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })} />
                    <label class="label">
                        {errors.email?.type === 'required' && <span
                            className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span
                            className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">PhoneNumber</span>
                    </label>
                    <input
                        type="Number"
                        placeholder="Type Your Phone Number here"
                        class="input input-bordered input-sm w-full max-w-xs"
                        {...register("phone", {
                            required: {
                                value: true,
                                message: "Phone Number is required"
                            },
                            minLength: {
                                value: 11,
                                message: 'You have given less than 11 digits'
                            }
                        })} />
                    <label class="label">
                        {errors.phone?.type === 'required' && <span
                            className="label-text-alt text-red-500">{errors.phone.message}</span>}
                        {errors.phone?.type === 'minLength' && <span
                            className="label-text-alt text-red-500">{errors.phone.message}</span>}
                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Paid Amount</span>
                    </label>
                    <input
                        type="Number"
                        placeholder="Type Your Paid Amount"
                        class="input input-bordered input-sm w-full max-w-xs"
                        {...register("paid", {
                            required: {
                                value: true,
                                message: "Paid Amount is required"
                            },
                            minLength: {
                                value: 4,
                                message: 'You have given less than 4 digits'
                            }
                        })} />
                    <label class="label">
                        {errors.paid?.type === 'required' && <span
                            className="label-text-alt text-red-500">{errors.paid.message}</span>}
                        {errors.paid?.type === 'minLength' && <span
                            className="label-text-alt text-red-500">{errors.paid.message}</span>}
                    </label>
                </div>
                <input type="submit" value="Add Bill" className='btn btn-sm btn-warning' />

            </form>

        </div>
    );
};

export default HookForm;