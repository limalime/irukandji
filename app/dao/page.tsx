import Image from "next/image";
import Link from "next/link";

export default function StakePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-6">
      <div className="font-primary py-12 animate-marquee whitespace-nowrap">
    <span className="text-4xl mx-4">COMING SOON</span>
    <span className="text-4xl mx-4">COMING SOON</span>
    <span className="text-4xl mx-4">COMING SOON</span>
    <span className="text-4xl mx-4">COMING SOON</span>
    <span className="text-4xl mx-4">COMING SOON</span>
    <span className="text-4xl mx-4">COMING SOON</span>
    <span className="text-4xl mx-4">COMING SOON</span>
    <span className="text-4xl mx-4">COMING SOON</span>
    <span className="text-4xl mx-4">COMING SOON</span>
    <span className="text-4xl mx-4">COMING SOON</span>
    <span className="text-4xl mx-4">COMING SOON</span>
    <span className="text-4xl mx-4">COMING SOON</span>
    <span className="text-4xl mx-4">COMING SOON</span>
    <span className="text-4xl mx-4">COMING SOON</span>
    <span className="text-4xl mx-4">COMING SOON</span>
    </div>

      <figure className="relative max-w-lg">
        <Image
          src="/images/waiting-digi.png"
          alt="Waiting Digi"
          className="flex pr-2 h-auto max-w-full inline-block mx-3"
          width={1000}
          height={1000}
        />
      </figure>
      <p className="text-sm mt-2 text-gray-200/80">
        Work in Progress, this page doesn’t exist yet. We’re building something awesome!
      </p>

      <Link
        href="/"
        className="mt-8 text-sm text-gray-100 underline hover:text-gray-500"
      >
        ← Back to Home
      </Link>
    </div>
  );
}