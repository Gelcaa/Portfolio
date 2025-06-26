import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import BlurText from "../components/animations/BlurText";
import Aurora from "../components/animations/Aurora";

const Home = () => (
  <div
    id="home"
    style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
  >
    <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
      <Aurora
        colorStops={["#93DEFF", "#606470", "#323643"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
    </div>
    {/* Main content */}
    <div style={{ position: "relative", zIndex: 1 }}>
      <main>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between min-h-screen sm:px-2 md:px-13 lg:px-30 xl:px-70 px-4 gap-8">
          {/* Right: Profile Image (on top in mobile, right in desktop) */}
          <a
            href="#"
            className="order-1 md:order-2 block animate-background rounded-full bg-gradient-to-r from-[#93DEFF] via-[#323643] to-[#F7F7F7] bg-[length:400%_400%] p-1 [animation-duration:5s]"
          >
            <img
              src="/profile.png"
              alt="Profile"
              className="rounded-full w-60 h-60 md:w-80 md:h-80 lg:w-90 lg:h-90 xl:w-110 xl:h-110 bg-[#0A0A0A]"
            />
          </a>

          {/* Left: Greetings */}
          <div className="order-2 md:order-1 flex flex-col md:items-start items-center gap-8 text-center md:text-left">
            <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl leading-none">
              <span className="block">
                <BlurText text="HI, I AM" />
              </span>
              <span className="block">
                <BlurText text="ANGELICA YSABEL BUAN." />
              </span>
            </h1>

            <p className="font-manrope text-gray-300 text-lg md:text-2xl">
              <Typewriter
                words={[
                  "Software Engineer",
                  "Full Stack Developer",
                  "Mobile App Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </p>
            <div className="space-x-4">
              <PrimaryButton
                text="VIEW RESUME"
                color="bg-[#93DEFF]"
                textColor="text-black"
                href="https://drive.google.com/file/d/1xi94T1VQJjgjwj_TzXBj6XJs7bbMYARi/view?usp=sharing"
              />
              <PrimaryButton
                color="bg-[#606470]"
                textColor="text-white"
                href="https://www.linkedin.com/in/angelica-ysabel-buan"
                icon={<SiLinkedin size={20} />}
              />
              <PrimaryButton
                color="bg-[#606470]"
                textColor="text-white"
                href="mailto:23angelicaysabelbuan@gmail.com"
                icon={<SiGmail size={20} />}
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
      </main>
    </div>
  </div>
);

export default Home;
