import Image from "next/image";

export default function page() {
    return (
        <main className="flex justify-center mt-16 dark:text-white pb-6 pt-8">

            <div className="flex columns-2 text-center w-3/4  ">
                <div>
                    <Image
                        className="rounded-xl drop-shadow-2xl"
                        src="/images/third.jpg"
                        alt="zdjęcie"
                        width={1200}
                        height={700}
                    ></Image>
                </div>
                <div className="pl-5 text-xl text-justify font-sans dark:font-sans">
                    <h1>
                        Zarządzanie stajnią jeszcze nigdy nie było łatwiejsze dzięki Stable Assistant! Nasza aplikacja zapewnia kompleksowe narzędzia do efektywnego zarządzania
                        każdym aspektem stajni. Śledź harmonogramy karmienia, terminy weterynaryjne i szczepień, zarządzaj zadaniami dla personelu oraz kontroluj zapasy - wszystko
                        w jednym miejscu. Niezależnie od tego, czy jesteś właścicielem stajni, trenerem czy hodowcą, Stable Assistant umożliwia sprawną organizację i oszczędność czasu.
                        Zdobądź kontrolę nad swoją stajnią już dziś!
                    </h1>
                </div>

            </div>
        </main>
    );
}
