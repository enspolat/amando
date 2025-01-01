import { useState } from 'react';
import { Menu } from '@headlessui/react';
import turkey from '../assets/turkey.png';

export default function LanguageSelector() {
    const [currentLang, setCurrentLang] = useState('en');

    const languages = {
        en: {
            name: 'English',
            flag: (
                <svg className="w-8 h-8" viewBox="0 0 512 512">
                    <path fill="#012169" d="M0 0h512v512H0z" />
                    <path fill="#FFF" d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z" />
                    <path fill="#C8102E" d="m184 324 11 34L42 512H0v-3l184-185zm124-12 54 8 150 147v45L308 312zM512 0 320 196l-4-44L466 0h46zM0 1l193 189-59-8L0 49V1z" />
                    <path fill="#FFF" d="M176 0v512h160V0H176zM0 176v160h512V176H0z" />
                    <path fill="#C8102E" d="M0 208v96h512v-96H0zM208 0v512h96V0h-96z" />
                </svg>
            )
        },
        tr: {
            name: 'Türkçe',
            flag: (
                <img src={turkey} className="w-8 h-8" alt="Turkish Flag" />
            )
        }
    };

    return (
        <Menu as="div" className="relative inline-block text-left z-10">
            <Menu.Button className="inline-flex items-center justify-center gap-2 rounded-lg  px-3 py-2 hover:bg-[#2A2A2A] transition-colors">
                {languages[currentLang].flag}
            </Menu.Button>

            <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right rounded-lg bg-[#1F1F1F] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="p-1">
                    {Object.entries(languages).map(([code, lang]) => (
                        <Menu.Item key={code}>
                            {({ active }) => (
                                <button
                                    onClick={() => setCurrentLang(code)}
                                    className={`
                                        ${active ? 'bg-[#2A2A2A]' : ''}
                                        ${currentLang === code ? 'bg-[#2A2A2A]' : ''}
                                        group flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-white
                                    `}
                                >
                                    {lang.flag}
                                    {lang.name}
                                </button>
                            )}
                        </Menu.Item>
                    ))}
                </div>
            </Menu.Items>
        </Menu>
    );
} 