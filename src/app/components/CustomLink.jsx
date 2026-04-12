'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function CustomLink({ path, children, className, ...props }) {
  const pathname = usePathname();
  console.log(pathname);
  const isActive = pathname === path;
  const activeClassName = isActive ? 'text-red-600' : '';
  return (
    <Link href={path} className={`${className} ${activeClassName}`} {...props}>
      {children}
    </Link>
  );
}
