'use client'

import { useState } from 'react'

import { Video } from './Player.component'

export function Player() {
    const [toggle, setToggle] = useState<boolean>(false)

    function handleSetToggle() {
        setToggle((prev) => !prev)
    }

    return (
        <>
            {toggle ? (
                <Video url={'https://youtu.be/jSERI19DdjQ'} />
            ) : (
                <div
                    onClick={handleSetToggle}
                    className="group flex h-[20rem] w-full max-w-[55rem] cursor-pointer items-center justify-center rounded-3xl bg-purple-200 transition hover:bg-purple-300 md:h-[30.5rem]"
                >
                    <span className="rounded-full bg-purple-50 px-[.8125rem] py-[.5625rem] text-[.9375rem] font-semibold text-purple-950 transition group-hover:bg-purple-950 group-hover:text-purple-50">
                        Clique e assista a nossa apresentação 💜
                    </span>
                </div>
            )}
        </>
    )
}
