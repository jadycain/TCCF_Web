import Sidebar from "../components/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="layoutWrapper">
      <div className="layoutWrapper__container">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
