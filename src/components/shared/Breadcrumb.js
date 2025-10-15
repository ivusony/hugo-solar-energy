import routes from "@lib/routes";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function flattenRoutes(obj, result = {}) {
    for (const key in obj) {
        const val = obj[key];

        // Case: { path, name }
        if (val?.path && val?.name) {
            result[val.path] = val.name;
        }
        // Nested case: recurse
        else if (typeof val === "object") {
            flattenRoutes(val, result);
        }
    }
    return result;
}

export default function Breadcrumb() {
    const { asPath, locale } = useRouter();

    // Build lookup table once
    const flatRoutes = useMemo(() => flattenRoutes(routes), []);

    // Remove query/hash
    const cleanPath = asPath.split("?")[0].split("#")[0];

    // Strip locale prefix from path if needed
    const pathWithoutLocale =
        locale !== "sr" && cleanPath.startsWith(`/${locale}`)
            ? cleanPath.replace(`/${locale}`, "")
            : cleanPath;

    // Split into segments without empty strings
    const segments = pathWithoutLocale.split("/").filter(Boolean);

    // Build breadcrumb link for each level
    const buildHref = (i) => {
        if (segments.length === 0) {
            return locale !== "sr" ? `/${locale}` : "/";
        }
        const path = "/" + segments.slice(0, i + 1).join("/");
        return locale !== "sr" ? `/${locale}${path}` : path;
    };

    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1 });

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [controls, inView]);

    return (
        <nav className="flex text-sm text-gray-500" ar="Breadcrumb">
            <motion.div
                ref={ref}
                initial={{ x: -50, opacity: 0 }}
                animate={controls}
                variants={{
                    visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
                }}
            >
                <div className="bg-white pt-2 pb-2">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        {/* Root */}
                        <li>
                            <a
                                href={locale !== "sr" ? `/${locale}` : "/"}
                                className="inline-flex items-center text-gray-700 hover:text-[var(--color-secondary)] font-medium"
                            >
                                hugosolarenergy.rs
                            </a>
                        </li>

                        {/* Segments */}
                        {segments.map((seg, i) => {
                            const href = buildHref(i);
                            const routeKey = "/" + segments.slice(0, i + 1).join("/");
                            const nameObj = flatRoutes[routeKey];
                            const label = nameObj ? nameObj[locale] : seg.replace(/-/g, " ");

                            return (
                                <li key={href}>
                                    <div className="flex items-center">
                                        <span className="mx-2 text-gray-400">›</span>
                                        {i === segments.length - 1 ? (
                                            <span className="text-gray-700 font-medium whitespace-nowrap">
                                                {label}
                                            </span>
                                        ) : (
                                            <a
                                                href={href}
                                                className="text-gray-700 hover:text-[var(--color-secondary)] font-medium whitespace-nowrap"
                                            >
                                                {label}
                                            </a>
                                        )}
                                    </div>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </motion.div>
        </nav>
    );
}
