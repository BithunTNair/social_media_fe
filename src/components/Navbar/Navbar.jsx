import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Menu, X, Home, User, MessageCircle, Users, FileText, Heart } from 'lucide-react';

const Navbar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
  return (
   <>
    <nav className="bg-gradient-to-r from-[#1f4037] to-[#99f2c8] dark:from-gray-900 dark:to-gray-800 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-white tracking-wide cursor-pointer" onClick={() => navigate('/')}>
          Pick Flick
        </div>

        <div className="hidden md:flex space-x-6 text-white font-medium">
          <button onClick={() => navigate('/')} className="flex items-center gap-1 hover:text-[#FF6B6B] transition"><Home size={18} /> Home</button>
          <button onClick={() => navigate('/posts')} className="flex items-center gap-1 hover:text-[#FF6B6B] transition"><FileText size={18} /> Posts</button>
          <button onClick={() => navigate('/profile')} className="flex items-center gap-1 hover:text-[#FF6B6B] transition"><User size={18} /> Profile</button>
          <button onClick={() => navigate('/following')} className="flex items-center gap-1 hover:text-[#FF6B6B] transition"><Users size={18} /> Following</button>
          <button onClick={() => navigate('/followers')} className="flex items-center gap-1 hover:text-[#FF6B6B] transition"><Heart size={18} /> Followers</button>
          <button onClick={() => navigate('/chats')} className="flex items-center gap-1 hover:text-[#FF6B6B] transition"><MessageCircle size={18} /> Chats</button>
        </div>

        <div className="md:hidden text-white">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 py-4 space-y-2 shadow-lg rounded-b-xl text-gray-800 dark:text-white">
          <button onClick={() => { setMenuOpen(false); navigate('/') }} className="block w-full text-left hover:text-[#FF6B6B]">Home</button>
          <button onClick={() => { setMenuOpen(false); navigate('/posts') }} className="block w-full text-left hover:text-[#FF6B6B]">Posts</button>
          <button onClick={() => { setMenuOpen(false); navigate('/profile') }} className="block w-full text-left hover:text-[#FF6B6B]">Profile</button>
          <button onClick={() => { setMenuOpen(false); navigate('/following') }} className="block w-full text-left hover:text-[#FF6B6B]">Following</button>
          <button onClick={() => { setMenuOpen(false); navigate('/followers') }} className="block w-full text-left hover:text-[#FF6B6B]">Followers</button>
          <button onClick={() => { setMenuOpen(false); navigate('/chats') }} className="block w-full text-left hover:text-[#FF6B6B]">Chats</button>
        </div>
      )}
    </nav>
   </>
  )
}

export default Navbar