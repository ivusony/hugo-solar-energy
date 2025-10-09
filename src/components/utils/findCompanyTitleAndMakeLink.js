export default function findCompanyTitleAndMakeLink(text) {
    const parts = text.split(/(HUGO SOLAR ENERGY)/g);
    return parts.map((part, index) => {
        if (part === "HUGO SOLAR ENERGY") {
            return (
                // the gap between words in link should be the same, regardless of where it is used
                <a key={index} href="/our-story" className="text-[var(--color-secondary)] font-semibold hover:underline whitespace-nowrap inline-block">
                    {part}
                </a>
            );
        }
        return part;
    });
}