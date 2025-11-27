import Footer from "../components/footer";
import Navbar from "../components/navbar";
import OpcionsAdvanced from "@/components/OpcionsAdvanced";
import DragAndDrop from "@/components/drag-and-drop";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <Navbar />
      <div className="flex flex-col flex-1 items-center justify-center">
        <DragAndDrop />
        <OpcionsAdvanced />
      </div>
      <Footer />
    </div>
  );
}
