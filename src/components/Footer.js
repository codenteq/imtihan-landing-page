import Link from "next/link";
import ApplicationLogo from '@/src/components/ApplicationLogo'
import ThemeToggle from "@/src/components/ThemeToggle";

export default function Footer() {
    return (
        <footer className="p-2 md:p-4">
            <div className="relative">
                <div className="max-w-6xl mx-auto">
                    <div className="relative z-10 inner-container px-4 py-10 lg:px-8 md:py-12">
                        <div className="flex flex-col md:flex-row">
                            <div className="mb-7 md:hidden">
                                <ApplicationLogo width={144} height={32} />
                            </div>
                            <div className="grid grid-cols-6 gap-6 mb-14 md:mb-0 sm:gap-14 md:ml-auto lg:flex">
                                <div className="col-span-3">
                                    <h4 className="mb-4 text-base font-medium">İmtihan ol</h4>
                                    <div className="flex flex-col gap-3">
                                        <a className="md:hover:underline" href="https://open.imtihan.tech/auth/register" target="_blank">Ücretsiz kayıt ol</a>
                                    </div>
                                </div>
                                <div className="col-span-3">
                                    <h4 className="mb-4 text-base font-medium">Yardım</h4>
                                    <div className="flex flex-col gap-3">
                                        <a className="md:hover:underline" href="/#pricing">Fiyatlandırma</a>
                                        <a className="md:hover:underline" href="https://medium.com/@codenteq" target="_blank">Blog</a>
                                        <a className="md:hover:underline" href="https://imtihan-docs.vercel.app/">Geliştirici Dökümanları</a>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                    <h4 className="mb-4 text-base font-medium">Daha fazla</h4>
                                    <div className="flex flex-col gap-3">
                                        <a className="md:hover:underline" href="https://github.com/codenteq/imtihan">Açık Web Katkı</a>
                                        <a className="md:hover:underline" href="https://github.com/sponsors/codenteq">Sponsor ol</a>
                                    </div>
                                </div>
                            </div>
                            <div className="md:order-first md:mr-14">
                                <div className="hidden md:block md:mb-8">
                                    <ApplicationLogo width={144} height={32} />
                                </div>
                                <p className="mb-4 flex flex-wrap gap-3 text-neutral-500 whitespace-nowrap">
                                    <span className="block w-full sm:inline sm:w-auto">&copy; İmtihan.</span>
                                    <a className="md:hover:underline" href="/terms-of-services">Şartlar</a>
                                    <a className="md:hover:underline" href="/privacy-policy">Gizlilik</a>
                                </p>
                                <div className="flex gap-6">
                                    <a className="inline-flex items-center text-neutral-900  hover:text-[#1DA1F2] dark:hover:text-[#1DA1F2] dark:text-neutral-200 transition" href="https://twitter.com/codenteq" target="_blank" rel="noopener">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             xmlns="https://www.w3.org/2000/svg" className="w-6 h-6">
                                            <path
                                                d="M24 4.3a9 9 0 0 1-2.8.8c1-.6 1.8-1.6 2.2-2.7-1 .6-2 1-3.1 1.2-.9-1-2.2-1.6-3.6-1.6a4.9 4.9 0 0 0-4.9 4.9c0 .4 0 .8.1 1.1-4.2-.2-7.8-2.2-10.2-5.2-.5.8-.7 1.6-.7 2.5 0 1.7.9 3.2 2.2 4.1-.8 0-1.6-.2-2.2-.6v.1c0 2.4 1.7 4.4 3.9 4.8-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 2 2.4 3.4 4.6 3.4a10 10 0 0 1-6.1 2.1c-.4 0-.8 0-1.2-.1a14 14 0 0 0 7.5 2.2c9.1 0 14-7.5 14-14v-.6c1-.7 1.8-1.6 2.5-2.5Z"
                                                fill="currentColor"/>
                                        </svg>
                                    </a>
                                    <a className="inline-flex items-center text-neutral-900 hover:text-[#F24E59] dark:hover:text-[#F24E59] dark:text-neutral-200 transition" href="https://www.instagram.com/codenteq/" target="_blank" rel="noopener">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             xmlns="https://www.w3.org/2000/svg" className="w-6 h-6">
                                            <path
                                                d="M12 6.36a5.63 5.63 0 1 0 0 11.28 5.63 5.63 0 1 0 0-11.28Zm0 9.3a3.67 3.67 0 1 1 .02-7.34 3.67 3.67 0 0 1-.02 7.35Zm7.19-9.53a1.31 1.31 0 1 1-2.63 0 1.32 1.32 0 0 1 2.63 0Zm3.73 1.34c-.08-1.77-.48-3.33-1.77-4.61-1.29-1.29-2.85-1.7-4.61-1.78-1.82-.1-7.26-.1-9.08 0-1.75.08-3.32.49-4.6 1.77-1.3 1.29-1.7 2.85-1.78 4.61-.1 1.82-.1 7.26 0 9.07.08 1.77.48 3.33 1.77 4.61 1.3 1.29 2.85 1.7 4.61 1.78 1.82.1 7.26.1 9.08 0 1.76-.08 3.32-.49 4.6-1.78 1.3-1.28 1.7-2.84 1.78-4.6.1-1.82.1-7.26 0-9.07Zm-2.34 11.01a3.71 3.71 0 0 1-2.1 2.1c-1.44.57-4.88.44-6.48.44-1.6 0-5.04.12-6.48-.45a3.71 3.71 0 0 1-2.1-2.09C2.86 17.04 3 13.6 3 12c0-1.6-.13-5.04.44-6.48a3.71 3.71 0 0 1 2.09-2.1c1.45-.57 4.88-.44 6.48-.44 1.6 0 5.04-.12 6.49.45.96.38 1.7 1.12 2.09 2.09.57 1.44.44 4.88.44 6.48 0 1.6.13 5.04-.44 6.48Z"
                                                fill="currentColor"/>
                                        </svg>
                                    </a>
                                    <ThemeToggle/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute left-0 top-0 w-full h-full overflow-hidden bg-neutral-50 dark:bg-neutral-900 rounded-2xl md:rounded-3xl"></div>
            </div>
        </footer>
    )
}
