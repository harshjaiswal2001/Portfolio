'use client'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const POSTS_PER_PAGE = 4;

export default function BlogPage() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch('/api/medium')
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(err => console.error("Failed to load blogs:", err));
    }, []);

    const indexOfLastPost = currentPage * POSTS_PER_PAGE;
    const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

    return (
        <motion.section
            id="blog"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='py-20 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
        >
            <div className="max-w-6xl mx-auto px-6">
                {/* Heading */}
                <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center font-Outfit"
                >
                    My Blog Posts
                </motion.h2>

                {/* Blog Cards */}
                <div className="grid md:grid-cols-2 gap-10">
                    {currentPosts.length > 0 ? (
                        currentPosts.map((post, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gray-50 dark:bg-darkHover p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-white/10 hover:shadow-lg transition-all duration-300"
                            >
                                {/* Feature Image */}
                                {post.thumbnail && (
                                    <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                                        <Image
                                            src={post.thumbnail}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                )}

                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mt-3 line-clamp-3">
                                    {post.contentSnippet}
                                </p>
                                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                    {new Date(post.pubDate).toLocaleDateString()}
                                </div>
                                <a
                                    href={post.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-4 text-blue-500 dark:text-indigo-400 hover:underline font-medium"
                                >
                                    Read More →
                                </a>
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-gray-500 dark:text-gray-400 text-center col-span-2">
                            Loading blogs...
                        </p>
                    )}
                </div>

                {/* Pagination */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex justify-center mt-12 space-x-2"
                >
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`w-10 h-10 rounded-full text-sm font-medium transition ${
                                currentPage === i + 1
                                    ? "bg-blue-500 text-white shadow-md"
                                    : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}
