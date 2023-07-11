import Head from "next/head";
import ApplicationLogo from "@/src/components/ApplicationLogo";
import Footer from "@/src/components/Footer";
import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <>
            <Head>
                <title>İmtihan | Gizlilik Politikası</title>
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
                                Gizlilik Politikası
                            </h2>
                        </div>

                        <div className="text-left mx-auto max-w-3xl pt-8">
                            <p className="text-xl text-zinc-900 dark:text-zinc-100">
                                Bu Gizlilik Politikası (Politika), sizin (Müşteri) gizlilik haklarınızı ve kişisel
                                verilerinizi şirketimizin (GENIOR YAZILIM TEKNOLOJİLER LİMİTED ŞİRKETİ) nasıl işlediğini
                                açıklamaktadır. Lütfen bu Politikayı dikkatlice okuyunuz.
                            </p>
                            <div className="text-xl text-zinc-900 mt-4 dark:text-zinc-100">
                                <h2 className="text-xl lg:text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                                    Kişisel Verilerin Toplanması
                                </h2>
                                <ul>
                                    <li>
                                        1.1. Şirketimiz, hizmetlerimizden yararlanmanızı sağlamak ve sizinle iletişim
                                        kurabilmek için belirli kişisel verilerinizi toplayabilir. Bu kişisel veriler,
                                        adınız, e-posta adresiniz, iletişim bilgileriniz gibi bilgileri içerebilir.
                                    </li>
                                    <li className="mt-2.5">
                                        1.2. Kişisel verileriniz, yalnızca açık rızanızla veya yasal bir dayanağa sahip
                                        olduğumuz durumlarda toplanır.
                                    </li>
                                </ul>
                            </div>
                            <div className="text-xl text-zinc-900 mt-4 dark:text-zinc-100">
                                <h2 className="text-xl lg:text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                                    Kişisel Verilerin Kullanımı
                                </h2>
                                <ul>
                                    <li>
                                        2.1. Topladığımız kişisel verileri, aşağıdaki amaçlarla kullanabiliriz:
                                        <ul className="list-disc list-inside">
                                            <li>Hizmetlerimizi sağlamak ve yönetmek</li>
                                            <li>Size bilgi, bildirim veya güncellemeler göndermek</li>
                                            <li>Taleplerinizi işlemek ve destek sağlamak</li>
                                            <li>İçerikleri kişiselleştirmek ve önerilerde bulunmak</li>
                                            <li>Yasal yükümlülüklerimizi yerine getirmek</li>
                                        </ul>
                                    </li>
                                    <li className="mt-2.5">
                                        2.2. Kişisel verilerinizi, yasal olmayan veya izniniz dışında üçüncü taraflarla
                                        paylaşmayız. Ancak, yasal yükümlülüklerimiz veya izniniz gerektirdiği durumlarda
                                        paylaşabiliriz.
                                    </li>
                                </ul>
                            </div>
                            <div className="text-xl text-zinc-900 mt-4 dark:text-zinc-100">
                                <h2 className="text-xl lg:text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                                    Kişisel Verilerin Güvenliği
                                </h2>
                                <ul>
                                    <li>
                                        3.1. Kişisel verilerinizin güvenliğini sağlamak için uygun teknik ve organizasyonel
                                        önlemleri alırız. Bununla birlikte, internet üzerinden yapılan iletişimin tamamen
                                        güvenli olmadığını unutmayınız.
                                    </li>
                                    <li className="mt-2.5">
                                        3.2. Şirketimiz, kişisel verilerinizin yetkisiz erişime, kayba veya kötüye kullanıma
                                        karşı korunmasını sağlamak için makul adımlar atar. Ancak, güvenlik önlemlerinin
                                        hiçbir yöntemle tamamen koruma sağlamayabileceğini kabul etmelisiniz.
                                    </li>
                                </ul>
                            </div>
                            <div className="text-xl text-zinc-900 mt-4 dark:text-zinc-100">
                                <h2 className="text-xl lg:text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                                    Çerezler ve Diğer İzleme Teknolojileri
                                </h2>
                                <ul>
                                    <li>
                                        4.1. Web sitemiz ve hizmetlerimiz, çerezler ve diğer izleme teknolojileri kullanabilir.
                                        Bu teknolojiler, kullanıcı deneyiminizi geliştirmek, site trafiğini analiz etmek
                                        ve reklamları kişiselleştirmek amacıyla kullanılabilir.
                                    </li>
                                    <li className="mt-2.5">
                                        4.2. Çerezleri kabul etmek veya reddetmek için tarayıcınızın ayarlarını değiştirebilirsiniz.
                                        Ancak, çerezleri devre dışı bırakmanız durumunda bazı hizmetlerimizin düzgün
                                        çalışmayabileceğini unutmayınız.
                                    </li>
                                </ul>
                            </div>
                            <div className="text-xl text-zinc-900 mt-4 dark:text-zinc-100">
                                <h2 className="text-xl lg:text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                                    Veri Koruma Haklarınız
                                </h2>
                                <ul>
                                    <li>
                                        5.1. Kişisel verilerinizin doğruluğunu ve güncelliğini korumak için elimizden
                                        geleni yaparız. Verilerinizi kontrol etme, düzeltme veya silme taleplerinizi
                                        yerine getirmek için bize başvurabilirsiniz.
                                    </li>
                                    <li className="mt-2.5">
                                        5.2. Kişisel verilerinizi işlemek için verdiğiniz rızanızı geri çekmek isterseniz,
                                        bize bildirebilirsiniz. Ancak, rızaya dayalı işlemlerin geri çekilmesi, hizmetlerimizin
                                        sunumunu etkileyebilir.
                                    </li>
                                </ul>
                            </div>
                            <div className="text-xl text-zinc-900 mt-4 dark:text-zinc-100">
                                <h2 className="text-xl lg:text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                                    Diğer Web Siteleri
                                </h2>
                                <ul>
                                    <li>
                                        6.1. Web sitemiz, diğer web sitelerine yönlendirici bağlantılar içerebilir. Bu web
                                        sitelerinin gizlilik politikalarından sorumlu değiliz. Bağlantıları takip etmeden
                                        önce bu web sitelerinin gizlilik politikalarını okumanızı öneririz.
                                    </li>
                                </ul>
                            </div>
                            <div className="text-xl text-zinc-900 mt-4 dark:text-zinc-100">
                                <h2 className="text-xl lg:text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                                    Politika Güncellemeleri
                                </h2>
                                <ul>
                                    <li>
                                        7.1. Bu Politikayı zaman zaman güncelleyebiliriz. Güncellemeler web sitemizde
                                        yayınlandıktan sonra geçerli olacaktır. Bu nedenle, periyodik olarak Politikayı
                                        gözden geçirmeniz önerilir.
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
