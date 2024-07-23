import React, { useContext } from 'react'
import { AppContext } from './Context'
import { TriggerProps } from './Props'
import Image from 'next/image'
export function Trigger({
    component = 'button',
    className = 'offcanvas-trigger',
    styles = {},
    children
}: TriggerProps) {
    const { handleOpen, randomId } = useContext(AppContext)

    return (
        <button id="navbar-toggle-btn" className="navbar-toggler w-[50px] h-[50px]" type="button" onClick={handleOpen}>
            <Image width={50} height={50} src="/img/text-center.svg" id="menu-ico" alt='Menu' />
        </button>
    )
}