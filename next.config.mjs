



/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  typescript: {
    ignoreBuildErrors: true,
  }
  // experimental: {
  //   mdxRs: true,
  // },

  // Optionally, add any other Next.js config below
}


export default nextConfig