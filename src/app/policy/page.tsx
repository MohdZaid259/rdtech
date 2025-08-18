import React from 'react'
import { privacyPolicy } from '../../../public/footer'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | RDTech Group",
  openGraph: {
    images: [
      {
        url: "/public/logo/preview.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/public/logo/preview.jpg"],
  },
};

function page() {
  return (
    <div className='mx-2 md:mx-16 my-16 md:mt-24'>
      <h1 className='font-bold text-3xl mb-4'>Privacy Policy</h1>
      <div dangerouslySetInnerHTML={{ __html: privacyPolicy }} />
    </div>
  )
}

export default page