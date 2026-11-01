/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/resume.pdf',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="Sakthivel-S-Resume.pdf"',
          },
        ],
      },
      {
        source: '/Sakthivel_S_Designer_Resume.docx',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          },
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="Sakthivel-S-Resume.docx"',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
