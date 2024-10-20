import React from 'react'

const Menu = ({image, title, description}) => {
  return (
      <div class="max-w-sm rounded overflow-hidden shadow-lg" style={{ fontFamily: 'Geneva' }}>
<img class="w-full" src= {image} alt="Sunset in the mountains"/>
<div class="px-6 py-4">
  <div class="font-bold text-xl mb-2">{title}</div>
  <p class="text-gray-700 text-base">
    {description}
  </p>
</div>
</div>
  )
}

export default Menu
