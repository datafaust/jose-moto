import { useState, FormEvent } from "react";
import { toast } from "react-toastify";
const subjects = [
    "General Inquiry",
    "Service Request",
    "Parts Inquiry",
    "Appointment Booking",
    "Other",
];

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    agreeToPolicy: boolean;
}

interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    subject?: string;
    message?: string;
    agreeToPolicy?: string;
}

const initialFormData: FormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    agreeToPolicy: false,
};

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [errors, setErrors] = useState<FormErrors>({});

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        // Phone validation - just check if filled
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        }

        // Required fields validation
        if (!formData.firstName.trim())
            newErrors.firstName = "First name is required";
        if (!formData.lastName.trim())
            newErrors.lastName = "Last name is required";
        if (!formData.subject) newErrors.subject = "Please select a subject";
        if (!formData.message.trim()) newErrors.message = "Message is required";
        if (!formData.agreeToPolicy)
            newErrors.agreeToPolicy = "You must agree to the privacy policy";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            toast.success("👍 Submission successful!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setFormData(initialFormData); // Clear form
            setErrors({});
        }
    };

    return (
        <section className="w-full scroll-mt-18" id="contact">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 box-padding">
                {/* Map Section */}
                <div className="w-full h-[400px] lg:h-full rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12090.889333617066!2d-73.85972025000004!3d40.74613495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25fcc36269401%3A0x54dd6abe7a67b150!2sCorona%2C%20Queens%2C%20NY!5e0!3m2!1sen!2sus!4v1747250886441!5m2!1sen!2sus"
                        className="w-full h-full border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                {/* Contact Details Section */}
                <div className="w-full">
                <div className="mb-5">
                    <h2 className="text-accent mb-2 font-semibold">
                        CONTACT US
                    </h2>
                    <h3 className="text-3xl font-slab font-bold">
                        Get in touch
                    </h3>
                    <p className="text-gray-600 mt-2 text-lg">
                        Give us a call/text to set up a free consultation or to ask any questions you may have. We’re here to help!
                    </p>
                    <p className="text-gray-600 mt-2 text-lg">
                        <span className="font-semibold">Phone: </span>
                        <a
                            href="tel:3474542337"
                            className="text-accent hover:text-accent/80 hover:underline cursor-pointer transition duration-200 text-xl"
                        >
                            (347) 454-2337
                        </a>
                    </p>
                </div>
            </div>
                {/* Form Section */}
                {/* <div className="w-full">
                    <div className="mb-8">
                        <h2 className="text-accent mb-2 font-semibold">
                            BOOK AN APPOINTMENT
                        </h2>
                        <h3 className="text-3xl font-slab font-bold">
                            Send us a message
                        </h3>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    First name
                                </label>
                                <input
                                    type="text"
                                    value={formData.firstName}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            firstName: e.target.value,
                                        })
                                    }
                                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent outline-none ${
                                        errors.firstName ? "border-red-500" : ""
                                    }`}
                                    placeholder="First name"
                                />
                                {errors.firstName && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.firstName}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    value={formData.lastName}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            lastName: e.target.value,
                                        })
                                    }
                                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent outline-none ${
                                        errors.lastName ? "border-red-500" : ""
                                    }`}
                                    placeholder="Last name"
                                />
                                {errors.lastName && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.lastName}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }
                                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent outline-none ${
                                        errors.email ? "border-red-500" : ""
                                    }`}
                                    placeholder="you@company.com"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Phone number
                                </label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            phone: e.target.value,
                                        })
                                    }
                                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent outline-none ${
                                        errors.phone ? "border-red-500" : ""
                                    }`}
                                    placeholder="Enter your phone number"
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.phone}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Subject
                            </label>
                            <select
                                value={formData.subject}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        subject: e.target.value,
                                    })
                                }
                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent outline-none ${
                                    errors.subject ? "border-red-500" : ""
                                }`}
                            >
                                <option value="">Select Subject</option>
                                {subjects.map((subject) => (
                                    <option key={subject} value={subject}>
                                        {subject}
                                    </option>
                                ))}
                            </select>
                            {errors.subject && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.subject}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Message
                            </label>
                            <textarea
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        message: e.target.value,
                                    })
                                }
                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none min-h-[120px] ${
                                    errors.message ? "border-red-500" : ""
                                }`}
                                placeholder="Your message here..."
                            />
                            {errors.message && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.message}
                                </p>
                            )}
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="privacy"
                                checked={formData.agreeToPolicy}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        agreeToPolicy: e.target.checked,
                                    })
                                }
                                className={`rounded border-gray-300 text-blue-600 focus:ring-accent ${
                                    errors.agreeToPolicy ? "border-red-500" : ""
                                }`}
                            />
                            <label htmlFor="privacy" className="text-sm">
                                You agree to our friendly privacy policy.
                            </label>
                        </div>
                        {errors.agreeToPolicy && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.agreeToPolicy}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-[var(--color-accent)] text-white py-3 rounded-lg hover:opacity-90 btn-transition"
                        >
                            Send message
                        </button>
                    </form>
                </div> */}
            </div>
        </section>
    );
}
