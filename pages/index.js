import React from 'react'
import Head from 'next/head'
import Header from '../components/Header';
import Blogitems from '../components/blogitems';

const Home = (props) => {
  return (
    <div>
      <Head>
        <title>Questic Blogs | The Professional Blog Platform</title>
        <meta name="title" content="Questic Blogs | The Professional Blog Platform" />
        <meta name="description" content="Questic Blogs is a Professional Blog Platform. Here we will get interesting content, which you will like very much. We're dedicated to providing you the best of Blog, with a focus on dependability and Technology, Science, Computer, Daily updates and many more..." />
        <meta name="keywords" content="Technology, Coding, Science, Computer, Latest News, Daily updates" />
        <meta name="author" content="Shivanshu Karn" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="Questic Blogs | The Professional Blog Platform" />
        <meta property="og:description" content="Questic Blogs is a Professional Blog Platform. Here we will get interesting content, which you will like very much. We're dedicated to providing you the best of Blog, with a focus on dependability and Technology, Science, Computer, Daily updates and many more..." />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="" />
        <meta property="twitter:title" content="Questic Blogs | The Professional Blog Platform" />
        <meta property="twitter:description" content="Questic Blogs is a Professional Blog Platform. Here we will get interesting content, which you will like very much. We're dedicated to providing you the best of Blog, with a focus on dependability and Technology, Science, Computer, Daily updates and many more..." />
        <meta property="twitter:image" content="" />
      </Head>

      <main>
        <div className="header">
          <Header />
        </div>

        <div className="content">
          <Blogitems head={"Latest Blogs"} allBlogs={props.allBlogs} />
        </div>

      </main>

    </div>
  )
}

export async function getServerSideProps(context) {
  // http://localhost:1337/api/blogs/
  let data = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?populate=*`)
  let allBlogs = await data.json()
  // console.log(allBlogs)

  return {
    props: { allBlogs },
  }
}


export default Home