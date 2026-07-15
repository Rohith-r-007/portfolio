import Image from "next/image";
import { Fragment } from "react";
import { aboutConfig } from "@/config/about";
import { assetPath } from "@/lib/paths";

export default function AboutContent() {
  return (
    <section className="relative z-20 w-full max-w-5xl px-6 mx-auto mt-32 mb-12">
      <div className="relative z-20 w-full mx-auto lg:mx-0">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl lg:text-4xl">
          {aboutConfig.title}
        </h2>
        <div className="flex flex-col md:flex-row gap-8 mt-3 sm:mt-4 lg:mt-6">
          <div className="w-full md:w-1/2 flex flex-col">
            <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg">
              {aboutConfig.description}
            </p>
            <div className="mt-auto pt-4 flex flex-wrap gap-2">
              {aboutConfig.skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 text-sm bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-end">
            <div className="relative w-[360px] h-[360px]">
              <Image
                src={assetPath(aboutConfig.image)}
                alt="Profile"
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-cover rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-20">
        <div className="flex-1">
          <h2 className="mb-2 text-2xl font-bold dark:text-neutral-200">
            {aboutConfig.experience.title}
          </h2>
          <div className="py-10">
            {aboutConfig.experience.items.map((item, index) => (
              <div key={index} className="pb-10 border-l border-gray-200 last:border-l-0 dark:border-neutral-700">
                <div className="relative flex flex-col justify-start pl-12">
                  <div className="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
                    <svg className="w-8 h-8 text-neutral-700 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <p className="text-xs uppercase text-neutral-400 dark:text-neutral-500 trackign-widest">{item.period}</p>
                  <h3 className="my-1 text-lg font-bold dark:text-neutral-100">{item.role}</h3>
                  <p className="mb-1 text-sm font-medium dark:text-neutral-300">{item.company}</p>
                  <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[360px] ml-8">
          <h2 className="mb-2 text-2xl font-bold dark:text-neutral-200">
            {aboutConfig.connect.title}
          </h2>

          <div className="py-8">
            <p className="text-sm leading-7 text-neutral-600 dark:text-neutral-400 sm:text-base">
              {aboutConfig.connect.description}
            </p>

            <div className="mt-8 space-y-5">

              <a
                href={aboutConfig.connect.links.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" >
                  <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.344V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.604 0 4.27 2.372 4.27 5.456v6.285zM5.337 7.433a2.063 2.063 0 110-4.126 2.063 2.063 0 010 4.126zM7.119 20.452H3.555V9h3.564v11.452z"/>
                </svg>
                <span>{aboutConfig.connect.links.linkedin.text}</span>
              </a>

              <a
                href={aboutConfig.connect.links.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" >
                  <path
                  fillRule="evenodd"
                  clipRule="evenodd" 
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span>{aboutConfig.connect.links.github.text}</span>
              </a>

              <a
                href={aboutConfig.connect.links.email.url}
                className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 hover:text-red-500 transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" >
                  <path d="M2.94 5.5A2 2 0 014.5 4h11a2 2 0 011.56 1.5L10 10.25 2.94 5.5z"/>
                  <path d="M2 7.12V14a2 2 0 002 2h12a2 2 0 002-2V7.12l-7.45 5.03a1 1 0 01-1.1 0L2 7.12z" />
                </svg>
                <span>{aboutConfig.connect.links.email.text}</span>
              </a>

              <a
                href="tel:+91XXXXXXXXXX"
                className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a2 2 0 011.9 1.37l.82 2.46a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 007.07 7.07l1.27-1.27a2 2 0 012.11-.45l2.46.82A2 2 0 0121 18.72V22a2 2 0 01-2 2h-1C9.72 24 0 14.28 0 2V1a2 2 0 012-2h1z"
                  />
                </svg>

                <span>+91 96001 54449</span>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
