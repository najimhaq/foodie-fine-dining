'use client';

import { useState } from 'react';
import { FaShareAlt, FaRegBookmark } from 'react-icons/fa';

export default function BlogActions({ fakeId }) {
  const [liked, setLiked] = useState({});

  const handleLike = () => {
    setLiked((prev) => ({
      ...prev,
      [fakeId]: !prev[fakeId],
    }));
  };

  return (
    <div className='mt-10 flex flex-wrap gap-4 border-t border-white/10 pt-6'>
      <button
        type='button'
        className='inline-flex items-center gap-2 rounded-full bg-[#C8A96B] px-5 py-3 text-sm font-semibold text-black transition hover:scale-105'
      >
        <FaShareAlt />
        Share Article
      </button>

      <button
        type='button'
        onClick={handleLike}
        className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10'
      >
        <FaRegBookmark
          className={`transition ${
            liked[fakeId] ? 'scale-110 text-red-500' : 'text-slate-300'
          }`}
        />
        {liked[fakeId] ? 'Saved' : 'Save for Later'}
      </button>
    </div>
  );
}
