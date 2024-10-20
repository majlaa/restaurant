import React from 'react'
import Menu from '../pages/Menu'
import '../styles/Menu.css'
import Lamb from '../assets/lamb.jpg'
import Appetizer from '../assets/appetizer.jpg'
import Salmon from '../assets/salmon.jpg'
import Shrimp from '../assets/shrimp.tempura.jpg'
import California from '../assets/california.roll.jpeg'
import Sushi from '../assets/sushi.mix.jpg'
import Oysters from '../assets/oysters.jpg'
import Appetizer2 from '../assets/appetizer2.jpg'
import Chocolate from '../assets/chocolate.jpg'
import Strawberry from '../assets/Strawberry.jpg'
import Dessert from '../assets/dessert.jpg'

    const menu = [
        {
          imageSrc: Lamb,
          title: "Lamb rack and vegetables",
          description: "A gourmet lamb rack, perfectly cooked and garnished with rosemary and garlic, served with a side of creamy polenta and roasted seasonal vegetables."
        },
        {
          imageSrc: Sushi,
          title: "Sushi mix",
        },
        {
          imageSrc: Shrimp,
          title: "Shrimp tempura roll",
        },
        {
          imageSrc: California,
          title: "California roll",
        },
        {
          imageSrc: Salmon,
          title: "King salmon, on green tea soba noodles",
          description: "Flame-finished king salmon, nestled on a twirled roll of green tea soba noodles in creamy sesame cream."
        },
        {
          imageSrc: Oysters,
          title: "Oysters",
          description: "Baked oysters with lemon, parsley, and crispy breadcrumbs."
        },
        {
          imageSrc: Appetizer,
          title: "Appetizer",
          description: "Roasted Tomato Crostini with Walnut Almond Pesto and Goat Cheese."
        },
        {
          imageSrc: Appetizer2,
          title: "Salmon Gravlax and Mustard Cream Canapés",
          description: "Packed with citrus zest and served in edible, crispy shells, this gravlax recipe paired perfectly with a clementine- and lemon-laced cocktail."
        },
        {
          imageSrc: Chocolate,
          title: "A Chocolate Paradise",
          description: "Chocolate tart with fresh raspberries cream."
        },
        {
          imageSrc: Strawberry,
          title: "Strawberry Millefeuille",
        },
        {
          imageSrc: Dessert,
          title: "Raspberry taste",
          description: "Chocolate mousse with raspberry sauce and fresh raspberries."
        },
      ];  
      
      function MenuList() {
        return (
            <div className="menu-list">
              {menu.map((menu, index) => (
            <Menu
            key={index}
            image={menu.imageSrc}
            title={menu.title}
            description={menu.description}
            />
          ))}
            </div>
        );
    }

export default MenuList
