/* eslint-disable */
import Head from "next/head";

import axios from 'axios';
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup'
import { registrationValidation } from "../../validations_schemas/user_registration";

function SignIn({ handleSignUp }: any) {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful, isSubmitting },
    } = useForm({
        resolver: yupResolver(registrationValidation)
    });



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold mb-5">SIGN UP</h1>
                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">

                        <form className="card-body" onSubmit={handleSubmit(handleSignUp)}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name")} type="text" placeholder="Name" className="input input-bordered" required />
                                {errors.name && (<div>{errors.name.message}</div>)}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email")} type="email" placeholder="email" className="input input-bordered" required />
                                {errors.email && (<div>{errors.email.message}</div>)}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password")} type="password" placeholder="password" className="input input-bordered" required />
                                {errors.password && (<div>{errors.password.message}</div>)}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Create Account</button>

                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default function Register() {
    const router = useRouter();


    useEffect(
        () => {
           
            const userData = localStorage.getItem('userData');
            if (userData) {
                router.push("/")
                console.log('UserData from local storage:', userData);
            }
        }, []
    )


    const handleSignUp = async (data: { email: string, password: string, name: string }) => {
        //console.log(data)
        try {
            const response = await axios.post('http://localhost:5001/users', { name: data.name, email: data.email, password: data.password }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('Login successful', response.data);
            localStorage.setItem("userData", JSON.stringify(response.data.user))
            router.push("/home")
        } catch (error) {
            console.error('Login failed', error);
        }
    }

    return (
        <>
            <Head>
                <title>DevDiaries | Sign up</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <SignIn handleSignUp={handleSignUp} />
            </main>
        </>
    );
}
