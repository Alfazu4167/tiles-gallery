"use client"

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const LogInPage = () => {
    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const handleLogin = async (data) => {
        const { email, password } = data;
        const { data: res, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        if (error) {
            toast.error(error.message)
        }
        if (res) {
            toast.success("Successfully Logged in")
        }
    }
    return (
        <div className='container mx-auto flex justify-center items-center bg-slate-100 h-[80vh] rounded-md mt-5'>
            <div className='p-4 rounded-xl space-y-3 '>
                <h2 className="text-3xl font-bold ">Login Your Account</h2>
                <form action="" onSubmit={handleSubmit(handleLogin)}>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 ">
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
                        <input className="btn btn-neutral mt-2 w-full" type="submit" value="Login" />
                        <p className="mt-2">Don't have account yet? <Link className="text-red-500" href={"/register"}> Register Now</Link></p>
                    </fieldset>
                </form>
            </div>

        </div>
    );
};

export default LogInPage;