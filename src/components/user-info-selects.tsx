"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "./ui/input"

export function UserInfoSelects() {
    const [gender, setGender] = useState("Hombre")
    const [age, setAge] = useState('0')
    if (age > '100') {
        alert('La edad no puede ser mayor a 100')
    }

    return (
        <div className="animate-slide-in-bottom flex items-center justify-center gap-8">
            <div className="flex items-center gap-3">
                <label className="text-white font-medium">Genero</label>
                <Select value={gender} onValueChange={setGender}>
                    <SelectTrigger className="w-32 bg-transparent border-2 border-[#FF8C42] text-white rounded-full hover:bg-[#FF8C42]/10">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Hombre">Hombre</SelectItem>
                        <SelectItem value="Femenino">Femenino</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex items-center gap-3">
                <label className="text-white font-medium">Edad</label>
                {/* <Select value={age} onValueChange={setAge}>
                    <SelectTrigger className="w-24 bg-transparent border-2 border-[#FF8C42] text-white rounded-full hover:bg-[#FF8C42]/10">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        {Array.from({ length: 83 }, (_, i) => i + 18).map((ageValue) => (
                            <SelectItem key={ageValue} value={String(ageValue)}>
                                {ageValue}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select> */}
                <Input type="number" className="w-24 bg-transparent border-2 border-[#FF8C42] text-white rounded-full hover:bg-[#FF8C42]/10" max="100" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
        </div>
    )
}
