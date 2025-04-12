import { Toaster } from "react-hot-toast";
import AccountView from "./Components/AccountView";
import RightNavbar from "./Components/LeftSidebar";
import Developer from "./Components/Dev/Developer";

export default function App() {
  return (
    <>
     <title>(5) TOPRAK (toprak.altins) | TikTok</title>
     <div className="flex h-screen">
       <RightNavbar />
       <AccountView />
       <Developer />
     </div>
     <Toaster position="right-bottom" />
    </>
  )
}