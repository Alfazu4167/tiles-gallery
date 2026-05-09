"use client"

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const handleRegister = async (data) => {
        const { name, email, password, photo } = data;

        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/login",
        });
        if (error) {
            alert(error.message)
        }
        if (res) {
            alert("Your Account Created Successfully")
        }
    }
    return (
        <div className='container mx-auto flex justify-center items-center bg-slate-100 h-[80vh] rounded-md mt-5'>
            <div className='p-4 rounded-xl space-y-3 '>
                <h2 className="text-3xl font-bold ">Register Your Account</h2>
                <form action="" onSubmit={handleSubmit(handleRegister)}>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 ">
                        <label className="label">Name</label>
                        <input type="text" className="input"
                            {...register("name", { required: "Provide your email address" })}
                            placeholder="Your Name" />
                        {errors.name && <p className=" text-red-500">{errors.name.message}</p>}
                        <label className="label">Photo Url</label>
                        <input type="text" className="input"
                            {...register("photo", { required: "Provide your email address" })}
                            placeholder="Email" />
                        {errors.photo && <p className=" text-red-500">{errors.photo.message}</p>}
                        <label className="label">Email</label>
                        <input type="email" className="input"
                            {...register("email", { required: "Provide your email address" })}
                            placeholder="Email" />
                        {errors.email && <p className=" text-red-500">{errors.email.message}</p>}
                        <label className="label">Password</label>
                        <input type="password" className="input"
                            {...register("password", { required: "Provide a password" })}
                            placeholder="Password" />
                        {errors.password && <p className=" text-red-500">{errors.password.message}</p>}
                        <input className="btn btn-neutral mt-2 w-full" type="submit" value="Register" />

                    </fieldset>
                </form>
            </div>

        </div>
    );
};

export default RegisterPage;