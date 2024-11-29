"use client";

import { CredentialsCard, DetailsCard } from "@/components/cards/project-setting-card";
import ProjectNavbar from "@/components/navbars/project-navbar";
import Protected from "@/components/protected";
import { getProjectById } from "@/store/project/project.slice";
import { RootState } from "@/store/store";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";

const Overview = () => {
  const params = useParams();
  const project = useSelector((state: RootState) =>
    getProjectById(state, params.id as string)
  );
  return (
    <section className="w-full flex flex-col justify-start items-start 2xl:gap-40 gap-20">
      <CredentialsCard project={project!} />
      <DetailsCard project={project!} />
    </section>
  );
};

export default Protected(Overview);
