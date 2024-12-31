import MorphingText from "@/components/ui/morphing-text";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <AnimatedGridPattern />
      <div className="flex flex-col md:flex-row items-center justify-center relative z-10 gap-8">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <MorphingText
            texts={["Hi", "I am Fenghai Li", "你好", "我是李峰海"]}
            className="text-6xl md:text-8xl font-bold leading-tight"
          />
          <p className="text-sm md:text-base text-gray-600 text-center md:text-left">
            Welcome to my personal website! I’m a developer and researcher passionate about AI and advanced system.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com/4r5t" target="_blank" rel="noopener noreferrer">
              <AnimatedGradientText>
                <span
                  className={cn(
                    `inline-flex items-center animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                  )}
                >
                  <Image
                    src="/icons/gitIcon.svg"
                    alt=" "
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Github
                </span>
              </AnimatedGradientText>
            </a>

            {/* <a
              href="https://linkedin.com/in/fenghaili"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-500"
            >
              LinkedIn
            </a> */}
            <a
              href="/Resume_Fenghai_Li_Nov_20.pdf">
              <AnimatedGradientText>
                <span
                  className={cn(
                    `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                  )}
                >
                  CV
                </span>
              </AnimatedGradientText></a>
            <a
              href="/Resume_Fenghai_Li_Nov_20.pdf">
              <AnimatedGradientText>
                <span
                  className={cn(
                    `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                  )}
                >
                  Resume </span>
              </AnimatedGradientText></a>
          </div>

        </div>
        <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-300 rounded-lg shadow-md">
          {/* Add your profile picture here */}
        </div>
      </div>
    </main>
  );
}
