import React from 'react'
import Head from 'next/head'
import Blogitems from '../../components/blogitems';

const Blog = (props) => {
  return (
    <>
      <Head><title>Blog | Questic Blogs</title></Head>      

      <div className="content">
            <Blogitems head={"All Blogs"} allBlogs={props.allBlogs}/>
        </div>
    </>
  )
}

export async function getServerSideProps(context) {  
  // http://localhost:1337/api/blogs?populate=*
  let data = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?populate=*`)
  let allBlogs = await data.json()
  // console.log(allBlogs)

  return {
      props: { allBlogs },
  }
}

export default Blog