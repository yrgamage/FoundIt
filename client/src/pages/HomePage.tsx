import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SignIn from '../signIn/SignIn'
import SignUp from '../signUp/SignUp'

function HomePage() {
  return (
  
    <div className='bg-background'>
      <Navbar />
      {/* Add your home page content here */}
      <h1 >Welcome to the Home Page</h1>
      <p>This is a simple home page component.</p>
      <SignIn />
      <SignUp />
      <Footer />
    </div>
  )
}

export default HomePage