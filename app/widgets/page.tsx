import React from 'react'
import RetailProduct from '@/components/widgets/RetailProduct'
import RetailProductandNews from '@/components/widgets/RetailProductandNews'

function RetailProducts() {
  return (
    <main className='flex justify-between mt-10 flex-wrap'>

      <section className='flex gap-10 flex-wrap md:flex-nowrap'>
        <RetailProduct />
        <RetailProductandNews />
      </section>

    
      <section className='flex gap-10 flex-wrap md:flex-nowrap mt-10'>
        <RetailProduct />
        <RetailProductandNews />
      </section>


      </main>
  )
}

export default RetailProducts