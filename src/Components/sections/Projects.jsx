import RevealOnScroll from "../RevealOnScroll";
const Projects = () => {
    return ( 
    <section id="projects"
    className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 
                bg-clip-text text-transparent text-center">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all ">
                    <h3 className="text-xl font-bold mb-2">
                        Currecy Converter
                    </h3>
                    <p className="text-gray-400 mb-4">
                        A simple currency converter app that allows users to convert between different currencies
                         using real-time exchange rates using API.
                    </p>
                    <div>
                        {["React", "Tailwind CSS", "API Integration"].map((tech, key) => (
                            <span className="bg-blufe-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition" key={key}>
                                        {tech}

                            </span>
                            
                        ))}
                    </div>
                    <div className="fles justify-between items-center">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">View Projects -›</a>
                    </div>
                </div>
            </div>

        </div>
        </RevealOnScroll>

    </section> 
    );
}
 
export default Projects;