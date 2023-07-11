import Head from "next/head";
import ApplicationLogo from "@/src/components/ApplicationLogo";
import Footer from "@/src/components/Footer";
import Link from "next/link";

export default function TermsOfServices() {
    return (
        <>
            <Head>
                <title>İmtihan | Hizmet Şartları</title>
                <meta name="description" content="Notlarınız, çevrimiçi sınavlarınız, arkadaşlarınız ve dersleriniz, hepsi bir arada" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="flex justify-center fixed w-full backdrop-blur-sm border-b border-zinc-100 px-2 sm:px-4 py-2.5 dark:bg-black/30 dark:border-zinc-900 z-10">
                <Link href="/">
                    <>
                        <ApplicationLogo width={144} height={32}/>
                    </>
                </Link>
            </header>

            <main className="px-4 py-16 bg-white dark:bg-black w-full">
                <div className="max-w-6xl mx-auto">
                    <div>
                        <div className="text-center pt-16">
                            <h2 className="text-3xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-50">
                                Hizmet Şartları
                            </h2>
                        </div>

                        <div className="text-left mx-auto max-w-3xl pt-8">
                            <p className="text-xl text-zinc-900 dark:text-zinc-100">
                                Lütfen bu Hizmet Şartları (Şartlar) metnini dikkatlice okuyunuz. Bu, sizin (Müşteri) ve
                                şirketimiz (GENIOR YAZILIM TEKNOLOJİLER LİMİTED ŞİRKETİ) arasındaki hizmetlerimizin
                                kullanımına ve sağlanmasına ilişkin anlaşmayı oluşturmaktadır.
                            </p>
                            <div className="text-xl text-zinc-900 mt-4 dark:text-zinc-100">
                                <h2 className="text-xl lg:text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                                    Kabul Edilen Şartlar
                                </h2>
                                <ul>
                                    <li>
                                        1.1. Hizmetlerimizi kullanarak, bu Şartları kabul etmiş olursunuz. Bu Şartlar, size
                                        sunulan herhangi bir hizmetin veya ürünün kullanımı için geçerlidir.
                                    </li>
                                    <li className="mt-2.5">
                                        1.2. Hizmetlerimizden yararlanmak için yasal olarak yetkili olmanız gerekmektedir.
                                        Eğer bu Şartları kabul etmek için yasal olarak yetkili değilseniz, hizmetlerimizi
                                        kullanmamanız gerekmektedir.
                                    </li>
                                </ul>
                            </div>
                            <div className="text-xl text-zinc-900 mt-4 dark:text-zinc-100">
                                <h2 className="text-xl lg:text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                                    Hizmetlerimiz
                                </h2>
                                <ul>
                                    <li>
                                        2.1. Şirketimiz, belirli hizmetleri ve ürünleri sunmakta ve sağlamaktadır. Bu
                                        hizmetler ve ürünlerin ayrıntıları, web sitemizde veya diğer iletişim kanallarında
                                        açıklanmaktadır.
                                    </li>
                                    <li className="mt-2.5">
                                        2.2. Hizmetlerimizi kullanırken, yasaları, düzenlemeleri ve ilgili kuralları ihlal
                                        etmemeniz gerekmektedir. Ayrıca, diğer kullanıcıların haklarına ve gizliliklerine
                                        saygı göstermeniz beklenmektedir.
                                    </li>
                                </ul>
                            </div>
                            <div className="text-xl text-zinc-900 mt-4 dark:text-zinc-100">
                                <h2 className="text-xl lg:text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                                    Fikri Mülkiyet Hakları
                                </h2>
                                <ul>
                                    <li>
                                        3.1. Şirketimiz, hizmetlerimizle ilgili olarak sahip olduğu tüm fikri mülkiyet
                                        haklarını korur. Hizmetlerimizi kullanarak, Şirketimizin fikri mülkiyet haklarına
                                        saygı göstermeniz gerekmektedir.
                                    </li>
                                    <li className="mt-2.5">
                                        3.2. Hizmetlerimizi kullanımınız sırasında tarafınızdan sağlanan içeriklerle ilgili
                                        fikri mülkiyet hakları size aittir. Ancak, Şirketimize bu içerikleri kullanma,
                                        yayınlama ve dağıtma hakkı vermektesiniz.
                                    </li>
                                </ul>
                            </div>
                            <div className="text-xl text-zinc-900 mt-4 dark:text-zinc-100">
                                <h2 className="text-xl lg:text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                                    Sorumluluk Sınırlamaları
                                </h2>
                                <ul>
                                    <li>
                                        4.1. Şirketimiz, hizmetlerimizin kalitesi, doğruluğu, kesintisizliği veya uygunluğu
                                        konusunda herhangi bir garanti vermez. Hizmetlerimizi kendi riskinizde kullanmanız
                                        gerekmektedir.
                                    </li>
                                    <li className="mt-2.5">
                                        4.2. Şirketimiz, hizmetlerimizin kullanımından veya kullanılamamasından kaynaklanan
                                        herhangi bir zarar veya kayıptan dolayı sorumluluk kabul etmez.
                                    </li>
                                </ul>
                            </div>
                            <div className="text-xl text-zinc-900 mt-4 dark:text-zinc-100">
                                <h2 className="text-xl lg:text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                                    Müşteri Destek Hizmetleri
                                </h2>
                                <ul>
                                    <li>
                                        5.1. Şirketimiz, hizmetlerimizle ilgili sorularınız veya sorunlarınız için müşteri
                                        destek hizmetleri sunmaktadır. Bu hizmetlerle ilgili ayrıntılar, web sitemizde veya
                                        diğer iletişim kanallarında belirtilmektedir.
                                    </li>
                                </ul>
                            </div>
                            <div className="text-xl text-zinc-900 mt-4 dark:text-zinc-100">
                                <h2 className="text-xl lg:text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                                    Değişiklikler
                                </h2>
                                <ul>
                                    <li>
                                        6.1. Şirketimiz, bu Şartları dilediği zaman değiştirme veya güncelleme hakkını
                                        saklı tutar. Değişiklikler web sitemizde yayınlandıktan sonra yürürlüğe girecektir.
                                        Bu nedenle, periyodik olarak bu Şartları gözden geçirmeniz önerilir.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}
