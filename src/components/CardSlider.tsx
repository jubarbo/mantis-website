import { useState } from 'react';
import mantisHome from '../assets/mantis.svg'

function CardSlider() {
  const [itemActived, setItemActived] = useState<number>(0)
  const banners = [
    {
      title: 'Webs a medida',
      description: <>Cada cliente es único y tienen una necesidad diferente, por eso <br/> creemos que la solución para desarrollar una web es crear un <br/> diseño de cero sin utilizar plantillas pre creadas.</>,
      cta: 'Contactanos'
    },
    {
      title: 'Ecommerce',
      description: '',
      cta: 'Contactanos'
    },
    {
      title: 'Campañas digitales',
      description: '',
      cta: 'Contactanos'
    },
  ]

  function selectOption(i: number) {
    console.log('option', i);
    setItemActived(i);
  }

  return (
    <div className="flex relative justify-center font-aktiv-grotesk">
      <div className="absolute -top-10">
        <img width="580" src={mantisHome.src} alt=""/>
      </div>
      <div className="absolute -right-5 top-[45%] space-y-4">
        {banners.map((_, i) => 
          <div key={i} onClick={() => selectOption(i)} className="w-[10px] h-[10px] rounded-full bg-main-green hover:w-[15px] hover:h-[15px] cursor-pointer option-slider"></div>
        )}
        {/* <!-- <div className="w-[10px] h-[10px] rounded-full bg-main-green"></div>
        <div className="w-[10px] h-[10px] rounded-full bg-main-green"></div> --> */}
      </div>
      <div className="relative z-10 bg-black/50 w-[990px] h-[420px] pl-[180px] pt-[80px]">
        <div className="text-5xl font-extrabold capitalize">{banners[itemActived].title}</div>
        <div className="h-0.5 w-[80%] bg-green-500 mt-4 mb-3"></div>
        <div className="whitespace-normal text-[24px] font-semibold mb-2">{banners[itemActived].description}</div>
        <button className="text-white bg-green-500 text-xl px-5 py-3 rounded-full font-bold">{banners[itemActived].cta}</button>
      </div>
    </div>
  )
}

export default CardSlider;