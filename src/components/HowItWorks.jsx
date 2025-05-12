import React from 'react';
import { FaUpload, FaDollarSign, FaUniversity } from 'react-icons/fa';

function HowItWorks() {
    const steps = [
        { title: 'Upload License', icon: <FaUpload size={28} className="text-cyan-700" /> },
        { title: 'Get Valuation', icon: <FaDollarSign size={28} className="text-cyan-700" /> },
        { title: 'Get Paid', icon: <FaUniversity size={28} className="text-cyan-700" /> },
    ];
    return (
        <section className="py-16 bg-white text-center px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-12">How It Works</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md p-8 w-72 hover:shadow-xl transition duration-300"
                    >
                        <div className="mb-4 flex justify-center">{step.icon}</div>
                        <h3 className="text-lg font-semibold text-gray-700">{step.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HowItWorks
