import React from 'react'

const Stats = () => {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                <div class="mx-auto max-w-3xl text-center">
                    <h2 class="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                        Trusted by worldwide organizations
                    </h2>

                    <p class="mt-4 text-gray-500 dark:text-gray-400 sm:text-xl">
                    Take advantage of Cert-Chain for your use-case.
                    Reach out to us if your use-case is not listed here, and we can help figure out how Cert-Chain can benefit you.
                    </p>
                </div>

                <div class="mt-8 sm:mt-12">
                    <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
                        <div
                            class="flex flex-col shadow-md shadow-gray-500 rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800"
                        >
                            <dt class="order-last text-lg font-medium text-gray-500 dark:text-gray-400">
                                Total Certificates generated
                            </dt>

                            <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                                1000+
                            </dd>
                        </div>

                        <div
                            class="flex flex-col shadow-md shadow-gray-500 rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800"
                        >
                            <dt
                                class="order-last text-lg font-medium text-gray-500 dark:text-gray-400"
                            >
                                Companies Registered 
                            </dt>

                            <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">50+</dd>
                        </div>

                        <div
                            class="flex flex-col shadow-md shadow-gray-500 rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800"
                        >
                            <dt
                                class="order-last text-lg font-medium text-gray-500 dark:text-gray-400"
                            >
                                Customer support
                            </dt>

                            <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">24🛠7</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </section>

    )
}

export default Stats