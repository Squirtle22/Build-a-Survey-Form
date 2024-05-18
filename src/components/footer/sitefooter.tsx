import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const socialMedia = [
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/pikaxchu',
        img: '/links/facebook.svg',
        isExternal: true
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/pikaxchu',
        img: '/links/instagram.svg',
        isExternal: true
    },
    {
        name: 'Twitter',
        url: 'https://www.twitter.com/pikaxchu',
        img: '/links/twitter.svg',
        isExternal: true
    },
    {
        name: 'Discord',
        url: 'https://www.discord.com/pikaxchu',
        img: '/links/discord.svg',
        isExternal: true
    },
    {
        name: 'tiktok',
        url: 'https://www.tiktok.com/pikaxchu',
        img: '/links/tiktok.svg',
        isExternal: true 
    },
    {
        name: 'Youtube',
        url: 'https://www.youtube.com/pikaxchu',
        img: '/links/youtube.svg',
        isExternal: true
    }
]

export default function Sitefooter() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className='justify-center items-center text-center text-[10px] bg-[#F5F5F5]'>
            {/* TODO: Social media links and copy right */}
            <div className="flex justify-center items-center gap-6 py-6">
                {socialMedia.map((social, index) => (
                    <Link key={index} href={social.url} target={social.isExternal ? '_blank' : ''} rel="noreferrer">
                        <Image src={social.img} width={34} height={34} alt={social.name} className="w-6 h-6 mx-2" />
                    </Link>
                ))}
            </div>
            <p className="">&copy; {year} pikaxchu Got to catch them all! All rights reserved.</p>
        </footer>
    )
}
