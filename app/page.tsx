import MorphingText from "@/components/ui/morphing-text";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import TypingAnimation from "@/components/ui/typing-animation";
import Image from "next/image";
import GitIcon from "@/app/icons/gitIcon.svg";
import { cn } from "@/lib/utils";
export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <AnimatedGridPattern />

      <div className="flex flex-col md:flex-row items-center justify-center relative z-10 gap-8">
        <div className="flex flex-col items-center md:items-start space-y-6 md:w-4/5 w-full">
          {/* Morphing Text */}
          {/* <MorphingText
            texts={["Hi", "I am Fenghai Li", "你好", "我是李峰海"]}
            className="text-6xl md:text-8xl font-bold leading-tight"
          /> */}
          <div
            className="relative"
            style={{
              minHeight: "6rem",
            }}
          >
            <MorphingText
              texts={["Hi", "I am Fenghai Li", "你好", "我是李峰海"]}
              className="text-6xl md:text-8xl font-bold leading-tight whitespace-nowrap"
            />
          </div>


          {/* Typing Animation with Fixed Dimensions and Smaller Font */}
          <div
            // You can adjust width, height, font-size as you wish:
            className="relative text-xs md:text-sm text-gray-600 text-center md:text-left"
            style={{
              width: "90%",
              maxWidth: "700px",
              minHeight: "5rem",   // enough vertical space for your typed text
            }}
          >
            <TypingAnimation duration={50} minHeight="5rem" minWidth="45rem">
              Welcome to my personal website! I’m a developer and researcher passionate about AI and advanced systems.
            </TypingAnimation>
          </div>


          {/* Buttons */}
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com/4r5t" target="_blank" rel="noopener noreferrer">
              <AnimatedGradientText>
                <span
                  className={cn(
                    `inline-flex items-center animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                  )}
                >
                  <Image
                    src={GitIcon}
                    alt="Github"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Github
                </span>
              </AnimatedGradientText>
            </a>
            {/* <a href="/myweb/files/Resume_Fenghai_Li_Nov_20.pdf">
              <AnimatedGradientText>
                <span
                  className={cn(
                    `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                  )}
                >
                  CV
                </span>
              </AnimatedGradientText>
            </a> */}

            <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/files/Resume_Fenghai_Li_Nov_20.pdf`}>
              <AnimatedGradientText>
                <span
                  className={cn(
                    `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                  )}
                >
                  Resume
                </span>
              </AnimatedGradientText>
            </a>
          </div>
        </div>

        {/* Placeholder for Profile Picture */}
        <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-300 rounded-lg shadow-md">
          {/* Add your profile picture here */}
        </div>
      </div>
    </main>
  );
}
