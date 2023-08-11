"use client"
import { useParams } from 'next/navigation'
import React from 'react'
import workDes from '../work/workDes'

export default function SlugPage() {

    const router = useParams()
    console.log(router)
    const { slug } = router;

    const work = workDes.details.find(a => a.slug == slug)

  return (
    <div>SlugPage

        <div>
            {work.title}
        </div>
    </div>
  )
}
