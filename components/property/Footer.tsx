import React from 'react'

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-5 text-center" style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <h1 className="text-base font-semibold text-gray-800">
         Build with ❤ by{' CodeMaxima '}
        <span className="cursor-pointer font-semibold hover:text-violet-600">
          
        </span>
      </h1>
    </div>
  )
}


export default Footer
