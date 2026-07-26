import { motion } from 'framer-motion';
import { FolderKanban, ExternalLink, Github, Star, GitFork, Download } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import SectionTitle from '@/components/SectionTitle';

const projectsData = [
  {
    title: "PSS Trust",
    description: "A full-stack student management portal built for PSS Trust, a registered NGO in Telangana, digitizing fee applications, biometric face attendance, and a three-tier admin approval workflow for underprivileged BPL students.",
    image: "https://i.ibb.co/k6xMVT4q/Screenshot-2026-04-25-190817.png",
    technologies: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "PostgreSQL", "Express.js", "face-api.js", "Framer Motion", "SMTP", "PWA", "Vercel"],
    liveUrl: "https://pss-trust.vercel.app/",
    githubUrl: "https://github.com/Bhanu99517/pss-trust-web",
    downloadUrl: "#",
    stars: 2,
    forks: 1,
  },
  {
    title: "Shareit Link",
    description: "A real-time instant file sharing web app with Google Sign-In, letting authenticated users upload files and share them instantly via shareable links.",
    image: "https://i.ibb.co/zWfvPBgf/Screenshot-2026-04-25-202609.png",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "Google OAuth", "Vercel"],
    liveUrl: "https://shareit-link.vercel.app/",
    githubUrl: "https://github.com/Bhanu99517/shareit-link",
    downloadUrl: "#",
    stars: 2,
    forks: 0,
  },
  {
    title: "MiraAttendance",
    description: "MIRA ATTENDANCE is a web-based facial recognition attendance platform designed for diploma / polytechnic institutes.Students can check their attendance, exam results, and application status, while admins manage everything through a role-based dashboard.",
    image: "https://i.ibb.co/JRgT6tVT/Screenshot-2026-03-22-130742.png",
    technologies: ["React", "TypeScript", "Vite", "FireBase", "deployed on Vercel"],
    liveUrl: "https://miraattendance.vercel.app",
    githubUrl: "https://github.com/Bhanu99517/MIRA_FACIAL_ATTENDANCE",
    downloadUrl: "https://wojpyqvcargyffkyxfln.supabase.co/storage/v1/object/public/shared-files/42cb9343-6c24-4522-8ac5-0c27336aff3c/9de9f5b9-7a65-445c-ab4a-8d890bfa2136.apk",
    stars: 19,
    forks: 0,
  },
  {
    title: "resume-builder",
    description: "It lets users fill in their personal details, work experience, education, and skills through a form. It then generates a clean, professional resume from that data which can be saved or exported.",
    image: "https://i.ibb.co/mV9Z6sBn/Screenshot-2026-03-24-103901.png",
    technologies: ["React", "TypeScript", "Vite", "FireBase", "deployed on Vercel"],
    liveUrl: "https://globalnorthoverseas.vercel.app",
    githubUrl: "https://github.com/Bhanu99517/resumecraft",
    downloadUrl: "#",
    stars: 1,
    forks: 0,
  },
  {
    title: "Art Gallery",
    description: "It displays a collection of art pieces in a gallery layout. Users can browse through the artworks, view details about each piece, and the data is stored and managed through a backend database.",
    image: "https://i.ibb.co/7dpvS0QP/Screenshot-2026-03-24-103825.png",
    technologies: ["Vite", "TypeScript", "Tailwind CSS", "Supabase", "deployed on Vercel"],
    liveUrl: "https://my-art-gallery-pro.vercel.app/",
    githubUrl: "https://github.com/Bhanu99517/my-art-gallery",
    downloadUrl: "#",
    stars: 3,
    forks: 0,
  },
  {
    title: "game",
    description: "It is a shooting game that runs directly in the browser. The player shoots at enemies that appear on the screen, and the game tracks hits and explosions. It has no downloads or installs — just open and play.",
    image: "https://i.ibb.co/nqYDNS3X/Screenshot-2026-03-24-103741.png",
    technologies: ["HTML5", "CSS", "JavaScript", "deployed on Vercel"],
    liveUrl: "https://shuting-1-0.vercel.app/",
    githubUrl: "https://github.com/Bhanu99517/shuting-1.0",
    downloadUrl: "#",
    stars: 2,
    forks: 0,
  },
  {
    title: "portfolio",
    description: "It showcases your work as a developer — visitors can see your projects, skills, and contact info all in one place. It has a dark/light mode toggle and smooth page transitions to give a professional first impression.",
    image: "https://i.ibb.co/kVkV25XZ/Screenshot-2026-03-24-104110.png",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "deployed on Vercel"],
    liveUrl: "https://bhanutechlab.vercel.app/",
    githubUrl: "https://github.com/Bhanu99517/Bhanu-portfolio",
    downloadUrl: "#",
    stars: 3,
    forks: 0,
  },
  {
    title: "Consultancy",
    description: "A clean, modern landing page template for consultancy and business services built with HTML, CSS, and JavaScript.",
    image: "https://image2url.com/files/1765855293210-d5b89443-0da0-4ed5-a824-5147d37e77fd.png",
    technologies: ["HTML", "CSS", "JavaSCRIPT"],
    liveUrl: "https://globalnorthoverseas.vercel.app",
    githubUrl: "https://github.com/BhanuTechLab/Consultancy",
    downloadUrl: "#",
    stars: 2,
    forks: 0,
  },

  
];

const ProjectCard = ({ project, index }: { project: typeof projectsData[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-muted/80 text-xs font-medium text-muted-foreground border border-border/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer: Stars, Forks, Links */}
        <div className="pt-3 border-t border-border/50 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Stars */}
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Star className="w-4 h-4" />
              <span className="text-sm">{project.stars}</span>
            </div>
            {/* Forks */}
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <GitFork className="w-4 h-4" />
              <span className="text-sm">{project.forks}</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            <a
              href={project.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              title="Download App"
            >
              <Download className="w-5 h-5" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              title="View on GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              title="View Live Demo"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-12">
        <SectionTitle
          icon={FolderKanban}
          title="Projects"
          subtitle="A showcase of my best work and side projects"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Projects;
