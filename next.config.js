const withImages = require('next-images');
const withVideos = require('next-videos');


module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = withImages(
    withVideos({
        images: {
            disableStaticImages: true,
        },
        async redirects() {
            return [
              {
                source: '/signup',
                destination: '/auth?card=signup',
                permanent: true,
              },
              {
                source: '/signin',
                destination: '/auth?card=signin',
                permanent: true,
              },
              {
                source: '/reset-password',
                destination: '/auth?card=reset-password',
                permanent: true,
              },
              {
                source: '/new-password',
                destination: '/auth?card=new-password',
                permanent: true,
              },
              {
                source: '/joined',
                destination: '/auth?card=joined',
                permanent: true,
              },
              {
                source: '/create',
                destination: '/team?card=create',
                permanent: true,
              },
              {
                source: '/team/create',
                destination: '/team?card=create',
                permanent: true,
              },
              {
                source: '/team/choose',
                destination: '/team?card=choose',
                permanent: true,
              },
              {
                source: '/team/price',
                destination: '/team?card=price',
                permanent: true,
              },
            ];
          },
    })
);
