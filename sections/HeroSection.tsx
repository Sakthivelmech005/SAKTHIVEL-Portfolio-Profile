'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import GearCanvas from '../components/GearCanvas';
import ProfileImage from '../components/ProfileImage';

export default function HeroSection() {
  return (
    <section className="hero-bg min-h-screen relative overflow-hidden py-16 sm:py-24">
      <div className="hero-overlay" />
      <div className="hero-center-glow" />
      <div className="container relative mx-auto grid gap-12 px-4 lg:grid-cols-[1fr_1.2fr] xl:px-0">
        {/* Left Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 flex flex-col justify-center space-y-8 lg:order-1"
        >
          <span className="inline-flex w-fit items-center gap-3 rounded-full border border-electric/40 bg-slate-900/70 px-4 py-2 text-sm uppercase tracking-[0.24em] text-electric shadow-glow">
            B.E. Mechanical Engineering Â· Class of 2027
          </span>
          <div className="space-y-5">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
              SAKTHIVEL S
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Mechanical Engineering Student | CAD Designer | Product Design Enthusiast. Focused on
              CAD modelling, product design, and manufacturing engineering with SolidWorks, AutoCAD,
              and CATIA V5.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-electric px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
            >
              View My Projects <ArrowRight size={16} />
            </Link>
            <a
              href="/Sakthivel_S_Designer_Resume.docx"
              download="Sakthivel-S-Resume.docx"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-6 py-3 text-sm text-slate-200 transition hover:border-electric hover:text-electric"
            >
              <Download size={16} /> Download Resume
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-transparent px-6 py-3 text-sm text-slate-200 transition hover:border-electric hover:text-electric"
            >
              <Mail size={16} /> Contact Me
            </Link>
          </div>
          <a
            href="mailto:sakthiveldesigner05@gmail.com"
            className="inline-flex w-fit items-center gap-2 text-sm text-slate-300 transition hover:text-electric"
          >
            <Mail size={16} /> sakthiveldesigner05@gmail.com
          </a>
        </motion.div>

        {/* Right Profile Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="order-1 flex flex-col items-center justify-center space-y-8 lg:order-2"
        >
          {/* Large Profile Image */}
          <div className="group w-full">
            <ProfileImage />
          </div>

          {/* Profile Info Card */}
          <div className="w-full max-w-[400px]">
            <div className="glass-card rounded-[2rem] border border-electric/20 p-6 shadow-glow">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border border-slate-700/70 bg-slate-900 shadow-md">
                  <Image src="/profile.png" alt="Sakthivel profile" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Location</p>
                  <p className="mt-1 text-lg font-semibold text-slate-100">Hosur, Tamil Nadu</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gear Canvas - Below Images */}
          <div className="relative w-full max-w-[400px]">
            <GearCanvas />
          </div>
        </motion.div>
      </div>

      {/* Bottom Feature Card */}
      <div className="container relative mx-auto mt-16 px-4 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-card rounded-3xl border p-6 shadow-xl shadow-slate-950/20 sm:p-8"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-electric">Design focus</p>
              <p className="mt-1 text-lg font-semibold text-slate-100 sm:text-xl">
                Mechanical design, product development, and manufacturing.
              </p>
            </div>
            <p className="text-sm text-slate-400 sm:max-w-xs">
              Seeking opportunities in mechanical design, product development, or manufacturing
              engineering.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
