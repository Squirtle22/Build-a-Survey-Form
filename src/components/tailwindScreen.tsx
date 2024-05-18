import React from 'react'

export default function TailwindScreen() {
    if (process.env.NODE_ENV !== "production") {
        return (
            <div className="fixed top-0 right-0 z-50 bg-pink-500 text-white shadow-md px-2 rounded-bl font-mono">
                <span className="sm:hidden">default</span>
                <span className="hidden sm:inline md:hidden">sm</span>
                <span className="hidden md:inline lg:hidden">md</span>
                <span className="hidden lg:inline xl:hidden">lg</span>
                <span className="hidden xl:inline 2xl:hidden">xl</span>
                <span className="hidden 2xl:inline">2xl</span>
            </div>
        )
    }
    else { return null }
}   