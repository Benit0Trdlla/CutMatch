import Link from "next/link";
function Footer() {
    return (
        <footer className=" border-zinc-800 bg-black py-6">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm text-zinc-400">
                    <span className="text-white">© 2025</span> - <span className="text-orange-app font-semibold">CutMatch</span>
                </p>
                <p className="text-xs text-zinc-500 mt-1">
                    Made By <Link target="_blank" title="LinkedIn | Benito Tridella Dolce" href='https://www.linkedin.com/in/benitotridelladolce/' className="text-white">Benito Tridella Dolce</Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer