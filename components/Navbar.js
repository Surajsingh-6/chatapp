import React from 'react'

function Navbar() {
  return (
    <div>
        {/* create a basic navbar */}
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <a href="/" className="text-white">Home</a>
            <a href="/about" className="text-white">About</a>
            <a href="/contact" className="text-white">Contact</a>
          </div>
        </nav>
    </div>
  )
}

export default Navbar