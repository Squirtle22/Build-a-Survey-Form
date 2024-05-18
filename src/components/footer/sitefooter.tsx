import React from 'react'

export default function Sitefooter() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className='justify-center items-center text-center text-[10px] bg-[#F5F5F5]'>
            {/* TODO: Social media links and copy right */}
            <div className="">

            </div>
            <p className="">&copy; {year} pikaxchu Got to catch them all! All rights reserved.</p>
        </footer>
    )
}
