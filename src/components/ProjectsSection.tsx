"use client";

import { useState } from "react";
import type { ProjectCategory, ProjectItem } from "@/data/portfolio";

interface ProjectsSectionProps {
  projects: readonly ProjectItem[];
}

const CATEGORIES: Array<"All" | ProjectCategory> = [
  "All",
  "Full-Stack",
  "Mobile",
  "Web & CMS",
];

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-sky-400">
              Selected Work
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
              Projects &amp; Client Deliveries
            </h2>
          </div>

          <div
            role="group"
            aria-label="Filter projects by category"
            className="flex flex-wrap gap-2"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-1.5 font-mono text-xs font-medium transition ${
                    isActive
                      ? "bg-sky-400 text-slate-950"
                      : "border border-slate-800 bg-slate-900 text-slate-400 hover:border-sky-400/50 hover:text-slate-200"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <article
              key={project.title}
              className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-sky-400/60"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-sky-400/10 px-3 py-1 font-mono text-xs font-semibold text-sky-400">
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-slate-500">{project.year}</span>
                </div>

                <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
                <p className="mt-1 font-mono text-xs text-slate-400">{project.context}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-1.5 text-xs text-slate-400">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-800/80 pt-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-slate-800 bg-slate-950 px-2.5 py-1 font-mono text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
