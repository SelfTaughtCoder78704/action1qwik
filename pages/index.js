import Head from 'next/head'
import Link from 'next/link'
import Hero from '../components/Hero'
import Details from '../components/Details'
import Strip from '../components/Strip'
import Callout from '../components/Callout'
import Actions from '../components/Actions'
import HomeContact from '../components/HomeContact'
import styles from '../styles/Home.module.css'


export default function Home() {

  return (
    <>
      <Head>
        <title>Action 1 Qwik Service | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero
        title="Action 1 Qwik Service"
        subtitle="FOR ALL OF YOUR AUTOMOTIVE CARE NEEDS"
        text="Make an appointment today!"
      >
        <Link href="/contact">
          <a className='btn btn-ghost m-0'>BOOK NOW</a>
        </Link>
      </Hero>
      <Details
        title="WHY CHOOSE ACTION ONE?"
        details={[
          {
            image: '/person.png',
            alt: 'person ready to talk',
            title: 'Personalized Customer Service',
            text: 'We are a family owned and operated business that has been serving the community for over 20 years. We are a family owned and operated business that has been serving the community for over 20 years. We are a family owned and operated business that has been serving the community for over 20 years.'
          },
          {
            image: '/stars.png',
            alt: 'five stars',
            title: '5 Star Talent',
            text: 'We are a family owned and operated business that has been serving the community for over 20 years. We are a family owned and operated business that has been serving the community for over 20 years. We are a family owned and operated business that has been serving the community for over 20 years.'
          },
          {
            image: '/tools.png',
            alt: 'tools',
            title: 'Work We Can Stand On',
            text: 'We are a family owned and operated business that has been serving the community for over 20 years. We are a family owned and operated business that has been serving the community for over 20 years. We are a family owned and operated business that has been serving the community for over 20 years.'
          },
        ]}
      >
        <Link href="/about">
          <a className='btn btn-red m-0 mt-60 mb-85'>ABOUT US</a>
        </Link>
      </Details>
      <Strip>
        <p className='m-0 strip-text'>We offer <span className='boldIt'>FREE</span> diagnoses with most major automotive repairs.</p>
      </Strip>
      <Callout
        image='/under.jpg'
        title="VEHICLES SERVICED"
        text="We offer all auto repair services for your foreign and domestic vehicles."
      >
        <Link href="/services">
          <a className='btn btn-ghost m-0'>LEARN MORE</a>
        </Link>
      </Callout>
      <Actions
        title="AUTO REPAIR SERVICES"
        actions={[
          {
            image: '/towing.jpg',
            alt: 'tow truck',
            title: 'TOWING',
            link: '/services'
          },
          {
            image: '/oil.jpg',
            alt: 'motor oil',
            title: 'OIL & LUBE',
            link: '/services'
          },
          {
            image: '/bay.jpg',
            alt: 'mechanic bay with cars lifted',
            title: 'AUTO REPAIR',
            link: '/services'
          }
        ]}
      >
        <Link href="/services">
          <a className='btn btn-red m-0 mt-60 mb-85'>ALL SERVICES</a>
        </Link>
      </Actions>
      <HomeContact />
    </>
  )
}



