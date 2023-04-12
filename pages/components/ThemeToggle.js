import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

export default function ThemeToggle() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <>
            <div className="fixed top-3.5 z-10">
                {currentTheme === 'dark' ? (
                    <div
                        onClick={() => setTheme('light')}
                    >
                        <SunIcon className="text-amber-500 w-6 h-6"/>
                    </div>
                ) : (
                    <div
                        onClick={() => setTheme('dark')}
                    >
                        <MoonIcon className="text-zinc-500 w-6 h-6"/>
                    </div>
                )}
            </div>
        </>
    );
}
