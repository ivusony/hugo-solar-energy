
const nextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ['sr', 'en'],
        defaultLocale: 'sr',
        localeDetection: false,
    },
    async rewrites() {
        return [
            {
                source: '/en/our-story',
                destination: '/nasa-prica', // Proxy to Backend
            },
        ];
    }
};

export default nextConfig;
