import React from "react";
import "./style.css";
const Menu = () => {
    return (
        <section class="py-16 bg-gray-100 menu">
        <div class="container mx-auto">
            <h2 class="mb-8 text-3xl font-bold text-center">Our Menu</h2>
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            
                <div class="p-6 bg-white rounded-lg shadow-md">
                    <h3 class="mb-2 text-xl font-bold">Mie Ayam</h3>
                    <p class="text-gray-600">Rp. 10.000</p> 
                </div>
              
                <div class="p-6 bg-white rounded-lg shadow-md">
                    <h3 class="mb-2 text-xl font-bold">Bakso</h3>                    
                    <p class="text-gray-600">Rp. 9.000</p> 
                </div>
                
                <div class="p-6 bg-white rounded-lg shadow-md">
                    <h3 class="mb-2 text-xl font-bold">Nasi Goreng</h3>
                    <p class="text-gray-600">Rp. 12.000</p>                
                </div>
            </div>
        </div>
    </section>
    )
}

export default Menu;