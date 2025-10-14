import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      {/* <Header /> */}
      <nav>
        <h1>CutMatch</h1>
      </nav>
      <div className="flex flex-col flex-1 items-center justify-center">
        {/* <Hero /> */}
        <p>drag and drop component</p>
        <p>select components...</p>
      </div>
      {/* <Footer /> */}
      <footer className=" border-zinc-800 bg-black py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-zinc-400">
            <span className="text-white">© 2025</span> - <span className="text-[#FF8C42] font-semibold">CutMatch</span>
          </p>
          <p className="text-xs text-zinc-500 mt-1">
            Made By <span className="text-white">Benito Tridella Dolce</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
