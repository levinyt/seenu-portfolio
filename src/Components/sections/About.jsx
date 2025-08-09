import RevealOnScroll from "../RevealOnScroll";
const About = () => {

    const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];
    const backendSkills = ["Node.js", "Express", "MongoDB", "SQL"];
    const tools = ["Git", "GitHub", "VS Code", "Postman"];
    return ( 
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 
                bg-clip-text text-transparent text-center"> 
                    About Me
                </h2>
                <div className="glass rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Hello! I'm Seenuvasan, a passionate web developer with a love for creating dynamic and engaging user experiences.

                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl-p-6 hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech,key) => (
                                    <span className="bg-blufe-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition" key={key}>
                                        {tech}

                                    </span>
                                ))}

                            </div>

                        </div>
                        <div className="rounded-xl-p-6 hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech,key) => (
                                    <span className="bg-blufe-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition" key={key}>
                                        {tech}

                                    </span>
                                ))}

                            </div>

                        </div>
                    
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    🎓Education
                                </h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>
                                        <strong>
                                            B.tech in Imformation Technology</strong>-University College of Engineering Tindivanam (2022-2026)
                                    </li>
                                    <li>
                                        Relevant Courses:DataStructures and Algorithms,Web Development,Database Management Systems
                                    </li>
                                </ul>
                        </div>
                         <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                                 <div className="space-y-4 text-gray-300">
                                    <div>
                                        <h4 className="font-semibold mb-2">
                                            Student campus ambassador at Intershala (2024)
                                        </h4>
                                    </div>
                                </div>
                                <div className="space-y-4 text-gray-300">
                                    <div>
                                        <h4 className="font-semibold">
                                            Internship at System tron 
                                        </h4>
                                        <p>
                                            Assisted in developing front-end components and designing user interfaces for web applications.
                                        </p>
                                    </div>
                                </div>
                        </div>

                    </div>
                </div>

            </div>
            </RevealOnScroll>

        </section>
     );
}
 
export default About;