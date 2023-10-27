'use client'

import Image from "next/image"
import ClickButton from "./ClickButton"
import { Menu, X } from "lucide-react"
import { useState } from "react"

interface Links {
    id: number,
    title: string,
    href?: string
}

const Link: Links[] = [
    {
        id: 1,
        title: 'How it works',
        href: '#howitworks'
    },
    {
        id: 2,
        title: 'Benefits',
        href: "#benefits"
    },
    {
        id: 3,
        title: 'Our Services',
        href: "#ourservices"
    },
    {
        id: 4,
        title: 'Team',
        href: "#team"
    },
    {
        id: 5,
        title: 'Reviews',
        href: "#reviews"
    },
    {
        id: 6,
        title: 'FAQ',
        href: "#faq"
    },
]

const Navbar = () => {

    const [menuIcon, setMenuIcon] = useState<boolean>(false)
    return (
        <>
            <header className="bg-gray-800 px-8 p-6">
                <nav className="flex justify-between">
                    <a href="#">
                        <span className="sr-only">MVP</span>
                        <Image
                            src='/title.png'
                            alt="website-image"
                            width={124}
                            height={36}
                        />
                    </a>
                    <div className="lg:hidden">
                        <div className="relative z-30">
                            {!menuIcon ? <Menu color="#ffffff" style={{ cursor: "pointer" }} onClick={() => setMenuIcon(true)} /> : <X color="#ffffff" style={{ cursor: "pointer" }} onClick={() => setMenuIcon(false)} />}
                        </div>
                        {menuIcon && <div className="fixed z-10 bg-[#030712] lg:hidden h-full top-0 right-0 w-1/2 py-16 px-4">
                            {Link.map((links) => (
                                <a key={links.id} href={links.href} className="flex justify-center p-4 rounded-lg hover:bg-[#111827] text-white font-family cursor-pointer mt-2 active:underline underline-offset-8 duration-200">
                                    {links.title}
                                </a>
                            ))}
                            <ClickButton name="View Plans" className="hover:bg-black hover:text-white duration-300 w-full" />
                        </div>}
                    </div>

                    <div className="gap-12 ml-24 hidden lg:flex">
                        {Link.map((links) => (
                            <a key={links.id} href={links.href} className="text-white font-family cursor-pointer mt-2 hover:scale-110 active:underline underline-offset-8 duration-200">
                                {links.title}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex">
                        <ClickButton name="View Plans" className="hover:bg-black hover:text-white duration-300" />
                    </div>
                </nav>
            </header>

        </>
    )
}

export default Navbar