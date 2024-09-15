import { useRef, memo } from "react";
import { FaPlus } from "react-icons/fa";
import { AnimationBottom } from "../../animation/animation";
import { ResetAnimationBottom } from "../../animation/resetAnimation";
import ProjectBox from "../../components/ProjectBox";
import { projectsItems } from "../../data/projects";
import useIntersectionObserver from "../../intersection";
import { Link } from "react-router-dom";

const Projects = memo(() => {
  const linkRef = useRef(null);

  useIntersectionObserver({
    elements: linkRef,
    animate: AnimationBottom,
    reset: ResetAnimationBottom,
  });

  return (
    <section
      id="projects"
      className="w-full py-10 md:py-16 font-condensed text-base text-justify flex items-center justify-center flex-col space-y-10 border-b-[3px] border-blue-700"
    >
      <h2 className="text-4xl md:text-5xl bg-custom-gradient bg-clip-text text-transparent">
        Meus projetos
      </h2>
      <div className="w-4/5 space-y-16">
        {projectsItems.map((item) => (
          <ProjectBox key={item.id} item={item} />
        ))}
      </div>
      <Link
        to="/projects"
        ref={linkRef}
        className="border-2 border-blue-600 py-2 px-8 rounded-lg flex items-center gap-2 hover:bg-custom-gradient dark:hover:border-slate-100 hover:border-slate-400 hover:text-slate-200 transition duration-500 ease-linear"
        aria-label="Ver todos os projetos"
      >
        Ver todos <FaPlus aria-hidden="true" />
      </Link>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
