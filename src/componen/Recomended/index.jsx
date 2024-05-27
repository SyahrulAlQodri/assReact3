import React from 'react';
import './style.css';
const Recomended = () => {
    return (
    <section class="py-16 bg-gray-100 menu">
        <div class="container mx-auto">
            <h2 class="mb-8 text-3xl font-bold text-center">Recomended</h2>
            
            <div class="grid justify-center grid-cols-1 gap-4 sm:grid-cols-3">
               
                <div class="transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                    <div class="overflow-hidden bg-white rounded-lg shadow-md">
                        <img src="product1.jpg" alt="Product 1" class="object-cover w-full h-64"/>
                        <div class="p-4">
                            <h3 class="mb-2 font-semibold text-gray-900">Mie Ayam</h3>                            
                            <p class="text-gray-700">Rp 10.000</p>
                        </div>
                    </div>
                </div>
               
                <div class="transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                    <div class="overflow-hidden bg-white rounded-lg shadow-md">
                        <img src="product2.jpg" alt="Product 2" class="object-cover w-full h-64"/>
                        <div class="p-4">
                            <h3 class="mb-2 font-semibold text-gray-900">Bakso</h3>                            
                            <p class="text-gray-700">Rp 9.000</p>
                        </div>
                    </div>
                </div>
                
                <div class="transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                    <div class="overflow-hidden bg-white rounded-lg shadow-md">
                        <img src="product3.jpg" alt="Product 3" class="object-cover w-full h-64"/>
                        <div class="p-4">
                            <h3 class="mb-2 font-semibold text-gray-900">Nasi Goreng</h3>
                            <p class="text-gray-700">Rp 13.000</p>
                        </div>
                    </div>
                </div>
            </div>
           
            <div class="container mx-auto">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    
                    <div class="transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                        <div class="overflow-hidden bg-white rounded-lg shadow-md">
                            <img src="product4.jpg" alt="Product 4" class="object-cover w-full h-64"/>
                            <div class="p-4">
                                <h3 class="mb-2 font-semibold text-gray-900">Capcay</h3>                            
                                <p class="text-gray-700">Rp 12.000</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                        <div class="overflow-hidden bg-white rounded-lg shadow-md">
                            <img src="product5.jpg" alt="Product 5" class="object-cover w-full h-64"/>
                            <div class="p-4">
                                <h3 class="mb-2 font-semibold text-gray-900">Es Jeruk</h3>                            
                                <p class="text-gray-700">Rp 3.000</p>
                            </div>
                        </div>
                    </div>      
                    
                    <div class="transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                        <div class="overflow-hidden bg-white rounded-lg shadow-md">              
                            <img src="product6.jpg" alt="Product 6" class="object-cover w-full h-64"/>
                            <div class="p-4">
                                <h3 class="mb-2 font-semibold text-gray-900">Es Teh</h3>                            
                                <p class="text-gray-700">Rp 3.000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Recomended;