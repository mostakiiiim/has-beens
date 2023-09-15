
import Image from 'next/image';

import { CustomButton } from './export';

const handleScroll = () => { };
const hero = () => {
  return (

    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <div className="hero__title">
          The Only Shots You Need.

        </div>
        <p className="hero__subtitle">
          {"You're Never Alone with a Cup of Coffee"}
        </p>
        <CustomButton

          title="Buy Now"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"

          handleClick={handleScroll}
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src="/coffee1.png" alt="hero" fill className="object-contain" />
          <div className='hero__image-overlay '>

          </div>
        </div>

      </div>

    </div>

  )
}

export default hero