import React, { useState } from 'react'
import Head from 'next/head'
import Error from 'next/error'
import { RiStarSLine } from 'react-icons/ri';

const Blogpost = ({ myBlog, error }) => {

    const [Blog, setBlog] = useState(myBlog);

    function createMarkup(content) {
        return { __html: content };
    }

    if (error == 404) {
        return <Error statusCode={404} />
    }

    return (
        <div>
            <Head>
                <title>{Blog && Blog.attributes.title} | Questic Blogs</title>
                <meta name="description" content={Blog && Blog.attributes.metadesc} />
            </Head>
            <main>
                <section className="text-black body-font">
                    <div className="container px-5 pt-16 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h4 className="text-xs text-blue-600 tracking-widest font-medium title-font mb-1">{Blog.attributes.DateTime + " | " + "Written by " + Blog.attributes.writer}</h4>
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{Blog && Blog.attributes.title}</h1>
                            <div className="lg:w-2/3 mx-auto leading-relaxed text-base">{Blog.attributes.content && <div dangerouslySetInnerHTML={createMarkup(Blog && Blog.attributes.content)}></div>}</div>
                        </div>
                    </div>
                </section>
                <div className='w-full'>
                    <hr className='w-1/2 m-auto' />
                </div>
                <section className='review text-black body-font mt-8'>
                    <div className="star flex flex-col items-center justify-center">
                        <h3 className='text-xl'>Review This Blog</h3>
                        <div className="flex text-4xl">
                            <button><RiStarSLine /></button>
                            <button><RiStarSLine /></button>
                            <button><RiStarSLine /></button>
                            <button><RiStarSLine /></button>
                            <button><RiStarSLine /></button>
                        </div>
                    </div>
                    <div className="comment flex items-center justify-center">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="message" className="leading-7 text-sm text-black">Comment</label>
                                <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-800 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                            <div className="pt-2 w-full">
                                <button className="flex text-white bg-blue-600 border-0 py-2 px-5 focus:outline-none hover:bg-blue-800 rounded text-sm">Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className="comments text-black body-font w-full">
                        <div className="w-1/2 m-auto">
                            <div className="head my-5">
                            <h3 className='text-xl font-semibold'>COMMENTS</h3><span className='text-xs font-normal'>*Only Loggedin users can Comment</span>
                            </div>

                            <div className="per my-2">
                                <h4 className="text-sm text-blue-600 tracking-widest font-medium title-font">Lorem ipsum</h4>
                                <p className="text-xs font-medium title-font text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eos itaque perspiciatis doloremque debitis, voluptates vel quidem a dolorum? Eligendi eum nam officiis pariatur doloribus!</p>
                            </div>
                            <div className="per my-2">
                                <h4 className="text-sm text-blue-600 tracking-widest font-medium title-font">Lorem ipsum</h4>
                                <p className="text-xs font-medium title-font text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eos itaque perspiciatis doloremque debitis, voluptates vel quidem a dolorum? Eligendi eum nam officiis pariatur doloribus!</p>
                            </div>
                            <div className="per my-2">
                                <h4 className="text-sm text-blue-600 tracking-widest font-medium title-font">Lorem ipsum</h4>
                                <p className="text-xs font-medium title-font text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eos itaque perspiciatis doloremque debitis, voluptates vel quidem a dolorum? Eligendi eum nam officiis pariatur doloribus!</p>
                            </div>
                            <div className="per my-2">
                                <h4 className="text-sm text-blue-600 tracking-widest font-medium title-font">Lorem ipsum</h4>
                                <p className="text-xs font-medium title-font text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eos itaque perspiciatis doloremque debitis, voluptates vel quidem a dolorum? Eligendi eum nam officiis pariatur doloribus!</p>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export async function getServerSideProps(context) {
    const { blogpost } = context.query;
    let error = null;
    let data = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?filters[slug]=${blogpost}&populate=*`)
    let myBlog = await data.json()
    if (myBlog.data[0] == null) {
        return {
            props: { error: 404 },
        }
    }

    return {
        props: { error: error, myBlog: myBlog.data[0] }
    }
}


export default Blogpost