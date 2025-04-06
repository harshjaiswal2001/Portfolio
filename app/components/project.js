// components/Projects.tsx
"use client";


import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import attendanceImg from "@/assets/attendance.png";
import portfolioImg from "@/assets/portfolio.png";


const projects = [
    {
        title: "Smart Attendance System",
        description: "Geofencing and Face Recognition based attendance system with real-time validation and dashboard.",
        tech: ["React", "OpenCV", "Express", "MongoDB"],
        github: "https://github.com/your-username/attendance-system",
        live: "",
        image: attendanceImg
    },
    {
        title: "3D Portfolio Website",
        description: "A personal portfolio with 3D animated avatar using React Three Fiber and Framer Motion.",
        tech: ["Next.js", "Tailwind", "React Three Fiber"],
        github: "https://github.com/your-username/3d-portfolio",
        live: "",
        image:portfolioImg
    },
];


export default function Projects() {
    return (
        <section id="projects" className="py-16 px-4 bg-background text-foreground">
            <motion.h2
                className="text-4xl font-bold mb-10 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Projects
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-card rounded-2xl shadow-lg overflow-hidden border border-border flex flex-col"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        {/* Feature Image */}
                        <div className="relative h-52 w-full">
                            <Image
                                src={project.image}
                                alt={project.title}
                                layout="fill"
                                objectFit="cover"
                                className="hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-muted-foreground mb-4">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="bg-muted text-sm px-2 py-1 rounded-full"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>

                            <div className="flex gap-4 mt-auto">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 hover:text-primary"
                                    >
                                        <FaGithub />
                                        GitHub
                                    </a>
                                )}
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 hover:text-primary"
                                    >
                                        <FaExternalLinkAlt />
                                        Live
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
