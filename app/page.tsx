import Image from "next/image";

import MeteorBox from "@/components/ui/mine/meteorBox"
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <MeteorBox />
    </main>
  );
}
