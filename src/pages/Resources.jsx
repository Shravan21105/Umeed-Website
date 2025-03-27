import React, { useState } from "react";
import Modal from "../components/common/Modal";
import { motion } from "framer-motion";

const Resources = () => {
    const [category, setCategory] = useState("all");
    const [selectedVideo, setSelectedVideo] = useState(null);

    const videos = [
        { title: "Free Education Resources", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", category: "education" },
        { title: "Teaching Dyslexic Kids to Read", url: "https://www.youtube.com/embed/ftrXVxbkjUs" , category: "education" },
        { title: "Government Schemes for Students", url: "https://www.youtube.com/embed/3JZ_D3ELwOQ", category: "schemes" },
        { title: "Scholarship Opportunities", url: "https://www.youtube.com/embed/LXb3EKWsInQ", category: "scholarship" },
        { title: "Sign Language Basics", url: "https://www.youtube.com/embed/n8DIkI4Vs4g", category: "deafness" },
        { title: "Assistive Tech for Special Needs", url: "https://www.youtube.com/embed/wR1W7mC5TJ0", category: "accessibility" },
    ];

    const apps = [
        { name: "Khan Academy", link: "https://play.google.com/store/apps/details?id=org.khanacademy.android", category: "education" },
        { name: "Be My Eyes", link: "https://play.google.com/store/apps/details?id=com.bemyeyes.bemyeyes", category: "accessibility" },
        { name: "Dictionary.com", link: "https://play.google.com/store/apps/details?id=com.dictionary", category: "language" },
        { name: "ISL Journey", link: "https://play.google.com/store/apps/details?id=com.toleio.india&hl=en_IN", category: "deafness" },
        { name: "Hand Talk Translator", link: "https://play.google.com/store/apps/details?id=br.com.handtalk&hl=en", category: "deafness" },
    ];

    const pdfs = [
        { name: "NCERT Books (Class 1-12)", link: "https://ncert.nic.in/textbook.php", category: "education" },
        { name: "Balbharti State Board Books (Class 1-12)", link: "https://books.ebalbharati.in/ebook.aspx", category: "education" },
        { name: "Scholarship Guide", link: "/assets/pdfs/scholarship-guide.pdf", category: "scholarship" },
        { name: "Govt. Schemes for Education", link: "/assets/pdfs/govt-schemes.pdf", category: "schemes" },
        { name: "Sign Language PDF", link: "/assets/pdfs/sign-language.pdf", category: "deafness" },
        { name: "Assistive Tech Guide", link: "/assets/pdfs/assistive-tech.pdf", category: "accessibility" },
    ];

    const websites = [
        { name: "Khan Academy", link: "https://www.khanacademy.org/", category: "education" },
        { name: "IXL", link: "https://in.ixl.com/", category: "education" },
        { name: "Enable India", link: "https://www.enableindia.org/", category: "education" },
        { name: "EdX (Harvard, MIT Courses)", link: "https://www.edx.org/", category: "education" },
        { name: "National Scholarship Portal", link: "https://scholarships.gov.in/", category: "scholarship" },
        { name: "Vidya Lakshmi (Education Loans)", link: "https://www.vidyalakshmi.co.in/", category: "schemes" },
        { name: "Indian Sign Language Dictionary", link: "https://indiansignlanguage.org/", category: "deafness" },
        { name: "Google Live Transcribe", link: "https://www.android.com/accessibility/live-transcribe/", category: "accessibility" },
    ];

    const filteredVideos = category === "all" ? videos : videos.filter((v) => v.category === category);
    const filteredApps = category === "all" ? apps : apps.filter((a) => a.category === category);
    const filteredPdfs = category === "all" ? pdfs : pdfs.filter((p) => p.category === category);

    return (
        <div className="p-6 mt-20 min-h-screen bg-gray-100 dark:bg-gray-900 transition duration-300">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-10"
            >
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Resources</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">Enhance your learning with these helpful resources.</p>
            </motion.div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center space-x-2 space-y-2 md:space-y-0 mb-8">
                {["all", "education", "schemes", "scholarship", "deafness", "accessibility"].map((cat) => (
                    <motion.button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        whileHover={{ scale: 1.1 }}
                        className={`px-4 py-2 rounded-full text-white font-semibold transition duration-300 
                        ${category === cat ? "bg-blue-600" : "bg-gray-500 hover:bg-blue-500"}`}
                    >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </motion.button>
                ))}
            </div>

            {/* Videos Section */}
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">🎥 Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                {filteredVideos.map((video, index) => (
                    <motion.div
                        key={index}
                        className="border border-blue-200 dark:border-gray-700 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 shadow-lg rounded-lg p-6 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        onClick={() => setSelectedVideo(video.url)}
                    >
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{video.title}</h2>
                        <div className="relative aspect-w-16 aspect-h-9">
                            <iframe
                                className="w-full h-60 rounded-xl pointer-events-none"
                                src={video.url}
                                title={video.title}
                                style={{ border: "0" }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Mobile Apps Section */}
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">📱 Mobile Apps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {filteredApps.map((app, index) => (
                    <motion.a
                        key={index}
                        href={app.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="border border-green-200 dark:border-gray-700 bg-green-50 dark:bg-gray-800 shadow-lg rounded-lg p-4 flex items-center justify-between"
                    >
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{app.name}</h3>
                        <span className="text-blue-500 dark:text-blue-300 text-sm">Download ↗</span>
                    </motion.a>
                ))}
            </div>

            {/* PDFs Section */}
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">📖 Reading Material</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {filteredPdfs.map((pdf, index) => (
                    <motion.a
                        key={index}
                        href={pdf.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="border border-yellow-200 dark:border-gray-700 bg-yellow-50 dark:bg-gray-800 shadow-lg rounded-lg p-4 flex items-center justify-between"
                    >
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{pdf.name}</h3>
                        <span className="text-blue-500 dark:text-blue-300 text-sm">Open ↗</span>
                    </motion.a>
                ))}
            </div>

            {/* Websites Section */}
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">🌐 Websites</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {websites.map((site, index) => (
                    <motion.a
                        key={index}
                        href={site.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="border border-purple-200 dark:border-gray-700 bg-purple-50 dark:bg-gray-800 shadow-lg rounded-lg p-4 flex items-center justify-between"
                    >
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{site.name}</h3>
                        <span className="text-blue-500 dark:text-blue-300 text-sm">Visit ↗</span>
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default Resources;