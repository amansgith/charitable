import React from 'react'
import NGOcard from './NGOcard'

const ngos = [
    {
        image: "/ngo-1.jpg",
        taxAvail: true,
        title: "Donate Orphan",
        subtitle: "Donate now get reward in life."
    },
    {
        image: "/ngo-1.jpg",
        taxAvail: true,
        title: "Donate Orphan",
        subtitle: "Donate now get reward in life."
    },
    {
        image: "/ngo-1.jpg",
        taxAvail: true,
        title: "Donate Orphan",
        subtitle: "Donate now get reward in life."
    },
    {
        image: "/ngo-1.jpg",
        taxAvail: true,
        title: "Donate Orphan",
        subtitle: "Donate now get reward in life."
    },
]

const NGOs = () => {
  return (
    <div className='max-w-7xl mx-auto my-6 grid grid-cols-3 gap-8'>
        {
            ngos.map((ngo, ind) => (
                <NGOcard image={ngo.image} taxAvail={ngo.taxAvail} title={ngo.title} subtitle={ngo.subtitle} key={ind}/>
            ))
        }
    </div>
  )
}

export default NGOs