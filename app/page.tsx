import Image from "next/image";
import Link from "next/link";
import Logo from '@/assests/logo.svg?url'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <Image
        src={Logo}
        alt="Petrodata Logo"
        width={120}
        height={120}
        className="mb-6"
      />
      <h1 className="text-3xl font-bold text-center text-white mb-4">
        Join Petrodata to Discover Energy Insights Like Never Before
      </h1>
      <p className="text-lg text-center text-[#8a7676] max-w-xl mb-6">
        Analyze, track, and visualize vital petroleum data. Start your journey
        to smarter decisions today.
      </p>
      <Link
        href="/dashboard"
        className="bg-[#00897B] hover:bg-[#00796B] text-white px-6 py-3 rounded-xl transition-all duration-300"
      >
        Get Started
      </Link>
    </main>
  );
}

