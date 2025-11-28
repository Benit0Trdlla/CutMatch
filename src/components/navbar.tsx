'use client'
import { useState } from "react";
import { SettingsIcon, CircleHelpIcon } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { HelpDialog } from "./help-dialog";
import { Button } from "./ui/button";
import { setLanguage } from "@/lib/language"
import { useRouter } from 'next/navigation'
import { useTranslation } from "@/hooks/useTranslation";

function Navbar() {
    const [isHelpOpen, setIsHelpOpen] = useState(false)
    const router = useRouter()
    const { t, lang } = useTranslation()

    const setLanguageToggle = (lang: string) => {
        setLanguage(lang);
        router.refresh()
    }

    return (
        <>
            <nav className=" text-white py-4 animate-blurred-fade-in">
                <div className="flex items-center justify-center gap-4">
                    <h1 className="text-2xl font-bold text-orange-app" title="CutMatch | El corte que encaja contigo.">CutMatch</h1>
                    <span>*</span>
                    <p className="sm:block hidden mb-0">{t.HEADER.HEADER_SUBTITLE}</p>
                    <span className="sm:block hidden">|</span>
                    <div className="flex items-center gap-2">
                        <Select onValueChange={(e) => setLanguageToggle(e)}>
                            <SelectTrigger className="flex sm:hidden w-auto border-orange-app">
                                <SettingsIcon className="size-5" />
                            </SelectTrigger>
                            <SelectTrigger className="hidden sm:flex w-auto border-orange-app">
                                <SelectValue placeholder={lang} className="hidden" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="ES">ES</SelectItem>
                                <SelectItem value="EN">EN</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="hover:cursor-pointer hover:bg-black hover:text-orange-app"
                            onClick={() => setIsHelpOpen(true)}
                        >
                            <CircleHelpIcon className="size-6" />
                        </Button>
                    </div>
                </div>
                <HelpDialog open={isHelpOpen} onOpenChange={setIsHelpOpen} />
            </nav>
        </>
    );
}

export default Navbar