'use client'
import { useState } from "react"
import { CornerRightDownIcon } from 'lucide-react'
import { UserInfoSelects } from "./user-info-selects"
import { useTranslation } from "@/hooks/useTranslation"
function OpcionsAdvanced() {
    const [isClicked, setIsClicked] = useState(false)
    const { t } = useTranslation()
    return (
        <>
            <div onClick={() => setIsClicked(true)} className={`${isClicked ? 'animate-slide-out-top hidden' : 'animate-slide-in-bottom mt-8 flex items-center gap-2 justify-center hover:underline hover:text-orange-app hover:translate-1 hover:duration-300 hover:cursor-pointer'}`}>
                <p className="font-bold text-xl">
                    {t.ADVANCED_OPTIONS.TITLE}
                </p>
                <CornerRightDownIcon size={16} />
            </div>
            {isClicked && <UserInfoSelects setIsClicked={setIsClicked}/>}

        </>
    )
}

export default OpcionsAdvanced