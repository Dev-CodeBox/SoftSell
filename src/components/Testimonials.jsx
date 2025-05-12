import React from 'react'

function Testimonials() {
    const reviews = [
        {
            name: 'Jane Doe',
            role: 'IT Manager',
            company: 'TechCorp',
            review:
                'SoftSell made it incredibly easy to offload our unused software licenses. Highly recommend!',
        },
        {
            name: 'John Smith',
            role: 'Procurement Lead',
            company: 'CloudSync Inc.',
            review: 'Fast and secure service. The valuation was fair and the payment was quick.',
        },
    ];
    return (
        <section className="w-full px-6 md:px-10 py-20 bg-gray-50">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
                What Our Clients Say
            </h2>

            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
                {reviews.map((testimonial, index) => (
                    <div
                        key={index}
                        className="relative bg-white border border-gray-200 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 group"
                    >
                        <svg
                            className="absolute top-4 left-4 h-8 w-8 text-gray-300 group-hover:text-gray-400 transition"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M9.5 11c0-1.93.69-3.68 1.88-5.02C12.26 4.99 13.13 4 13.13 4H14v7h-4.5zM2 11c0-1.93.69-3.68 1.88-5.02C5.26 4.99 6.13 4 6.13 4H7v7H2z" />
                        </svg>

                        <p className="text-gray-700 text-lg leading-relaxed italic pl-12 mb-6">
                            "{testimonial.review}"
                        </p>

                        <div className="text-sm text-gray-600 font-semibold pl-12">
                            - {testimonial.name}, {testimonial.role}, {testimonial.company}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Testimonials