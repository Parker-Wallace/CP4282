'use client'
 
import { useEffect } from 'react';

export function Links() {
    useEffect(() => {
        // Get the button and dropdown menu
        const dropdownBtn = document.getElementById('dropdown-btn');
        const dropdownMenu = document.getElementById('dropdown-menu');

        // Toggle the dropdown menu visibility when the button is clicked
        const toggleDropdownMenu = () => {
            dropdownMenu.classList.toggle('hidden');
        };

        dropdownBtn.addEventListener('click', toggleDropdownMenu);

        // Close the dropdown menu when clicking outside of it
        const closeDropdownMenu = (event) => {
            if (!dropdownMenu.contains(event.target) && event.target !== dropdownBtn) {
                dropdownMenu.classList.add('hidden');
            }
        };

        document.addEventListener('click', closeDropdownMenu);

        // Clean up event listeners when the component unmounts
        return () => {
            dropdownBtn.removeEventListener('click', toggleDropdownMenu);
            document.removeEventListener('click', closeDropdownMenu);
        };
    }, []); // Empty dependency array to ensure the effect runs only once after initial render

    return (
      <nav class="bg-gray-800 p-4">
      <div class="flex justify-between items-center">
       
          <div class="flex-shrink-0 text-white mr-6">
              Logo
          </div>
  
        
          <div class="flex">
            
              <a href="#" class="text-gray-300 hover:text-white mr-4">Link 1</a>
             
              <a href="#" class="text-gray-300 hover:text-white mr-4">Link 2</a>
  
     
              <div class="relative">
                  <button id='dropdown-btn' class="text-gray-300 hover:text-white focus:outline-none focus:text-white">
                      Dropdown
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M5.41 6.41a.5.5 0 01.71 0l4.59 4.59a.5.5 0 010 .71l-4.59 4.59a.5.5 0 01-.71-.71L9.29 12 5.41 8.12a.5.5 0 010-.71z" clip-rule="evenodd" />
                      </svg>
                  </button>
                  <div id='dropdown-menu' class="absolute hidden bg-gray-700 text-white py-2 mt-2 w-32 rounded-lg shadow-lg z-10 " >
                      <a href="#" class="block px-4 py-2 hover:bg-gray-600">Dropdown Link 1</a>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-600">Dropdown Link 2</a>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-600">Dropdown Link 3</a>
                  </div>
              </div>
          </div>
      </div>
  </nav>
  
    );
}

export default Links;
