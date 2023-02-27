import React from 'react'

const Features = () => {
    return (
        <section class="bg-gradient-to-r from-cyan-500 pt-4 pb-8 to-blue-500">
             <h2 class="text-3xl text-white font-bold sm:text-4xl text-center py-8">Our Services </h2>
            <div class="container mx-auto">
                <div class="-mx-4 flex flex-wrap">
                    <div class="w-full px-4 md:w-1/2 xl:w-1/3 cursor-pointer ">
                        <div class="mb-10 overflow-hidden rounded-lg bg-white shadow-md shadow-gray-500 ">
                            <img
                                src="https://images.vexels.com/media/users/3/149723/isolated/preview/d45d650f852b9f95594040aa3d094fb4-diploma-scroll-3d-icon-by-vexels.png"
                                alt="image"
                                class="w-52 h-52 ml-24"
                            />
                            <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                                <h3>
                                    <a
                                        href="javascript:void(0)"
                                        class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                                    >
                                    Academics Certificates
                                    </a>
                                </h3>
                                <p class="text-body-color mb-7 text-base leading-relaxed">
                                     If you are an educational Institute or a startup providing cources.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full px-4 md:w-1/2 xl:w-1/3 cursor-pointer">
                        <div class="mb-2 overflow-hidden rounded-lg bg-white shadow-md shadow-gray-500">
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/008/147/743/non_2x/elegant-and-beautiful-certificate-template-design-for-corporate-graduation-and-organization-free-vector.jpg"
                                alt="image"
                                class="w-52 h-48 ml-24 mt-4"
                            />
                            <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                                <h3>
                                    <a
                                        href="javascript:void(0)"
                                        class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                                    >
                                        Organizational Certificates
                                    </a>
                                </h3>
                                <p class="text-body-color text-base leading-relaxed">
                                   Issue Achievement and appreciation certificates for your employees and show how much they mean to you.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full px-4 md:w-1/2 xl:w-1/3 cursor-pointer">
                        <div class="mb-10 overflow-hidden rounded-lg bg-white shadow-md shadow-gray-500">
                            <img
                                src="https://cdn3.iconfinder.com/data/icons/smart-home-29/50/28-512.png"
                                alt="image"
                                class="w-52 h-52 ml-24"
                            />
                            <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                                <h3>
                                    <a
                                        href="javascript:void(0)"
                                        class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                                    >
                                        Medical Certificates
                                    </a>
                                </h3>
                                <p class="text-body-color mb-7 text-base leading-relaxed">
                                  Medicle Licenses and certificates can be issued and Revoked.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Features