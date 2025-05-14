import { motion } from "motion/react";
import Image from "next/image";
import { BsCalendar4 } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { FaWrench } from "react-icons/fa";
import { IoCarSportOutline } from "react-icons/io5";
import { FaMotorcycle } from "react-icons/fa";


const processSteps = [
    {
        id: 1,
        title: "Schedule Your Service",
        description:
            "Schedule a consultation online below or call/text us. Choose a time that fits your schedule.",
        icon: <BsCalendar4 className="w-6 h-6" />,
    },
    {
        id: 2,
        title: "At Your Doorstep or Ours",
        description:
            "Drop your bike off at our garage or let us come to you—our flexible service model gives you the convenience you need, wherever you are.",
        icon: <HiHome className="w-6 h-6" />,
    },
    {
        id: 3,
        title: "We Diagnose & Deliver",
        description:
            "Not sure what's wrong? We’ll diagnose the issue or listen to what you need—and get it fixed the right way, fast.",
        icon: <FaWrench className="w-6 h-6" />,
    },    
    {
        id: 4,
        title: "Ride Ready",
        description:
            "Hit the road with confidence. Your bike is fully serviced, tested, and ready to roll—wherever the ride takes you.",
        icon: <FaMotorcycle className="w-6 h-6" />, // consider replacing with a motorcycle icon like FaMotorcycle
    },    
];

const Process = () => {
    return (
        <section className="w-full bg-gray-50 box-padding">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative h-[400px] md:h-full"
                >
                    <Image
                        src="https://plus.unsplash.com/premium_photo-1677009541327-5f7e23f81575?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3&dpr=2&w=400&h=800"
                        alt="Professional mechanic"
                        fill
                        sizes="(max-width: 768) 100vw, 50vw"
                        className="object-cover rounded-lg shadow-lg"
                    />
                </motion.div>

                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mb-12 text-center"
                    >
                        <span className="text-accent font-medium">
                            How It Works
                        </span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 font-slab">
                            Simple Steps to Get Your Motorycle Serviced
                        </h2>
                    </motion.div>
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-sm hover:shadow-md btn-transition"
                        >
                            <span className="text-accent">{step.icon}</span>
                            <div>
                                <h3 className="text-xl font-bold mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
