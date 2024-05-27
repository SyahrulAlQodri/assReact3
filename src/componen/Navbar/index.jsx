import React from "react";
import "./style.css";
const Navbar = () => {
    return (
<section>
    <nav class="p-4 bg-gray-800">
        <div class="container mx-auto flex items-center justify-between">
            <a href="#" class="text-lg font-bold text-white">Rumah Lapar</a>
            <ul class="flex space-x-4">
                <li><a href="index.html" class="text-white">Home</a></li>
                <li><a href="menu.html" class="text-white">Menu</a></li>
                <li><a href="#" class="text-white">About Us</a></li>
                <li><a href="#" class="text-white">Contact</a></li>
            </ul>
        </div>
    </nav>
</section>
    )
}

export default Navbar;