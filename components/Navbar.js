import Link from 'next/link';
import {FiUser} from 'react-icons/fi';


const Navbar = () => {
  return (
      <nav className="text-gray-600 body-font shadow-lg">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <ul className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Link href="/" passHref><img className="w-36 cursor-pointer" src='/logo.png'/></Link>
          </ul>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <ol className="mr-5 hover:text-gray-900" href='/'><Link href="/" passHref>Home</Link></ol>
            <ol className="mr-5 hover:text-gray-900" href='/blog'><Link href="/blog" passHref>Blog</Link></ol>
            <ol className="mr-5 hover:text-gray-900" href='/about'><Link href="/about" passHref>About</Link></ol>
            <ol className="mr-5 hover:text-gray-900" href='/contact'><Link href="/contact" passHref>Contact</Link></ol>
          </nav>
          <button className="hidden items-center bg-blue-600 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base md:mt-0 text-white md:inline-flex"><Link href="/auth/login" passHref><span className='flex justify-center items-center'>Login <FiUser className='ml-1'/></span></Link></button>
        </div>
      </nav>
  )
}

export default Navbar