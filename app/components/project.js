"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

import attendanceImg from "@/assets/attendance.png";
import portfolioImg from "@/assets/portfolio.png";
import carwashImg from "@/assets/carwash.png";
import nexus from "@/assets/nexus.png";
import immverse from "@/assets/immverse.png";

const projects = [
    {
        title: "Smart Attendance System",
        description:
            "Geofencing and Face Recognition based attendance system with real-time validation and dashboard.",
        tech: ["React", "OpenCV", "Express", "MongoDB"],
        github: "https://github.com/harshjaiswal2001/Attendance_using_geofencing",
        live: "",
        image: attendanceImg,
    },
    {
        title: "3D Portfolio Website",
        description:
            "A personal portfolio with 3D animated avatar using React Three Fiber and Framer Motion.",
        tech: ["Next.js", "Tailwind", "React Three Fiber"],
        github: "https://github.com/harshjaiswal2001/Portfolio",
        live: "https://portfolio-harsh-jaiswal.vercel.app/",
        image: portfolioImg,
    },
    {
        title: "Car Washing App (Frontend)",
        description:
            "A mobile-first car washing service app built using React Native, allowing users to book car washes, track orders, and make payments seamlessly.",
        tech: ["React Native", "Expo", "Tailwind (NativeWind)", "React Navigation"],
        github:
            "https://github.com/harshjaiswal2001/car_wash_android_application_frontend",
        live: "",
        image: carwashImg,
    },
    {
        title: "Nexus Blog API (Backend)",
        description:
            "A powerful RESTful API for the Nexus Blog platform built using Node.js, Express, and MongoDB. It handles user authentication, blog CRUD operations, and secure content delivery.",
        tech: ["Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
        github: "https://github.com/harshjaiswal2001/Nexus-Blog-App_Backend",
        live: "",
        image: nexus,
    },
    {
        title: "Immverse.AI Landing Page",
        description:
            "A responsive and modern landing page built for Immverse.AI using Next.js and Bootstrap. Designed with sleek animations, sections for features, testimonials, and a CTA to boost conversion.",
        tech: ["Next.js", "Bootstrap", "Framer Motion", "SCSS"],
        github: "https://github.com/harshjaiswal2001/Immverse.ai",
        live: "https://immverse-ai-landing-page-hj.vercel.app/",
        image: immverse,
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="py-16 px-4 bg-background text-foreground transition-colors duration-300"
        >
            <motion.h2
                className="text-4xl font-bold mb-10 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Projects
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-card rounded-2xl shadow-md overflow-hidden border border-border flex flex-col hover:shadow-xl transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        {/* Project Image */}
                        <motion.div
                            className="relative w-full h-64 bg-muted"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-contain"
                            />
                        </motion.div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-grow">
                            <motion.h3
                                className="text-2xl font-semibold mb-2"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                            >
                                {project.title}
                            </motion.h3>

                            <motion.p
                                className="text-muted-foreground mb-4"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                            >
                                {project.description}
                            </motion.p>

                            <motion.div
                                className="flex flex-wrap gap-2 mb-4"
                                initial="hidden"
                                whileInView="visible"
                                variants={{
                                    hidden: {},
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.1,
                                        },
                                    },
                                }}
                            >
                                {project.tech.map((tech, i) => (
                                    <motion.span
                                        key={i}
                                        className="bg-muted text-sm px-2 py-1 rounded-full"
                                        variants={{
                                            hidden: { opacity: 0, y: 10 },
                                            visible: { opacity: 1, y: 0 },
                                        }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </motion.div>

                            <div className="flex gap-4 mt-auto">
                                {project.github && (
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 hover:text-primary transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <FaGithub />
                                        GitHub
                                    </motion.a>
                                )}
                                {project.live && (
                                    <motion.a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 hover:text-primary transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <FaExternalLinkAlt />
                                        Live
                                    </motion.a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
