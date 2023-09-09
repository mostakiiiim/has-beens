import Link from 'next/link'
import Image from 'next/image';
import CustomButton from "./customButton"

const navbar = () => {
  return (
    <header className='w-full absolute z-10'>

      <nav className='max-m-[1440px] mx-auto flex justify-between items-center
      sm:px-16 px-6 py-4'>
        <Link href='/'>
          <Image 
          src='/logo.png' 
          alt='logo' 
          width={118} 
          height={100}
          className='object-contain' />

        </Link>
        <CustomButton
        title="Cart"
        btnType="button"
        containerStyles="bg-green-100 text-brown rounded-full m-w-[130px]"
        
        
        
        
        
        />
         
       
      </nav>

    </header>
  )
}

export default navbar