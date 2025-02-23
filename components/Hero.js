import { Button } from "@/components/ui/Button";
import { Briefcase, FileText, Users } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white flex-1 flex flex-col">
      {/* Background circles */}
      <div className="absolute right-0 top-0 h-full w-full">
        <div className="absolute -right-20 top-6 h-40 w-40 rounded-full bg-pink-100/60" />
        <div className="absolute -left-20 top-20 h-40 w-40 rounded-full bg-pink-100/50" />
        <div className="hidden lg:block absolute right-44 top-60 h-48 w-48 rounded-full bg-pink-100/40" />
        <div className="hidden lg:block absolute right-[72px] top-[228px] h-20 w-20 rounded-full bg-pink-100/40" />
      </div>

      <div className="absolute -right-28 z-20 top-1/2 -translate-x-1/2 -translate-y-1/2 transform h-[400px] w-[400px]">
        {/* Center icon */}
        <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FF7F50] text-white">
            <Briefcase className="h-8 w-8" />
          </div>
          <div className="mt-2 text-center font-medium hidden lg:block">
            ACCOUNTS
          </div>
        </div>

        {/* Orbital icons */}
        <div className="hidden lg:block absolute right-0  lg:top-1/4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">
            <FileText className="h-6 w-6 text-[#E84855]" />
          </div>
        </div>
        <div className="hidden lg:block absolute left-0 top-1/3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">
            <Users className="h-6 w-6 text-[#E84855]" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 flex-1 flex items-center">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 h-full w-full">
          <Image
            src="/hero-image.png"
            alt="Hero Image"
            width={500}
            height={500}
            className="w-full h-auto object-cover rounded-lg hidden lg:block"
            priority
          />

          {/* Right Column */}
          <div className="relative flex items-start justify-center lg:block">
            {/* Circular elements */}
            <div className="w-full max-w-lg">
              {/* Left Column */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    ראיית חשבון
                    <br />
                    <span className="text-[#E84855]">מקצועית ופשוטה</span>
                  </h1>
                  <p className="max-w-lg text-lg text-gray-600">
                    אנו מספקים כל מספר שירותי חשבון ומספר שירותי מס ותחתית
                    בעסקים ואנשים בגודל בינוני.
                  </p>
                </div>

                <Button className="w-fit px-6 py-3 bg-[#FF7F50] text-white hover:bg-[#E84855] self-end">
                  צור קשר
                </Button>

                <div className="flex flex-row-reverse gap-1 lg:gap-6 pt-4">
                  <Image
                    src="/bar-logo.png"
                    alt="אישור לשכת רואי חשבון"
                    className="h-10 w-auto lg:h-12"
                    width={100}
                    height={100}
                  />
                  <Image
                    src="/bg-logo-rb.png"
                    alt="אישור לשכת רואי חשבון"
                    className="h-9 w-auto lg:h-11"
                    width={100}
                    height={100}
                  />
                </div>
                <Image
                  src="/hero-image-removebg-preview.png"
                  alt="Hero Image"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover rounded-lg lg:hidden animate-slide-up"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom diagonal shape */}
      <div
        className="absolute bottom-0 right-0 h-32 w-full transform bg-[#E84855] animate-slide-left"
        style={{
          clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
        }}
      />
    </div>
  );
}
