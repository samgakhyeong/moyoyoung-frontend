import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const BasicLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="w-full max-w-screen-lg mx-auto">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default BasicLayout;
