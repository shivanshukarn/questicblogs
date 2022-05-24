import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineArrowRight, AiOutlineEye } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'

const Blogitems = ({head, allBlogs}) => {
    const [Blogs, setBlogs] = useState(allBlogs)
    // console.log(process.env.NEXT_PUBLIC_STRAPI_URL)
    let STRAPI_URL= process.env.NEXT_PUBLIC_STRAPI_URL

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-3 mx-auto">
                    <h3 className='my-4 mx-1 font-bold text-2xl text-black'>{head}</h3>
                    <div className="flex flex-wrap -m-4">

                        {Blogs && Blogs.data.map((blogitem) => {
                            return <div className="p-4 md:w-1/3" key={blogitem.attributes.slug}>
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg">
                                    <Link href={"/blog/" + blogitem.attributes.slug} passHref><img className="lg:h-48 md:h-36 w-full object-cover object-center cursor-pointer" src={STRAPI_URL + blogitem.attributes.image.data.attributes.url} alt="blog"/></Link>
                                    <div className="p-6">
                                        <h2 className="text-xs title-font font-medium text-gray-400 mb-1">{blogitem.attributes.DateTime} | Written by {blogitem.attributes.writer}</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3"><Link href={"/blog/" + blogitem.attributes.slug}>{blogitem.attributes.title}</Link></h1>
                                        <p className="leading-relaxed mb-3">{blogitem.attributes.metadesc}</p>
                                        <div className="flex items-center flex-wrap ">
                                            <Link href={"/blog/" + blogitem.attributes.slug} passHref><a className="text-blue-600 inline-flex items-center md:mb-2 lg:mb-0">Learn More <AiOutlineArrowRight className='ml-1' /></a></Link>
                                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                <AiOutlineEye className='text-lg mr-1' />1.2K
                                            </span>
                                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                <FaRegComment className='text-lg mr-1' />6
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}


                    </div>
                </div>
            </section>
        </div>
    )
}


export default Blogitems