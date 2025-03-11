import React from 'react'
import RandomMap from '../components/contact/RandomMap'
import LeaveMessageForm from '../components/contact/LeaveMessage'
import ContactDetails from '../components/contact/ContactDetails'

const page = () => {
  return (
    <div  className="flex justify-center py-10 lg;py-20">
      <div className='p-4 w-full lg:w-[76%]'>
      <RandomMap/>
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center md:items-start mt-10 lg:mt-20">
      <ContactDetails/>
      <LeaveMessageForm/>
      </div>
      </div>
    </div>
  )
}

export default page