import React from 'react'
import Header from '../widgets/Header'
import Info from '../widgets/Info'


function Index() {
  return (
    <div className='container mx-auto p-4'>
        <Header />
        <main className='mt-5'>
            <Info/>
        </main>
    </div>
  )
}
export default Index