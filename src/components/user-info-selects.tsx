"use client"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "./ui/input"
import { toast } from "sonner"
import { useTranslation } from "@/hooks/useTranslation"
import { CornerRightUpIcon } from 'lucide-react'

type UserInfoSelects = {
    Gender: string
    Age: string
}

type UserInfoSelectsProps = {
    setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

export function UserInfoSelects({ setIsClicked }: UserInfoSelectsProps) {
    const [gender, setGender] = useState<UserInfoSelects["Gender"]>("Hombre")
    const [age, setAge] = useState<UserInfoSelects["Age"]>("0")
    const { t } = useTranslation()

    // console.log({ gender, age });

    if (age > '100') {
        toast.error('La edad no puede ser mayor a 100')
    }

    return (
        <>
            <div className="mt-8 animate-slide-in-bottom flex items-center justify-center gap-8">
                <div className="flex items-center gap-3">
                    <label className="text-white font-medium">{t.ADVANCED_OPTIONS.INPUT_GENRE.LABEL}</label>
                    <Select value={gender} onValueChange={setGender}>
                        <SelectTrigger className="w-32 bg-transparent border-2 border-[#FF8C42] text-white rounded-full hover:bg-[#FF8C42]/10">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {t.ADVANCED_OPTIONS.INPUT_GENRE.PLACEHOLDER.map((genre) => (
                                <SelectItem key={genre} value={genre}>
                                    {genre}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

            </div>
                <button className="mt-4 mx-auto flex items-center justify-center gap-4" onClick={() => { setIsClicked(prev => !prev) }}>
                    <p>{t.ADVANCED_OPTIONS.BACK}</p><span><CornerRightUpIcon size={16} /></span>
                </button>
        </>
    )
}
