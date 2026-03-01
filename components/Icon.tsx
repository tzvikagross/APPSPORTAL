
import React from 'react';

export const FolderIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
  </svg>
);

export const AppIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
  </svg>
);

export const ChevronRight = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);

export const SearchIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);
// Category specific mapping
export const getCategoryConfig = (category: string) => {
  const c = category.toLowerCase();
  switch (c) {
    case 'payroll':
      return { color: 'text-emerald-600', bg: 'bg-emerald-50', hoverBg: 'group-hover:bg-emerald-600', badge: 'bg-emerald-100 text-emerald-700' };
    case 'accounting':
      return { color: 'text-teal-600', bg: 'bg-teal-50', hoverBg: 'group-hover:bg-teal-600', badge: 'bg-teal-100 text-teal-700' };
    case 'funds':
      return { color: 'text-orange-600', bg: 'bg-orange-50', hoverBg: 'group-hover:bg-orange-600', badge: 'bg-orange-100 text-orange-700' };
    case 'documentation':
    case 'knowledge':
      return { color: 'text-slate-600', bg: 'bg-slate-50', hoverBg: 'group-hover:bg-slate-600', badge: 'bg-slate-100 text-slate-700' };
    case 'admin':
      return { color: 'text-rose-600', bg: 'bg-rose-50', hoverBg: 'group-hover:bg-rose-600', badge: 'bg-rose-100 text-rose-700' };
    case 'links':
      return { color: 'text-violet-600', bg: 'bg-violet-50', hoverBg: 'group-hover:bg-violet-600', badge: 'bg-violet-100 text-violet-700' };
    case 'development':
      return { color: 'text-blue-600', bg: 'bg-blue-50', hoverBg: 'group-hover:bg-blue-600', badge: 'bg-blue-100 text-blue-700' };
    case 'management':
      return { color: 'text-amber-600', bg: 'bg-amber-50', hoverBg: 'group-hover:bg-amber-600', badge: 'bg-amber-100 text-amber-700' };
    case 'creative':
      return { color: 'text-pink-600', bg: 'bg-pink-50', hoverBg: 'group-hover:bg-pink-600', badge: 'bg-pink-100 text-pink-700' };
    case 'social':
      return { color: 'text-cyan-600', bg: 'bg-cyan-50', hoverBg: 'group-hover:bg-cyan-600', badge: 'bg-cyan-100 text-cyan-700' };
    case 'communication':
      return { color: 'text-bdo-red', bg: 'bg-bdo-red/5', hoverBg: 'group-hover:bg-bdo-red', badge: 'bg-bdo-red/10 text-bdo-red' };
    default:
      return { color: 'text-slate-600', bg: 'bg-slate-50', hoverBg: 'group-hover:bg-slate-600', badge: 'bg-slate-100 text-slate-700' };
  }
};
