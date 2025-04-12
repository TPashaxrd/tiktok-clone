import { Home, Compass, Users, Upload, Bell, MessageCircle, Tv, User, MoreHorizontal } from 'lucide-react';
import TiktokIcon from '../Images/tiktok-logo2.png';

export default function LeftSidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-60 bg-black text-white p-4 flex flex-col space-y-4 overflow-hidden z-50">
      <div className="flex-1 overflow-y-auto flex flex-col space-y-4">
        {/* Logo */}
        <div className="user-select-none mb-4 text-2xl font-bold flex items-center space-x-2">
          <img
            src={TiktokIcon}
            alt="TikTok Icon"
            className="w-12 h-12 object-contain rounded-full hover:scale-110 transition-transform duration-200"
          />
          <div className="mt-1 text-xl">
            <span className="text-pink-500">Tik</span>Tok
          </div>
        </div>

        {/* Arama Kutusu */}
        <input
          type="text"
          placeholder="Ara"
          className="font-roboto user-select-none bg-neutral-800 text-sm px-3 py-2 rounded-full outline-none"
        />

        {/* Menü */}
        <nav className="flex font-winky-sans flex-col space-y-4 mt-4">
          <SidebarItem icon={<Home size={20} />} label="Sizin İçin" />
          <SidebarItem icon={<Compass size={20} />} label="Keşfet" />
          <SidebarItem icon={<Users size={20} />} label="Takip ediliyor" />
          <SidebarItem icon={<Users size={20} />} label="Arkadaşlar" />
          <SidebarItem icon={<Upload size={20} />} label="Yükle" />
          <SidebarItem icon={<Bell size={20} />} label="Aktivite" />
          <SidebarItem icon={<MessageCircle size={20} />} label="Mesajlar" />
          <SidebarItem icon={<Tv size={20} />} label="CANLI Yayın" />
          <SidebarItem icon={<User size={20} />} label="Profil" />
          <SidebarItem icon={<MoreHorizontal size={20} />} label="Dahası" />
        </nav>

        {/* Takip edilen hesaplar */}
        <div className="mt-6">
          <div className="text-sm text-gray-400 mb-2 font-semibold">Takip edilen hesaplar</div>
          <div className="space-y-1 text-sm">
            <div className="hover:underline cursor-pointer">furkanemirce_official</div>
            <div className="hover:underline cursor-pointer">eylul</div>
            <div className="hover:underline cursor-pointer">bayku__s</div>
            <div className="hover:underline cursor-pointer">yasuu.37</div>
            <div className="hover:underline cursor-pointer">turkgelidicom</div>
          </div>
          <div className="mt-2 text-sm text-blue-400 hover:underline cursor-pointer">Daha fazla göster</div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-6 text-xs text-gray-500 space-y-1 border-t border-neutral-800 mt-4">
        <div className="hover:underline cursor-pointer">Şirket</div>
        <div className="hover:underline cursor-pointer">Program</div>
        <div className="hover:underline cursor-pointer">Koşul ve Politikalar</div>
        <div className="hover:underline cursor-pointer">© 2025 TikTok</div>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label } : { icon: any, label: string }) {
  return (
    <div className="flex items-center space-x-3 cursor-pointer hover:bg-neutral-800 px-3 py-2 rounded-lg transition">
      {icon}
      <span className="text-sm">{label}</span>
    </div>
  );
}