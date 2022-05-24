import Head from 'next/head'

const About = () => {
    return (
        <>
            <Head><title>About | Questic Blogs</title></Head>
            <div className="main">
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-10 mx-auto flex flex-col">
                        <div className="lg:w-4/6 mx-auto">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="/about-us.png" />
                            </div>
                            <div className="flex flex-col sm:flex-row mt-10">
                                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                    <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </div>
                                    <div className="flex flex-col items-center text-left justify-center">
                                        <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Shivanshu Karn</h2>
                                        <div className="w-12 h-1 bg-blue-600 rounded mt-2 mb-4"></div>
                                        <p className="text-base">QuesticBlogs is owned and managed by Shivanshu Karn.</p>
                                        <p className="text-base">I Shivanshu Karn, am a fresher web developer, programmer, blogger and full stack web developer.</p>
                                        <p className="text-base">Some of the blogs on QuesticBlogs is also written by me...</p>
                                    </div>
                                </div>
                                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                    <p className="leading-relaxed text-lg mb-4">Questic Blogs is a Professional Blog Platform. Here we will get interesting content, which you will like very much. We&apos;re dedicated to providing you the best of Blog, with a focus on dependability and Technology, Science, Computer, Daily updates and many more...</p>
                                    <p className="leading-relaxed text-lg mb-4">We&apos;re working to turn our passion for Blog into a booming online website. We hope you enjoy our Blog as much as we enjoy offering them to you. <br/>
                                    I will keep posting more important posts on my Website for all of you. Please give your support and love.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default About