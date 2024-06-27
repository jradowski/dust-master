// components/Dropdown.tsx
"use client";

import { useState } from 'react';
import Link  from "next/link";

const Dropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border-2 border-gray-600 shadow-sm px-4 py-2 bg-gray-700 text-sm font-medium text-white hover:bg-gray-800 hover:bg-opacity-50 hover:border-gray-400 "
                    id="options-menu"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={toggleDropdown}
                >
                    Menu
                    <svg
                        className="-mr-1 ml-2 h-5 w-5 "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-500 ring-1 ring-black ring-opacity-5 dark:bg-blue-900"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <div className="py-1 " role="none">
                        <div
                            className="block w-full text-center text-white px-4 py-2 text-sm  hover:bg-gray-600 dark:hover:bg-blue-500 dark:hover:bg-opacity-50 dark:hover:border-blue-950"
                        >
                            <Link
                                href="/dashboard"
                            >
                                Stajnia
                            </Link>
                        </div>
                        <div
                            className="block w-full text-center text-white px-4 py-2 text-sm  hover:bg-gray-600 dark:hover:bg-blue-500 dark:hover:bg-opacity-50 dark:hover:border-blue-950"
                        >
                            <Link
                                href="/"
                            >
                               Kadra
                            </Link>
                        </div>

                        <div
                            className="block w-full text-center text-white px-4 py-2 text-sm  hover:bg-gray-600 dark:hover:bg-blue-500 dark:hover:bg-opacity-50 dark:hover:border-blue-950"
                        >
                            <Link
                                href="/"
                            >
                                Strona główna
                            </Link>
                        </div>
                        <div
                            className="block w-full text-center text-white px-4 py-2 text-sm  hover:bg-red-400 dark:hover:bg-red-500 dark:hover:bg-opacity-50 dark:hover:border-blue-950"
                        >
                            <Link
                                href="/workers"
                            >
                                Panel logowanias
                            </Link>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
