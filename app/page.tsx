import Image from "next/image";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { BoxReveal } from "@/components/magicui/box-reveal";
import Marquee from "@/components/magicui/marquee";

export default function Home() {
  const agendaItems = [
    { number: "01", title: "Adding leisure activities", description: "to the activity room above the cafeteria." },
    { number: "02", title: "Cheaper, affordable food", description: "in university - bhukkad is too expensive!!" },
    { number: "03", title: "More parking spaces", description: "for day scholars." },
    { number: "04", title: "Increased student club", description: "& association autonomy." },
    { number: "05", title: "Change in mess contract", description: "to improved services, or severing mess fee from hostel fee." },
    { number: "06", title: "Gym facilities", description: "in the sports complex." },
    { number: "07", title: "Transport services", description: "after sports practice for day scholars. Or centralized shuttle service for both day scholar and hosteller." },
    { number: "08", title: "Provide necessary sports equipment", description: "Instead of students using their own equipment for camp and training." },
    { number: "09", title: "Renovation of remaining washrooms", description: "to the same quality as the one near the sports complex." },
    { number: "10", title: "Extension of in-timings", description: "for girls hostel." }
  ];

  const reviews = [
    { name: "Sivaa", handle: "@siv.xxa", text: "Shams has a clear vision for improving student life on campus." },
    { name: "Reshma", handle: "@reshma_reddy25", text: "His dedication to addressing student concerns is unmatched." },
    { name: "Nishit", handle: "@nishit_pareek_30", text: "Shams' leadership skills make him the ideal candidate for Vice President." },
    { name: "Husam", handle: "@itshu.sam", text: "I trust Shams to represent our interests effectively in the Student Council." },
  ];

  return (
    <div className="relative min-h-screen bg-[#F0EFED] font-['Inter'] overflow-hidden">
      <DotPattern
        className="absolute inset-0 z-0"
        width={40}
        height={40}
        radius={1}
        fill="rgba(0,0,0,0.1)"
      />
      <div className="relative z-10 flex flex-col min-h-screen p-4 sm:p-6 md:p-8">
        <header className="flex flex-col sm:flex-row justify-between items-center mb-8 md:mb-16 space-y-4 sm:space-y-0">
          <Image
            src="/bits.png"
            alt="BITS Logo"
            width={100}
            height={40}
            priority
            className="w-24 sm:w-auto"
          />
          <div className="bg-white px-4 py-2 rounded-full text-sm font-bold shadow-sm text-center">
            <span className="text-[#2B2B88]">Student Council</span> <span className="text-black">Election 2024-25</span>
          </div>
        </header>

        <main className="flex-grow flex flex-col items-center justify-center text-center px-2 sm:px-4 md:px-0">
          <Image
            src="/poster.png"
            alt="Event Poster"
            width={450}
            height={300}
            className="mb-8 md:mb-12 max-w-full h-auto"
          />
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-full max-w-3xl mx-auto border border-gray-200 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black">AGENDA</h2>
            <BoxReveal>
              <div className="grid grid-cols-1 gap-4">
                {agendaItems.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 text-xl sm:text-2xl font-bold text-gray-300">{item.number}</div>
                    <div className="text-left">
                      <h3 className="font-semibold text-black">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </BoxReveal>
          </div>

          <div className="w-full max-w-3xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black text-center">Why Vote for Shams?</h2>
            <Marquee className="py-4 sm:py-8 bg-white rounded-lg shadow-lg border border-gray-200" speed={30} pauseOnHover>
              {reviews.map((review, index) => (
                <div key={index} className="mx-4 sm:mx-8 px-4 sm:px-6 py-4 sm:py-6 bg-gray-50 rounded-lg shadow flex flex-col justify-between h-40 sm:h-48 w-64 sm:w-80">
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-gray-800">{review.name}</p>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-4">{review.handle}</p>
                  </div>
                  <p className="text-sm sm:text-base font-medium text-gray-800 italic">&quot;{review.text}&quot;</p>
                </div>
              ))}
            </Marquee>
          </div>
        </main>

        <footer className="mt-8 md:mt-16 text-center text-xs sm:text-sm text-gray-600">
          © 2024 BITS Pilani, Dubai Campus. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
