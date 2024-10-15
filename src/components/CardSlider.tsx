import { ReactNode, useState } from 'react';
import mantisHome from '../assets/mantis.svg'
import desarrolloIcon from '../assets/desarrollo-web.svg'
import audioVisualIcon from '../assets/audiovisual.svg'

type serviceNameType = 'desarrollo' | 'audiovisual' | null;

type serviceType = {
  name: serviceNameType;
  title: string;
  img: ImageMetadata;
}

type bannerInterface = {
  title: string;
  description: ReactNode;
  cta: string;
}

function CardSlider() {
  const [itemActived, setItemActived] = useState<number>(0);
  const [bannerActived, setBannerActived] = useState<bannerInterface[]>([]);
  const [serviceSelected, setServiceSelected] = useState<{name: serviceNameType, title: string | null}>({
    name: null,
    title: null
  });

  const services: serviceType[] = [
    {
      name: 'desarrollo',
      title: 'desarrollo web',
      img: desarrolloIcon,
    },
    {
      name: 'audiovisual',
      title: 'producción audiovisual',
      img: audioVisualIcon,
    },
  ];

  const bannersDesarrollo: bannerInterface[] = [
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
  ];

  const bannersAudiovisual: bannerInterface[] = [
    {
      title: 'diseño y animación',
      description: <>Creamos diseños en 2D o 3D para contar la historia que necesitas <br /> mostrar. Darle vida a alguna campaña en Redes Sociales o crear ese <br /> video que explica como se usa uno de tus productos.</>,
      cta: 'Contactanos'
    },
  ];


  function selectOption(i: number) {
    console.log('option', i);
    setItemActived(i);
  }

  function selectTypeService(name: serviceNameType, title: string) {
    setServiceSelected({ ...serviceSelected, name, title});
    if(name === 'desarrollo'){
      setBannerActived(bannersDesarrollo);
    }
    if(name === 'audiovisual'){
      setBannerActived(bannersAudiovisual);
    }
  }

  function renderByService() {
    if(serviceSelected?.name !== null){
      return (
        <div className="relative z-10 bg-black/50 w-[990px] h-[420px] pl-[180px] pt-[80px]">
          <div className="text-5xl font-extrabold capitalize">{bannerActived[itemActived].title}</div>
          <div className="h-0.5 w-[80%] bg-green-500 mt-4 mb-3"></div>
          <div className="whitespace-normal text-[24px] font-semibold mb-2">{bannerActived[itemActived].description}</div>
          <button className="text-white bg-green-500 text-xl px-5 py-3 rounded-full font-bold">{bannerActived[itemActived].cta}</button>
        </div>
      )
    }else{
      return <div className="flex justify-center items-center relative z-10 bg-black/50 w-[990px] h-[420px] divide-x-4 divide-green-600">
        {services.map((service: serviceType) => (
          <div className="flex justify-center w-1/2 h-[55%] bg-transparent hover:bg-green-500 cursor-pointer transition-colors duration-500"
            onClick={() => selectTypeService(service.name, service.title)}
          >
            <img className='w-[85px]' src={service.img.src} alt="" />
          </div>
        ))}
      </div>
    }
  }

  function renderTitle() {
    if (serviceSelected?.name === null) {
      return <>¿Qué <span className="text-green-500">servicios</span> ofrecemos</>
    }
    if (serviceSelected?.name === 'desarrollo') {
      return <>{serviceSelected?.title}</>
    }
    if (serviceSelected?.name === 'audiovisual') {
      return <>{serviceSelected?.title}</>
    }
  }

  return (
    <>
    <div className="text-center text-6xl font-extrabold font-aktiv-grotesk pt-16 mb-20 2xl:mb-32">{renderTitle()}</div>
    <div className="flex relative justify-center font-aktiv-grotesk">
      <div className="absolute -top-10">
        <img width="580" src={mantisHome.src} alt=""/>
      </div>
      <div className="absolute -right-5 top-[45%] space-y-4">
        {bannerActived.map((_, i) => 
          <div key={i} onClick={() => selectOption(i)} className="w-[10px] h-[10px] rounded-full bg-main-green hover:w-[15px] hover:h-[15px] cursor-pointer option-slider"></div>
        )}
      </div>

        {renderByService()}
    </div>
    </>
  )
}

export default CardSlider;