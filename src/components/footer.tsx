'use client'
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
function Footer() {
    const { t } = useTranslation()
    return (
        <footer className=" border-zinc-800 bg-black py-6 animate-blurred-fade-in">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm text-zinc-400">
                    <span className="text-white">© 2025</span> - <span className="text-orange-app font-semibold">CutMatch</span>
                </p>
                <p className="text-xs text-zinc-500 mt-1">
                    {t.FOOTER.TEXT} <Link target="_blank" title="LinkedIn | Benito Tridella Dolce" href='https://www.linkedin.com/in/benitotridelladolce/' className="text-white hover:underline hover:decoration-orange-app hover:translate-1 hover:duration-300">Benito Tridella Dolce</Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer