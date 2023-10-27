'use client'

import { useState } from "react"
import ClickButton from "./ClickButton"
import MaxWidthWrapper from "./MaxWithWrapper"
import ServicesData from "./ServicesData"

const OurServices: Steps[] = [
    {
        id: 8,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-6 lg:w-8 group-hover:text-[#381b75]"
            >
                <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
            </svg>
        ),
        title: 'E-Commerce',
    },
    {
        id: 9,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-6 lg:w-8 group-hover:text-[#381b75]"
            >
                <path
                    fillRule="evenodd"
                    d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z"
                    clipRule="evenodd"
                />
            </svg>
        ),
        title: 'Agencies',
    },
    {
        id: 10,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-6 lg:w-8 group-hover:text-[#381b75]"
            >
                <path
                    fillRule="evenodd"
                    d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6 12.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H6zm-.75 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM6 6.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3A.75.75 0 009 6.75H6z"
                    clipRule="evenodd"
                />
                <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 01-3 0V6.75z" />
            </svg>
        ),
        title: 'Real Estate',
    },
    {
        id: 11,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-6 lg:w-8 group-hover:text-[#381b75]"
            >
                <path
                    fillRule="evenodd"
                    d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm4.125 3a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm-3.873 8.703a4.126 4.126 0 017.746 0 .75.75 0 01-.351.92 7.47 7.47 0 01-3.522.877 7.47 7.47 0 01-3.522-.877.75.75 0 01-.351-.92zM15 8.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15zM14.25 12a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H15a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15z"
                    clipRule="evenodd"
                />
            </svg>
        ),
        title: 'Consultants',
    },
]

const Services = () => {

    const [showDivs, setShowDivs] = useState<number>(8);
    const handleClickEvent = (id: number) => {
        setShowDivs(id)
    }

    return (
        <>
            <div id="ourservices">
                <MaxWidthWrapper className="mb-12 lg:mt-28 flex flex-col items-center justify-center text-center">
                    <h2 className="max-w-7xl text-3xl font-bold md:text-5xl lg:text-6xl">Who we work with...</h2>
                    <div className="flex flex-col lg:flex-row justify-center gap-x-14 mt-20">
                        <div className="grid md:grid-cols-2 gap-4 flex-1">
                            {OurServices.map((data) => (
                                <div key={data.id} onClick={() => handleClickEvent(data.id)} className={`py-4 lg:py-20 lg:pb-6 lg:px-4 border border-black flex flex-col items-center group hover:bg-[#381b75] hover:border-[#381b75] duration-300 cursor-pointer ${showDivs === data.id ? "selected" : ""}`}>
                                    <div className="p-2 border border-black group-hover:bg-white group-hover:border-[#381b75] duration-300">{data.icon}</div>
                                    <p className="mt-6 group-hover:text-white duration-300">{data.title}</p>
                                    <ClickButton name="Learn More" className="mt-10" />
                                </div>
                            ))}
                        </div>
                        <div className="flex-1 text-left pl-10 mt-10 lg:mt-0">
                            {ServicesData.map(service => (
                                <article key={service.id} className={`${service.id === showDivs + 4 ? 'visible' : 'hidden'} mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg`}>
                                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{service.title}</h2>
                                    <div className="mt-6 text-gray-800 space-y-6">
                                        <p className="text-lg">{service.desc}</p>
                                        <ul className="font-light text-sm list-inside">
                                            {Object.values(service.lists).map((item, index) => (
                                                <li className="py-2" key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </article>
                            ))}

                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>
        </>
    )
}

export default Services