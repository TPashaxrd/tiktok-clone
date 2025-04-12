// block

import data from "../Pages/data";
import { SlUserFollow } from "react-icons/sl";
import { LuMessageSquare } from "react-icons/lu";
import { Share2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function AccountView() {

    const [isFollow, setIsFollow] = useState(false);
    const [seeProfile, setSeeProfile] = useState(false);

    useEffect(() => {
        const isFollowed = localStorage.getItem("isFollow");
        if (isFollowed === "true") {
            setIsFollow(false);
        } else if (isFollowed === "false") {
            setIsFollow(true);
        }
    }, [])

    const handleFollow = () => {
        setIsFollow(!isFollow);
        if (isFollow === false) {
            toast.success("Follow Successfully!", {
                style: {
                    background: "#000000",
                    color: "white",
                    fontFamily: 'Space Grotesk, serif',
                }
            });
            localStorage.setItem("isFollow", "true");
        }
        else if (isFollow === true) {
            toast.success("UnFollow Successfully!", {
                style: {
                    background: "#000000",
                    color: "white",
                    fontFamily: 'Space Grotesk, serif',
                }
            });
        }
        localStorage.setItem("isFollow", "false");
    }

    function fullscreenProfile() {
        setSeeProfile(!seeProfile);
    }

    return (
    <div className="w-full mr-220 text-white mt-20 px-10">
    <div className={`flex items-center gap-6 ${seeProfile ? "flex-col" : ""}`}>
      <img
        src={data.avatar.toLowerCase()}
        onClick={fullscreenProfile}
        alt="avatar"
        className={`rounded-full object-cover border-2 border-white cursor-pointer 
        ${seeProfile ? "w-full h-full max-w-screen max-h-screen" : "w-28 h-28"}`} 
      />
      {!seeProfile && (
        <div className="flex flex-col">
        <h1 className="text-2xl font-bold">{data.nickName}</h1>
        <span className="text-lg text-gray-400">{data.name}</span>
        <div className="flex gap-4 mt-2 text-sm text-gray-300">
          <div className="flex flex-col items-center">
            <span className="font-semibold">{data.followers}</span>
            <span className="text-xs">Followers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold">{data.following}</span> 
            <span className="text-xs">Follow</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold">{data.likedVideos}</span>
            <span className="text-xs">Likes</span>
          </div>
        </div>
        </div>
      )}
    </div>

      <div className="flex gap-2 mt-6">
        {isFollow ? (
            <button onClick={handleFollow} className="px-6 gap-2 py-2 flex bg-[#303030] hover:bg-[#141414] text-black text-sm font-semibold rounded-sm hover:opacity-90 transition">  
            <SlUserFollow size={18} /> unFollow
            </button>
        ) : (
         <>
          <button onClick={handleFollow} className="px-6 gap-2 py-2 flex bg-white text-black text-sm font-semibold rounded-sm hover:opacity-90 transition">
            <SlUserFollow size={18} /> Follow
          </button>
         </>
        )}

        <button className="flex gap-2 px-6 py-2 bg-neutral-800 text-white text-sm font-semibold rounded-sm hover:bg-neutral-700 transition">
          <LuMessageSquare size={18} /> Message
        </button>
        <button className="p-2 bg-neutral-800 rounded-sm hover:bg-neutral-700 transition">
          <Share2Icon size={18} className="text-white" />
          <span className="hidden">Share</span>
        </button>
      </div>

      <div className="mt-4 text-sm flex flex-col text-gray-300 max-w-md">
        <span>Hello! I'm {data.name}🖤</span>
        <span>{data.bio}</span>
      </div>

      <div className="w-full h-px bg-neutral-700 mt-6"></div>

      <div className="text-gray-400 text-sm mt-4 italic">
        Henüz içerik yüklenmedi.
      </div>
    </div>
  );
}
