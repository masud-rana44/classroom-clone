import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="flex ">
        <Sidebar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default RootLayout;
