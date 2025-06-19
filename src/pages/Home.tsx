import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import PrimaryButton from "../components/Buttons/PrimaryButton";

export default function Home() {
  return (
    <>
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
              className="rounded-full w-60 h-60 md:w-80 md:h-80 lg:w-90 lg:h-90 xl:w-110 xl:h-110 bg-[#323643]"
            />
          </a>

          {/* Left: Greetings */}
          <div className="order-2 md:order-1 flex flex-col md:items-start items-center gap-8 text-center md:text-left">
            <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl leading-none">
              <span className="block">HI, I AM</span>
              <span className="block">ANGELICA YSABEL BUAN.</span>
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
                href="mailto:23angelicaysabelbuan@gmail.com"
              />
              <PrimaryButton
                color="bg-[#606470]"
                textColor="text-white"
                href="linkedin.com/in/angelica-ysabel-buan"
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
                href="mailto:23angelicaysabelbuan@gmail.com"
                icon={<SiGithub size={20} />}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
