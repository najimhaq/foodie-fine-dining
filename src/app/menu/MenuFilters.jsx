'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FiChevronDown, FiSearch } from 'react-icons/fi';

const MenuFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // State তৈরি করুন এখানেই
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [category, setCategory] = useState(
    searchParams.get('category') || 'all'
  );

  // সার্চ বা ক্যাটাগরি পরিবর্তন হলে URL আপডেট করুন
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    params.set('category', category);
    router.push(`/menu?${params.toString()}`);
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory(value);

    const params = new URLSearchParams(searchParams);
    params.set('category', value);
    if (search) {
      params.set('search', search);
    }
    router.push(`/menu?${params.toString()}`);
  };

  return (
    <div className='mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
      <div className='flex h-12 w-4/12 max-w-xl items-center gap-2 overflow-hidden rounded-full border border-gray-500/30 bg-white pl-4'>
        <FiSearch className='text-xl text-gray-500' />
        <input
          type='text'
          value={search}
          onChange={handleSearchChange}
          placeholder='Search dishes...'
          className='h-full w-full bg-transparent text-sm text-gray-700 outline-none'
        />
      </div>

      <div className='relative w-full lg:max-w-55'>
        <select
          value={category}
          onChange={handleCategoryChange}
          className='w-full appearance-none rounded-full border border-[#f8eacd] bg-[#C8A96B] px-4 py-3 text-sm text-slate-950 font-semibold outline-none'
        >
          <option value='all'>All Categories</option>
          <option value='dish'>Dish</option>
          <option value='burger'>Burger</option>
          <option value='biriyani'>Biriyani</option>
          <option value='beverage'>Beverage</option>
        </select>
        <FiChevronDown className='pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-950' />
      </div>
    </div>
  );
};

export default MenuFilters;
