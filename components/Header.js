import Link from 'next/link';
import {FiMail} from 'react-icons/fi';
import {MdOutlineExplore} from 'react-icons/md';

 
const Header = () => {
    return (
      <div>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-9 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-8 md:mb-0">
              <img className="object-cover object-center rounded" alt="hero" src="/header_img_blog.jpg" />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-14 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900">Welcome to <span className='text-blue-600'>QuesticBlogs</span>
              </h1>
              <p className="mb-8 leading-relaxed">Questic Blogs is a Professional Blog Platform. Here we will get interesting content, which you will like very much. We&apos;re dedicated to providing you the best of Blog, with a focus on dependability and Technology, Science, Computer, Daily updates and many more...</p>
              <div className="flex justify-center">
                <Link href="/blog" passHref><button className="flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-sm items-center justify-center" >Explore Blogs <MdOutlineExplore className='ml-2 text-lg' /> </button></Link>
                <Link href="/contact" passHref><button className="ml-4 flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-sm items-center justify-center">Contact us <FiMail className='ml-2 text-lg' /> </button></Link>
              </div>
            </div>
          </div>
        </section>
  
      </div>
    )
  }
  
  export default Header