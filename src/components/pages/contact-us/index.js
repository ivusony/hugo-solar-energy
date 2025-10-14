import { useLocales } from "@components/hooks/useLocales";
import { useRouter } from "next/router";

export default function ContactUs() {
    const {locale} = useRouter();
    const locales =  useLocales();
    // contact form implementation, contact form should have name, email, telephone, subject and message fields. Modern tailwind styling, with header and kind message for visitors. Grid system, name and email in one row, phone and subject in other, message in third row. Width of the content should me max-w-7xl
    return (
        <>
            <div className="h-[100px] bg-[var(--color)]"></div>
            <div className="max-w-7xl mx-auto p-2 my-10 bg-white">
                <h1 className=" text-3xl md:text-5xl font-bold md:mb-4">{ locales[locale].contact_us.h1 }</h1>
                <p className="mb-6 text-xl md:txt-2xl">{ locales[locale].contact_us.description }</p>
                <form className="space-y-6 mt-15">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">{ locales[locale].contact_us.form.name }</label>
                            <input type="text" id="name" name="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">{ locales[locale].contact_us.form.email }</label>
                            <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" required />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">{ locales[locale].contact_us.form.phone }</label>
                            <input type="tel" id="phone" name="phone" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">{ locales[locale].contact_us.form.subject }</label>
                            <input type="text" id="subject" name="subject" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" required />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">{ locales[locale].contact_us.form.message }</label>
                        <textarea id="message" name="message" rows="4" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" required></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className=" bg-[var(--color)] text-white px-6 md:px-8 py-4 mt-4 text-sm md:text-lg font-bold hover:brightness-90 transition-all duration-300 ease-in-out cursor-pointer"
                        >
                            { locales[locale].contact_us.form.send_button }
                        </button>
                    </div>
                </form>
            </div>
        </>
    
    )
}