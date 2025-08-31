import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProfessionalProjectSection from './components/ProfessionalProjectSection';
import PersonalProjectSection from './components/PersonalProjectSection';

export default function MinimalistPortfolio() {
  return (
    <main className="min-h-screen md:h-screen flex flex-col bg-white dark:bg-gray-900 pb-16 sm:pb-0">
      {/* min-h-0 ensures children can shrink and scroll inside the grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-5 overflow-hidden min-h-0">
        {/* Left Column - Profile */}
        <div className="md:col-span-2 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 md:flex md:items-center">
          <ProfileSection />
        </div>

        {/* Right Column - Scrollable Skills/Experience/Projects */}
        {/* overflow-y-scroll => scrollbar shows even when not needed
            min-h-0 + h-full keep the scroller sized to the viewport */}
        <div className="md:col-span-3 flex flex-col overflow-y-scroll min-h-0 h-full">
          <div className="p-4">
            <SkillsSection />
          </div>

          <div className="p-4">
            <ExperienceSection />
          </div>

          <div className="p-4">
            <ProfessionalProjectSection />
          </div>

          <div className="p-4">
            <PersonalProjectSection />
          </div>
        </div>
      </div>
    </main>
  );
}
