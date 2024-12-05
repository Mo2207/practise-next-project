
'use client';

import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className=''>
      {/* blue sports car image */}
      <div className='relative w-full min-h-screen'>
        <Image
          src="/images/blue-exterior.webp"
          alt="Blue sports car"
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
      </div>
    </section>
  )
}

export default HeroSection;