
import HeroSection from '@/app/contact/components/heroSection';
import ContactInfo from '@/app/contact/components/contactInfo';
import FaqsSection from '@/app/contact/components/faqs';
import ContactForm from '@/app/contact/components/contactForm';
import Image from 'next/image';

export default function Contact() {
  return (
    <main>
        <HeroSection/>
        <ContactInfo/>
        <section className='relative'>
          <div className='fixed inset-0 -z-10'>
            <Image
              src="/images/blue-exterior.webp"
              alt="blue sports car"
              className='object-cover'
              fill
              priority
            />
          </div>

          <div className='relative py-3'>
            <FaqsSection/>
            <ContactForm/>
          </div>
          
        </section>
    </main> 
  )
}