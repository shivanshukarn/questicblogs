import Link from 'next/link';
import { AiOutlineArrowRight, AiFillGithub } from 'react-icons/ai'
import { SiApostrophe } from 'react-icons/si'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font border-t-2 mt-14">
            <div className="container px-5 py-9 mx-auto">
                <div className="flex flex-wrap md:text-left text-center order-first justify-center">
                    <div className="lg:w-1/4 md:w-1/4 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">QUICK LINKS</h2>
                        <nav className="list-none mb-10">
                            <li className="text-gray-600 hover:text-gray-800"><Link href="/" passHref>Home</Link></li>
                            <li className="text-gray-600 hover:text-gray-800"><Link href="/blog" passHref>Blog</Link></li>
                            <li className="text-gray-600 hover:text-gray-800"><Link href="/about" passHref>About</Link></li>
                            <li className="text-gray-600 hover:text-gray-800"><Link href="/contact" passHref>Contact</Link></li>
                            {/* <li className="text-gray-600 hover:text-gray-800"><Link href="/auth/login" passHref>Admin Login</Link></li> */}
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/4 w-full px-4">
                        {/* <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2> */}
                        <nav className="list-none mb-10">
                            <li className="text-gray-600 hover:text-gray-800"><Link href="/doc/privacypolicy" passHref>Privacy Policy</Link></li>
                            <li className="text-gray-600 hover:text-gray-800"><Link href="/doc/termsofservice" passHref>Terms of service</Link></li>
                            <li className="text-gray-600 hover:text-gray-800"><Link href="/doc/cookiespolicy" passHref>Cookies Policy</Link></li>
                            <li className="text-gray-600 hover:text-gray-800"><Link href="/" passHref>Fourth Link</Link></li>
                        </nav>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
                        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                            <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">Enter your Email</label>
                                <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button className="lg:mt-5 xl:mt-0 flex-shrink-0 inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Subscribe <AiOutlineArrowRight className='mt-1 ml-1' /></button>
                        </div>
                        <p className="text-gray-500 text-sm mt-2 md:text-left text-center">Subscribe for the newsletter now for latest updates for every new blogs on your email...
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                    <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <span className="flex title-font font-medium items-center text-gray-900 ml-3">
                            <Link href="/" passHref><img className="w-40 cursor-pointer" src='/logo.png' /></Link>
                        </span>
                    </div>
                    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-6">Copyright &copy; 2022 QuesticBlogs -
                        <a href="" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">Shivanshu Karn</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a href="https://github.com/shivanshu-tech18" rel="noopener noreferrer" target="_blank" className="ml-3 text-gray-500 text-lg" title='GitHub'><AiFillGithub /></a>
                        <a href="https://www.instagram.com/karn.shivanshu" rel="noopener noreferrer" target="_blank" className="ml-3 text-gray-500 text-lg" title='Instagram'><FaInstagram /></a>
                        <a href="https://www.facebook.com/shivanshu.karn.122" rel="noopener noreferrer" target="_blank" className="ml-3 text-gray-500 text-lg" title='Facebook'><FaFacebook /></a>
                        <a href="https://twitter.com/shivanshu_122" rel="noopener noreferrer" target="_blank" className="ml-3 text-gray-500 text-lg" title='Twitter'><FaTwitter /></a>
                        <a href="https://www.youtube.com/channel/UCQkAvv6UeDa42K-DMOQw2-Q" rel="noopener noreferrer" target="_blank" className="ml-3 text-gray-500 text-lg" title='YouTube'><FaYoutube /></a>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer