import Content from "./components/Content";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";

const App = () => {
  return (
    <div className="relative flex flex-col max-w-[1240px] mx-auto border-[#544541]">
      <div className="w-full relative">
        <Navbar />
      </div>
      <main className="relative mt-[200px]">
        <Home />
        <Content />
        <NewsLetter />
      </main>
    </div>
  );
};

export default App;
