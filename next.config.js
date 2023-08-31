/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['img.freepik.com']
    },
    // output: "export",
    redirects: async () => {
        return [
            {
                source: "/admin",
                destination: "/",
                permanent: false
            },
            {
                source: "/about",
                destination: "/",
                permanent: false
            },
            {
                source: "/user/:userId",
                destination: "/",
                permanent: false
            }
        ]
    }
}

module.exports = nextConfig
