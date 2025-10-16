import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      {/* <Header /> */}
      <Navbar />
      <div className="flex flex-col flex-1 items-center justify-center">
        {/* <Hero /> */}
        <p>drag and drop component</p>
        <p className="animate-fade-in-up">Datos relevantes para una mejor precisión en su corte.</p>
      </div>
      <Footer />
    </div>
  );
}
