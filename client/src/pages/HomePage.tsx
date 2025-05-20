import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SignIn from '../signIn/SignIn'
import SignUp from '../signUp/SignUp'
import LostItemCard from '../components/LostItemCard'

function HomePage() {
  return (
    <>
     <Navbar />
    <div className='bg-background'>
      <LostItemCard 
        title="Lost Wallet"
        imageUrl="https://example.com/wallet.jpg"
        date="2024-06-01"
        status="lost"
      />
    
      <SignUp />
      <SignIn/>
      
    </div>
    <Footer />
    </>
  
    
  )
}

export default HomePage