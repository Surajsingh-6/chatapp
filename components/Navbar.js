import React from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
function Navbar() {
    return (
        <div  className="h-16 w-full">
            {/* create basic navbar */}
            
                <div className="px-16 h-full w-full bg-blue-600 mx-auto flex justify-between items-center">
                    <h1>ChatApp</h1>
                    <div className="flex gap-16">
                        <Link href="/" className="text-white">
                            Home
                        </Link>
                        <Link href="/Groups" className="text-white">
                            Groups
                        </Link>
                        <Link href="/chat" className="text-white">
                            Contact
                        </Link>
                        <div> <UserButton/></div>
                    </div>
                </div>
           
        </div>
    );
}

export default Navbar;
