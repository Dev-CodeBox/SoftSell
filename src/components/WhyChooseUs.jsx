import React from 'react'
import { FaCheckCircle, FaLock, FaHandsHelping } from 'react-icons/fa';

function WhyChooseUs() {
    const reasons = [
        {
            icon: <FaCheckCircle size={40} className="text-cyan-700" />,
            title: 'Trusted by Experts',
            desc: 'SoftSell is trusted by software professionals for fast and secure transactions.',
        },
        {
            icon: <FaLock size={40} className="text-cyan-700" />,
            title: 'Secure Transactions',
            desc: 'We prioritize the security of your data with encrypted payments and licenses.',
        },
        {
            icon: <FaHandsHelping size={40} className="text-cyan-700" />,
            title: 'Easy Support',
            desc: 'Our customer support is available 24/7 to help you through every step.',
        },
    ];
    return (
        <section className="w-full px-6 py-16 bg-white text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-10">Why Choose Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {reasons.map((reason, idx) => (
                    <div
                        key={idx}
                        className="p-8 border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
                    >
                        <div className="text-cyan-700 mb-4 flex justify-center">{reason.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">{reason.title}</h3>
                        <p className="text-gray-600 text-base">{reason.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WhyChooseUs