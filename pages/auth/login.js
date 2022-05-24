import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Login = () => {
    return (
        <section className="body-font">
            <Head>
                <title>Login | Questic Blogs</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container px-5 py-0 mx-auto flex flex-wrap items-center">
                <div className="lg:w-2/6 md:w-1/2 bg-opacity-50 rounded-lg p-8 flex flex-col md:m-auto w-full mt-10 md:mt-0">
                    <h2 className=" text-lg font-medium title-font mb-5">Login!</h2>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm">Email*</label>
                        <input type="email" id="email" name="email" className="w-full bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-700 rounded border border-gray-600 focus:border-blue-500 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="password" className="leading-7 text-sm">Password*</label>
                        <input type="text" id="password" name="password" className="w-full bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-700 rounded border border-gray-600 focus:border-blue-500 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <button className=" bg-blue-600 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-sm text-white">Login</button>
                    <Link href="/auth/signup"><a className="text-xs mt-3 text-blue-700">New User! Create Account</a></Link>
                </div>
            </div>
        </section>
    )
}

export default Login