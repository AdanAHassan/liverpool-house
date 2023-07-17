"use client"

import MenuItemDiv from './components/MenuItemDiv'
import { Header } from './components/Header'
import { useState } from "react"

export interface TagContent {
  vegetarian?: {
    text: "Vegetarian",
    color: "#76a4ed"
  },
  fish?: {
    text: "Fish",
    color: "#cde1fe"
  }, 
  meat?: {
    text: "Meat",
    color: "#fda4af"
  },
  chicken?: {
    text: "Chicken",
    color: "#fce7f3"
  },
  drink?: {
    text: "Drink",
    color: "#fde047"
  }
}



export type MenuContent = {
  title: string,
  tags: TagContent,
  served: "Cold" | "Warm" | "Hot",
  summary: string,
  servingSize: number,
  drinks?: boolean,
  roasted?: boolean,
  header: string
}

let menuContent: MenuContent[] = [
  {
    title: "Abuela's Picadillo",
    tags: {
      meat: {
        text: "Meat",
        color: "#fda4af"
      }
    },
    served: "Warm",
    summary: "Cuban picadillo (ground beef hash/chili) which is usually served with white rice, beans and plantain",
    servingSize: 2,
    drinks: true,
    roasted: false,
    header: "Abuela"
  },
  {
    title: "Cafe Latte",
    tags: {
      drink: {
        text: "Drink",
        color: "#fde047"
      }
    },
    served: "Warm",
    summary: "A coffee drink made with espresso and steamed milk",
    servingSize: 1,
    header: "Cafe"
  },
  {
    title: "Roasted Salmon",
    tags: {
      vegetarian: {
        text: "Vegetarian",
        color: "#76a4ed"
      },
      fish: {
        text: "Fish",
        color: "#cde1fe"
      }
    },
    served: "Cold",
    summary: "Garlic butter smothered salmon is a given. It's possibly one of the most amazing, delicious ways to eat a juicy piece of salmon and gets cooked twice a week in this house. It's been a while since we gave you salmon and it's time.",
    servingSize: 2,
    drinks: false,
    roasted: true,
    header: "Salmon"
  },
  {
    title: "Chicken Parmesan",
    tags: {
      chicken: {
        text: "Chicken",
        color: "#fce7f3"
      }
    },
    served: "Hot",
    summary: "Chicken Parmesan is such a classic and one of those Italian dishes that everyone loves. The chicken is Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    servingSize: 2,
    drinks: true,
    roasted: true,
    header: "Chicken"
  }
]



let headerTextArray = menuContent.map((item, index) => {
  let header = item.header;
  return { header, index }
})

export default function Home() {

  const [hoverIndex, setHoverIndex] = useState(0)

  return (
    <main className="relative flex h-screen w-screen bg-white flex-col items-center">
      <div className="w-full h-1/2" >
        <Header 
          headerTextArray={headerTextArray} 
          hoverIndex={hoverIndex}
        />
      </div>
      <div className="w-full grid grid-cols-4 h-1/2 bg-green-900">
      {
        menuContent.map((item: MenuContent, index) => (
          <MenuItemDiv
            key={`${item.header}-${index}`}
            menuItemData={item}
            index={index}
            setHoverIndex={setHoverIndex}
          />
        ))
      }
      </div>
    </main>
  )
}
