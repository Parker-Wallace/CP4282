'use client';

import { useEffect } from 'react';

export function Links() {
  useEffect(() => {
    // Get the button and dropdown menu
    const dropdownBtn = document.getElementById('dropdown-btn');
    const dropdownMenu = document.getElementById('dropdown-menu');

    // Toggle the dropdown menu visibility when the button is clicked
    const toggleDropdownMenu = (e) => {
      e.stopPropagation();
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
    <>
      <nav className="bg-gray-800 p-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 text-white mr-6">
            Logo
          </div>

          <div className="flex">
            <a href="#" className="text-gray-300 hover:text-white mr-4">Link 1</a>
            <a href="#" className="text-gray-300 hover:text-white mr-4">Link 2</a>

            <div className="relative">
              <button id="dropdown-btn" className="text-gray-300 hover:text-white focus:outline-none focus:text-white">
                Dropdown
              </button>
              <div id="dropdown-menu" className="fixed right-0 hidden bg-gray-700 text-white py-3 mt-4 w-40 rounded-lg shadow-lg z-10">
                <a href="/FunWithUseState" className="block px-4 py-2 hover:bg-gray-600">Dropdown Link 1</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-600">Dropdown Link 2</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-600">Dropdown Link 3</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Links;
