import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default RootLayout;
