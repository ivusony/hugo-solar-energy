import { useEffect, useState } from "react";

export default function ScrollToTopButton({ locale }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 1500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="back-to-top"
      className={`fixed bottom-5 right-4 z-10 transition-opacity duration-300 ease-in-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        className="z-10 absolute right-1 bottom-1 bg-[var(--color)] text-white p-2 rounded-full hover:brightness-90 transition-all duration-300 ease-in-out cursor-pointer"
        onClick={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
        aria-label={locale === "sr" ? "Povratak na vrh" : "Back to top"}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 4L12 20" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M5 11L12 4L19 11" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
