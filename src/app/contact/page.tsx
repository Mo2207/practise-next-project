
import HeroSection from '@/app/contact/components/heroSection';
import ContactInfo from '@/app/contact/components/contactInfo';
import FaqsSection from '@/app/contact/components/faqs';
import ContactForm from '@/app/contact/components/contactForm';

export default function Contact() {
  return (
    <main>
        <HeroSection/>
        <ContactInfo/>
        <FaqsSection/>
        <ContactForm/>
    </main> 
  )
}