"use client"
import Image from 'next/image'
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';

export type UploadResult={
  info:{
    public_id:string
  }
  event:"success"
}

export default function Home() {
  const[ImageId,setImageId]=useState("")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <CldUploadButton
      onUpload={(result:UploadResult)=>{
       setImageId(result.info.public_id)
      }}
      uploadPreset="gw0x12b4" />
 {ImageId &&(    <CldImage
        width="400"
        height="300"
        src={ImageId}
        sizes="100vw"
        alt="Description of my image"
      />)} 
    </main>
  )
}
