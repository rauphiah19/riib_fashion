'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

export default function MainNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    { label: 'Home', path: '/home' },
    { label: 'Collections', path: '/collections' },
    { label: 'About', path: '/about-riib' },
    { label: 'Size Guide', path: '/size-and-fit-guide' },
    { label: 'Contact', path: '/contact' },
    { label: 'CMS Admin', path: '/cms-admin-dashboard' }
  ];

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActivePath = (path) => {
    return pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 bg-background border-b border-border shadow-warm">
      <div className="w-full px-24 lg:px-36">
        <div className="flex items-center justify-between h-[60px]">
          <Link 
            href="/home" 
            className="flex items-center transition-smooth hover:opacity-80"
          >
            <AppImage
              src="/assets/images/RIIBFOREVER_Label-removebg-preview-1766536133535.png"
              alt="RIIB Fashion - Premium Nigerian Fashion Brand Logo"
              width={140}
              height={40}
              className="h-[40px] w-auto object-contain transition-smooth"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center space-x-36">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                href={item?.path}
                className={`font-caption text-base font-medium transition-smooth hover:text-accent relative ${
                  isActivePath(item?.path) 
                    ? 'text-primary' :'text-text-primary'
                }`}
              >
                {item?.label}
                {isActivePath(item?.path) && (
                  <span className="absolute -bottom-[21px] left-0 right-0 h-[3px] bg-accent"></span>
                )}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-12 -mr-12 transition-smooth hover:bg-muted rounded-md focus-ring"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Icon 
              name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} 
              size={24} 
              className="text-text-primary"
            />
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-background/95 z-200 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          <div className="fixed top-[60px] right-0 bottom-0 w-[280px] bg-card shadow-warm-2xl z-200 md:hidden overflow-y-auto">
            <div className="flex flex-col p-24 space-y-6">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  href={item?.path}
                  className={`font-caption text-lg font-medium py-12 px-18 rounded-md transition-smooth hover:bg-muted ${
                    isActivePath(item?.path)
                      ? 'text-primary bg-accent/10' :'text-text-primary'
                  }`}
                >
                  {item?.label}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </nav>
  );
}