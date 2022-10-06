import NavBar from "./NavBar"
import Head from "next/head"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <>

      <NavBar

        logo="/logo.png"
        links={[
          { text: 'Home', url: '/' },
          { text: 'About', url: '/about' },
          { text: 'Contact', url: '/contact' },
          { text: 'Services', url: '/services' },
          { text: 'BOOK NOW', url: '#contact', classes: 'btn btn-red' },
        ]}
      />
      <main>{children}</main>
      <Footer
        logo="/logo.png"
        address={{
          street: '1234 Main St.',
          city: 'Anytown',
          state: 'CA',
          zip: '12345',
          phone: '(123) 456-7890'
        }}
        hours={{
          monday: 'Monday: 8am - 5pm',
          tuesday: 'Tuesday: 8am - 5pm',
          wednesday: 'Wednesday: 8am - 5pm',
          thursday: 'Thursday: 8am - 5pm',
          friday: 'Friday: 8am - 5pm',
          saturday: 'Saturday: 8am - 5pm',
          sunday: 'Sunday: Closed'
        }}
      />
    </>
  )
}
