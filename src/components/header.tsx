import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div>
      header
<div className="relative w-60 h-50 bg-red-500">
  <Image
    src="/Slice-5_4.avif"
    alt="logo"
    fill
    className="object-cover"
    sizes='auto'
    priority
  />
  </div>
      
    </div>
  )
}

export default Header