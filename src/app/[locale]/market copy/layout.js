import Sidebar from "../components/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="layoutWrapper">
      <Sidebar />
      {children}
    </div>
  );
}
