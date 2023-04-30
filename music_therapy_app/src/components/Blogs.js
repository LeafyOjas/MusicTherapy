import React from 'react'
import { Blog } from './Blog'

export const Blogs = () => {
    const img=[['./cells.avif','Music Therapy as an Alternative Cancer Treatment','/cancer'],
                ['./autism.avif','Music Therapy for Autistic Children','/autism'],
            ['./PTSD.avif','Music Therapy for PTSD','/PTSD'],
            ['./dementia.avif','Music Therapy for Dementia','/dementia']
        ]
  return (
    <div id="blog" className='mt-5 pt-4'>
        <h1>Blogs</h1>
        <div className='d-flex align-items-center justify-content-around pt-4 my-4'>
        {
            img.map((elem)=>{
                return <Blog img={elem[0]} title={elem[1]} url={elem[2]}></Blog>
            })
        }
        </div>
    </div>
  )
}
