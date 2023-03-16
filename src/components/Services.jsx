import React from 'react';
import {Link} from 'react-router-dom';

const Services = () => {
    return (
        <section class="bg-gray-900 text-white">
            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-lg text-center">
                    <h2 class="text-3xl font-bold sm:text-4xl">Kickstart your Business </h2>

                    <p class="mt-4 text-gray-300">
                    The certificate generator using blockchain to store and process certificates which are 
                    more secure to store and issue as well as easier and cost-effective to audit and reconcile.
                    </p>
                </div>

                <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                    <a
                        class="block rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 border border-gray-800 p-8 shadow-xl transition duration-500 hover:scale-110  hover:border-pink-500/10 hover:shadow-pink-500/10"
                        href="/services/digital-campaigns"
                    >
                        <h2 class="mb-4 text-xl font-bold text-center text-white">Temper Resistance</h2>

                        <p class="mt-1 text-sm text-white">
                            Immutability is perhaps the most important benefit a blockchain provides. This tamper resistance is highly effective in preventing the counterfeiting of documents and document fraud.
                        </p>
                    </a>

                    <a
                        class="block rounded-xl border border-gray-800 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-8 shadow-xl transition duration-500 hover:scale-110  hover:border-pink-500/10 hover:shadow-pink-500/10"
                        href="/services/digital-campaigns"
                    >
                        <h2 class="mb-4 text-xl font-bold text-center text-white">Proof Of Exixtance</h2>

                        <p class="mt-1 text-sm text-white">
                           Verify without the need for any third party. Generate your own Proof-of-Exixtance, 
                           Proof-of-Authenticity & Proof-of-Integrity of a file, record , document, certificate,degree on Blockchain.     
                       </p>
                    </a>

                    <a
                        class="block rounded-xl border border-gray-800 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-8 shadow-xl transition duration-500 hover:scale-110  hover:border-pink-500/10 hover:shadow-pink-500/10"
                        href="/services/digital-campaigns"
                    >
                        <h2 class="mb-4 text-xl font-bold text-center text-white">Trust</h2>

                        <p class="mt-1 text-sm text-white">
                            Building towards a society of trust, Certificates on Blockchain is obviously 
                            just the first necessery step. A public decentralised network encourages trust to a whole new level.
                        </p>
                    </a>
                </div>

                <div class="mt-12 text-center">
                    <Link to="/mail"
                        class="mt-8 cursor-pointer inline-flex items-center rounded border border-pink-600 bg-pink-600 px-8 py-3 text-white transition duration-500 hover:scale-110  hover:bg-transparent focus:outline-none focus:ring active:text-pink-500"
                    >
                        <span class="text-sm font-medium "> Get Started </span>

                        <svg
                            class="ml-3 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>

    )
}

export default Services;