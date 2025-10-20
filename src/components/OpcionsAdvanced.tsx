'use client'
import { useState } from "react"
import { CornerRightDownIcon } from 'lucide-react'
import { UserInfoSelects } from "./user-info-selects"
function OpciosnAdvanced() {
    const [isClicked, setIsClicked] = useState(false)
    return (
        <>
            <div onClick={() => setIsClicked(true)} className={`${isClicked ? 'animate-slide-out-top hidden' : 'flex items-center gap-2 justify-center hover:underline hover:text-orange-app hover:translate-1 hover:duration-300'}`}>
                <p className="font-bold text-xl">
                    Opciones Advanzadas
                </p>
                <CornerRightDownIcon size={16} />
            </div>
            {isClicked && <UserInfoSelects />}

        </>
    )
}

export default OpciosnAdvanced