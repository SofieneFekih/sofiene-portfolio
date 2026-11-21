import Image from "next/image";
import { Award, Briefcase, Code2, GraduationCap, MapPin } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function HomePage() {
  const { profile, experience, projects, skills, education, certifications, languages } =
    PORTFOLIO_DATA;

  return (
    <div id="top">
      <Navbar />

      <main id="main-content">
        {/* HERO SECTION */}
        <section id="about" className="py-20 lg:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-12">
            {/* Left Column */}
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2 font-mono text-xs text-sky-400">
                <MapPin className="h-3.5 w-3.5" />
                {profile.location} • {profile.availability}
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-3 text-xl font-medium text-slate-400">{profile.role}</p>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300">
                {profile.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-lg bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
                >
                  Explore Engineering Work
                </a>
                <a
                  href="#contact"
                  className="rounded-lg border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-400"
                >
                  Get in Touch
                </a>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-6 border-t border-slate-800/80 pt-8 sm:grid-cols-4">
                {profile.metrics.map((metric) => (
                  <div key={metric.label}>
                    <span className="block text-2xl font-bold text-slate-100">
                      {metric.value}
                    </span>
                    <span className="text-xs text-slate-400">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Portrait Card + Config Snapshot */}
            <div className="flex flex-col gap-6 lg:col-span-5">
              <div className="flex items-center gap-5 rounded-2xl border border-slate-800 bg-slate-900/90 p-5 shadow-xl">
                <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl border-2 border-sky-400/50 bg-slate-800">
                  <Image
                    src={profile.avatar.src}
                    alt={profile.avatar.alt}
                    width={400}
                    height={400}
                    priority
                    sizes="96px"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-mono text-xs font-medium text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Available for Work
                  </span>
                  <h2 className="mt-1.5 text-base font-semibold text-slate-100">
                    {profile.name}
                  </h2>
                  <p className="font-mono text-xs text-slate-400">
                    CS Engineer • Full-Stack &amp; Mobile
                  </p>
                </div>
              </div>

              <aside
                aria-label="Developer Configuration Snapshot"
                className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl"
              >
                <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-950/70 px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-rose-500" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500" />
                  <span className="ml-2 font-mono text-xs text-slate-400">
                    engineer.config.json
                  </span>
                </div>
                <pre className="overflow-x-auto p-6 font-mono text-xs leading-relaxed text-sky-300">
                  <code>{JSON.stringify(profile.terminalConfig, null, 2)}</code>
                </pre>
              </aside>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section
          id="experience"
          className="border-y border-slate-800/80 bg-slate-900/40 py-24"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12">
              <span className="font-mono text-xs uppercase tracking-widest text-sky-400">
                Career Track
              </span>
              <h2 className="mt-2 flex items-center gap-3 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
                <Briefcase className="h-7 w-7 text-sky-400" />
                Engineering Experience
              </h2>
            </div>

            <div className="space-y-6">
              {experience.map((job) => (
                <article
                  key={`${job.role}-${job.period}`}
                  className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 transition hover:border-sky-400/50"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-100">{job.role}</h3>
                      <p className="text-sm text-slate-400">
                        {job.company} • {job.type}
                      </p>
                    </div>
                    <span className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 font-mono text-xs text-slate-300">
                      {job.period}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    {job.highlights.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-slate-800 bg-slate-950 px-2.5 py-1 font-mono text-xs text-sky-300"
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

        {/* PROJECTS SECTION */}
        <ProjectsSection projects={projects} />

        {/* SKILLS SECTION */}
        <section
          id="skills"
          className="border-y border-slate-800/80 bg-slate-900/40 py-24"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12">
              <span className="font-mono text-xs uppercase tracking-widest text-sky-400">
                Technical Stack
              </span>
              <h2 className="mt-2 flex items-center gap-3 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
                <Code2 className="h-7 w-7 text-sky-400" />
                Skills &amp; Tooling
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((group) => (
                <div
                  key={group.category}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
                >
                  <h3 className="font-mono text-sm font-semibold text-sky-400">
                    {group.category}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS */}
        <section id="education" className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12">
              <span className="font-mono text-xs uppercase tracking-widest text-sky-400">
                Credentials
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
                Education &amp; Certifications
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-200">
                  <GraduationCap className="h-5 w-5 text-sky-400" />
                  Academic Background
                </h3>
                {education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="rounded-xl border border-slate-800 bg-slate-900/70 p-5"
                  >
                    <span className="font-mono text-xs text-sky-400">{edu.period}</span>
                    <h4 className="mt-1 font-semibold text-slate-100">{edu.degree}</h4>
                    <p className="mt-1 text-sm text-slate-400">{edu.institution}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-200">
                  <Award className="h-5 w-5 text-sky-400" />
                  Certifications &amp; Languages
                </h3>
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="rounded-xl border border-slate-800 bg-slate-900/70 p-5"
                  >
                    <span className="font-mono text-xs text-slate-400">
                      {cert.issuer} • {cert.year}
                    </span>
                    <h4 className="mt-1 font-semibold text-slate-100">{cert.title}</h4>
                  </div>
                ))}

                <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-sky-400">
                    Languages
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {languages.map((lang) => (
                      <span
                        key={lang.name}
                        className="rounded-md border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-slate-200"
                      >
                        {lang.name} — <span className="text-slate-400">{lang.level}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <ContactSection />
      </main>

      <footer className="border-t border-slate-800/80 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with Next.js, TypeScript &amp; Tailwind CSS.
          </p>
          <a href="#top" className="font-mono text-slate-400 hover:text-sky-400">
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}