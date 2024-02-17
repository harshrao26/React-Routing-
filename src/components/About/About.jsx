import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-black">
            <div className="container m-auto px-6 text-white md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-white font-normal md:text-4xl">
                        Dream. Chase. Achieve.
                        </h2>
                        <p className="mt-6 text-sm text-white font-light">
                        Chase dreams tirelessly, embrace uncertainty boldly, conquer fears courageously, ignite passions fervently, persevere relentlessly, and create your destiny fearlessly, one step at a time, amidst the vast expanse of possibility, where dreams transform into reality and stars illuminate the path to greatness.
                        </p>
                        <p className="mt-4 text-xs text-white font-light">
                        Chase dreams, conquer fears, ignite passion, persevere, create magic.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}