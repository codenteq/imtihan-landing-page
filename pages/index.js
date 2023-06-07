import Head from "next/head";
import ApplicationLogo from "@/pages/components/ApplicationLogo";
import NavLink from "@/pages/components/NavLink";
import {
    CalendarIcon, CheckBadgeIcon,
    CheckCircleIcon,
    CheckIcon,
    CreditCardIcon,
    MicrophoneIcon,
    VideoCameraIcon
} from "@heroicons/react/24/outline";
import Button from "@/pages/components/Button";
import Input from "@/pages/components/Input";
import Image from "next/image";
import HomeImage from '../public/home.webp';
import Footer from "@/pages/components/Footer";
import ThemeToggle from "@/pages/components/ThemeToggle";

export default function Home() {
    return (
        <>
            <Head>
                <title>İmtihan | Notlar, sınavlar ve dersler</title>
                <meta name="description" content="Notlarınız, çevrimiçi sınavlarınız, arkadaşlarınız ve dersleriniz, hepsi bir arada" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="flex justify-center block fixed w-full backdrop-blur-sm border-b border-zinc-100 px-2 sm:px-4 py-2.5 dark:bg-black/30 dark:border-zinc-900 z-10">
                <ApplicationLogo width={144} height={32}/>
            </header>

            <main className="px-4 py-16 bg-white dark:bg-black w-full">
                <ThemeToggle/>

                <div className="max-w-6xl mx-auto">
                    <div>
                        <div className="text-center pt-16">
                            <h2 className="text-3xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-50">
                                Notlarınız, çevrimiçi sınavlarınız, arkadaşlarınız ve dersleriniz, hepsi bir arada
                            </h2>
                        </div>

                        <div className="text-center mx-auto max-w-3xl pt-8">
                            <p className="text-xl lg:text-2xl text-zinc-900 dark:text-zinc-100">
                                Eğitim hayatınızı kolaylaştıran pratik bir platform.
                            </p>
                        </div>

                        <div className="text-center pt-16">
                            <NavLink
                                name="Ücretsiz kaydolun"
                                href="https://open.imtihan.tech/auth/register"
                                className="p-4 px-10 text-xl"
                            />
                        </div>

                        <div className="pt-16">
                            <Image src={HomeImage} placeholder="blur" alt="imtihan" />
                        </div>
                    </div>

                    <div>
                        <div className="lg:flex pt-16">
                            <div className="pt-16">
                                <h2 className="text-5xl text-center lg:text-left font-semibold text-zinc-900 dark:text-zinc-50">
                                    Tüm seçenekleri tek bir yerde sunmanın en kolay yolu
                                </h2>
                            </div>

                            <div className="max-w-lg mx-auto pt-16">
                                <p className="text-xl lg:text-2xl text-center lg:text-left text-zinc-900 dark:text-zinc-100">
                                    Not alın, çevrimiçi sınavlar oluşturun, arkadaşlarınız ile paylaşın ve yeni kaynakları okuyun!
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-8 mb-14 md:mb-16 pt-16">

                            <div className="flex flex-col items-center relative py-7 px-6 xl:py-10 xl:pr-10 xl:pl-52 rounded-lg overflow-hidden min-h-72">
                                <picture>
                                    <img src="/class-exam.webp"
                                         className="mb-4 md:mb-8 md:h-52 md:object-contain xl:h-auto xl:mb-0 xl:absolute xl:top-1/2 xl:-translate-y-1/2 xl:right-full xl:-mr-44 xl:max-w-none"
                                         alt="İmtihan"
                                    />
                                </picture>
                                <div className="flex flex-col gap-2 text-sm md:text-base">
                                    <h5 className="mb-2 text-2xl font-semibold tracking-tight">
                                        Etkileyici çevrimiçi sınavlar
                                    </h5>

                                    <p className="mb-3 font-normal">
                                        Etkileyici çevrimiçi sınavlar sunuyoruz, öğrencilerin öğrenme deneyimini
                                        geliştirmek için interaktif ve ilgi çekici bir şekilde tasarlanmıştır.
                                        Her sınav, zorluk seviyelerine göre özelleştirilebilir ve gerçek zamanlı
                                        geribildirim ile donatılmıştır.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center relative py-7 px-6 xl:py-10 xl:pr-10 xl:pl-52 rounded-lg overflow-hidden min-h-72">
                                <img src="/online-course.webp"
                                     className="mb-4 md:mb-8 md:h-52 md:object-contain xl:h-auto xl:mb-0 xl:absolute xl:top-1/2 xl:-translate-y-1/2 xl:right-full xl:-mr-44 xl:max-w-none" alt="İmtihan" />
                                <div className="flex flex-col gap-2 text-sm md:text-base">
                                    <h5 className="mb-2 text-2xl font-semibold tracking-tight">
                                        Keşfedin, öğrenin ve büyüyün
                                    </h5>

                                    <p className="mb-3 font-normal">
                                        Yeni bilgileri keşfetmek, becerileri geliştirmek ve kişisel büyümeyi desteklemek
                                        için davet ediyor. Çeşitli dersler ve materyallerle sürekli olarak kendinizi
                                        geliştirme fırsatı bulabilirsiniz.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center relative py-7 px-6 xl:py-10 xl:pr-10 xl:pl-52 rounded-lg overflow-hidden min-h-72">
                                <img src="/analytics.webp"
                                     className="mb-4 md:mb-8 md:h-52 md:object-contain xl:h-auto xl:mb-0 xl:absolute xl:top-1/2 xl:-translate-y-1/2 xl:right-full xl:-mr-44 xl:max-w-none" alt="İmtihan" />
                                <div className="flex flex-col gap-2 text-sm md:text-base">
                                    <h5 className="mb-2 text-2xl font-semibold tracking-tight">
                                        Kendizi keşfedin
                                    </h5>

                                    <p className="mb-3 font-normal">
                                        Öğrenciler, kendi ilerlemelerini izleyebilir ve sınav sonuçları üzerinden güçlü
                                        ve zayıf yönlerini belirleyerek kendilerini daha da geliştirebilirler.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center relative py-7 px-6 xl:py-10 xl:pr-10 xl:pl-52 rounded-lg overflow-hidden min-h-72">
                                <img src="/events.webp"
                                     className="mb-4 md:mb-8 md:h-52 md:object-contain xl:h-auto xl:mb-0 xl:absolute xl:top-1/2 xl:-translate-y-1/2 xl:right-full xl:-mr-44 xl:max-w-none" alt="İmtihan" />
                                <div className="flex flex-col gap-2 text-sm md:text-base">
                                    <h5 className="mb-2 text-2xl font-semibold tracking-tight">
                                        Etkinlikler
                                    </h5>

                                    <p className="mb-3 font-normal">
                                        Sınavlara hazırlanmak için etkinlikler oluşturun. Dersleriniz İçin Pratik
                                        Etkinlikleri Planlayın, Biz Gereken Her Şeyi Sağlayalım!
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div>
                        <div className="mb-14 md:mb-16 flex flex-col gap-5 md:gap-6 items-center justify-center text-center pt-16">
                            <h2 className="text-4xl font-semibold md:text-5xl text-zinc-900 dark:text-zinc-50">
                                <span className="hidden md:inline">İmtihan </span>
                                <span>Entegrasyonlar</span>
                            </h2>

                            <p className="text-lg md:text-2xl max-w-3xl mx-auto text-zinc-900 dark:text-zinc-50">
                                İmtihan özel entegrasyonları, ihtiyacınız olan her şeyi sağlayacak ve
                                üretkenliğinizi artırmanıza yardımcı olacaktır.
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <div className="inline-grid grid-cols-2 place-content-center gap-x-4 gap-y-10 md:gap-14 lg:w-full md:grid-cols-2 lg:gap-8">
                                <div className="inline-flex flex-col items-center justify-center text-center gap-5 md:gap-6">
                                    <div
                                        className="inline-flex items-center justify-center w-32 h-32 lg:w-44 lg:h-44 border border-neutral-200 rounded-2xl">
                                        <CreditCardIcon className="w-14 h-14 lg:w-22 lg:h-22" />
                                    </div>

                                    <h3>Iyzico</h3>
                                </div>

                                <div className="inline-flex flex-col items-center justify-center text-center gap-5 md:gap-6">
                                    <div
                                        className="inline-flex items-center justify-center w-32 h-32 lg:w-44 lg:h-44 border border-neutral-200 rounded-2xl">
                                        <CalendarIcon className="w-14 h-14 lg:w-22 lg:h-22" />
                                    </div>

                                    <h3 className="whitespace-nowrap">Google Takvim</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="py-20">
                            <h2 className="mb-16 text-5xl font-semibold leading-none text-center sm:text-left">
                                Avantajlarınız bunlarla da sınırlı değil!
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-20 text-sm md:text-base">
                                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                                    <div className="mb-4">
                                        <CheckBadgeIcon className="w-7 h-7 text-yellow-500" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Online ödemeler</h3>
                                    <p>İyzico kullanarak bütün para birimlerinde ödeme imkanı sunuyoruz.</p>
                                </div>

                                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                                    <div className="mb-4">
                                        <CheckBadgeIcon className="w-7 h-7 text-yellow-500" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Ödemeler için sadece üç tık gerekir</h3>
                                    <p>Karmaşık ve sayfalarca süren ödeme sistemi bizde yok, onun yerine 3 tıklama her şeyi çözmeye yetiyor.</p>
                                </div>

                                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                                    <div className="mb-4">
                                        <CheckBadgeIcon className="w-7 h-7 text-yellow-500" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Arkadaşların ile paylaş!</h3>
                                    <p>Çevrimiçi sınavlarınızı veya notlarınızı arkadaşlarınız ile paylaşın.</p>
                                </div>

                                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                                    <div className="mb-4">
                                        <CheckBadgeIcon className="w-7 h-7 text-yellow-500" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Otomatik hatırlatıcılar</h3>
                                    <p>Yaklaşan programlarınızı otomatik olarak e-posta göndererek programlarınızı kaçırmayacağınızdan emin olabilirsiniz.</p>
                                </div>

                                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                                    <div className="mb-4">
                                        <CheckBadgeIcon className="w-7 h-7 text-yellow-500" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Limit? Bizde limit yok!</h3>
                                    <p>Çevrimiçi sınavlarınız, notlarınız ya da e-posta alıcılarınız için tek sınırı siz belirlersiniz.</p>
                                </div>

                                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                                    <div className="mb-4">
                                        <CheckBadgeIcon className="w-7 h-7 text-yellow-500" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Profesyonel destek</h3>
                                    <p>Ekibimiz hem hesabınızın kurulumu hem de başarılı olmanız için her zaman yanınızda.</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="mb-9 md:mb-16 pt-16">
                            <h2 className="mb-5 lg:mb-6 text-5xl leading-none font-semibold text-center">Basit bir fiyatlandırma</h2>

                            <p className="flex flex-col items-center justify-center gap-3 mb-9 lg:mb-10 md:flex-row md:gap-14">
                            <span className="inline-flex items-center flex-nowrap whitespace-nowrap">
                                <CheckIcon className="w-6 h-6 text-orange-500 mr-4" />
                                <span className="text-2xl text-zinc-600 font-semibold">Ücrestiz deneme süreci.</span>
                            </span>

                                <span className="inline-flex items-center flex-nowrap whitespace-nowrap">
                                <CheckIcon className="w-6 h-6 text-orange-500 mr-4" />
                                <span className="text-2xl text-zinc-600 font-semibold">Gizli masraflar yok.</span>
                            </span>
                            </p>

                            <p className="text-xl text-center max-w-[864px] mx-auto">
                                Ödemelerinizde uygulanan platform ücretleri haricinde masraf yok. Herhangi bir depolama
                                ücreti, ek ücret, kademeli plan ve sınır yok.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-7 md:gap-8 md:grid-cols-2 lg:grid-cols-10">
                            <div className="lg:col-span-4 flex flex-col items-center text-center rounded-2xl md:rounded-3xl bg-yellow-50 text-neutral-900 py-11 px-6">
                                <h3 className="mb-5 lg:mb-6 text-2xl lg:text-3xl font-medium">Sınavlar</h3>
                                <p className="flex items-center gap-4 mb-5 lg:mb-7 text-5xl lg:text-6xl">
                                    <span className="text-yellow-700 opacity-[.32] line-through">%10 </span>
                                    <span className="font-semibold">%0</span>
                                </p>

                                <p className="mt-auto font-medium lg:text-lg">
                                    Denemeniz için ücretsiz!
                                </p>
                            </div>

                            <div className="lg:col-span-6 flex flex-col items-center text-center rounded-2xl md:rounded-3xl bg-neutral-900 text-white py-11 px-6">
                                <h3 className="mb-5 lg:mb-6 text-2xl lg:text-3xl font-medium text-white">
                                    Notlar, çevrimiçi sınavlar ve dersler
                                </h3>
                                <p className="flex items-center gap-4 mb-5 text-5xl lg:text-6xl">
                                    <span className="font-semibold">%10</span>
                                </p>
                                <p className="mt-auto font-medium lg:text-lg">
                                    Artı kredi kartı işlem ücretleri
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="pt-16">
                            <div className="inner-container">
                                <h2 className="mb-10 md:mb-16 text-5xl lg:text-7xl leading-none font-semibold text-center">İmtihan olun</h2>
                                <form
                                    className="flex flex-col gap-4 items-center justify-center max-w-2xl mx-auto md:flex-row"
                                    action="https://open.imtihan.tech/auth/register">
                                    <div className="relative w-full">
                                        <Input className="w-full h-16 text-2xl" type="email" placeholder="E-posta adresi" />
                                    </div>

                                    <Button type="submit" className="w-full h-16 text-2xl shrink-0 md:w-auto">Ücretsiz kaydolun</Button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}
