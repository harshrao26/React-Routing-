import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div className="mx-auto w-full  bg-black">
            <aside className="relative overflow-hidden text-white rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl  px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80  space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className=" font-normal sm:text-5xl">
                        Chase dreams
                            <span className="hidden font-light sm:block text-xl">"Chase dreams, pursue passion, conquer obstacles, embrace adventure, ignite ambition, unleash potential, and make magic happen along the way."</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            
                            &nbsp; Get Started
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="h-full rounded-xl" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image1" />
                </div>
            </aside>

           

            <h1 className="text-center text-white text-2xl sm:text-sm py-10 px-5 font-medium">Chase dreams relentlessly, let passion guide you, conquer doubts fearlessly, embrace every challenge wholeheartedly, ignite your inner fire, push beyond limits, persevere with unwavering determination, and make each moment count as you journey towards realizing your aspirations and creating your own extraordinary story of success.</h1>
        </div>
    );
}
