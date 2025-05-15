import React from "react";
import Image from "next/image";
import carbClean from "../../Documentation/assets/images/services/carbClean.png"

const About = () => {
    return (
        <section
            id="about"
            className="box-padding bg-slate-50 scroll-mt-20 flex flex-col lg:flex-row justify-between items-center gap-8"
        >
            {/* Image */}

            <Image
                src={carbClean}
                alt="About section image"
                width={500}
                height={300}
                priority
                className="w-auto h-auto order-last lg:order-first rounded-2xl"
            />

            <div
                className="lg:pl-8 order-first lg:order-last"
            >
                <h2 className="text-accent font-medium mb-4 uppercase">
                    About Us
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 font-slab">
                    Passionate About Motorcycles—Dedicated to Keeping You on the Road
                </h3>
                <p className="text-gray-600 mb-8">
                At <strong>Jose’s Motorcycle Repair</strong>, we bring expert care to every ride—whether you drop it off at our fully equipped garage or need curbside service. With years of hands-on experience, we don’t just fix bikes—we treat them like our own.
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Fully equipped garage</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>On-site & mobile service available</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Fair & competitive pricing</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Years of hands-on experience</span>
                </div>
                </div>


                {/* CTA Button */}
                <a href="#" className="inline-block mt-8 bg-accent text-white px-8 py-3 rounded-lg btn-transition hover:bg-accent/90 cursor-pointer">
                    View All Services
                </a>
            </div>
        </section>
    );
};

export default About;
