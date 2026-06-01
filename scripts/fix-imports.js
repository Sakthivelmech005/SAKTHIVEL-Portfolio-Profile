const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const files = [
  'pages/_app.tsx',
  'pages/about.tsx',
  'pages/skills.tsx',
  'pages/experience.tsx',
  'pages/projects.tsx',
  'pages/achievements.tsx',
  'pages/certifications.tsx',
  'pages/contact.tsx',
  'pages/index.tsx',
  'components/Layout.tsx',
  'components/Navbar.tsx',
  'sections/AboutSection.tsx',
  'sections/SkillsSection.tsx',
  'sections/ExperienceSection.tsx',
  'sections/ProjectsSection.tsx',
  'sections/AchievementsSection.tsx',
  'sections/CertificationsSection.tsx',
  'sections/ContactSection.tsx',
  'sections/HeroSection.tsx',
];

const replacements = {
  'pages/_app.tsx': {
    "@/components/Layout": '../components/Layout',
  },
  'pages/index.tsx': {
    "@/sections/": '../sections/',
    "@/components/SEO": '../components/SEO',
  },
  'pages/about.tsx': {
    "@/sections/AboutSection": '../sections/AboutSection',
    "@/components/SEO": '../components/SEO',
  },
  'pages/skills.tsx': {
    "@/sections/SkillsSection": '../sections/SkillsSection',
    "@/components/SEO": '../components/SEO',
  },
  'pages/experience.tsx': {
    "@/sections/ExperienceSection": '../sections/ExperienceSection',
    "@/components/SEO": '../components/SEO',
  },
  'pages/projects.tsx': {
    "@/sections/ProjectsSection": '../sections/ProjectsSection',
    "@/components/SEO": '../components/SEO',
  },
  'pages/achievements.tsx': {
    "@/sections/AchievementsSection": '../sections/AchievementsSection',
    "@/components/SEO": '../components/SEO',
  },
  'pages/certifications.tsx': {
    "@/sections/CertificationsSection": '../sections/CertificationsSection',
    "@/components/SEO": '../components/SEO',
  },
  'pages/contact.tsx': {
    "@/sections/ContactSection": '../sections/ContactSection',
    "@/components/SEO": '../components/SEO',
  },
  'components/Layout.tsx': {
    "@/components/Navbar": './Navbar',
    "@/components/Footer": './Footer',
    "@/components/LoadingScreen": './LoadingScreen',
  },
  'components/Navbar.tsx': {
    "@/components/ThemeToggle": './ThemeToggle',
  },
  'sections/AboutSection.tsx': {
    "@/components/SectionHeading": '../components/SectionHeading',
  },
  'sections/SkillsSection.tsx': {
    "@/components/SectionHeading": '../components/SectionHeading',
    "@/components/SkillBar": '../components/SkillBar',
  },
  'sections/ExperienceSection.tsx': {
    "@/components/SectionHeading": '../components/SectionHeading',
    "@/components/TimelineCard": '../components/TimelineCard',
  },
  'sections/ProjectsSection.tsx': {
    "@/components/SectionHeading": '../components/SectionHeading',
    "@/components/ProjectCard": '../components/ProjectCard',
  },
  'sections/AchievementsSection.tsx': {
    "@/components/AchievementCard": '../components/AchievementCard',
    "@/components/SectionHeading": '../components/SectionHeading',
  },
  'sections/CertificationsSection.tsx': {
    "@/components/CertificationCard": '../components/CertificationCard',
    "@/components/SectionHeading": '../components/SectionHeading',
  },
  'sections/ContactSection.tsx': {
    "@/components/SectionHeading": '../components/SectionHeading',
  },
  'sections/HeroSection.tsx': {
    "@/components/GearCanvas": '../components/GearCanvas',
  },
};

for (const relativePath of files) {
  const filePath = path.join(projectRoot, relativePath);
  const content = fs.readFileSync(filePath, 'utf8');
  let updated = content;
  const map = replacements[relativePath] || {};
  Object.entries(map).forEach(([search, replaceWith]) => {
    updated = updated.split(search).join(replaceWith);
  });
  if (updated !== content) {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log(`Updated ${relativePath}`);
  }
}
