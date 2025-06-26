import ConceptCard from "../components/ConceptCard";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { SiGithub } from "react-icons/si";

const Project = () => (
  <div
    id="projects"
    className="flex flex-col justify-center md:px-12 lg:px-30 xl:px-70 p-9 lg:p-10 xl:p-20"
  >
    <h1 className="text-4xl md:text-6xl lg:text-7xl leading-none mb-8 pb-2">
      Projects
    </h1>
    <p>
      Here are some of the selected projects that showcase my passion in
      full-stack development.
    </p>
    {/* Project Card and Details Side by Side */}
    <div className="flex flex-col lg:flex-row gap-8 mt-8">
      {/* Left: Concept Card */}
      <div className="w-full lg:w-[400px] flex-shrink-0">
        <ConceptCard
          label="Mobile Application"
          image="/foodRecommendation.png"
          alt="Adventure Time Concept Website"
        />
      </div>
      {/* Right: Project Details */}
      <div className="rounded-2xl p-6 flex-1 text-gray-100 flex flex-col justify-between min-w-[320px]">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            AnimoEats – Personalized Food Recommendation App for DLSU-D
          </h2>
          <p className="mb-6 text-base md:text-lg text-gray-300">
            AnimoEats is a personalized food recommendation system developed for
            the DLSU-D community to make dining at Food Square more convenient,
            healthy, and affordable. Designed with students, faculty, and staff
            in mind, AnimoEats uses machine learning to suggest meals that align
            with individual taste preferences, dietary restrictions, allergies,
            and budget constraints. It features personalized recommendations,
            allergen filtering, calorie tracking, budget-friendly options, and
            meal history logging.
          </p>
          <div className="mb-4">
            <div className="font-semibold text-sm mb-2 tracking-widest">
              PROJECT INFO
            </div>
            <div className="border-t border-[#444] mb-2"></div>
            <div className="flex justify-between text-sm py-1">
              <span className="text-gray-400">Year</span>
              <span>2024</span>
            </div>
            <div className="flex justify-between text-sm py-1">
              <span className="text-gray-400">Role</span>
              <span>Back-end Developer</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <PrimaryButton
            text="VIDEO DEMO"
            color="bg-[#93DEFF]"
            textColor="text-black"
            href="https://www.youtube.com/watch?v=8ByqymtRtZ0"
          />
          {/* <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-transparent border border-[#baff6b] text-[#baff6b] font-semibold hover:bg-[#baff6b] hover:text-[#232323] transition"
          >
            SEE ON GITHUB <FiGithub /> */}
          {/* </a> */}
        </div>
      </div>
    </div>
    <div className="flex flex-col lg:flex-row gap-8 mt-8">
      {/* Left: Concept Card */}
      <div className="w-full lg:w-[400px] flex-shrink-0">
        <ConceptCard
          label="Website"
          image="/coshapee.png"
          alt="Coshapee Website"
        />
      </div>
      {/* Right: Project Details */}
      <div className="rounded-2xl p-6 flex-1 text-gray-100 flex flex-col justify-between min-w-[320px]">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Co-Shapee Merch Gallery
          </h2>
          <p className="mb-6 text-base md:text-lg text-gray-300">
            A visual merchandise catalog website showcasing designs, styles, and
            product details for a DLSU-D organization. As the project head, I
            led the initiative from concept to execution and also developed the
            website, ensuring a user-friendly interface and clear presentation
            of merchandise.
          </p>
          <div className="mb-4">
            <div className="font-semibold text-sm mb-2 tracking-widest">
              PROJECT INFO
            </div>
            <div className="border-t border-[#444] mb-2"></div>
            <div className="flex justify-between text-sm py-1">
              <span className="text-gray-400">Year</span>
              <span>2025</span>
            </div>
            <div className="flex justify-between text-sm py-1">
              <span className="text-gray-400">Role</span>
              <span>Front-end Developer</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <PrimaryButton
            text="VIEW WEBSITE"
            color="bg-[#93DEFF]"
            textColor="text-black"
            href="https://merch-gallery-website-723t.vercel.app/"
          />

          <PrimaryButton
            color="bg-[#606470]"
            textColor="text-white"
            href="https://github.com/Gelcaa"
            icon={<SiGithub size={20} />}
          />
        </div>
      </div>
    </div>
    <div className="flex flex-col lg:flex-row gap-8 mt-8">
      {/* Left: Concept Card */}
      <div className="w-full lg:w-[400px] flex-shrink-0">
        <ConceptCard
          label="Mobile Application"
          image="/foodDelivery.png"
          alt="AnimoEats Mobile App"
        />
      </div>
      {/* Right: Project Details */}
      <div className="rounded-2xl p-6 flex-1 text-gray-100 flex flex-col justify-between min-w-[320px]">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Co-Shapee Merch Gallery
          </h2>
          <p className="mb-6 text-base md:text-lg text-gray-300">
            A Flutter-based food delivery application designed to streamline
            dining experiences at DLSU-D Food Square. The app features a
            seamless ordering interface and integrates a sophisticated
            restaurant recommendation system powered by TensorFlow. Backed by
            Firebase for real-time data synchronization and reliable backend
            performance, it offers users personalized suggestions based on their
            preferences and behavior.
          </p>
          <div className="mb-4">
            <div className="font-semibold text-sm mb-2 tracking-widest">
              PROJECT INFO
            </div>
            <div className="border-t border-[#444] mb-2"></div>
            <div className="flex justify-between text-sm py-1">
              <span className="text-gray-400">Year</span>
              <span>2024</span>
            </div>
            <div className="flex justify-between text-sm py-1">
              <span className="text-gray-400">Role</span>
              <span>Fullstack Developer</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <PrimaryButton
            color="bg-[#606470]"
            textColor="text-white"
            href="https://github.com/Gelcaa/AnimoEats"
            icon={<SiGithub size={20} />}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Project;
