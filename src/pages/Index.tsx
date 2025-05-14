
import MainLayout from "@/components/MainLayout";
import ProfileSection from "@/components/ProfileSection";
import EducationSection from "@/components/EducationSection";
import ResearchSection from "@/components/ResearchSection";
import PublicationsSection from "@/components/PublicationsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CoursesSection from "@/components/CoursesSection";
import ReferencesSection from "@/components/ReferencesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <MainLayout>
      <ProfileSection />
      <EducationSection />
      <ResearchSection />
      <PublicationsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CoursesSection />
      <ReferencesSection />
      <Footer />
    </MainLayout>
  );
};

export default Index;
