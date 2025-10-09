import { useEffect, useState } from "react";
import Image from "next/image";

export default function SolarCarousel({images}) {


    const [current, setCurrent] = useState(0);

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-full overflow-hidden  shadow-lg">
            <div
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {images.map((img, i) => (
                    <div key={i} className="min-w-full relative h-full">
                        <Image
                            src={img.url}
                            alt={img.alt}
                            fill
                            className="object-cover"
                            priority={i === 0}
                        />
                    </div>
                ))}
            </div>

            {/* Navigation arrows */}
            <button
                onClick={() => setCurrent((current - 1 + images.length) % images.length)}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
            >
                ‹
            </button>
            <button
                onClick={() => setCurrent((current + 1) % images.length)}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
            >
                ›
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, i) => (
                <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-3 h-3 rounded-full ${
                    i === current ? "bg-[var(--color-secondary)]" : "bg-white/50"
                    }`}
                ></button>
                ))}
            </div>
        </div>
    );
}
