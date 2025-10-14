function Navbar() {
    return (
        <nav className=" text-white py-4">
            <div className="flex items-center justify-center gap-4">
                <h1 className="text-2xl font-bold text-orange-app">CutMatch</h1>
                <span>|</span>
                <p className="sm:block hidden mb-0">El corte que encaja contigo.</p>
            </div>
        </nav>
    );
}

export default Navbar