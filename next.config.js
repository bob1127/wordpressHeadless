if (!process.env.WORDPRESS_API_URL) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}

/** @type {import('next').NextConfig} */
module.exports = {
  // output: 'export',

  images: {
    domains: [
      process.env.WORDPRESS_API_URL.match(/(?!(w+)\.)\w*(?:\w+\.)+\w+/)[0], // Valid WP Image domain.
      'i0.wp.com',
      '1.gravatar.com',
      '2.gravatar.com',
      'secure.gravatar.com',
    ],
  },

  async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      ' /posts/six-posts': { page: '/posts/[slug]', query: { slug: 'six-posts' } },
      '/posts/the-five-posts': { page: '/posts/[slug]', query: { slug: 'the-five-posts' } },
       '/posts/the-first-post': { page: '/posts/[slug]', query: { slug: 'the-first-post' } },
      '/posts/the-third-posts': { page: '/posts/[slug]', query: { slug: 'the-third-posts' } },
      // Add other static paths here
    };
  },
};
