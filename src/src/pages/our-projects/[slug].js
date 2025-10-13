import { useLocales } from "@components/hooks/useLocales";
import Project from "@components/pages/our-projects/Project";

export async function getServerSideProps(ctx) {
    const locales = useLocales();
    const { params, locale } = ctx;
    const slug = params.slug;
    const projects = locales[locale].our_projects.projects;
    const project = projects.find(p => p.slug === slug);
    if (project) {
        console.log("Project found", slug, project);
        return { props: { project } };
    }
    console.log("Project not found", slug, projects);
    return { notFound : true  };
}
  

export default function ProjectPage({ project }) {
  return <Project project={project} />;
}
