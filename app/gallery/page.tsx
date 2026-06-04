import Image from "next/image";
import Link from "next/link";

export default function GalleryPage() {
  return (
    <div className="min-h-screen w-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-10">
      <div className="font-primary py-8 md:py-12 animate-marquee whitespace-nowrap overflow-hidden">
        <span className="text-3xl md:text-4xl mx-4">COMING SOON</span>
        <span className="text-3xl md:text-4xl mx-4">COMING SOON</span>
        <span className="text-3xl md:text-4xl mx-4">COMING SOON</span>
        <span className="text-3xl md:text-4xl mx-4">COMING SOON</span>
      </div>

      <figure className="relative max-w-[280px] md:max-w-lg">
        <Image
          src="/images/waiting.png"
          alt="Waiting Digi"
          className="h-auto w-full"
          width={800}
          height={800}
        />
      </figure>

      <p className="text-sm mt-4 text-gray-200/80 max-w-xs">
        Work in Progress. We’re building something awesome!
      </p>

      <Link
        href="/"
        className="mt-8 text-sm text-gray-100 underline hover:text-gray-400 transition-colors"
      >
        ← Back to Home
      </Link>
    </div>
  );
}