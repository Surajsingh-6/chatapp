import React from "react";

function page() {
    return (
        <div>
            
            <div className="bg-gray-50">
                
              

                
                <section className="text-center py-24 bg-blue-50">
                    <div className="max-w-screen-lg mx-auto px-4">
                        <h1 className="text-4xl font-bold text-blue-800 mb-4">
                            Connect with friends, colleagues, and communities –
                            anytime, anywhere.
                        </h1>
                        <p className="text-lg text-gray-700 mb-6">
                            Join millions who are staying in touch with ease
                            using ChatApp. Fast, secure, and free!
                        </p>
                        <div className="space-x-4">
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
                                Get Started
                            </button>
                            <button className="text-blue-600 border border-blue-600 px-6 py-3 rounded-md hover:bg-blue-100">
                                Learn More
                            </button>
                        </div>
                    </div>
                </section>

                
                <section id="features" className="py-16 bg-white">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold text-blue-800">
                            Why ChatApp?
                        </h2>
                    </div>
                    <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                        <div className="text-center p-6 border rounded-lg shadow-md">
                            <div className="text-4xl text-blue-600 mb-4">
                                💬
                            </div>
                            <h3 className="text-xl font-semibold text-blue-800 mb-2">
                                Instant Messaging
                            </h3>
                            <p className="text-gray-600">
                                Send text, voice messages, images, and videos
                                instantly.
                            </p>
                        </div>
                        <div className="text-center p-6 border rounded-lg shadow-md">
                            <div className="text-4xl text-blue-600 mb-4">
                                🔐
                            </div>
                            <h3 className="text-xl font-semibold text-blue-800 mb-2">
                                Secure & Private
                            </h3>
                            <p className="text-gray-600">
                                End-to-end encryption ensures your conversations
                                stay safe.
                            </p>
                        </div>
                        <div className="text-center p-6 border rounded-lg shadow-md">
                            <div className="text-4xl text-blue-600 mb-4">
                                👥
                            </div>
                            <h3 className="text-xl font-semibold text-blue-800 mb-2">
                                Group Chats
                            </h3>
                            <p className="text-gray-600">
                                Create and manage group chats for up to 500
                                members!
                            </p>
                        </div>
                        <div className="text-center p-6 border rounded-lg shadow-md">
                            <div className="text-4xl text-blue-600 mb-4">
                                🌐
                            </div>
                            <h3 className="text-xl font-semibold text-blue-800 mb-2">
                                Cross-Platform Support
                            </h3>
                            <p className="text-gray-600">
                                Available on desktop, mobile, and web – never
                                miss a message.
                            </p>
                        </div>
                    </div>
                </section>

                
                <section className="bg-blue-50 py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold text-blue-800">
                            What Our Users Say
                        </h2>
                    </div>
                    <div className="max-w-screen-lg mx-auto space-y-6 px-4">
                        <div className="text-center">
                            <p className="text-lg text-gray-700 italic">
                                "The best app for staying connected with my
                                family. Easy to use, reliable, and secure!"
                            </p>
                            <p className="text-md font-semibold text-blue-800">
                                - Shockig Suresh
                            </p>
                        </div>
                        <div className="text-center">
                            <p className="text-lg text-gray-700 italic">
                                "As a remote worker, this app keeps my team in
                                sync, and the video calls are crystal clear."
                            </p>
                            <p className="text-md font-semibold text-blue-800">
                                - Rocky Ramesh
                            </p>
                        </div>
                    </div>
                </section>

                
                <footer className="bg-blue-600 text-white py-6">
                    <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
                        <div className="space-x-4">
                            <a href="#about" className="hover:text-gray-200">
                                About Us
                            </a>
                            <a href="#terms" className="hover:text-gray-200">
                                Terms of Service
                            </a>
                            <a href="#privacy" className="hover:text-gray-200">
                                Privacy Policy
                            </a>
                            <a href="#faq" className="hover:text-gray-200">
                                FAQ
                            </a>
                        </div>
                        <div className="space-x-4">
                            <a href="#" className="hover:text-gray-200">
                                Facebook
                            </a>
                            <a href="#" className="hover:text-gray-200">
                                Twitter
                            </a>
                            <a href="#" className="hover:text-gray-200">
                                Instagram
                            </a>
                            <a href="#" className="hover:text-gray-200">
                                LinkedIn
                            </a>
                        </div>
                    </div>
                    <div className="text-center text-sm mt-4">
                        <p>&copy; 2025 ChatApp. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default page;
