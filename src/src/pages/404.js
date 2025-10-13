import { useRouter } from "next/router"

export default function NotFound(){
    let {locale} = useRouter();
    return(
        <>
            <div className="h-[100px] bg-[var(--color)]"></div>
            <div className="min-h-[500px] flex flex-col justify-center items-center bg-gray-100">
                <h1 className="text-4xl md:text-6xl font-bold text-center text-[var(--color)] mb-4">{ locale == "sr" ? "Stranica nije pronađena!" : "Page Not Found!" }</h1>
                <p className="text-xl text-gray-700">{ locale == "sr" ? "Stranica koju tražite ne postoji." : "The page you are looking for does not exist." }</p>
                <a href="/" className="mt-6 px-4 py-2 bg-[var(--color-secondary)] text-white rounded hover:bg-[var(--color-secondary-dark)] transition">{ locale == "sr" ? "Idi na početnu stranu" : "Go to Home" }</a>
            </div>
        </>
    )
}