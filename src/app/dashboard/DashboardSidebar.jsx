'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaUser,
  FaUserShield,
  FaChartPie,
  FaUtensils,
  FaCog,
  FaSignOutAlt,
} from 'react-icons/fa';

const navItems = [
  {
    name: 'User Dashboard',
    href: '/dashboard/userpage',
    icon: FaUser,
  },
  {
    name: 'Admin Dashboard',
    href: '/dashboard/admin',
    icon: FaUserShield,
  },
  {
    name: 'Analytics',
    href: '/dashboard/analytics',
    icon: FaChartPie,
  },
  {
    name: 'Menus',
    href: '/dashboard/menus',
    icon: FaUtensils,
  },
  {
    name: 'Settings',
    href: '/dashboard/settings',
    icon: FaCog,
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <div className='drawer-side z-50'>
      <label
        htmlFor='my-drawer-3'
        aria-label='close sidebar'
        className='drawer-overlay'
      ></label>

      <aside className='flex min-h-full w-80 flex-col border-r border-white/10 bg-[#151515] p-6'>
        <div className='mb-8'>
          <h1 className='text-2xl font-bold text-white'>Foodie</h1>
          <p className='mt-2 text-sm text-gray-400'>Premium dashboard panel</p>
        </div>

        <ul className='menu space-y-2 rounded-box'>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + '/');

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-[#C8A96B] text-black shadow-md'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon
                    className={`text-base ${
                      isActive
                        ? 'text-black'
                        : 'text-[#C8A96B] group-hover:text-[#d4b57a]'
                    }`}
                  />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className='mt-auto pt-6'>
          <button className='flex w-full items-center gap-3 rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-gray-300 transition hover:bg-red-500/10 hover:text-red-400'>
            <FaSignOutAlt className='text-base' />
            Logout
          </button>
        </div>
      </aside>
    </div>
  );
}
