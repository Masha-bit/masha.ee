'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function SideNav() {
  const [activeLink, setActiveLink] = useState('');
  const [navColor, setNavColor] = useState('#B000FF');

  const handleClick = (link) => {
    setActiveLink(link);

    const section = document.getElementById(link);
    setTimeout(() => {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let currentSectionId = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 700;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (
        window.pageYOffset >= sectionTop &&
        window.pageYOffset < sectionBottom
      ) {
        currentSectionId = section.id;
      }
    });
    if (currentSectionId === 'about2') {
      setNavColor('#00FFB0');
    } else {
      setNavColor('#B000FF');
    }

    setActiveLink(currentSectionId);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (link) => {
    return activeLink === link
      ? `h-[20px] w-[20px] border-2 border-[${navColor}] bg-transparent transition-all ease-in-out  duration-[350ms]`
      : `h-[13px] w-[13px] rotate-[45deg] bg-[${navColor}] transition-all ease-in-out  duration-[350ms]`;
  };

  // return activeLink === link? activeLink === 'about2' ? 'h-[20px] w-[20px] bg-transparent transition-all ease-in-outborder-2 border-[#00FFB0]': 'h-[20px] w-[20px] border-2 border-[#B000FF] bg-transparent transition-all ease-in-out': 'h-[13px] w-[13px] rotate-[45deg] bg-[#B000FF] transition-all ease-in-out'

  return (
    <div className="h-[160px] w-[70px]  fixed right-0 bottom-0 z-[90] mb-[5rem] sm:mr-[1rem] mr-[5rem] flex flex-col items-center justify-around">
      <button href={`#home`} onClick={() => handleClick('home')}>
        <div
          className={isActive('home')}
          style={{ backgroundColor: navColor }}
        ></div>
      </button>
      <button href={`#about`} onClick={() => handleClick('about')}>
        <div
          className={isActive('about')}
          style={{ backgroundColor: navColor }}
        ></div>
      </button>
      <button href={`#about2`} onClick={() => handleClick('about2')}>
        <div className={isActive('about2')}></div>
      </button>
      <button href={`#work`} onClick={() => handleClick('work')}>
        <div
          className={isActive('work')}
          style={{ backgroundColor: navColor }}
        ></div>
      </button>
      <button href={`#contact`} onClick={() => handleClick('contact')}>
        <div
          className={isActive('contact')}
          style={{ backgroundColor: navColor }}
        ></div>
      </button>
    </div>
  );
}
