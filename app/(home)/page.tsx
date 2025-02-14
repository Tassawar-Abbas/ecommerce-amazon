import HomeCarousel from '@/components/shared/home/HomeCarousel'
import data from '@/lib/data'
import React from 'react'

export default function Home() {
 return(
    <HomeCarousel items={data.carousels}/>
 )
}
