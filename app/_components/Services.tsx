import React from "react";
import Image from "next/image";
import carbClean from "../../Documentation/assets/images/services/carbClean.png";
import oilChange from "../../Documentation/assets/images/services/oilChange.png"
import batteryFix from "../../Documentation/assets/images/services/batteryFix.png";
import chainFix from "../../Documentation/assets/images/services/chainFix.png";
import engineTune from "../../Documentation/assets/images/services/engineTune.png";
import exhaustFix from "../../Documentation/assets/images/services/exhaustFix.png";
import restoration from "../../Documentation/assets/images/services/restoration.png";

import type { StaticImageData } from "next/image"; // ✅ import the type

import { FaWrench } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { MdOutlineEngineering } from "react-icons/md";
import { RiSlowDownFill } from "react-icons/ri";
import { IoBatteryCharging } from "react-icons/io5";
import { motion } from "motion/react";
import { FaOilCan } from "react-icons/fa";
import { GiChainsaw } from "react-icons/gi";
import { GiAutoRepair } from "react-icons/gi";
import { FaMotorcycle } from "react-icons/fa";




interface ServiceCard {
    title: string;
    description: string;
    icon: React.ReactNode | string;
    image:StaticImageData;
    alt: string;
}

const serviceCards: ServiceCard[] = [
    {
        title: "Oil Changes",
        description:
            "Keep your engine running smooth with regular oil changes. We use the correct oil and filter based on your bike’s exact specs to ensure optimal performance and engine longevity.",
        icon: <FaOilCan className="w-8 h-8" />, 
        image: oilChange,
        alt: "Motorcycle oil being changed",
    },
    {
        title: "Brake Changes and Inspections",
        description:
            "  Stay safe with our complete brake service. We handle everything from thorough inspections to pad and rotor replacements, plus brake fluid flushes and top-offs. We check for wear, leaks, and performance to keep your ride road-ready.",
        icon: <RiSlowDownFill className="w-8 h-8" />,
        image: carbClean,
        alt: "Mechanic inspecting brake system",
    },
    {
        title: "Battery Replacement & Diagnostics",
        description:
            "Dead battery? We'll test your charging system, replace the battery, clean terminals, and ensure your bike starts strong—every time.",
        icon: <IoBatteryCharging className="w-8 h-8" />,
        image: batteryFix,
        alt: "Motorcycle battery being replaced",
    },
    {
        title: "Motorcycle Engine Service & Tuning",
        description:
            "Keep your bike running smooth and strong with our expert engine services. We perform valve adjustments, carburetor or EFI tuning, spark timing, compression checks, and full diagnostics to ensure peak performance and longevity.",
        icon: <MdOutlineEngineering className="w-8 h-8" />,
        image: engineTune,
        alt: "Motorcycle engine maintenance in progress",
    },
    {
        title: "Carburetor Cleaning & Tuning",
        description:
            "Restore smooth throttle response and fuel efficiency with a professional carburetor cleaning. We disassemble, deep-clean, and precisely tune your carbs to ensure optimal engine performance.",
        icon: <MdOutlineEngineering className="w-8 h-8" />, // consider replacing this icon for accuracy
        image: carbClean,
        alt: "Motorcycle carburetor being cleaned",
    },
    {
        title: "Chain Replacement & Adjustment",
        description:
            "Worn-out chain? We install new chains, adjust tension, and lubricate for smooth, safe riding. We also inspect sprockets and drivetrain wear to keep your bike running right.",
        icon: <GiChainsaw className="w-8 h-8" />, // or another fitting icon
        image: chainFix,
        alt: "Motorcycle chain being serviced",
    },
    {
        title: "Exhaust Replacement & Repair",
        description:
            "Whether you're replacing a rusted pipe or upgrading to a performance exhaust, we handle fitment, sealing, and tuning to ensure the best performance and sound.",
        icon: <GiAutoRepair className="w-8 h-8" />,
        image: exhaustFix,
        alt: "Motorcycle exhaust system being worked on",
    },
    {
        title: "Motorcycle Restoration",
        description:
            "Found a barn find? Have an older bike you want to bring back to life? We specialize in full motorcycle restoration—from getting non-runners road-ready to engine rebuilds, fuel and electrical repairs, and even frame restoration. We'll return your bike to reliable, working condition—mechanically and visually.",
        icon: <FaMotorcycle className="w-8 h-8" />,
        image: restoration,
        alt: "Motorcycle undergoing restoration",
    },
];

const Services = () => {
    return (
        <section className="box-padding scroll-mt-14" id="services">
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="mb-12 md:flex md:justify-between md:items-center gap-8"
            >
                <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center gap-2">
                        <span className="text-accent">
                            <FaWrench className="w-6 h-6" />
                        </span>
                        <h2 className="text-lg font-semibold">
                            Services
                        </h2>
                    </div>
                    <h1 className="text-4xl font-bold font-slab leading-12">
                         Motorycle Care with a{" "}
                        <span className="text-accent">Professional</span> Touch
                    </h1>
                </div>
                <div className="space-y-4">
                    <p className="text-gray-600 max-w-2xl">
                        Expert motorcycle maintenance and repairs—from oil changes to engine work—done right to keep you riding.
                    </p>
                </div>
            </motion.div>
            {/* Services Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center items-center">
                {serviceCards.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-lg hover:shadow-lg hover:scale-105 duration-500 ease-in-out overflow-hidden border border-zinc-200"
                    >
                        <div className="relative h-48">
                            <Image
                                src={card.image}
                                alt={card.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div>{card.icon}</div>
                                <h3 className="font-semibold text-xl">
                                    {card.title}
                                </h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                {card.description}
                            </p>
                            <motion.a
                                href="#about"
                                whileHover={{ x: 10 }}
                                className="text-accent font-semibold flex items-center gap-2 hover:gap-3 duration-200 ease-in-out cursor-pointer"
                            >
                                LEARN MORE
                                <HiArrowRight className="w-4 h-4" />
                            </motion.a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
