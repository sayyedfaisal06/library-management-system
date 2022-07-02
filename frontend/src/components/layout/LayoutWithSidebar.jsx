import Sidebar from "../sidebar/Sidebar";
import './style.css'

const LayoutWithSidebar = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="bg-lightBg w-full">{children}</main>
    </div>
  )
}

export default LayoutWithSidebar