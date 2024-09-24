import { onlineLearningData } from "./components/onlineTrainingData";
import OnlineLearningSection from "./components/onlineLearningSection";
import Link from "next/link";

export default function NewTrainingPage() {
  return (
    <main>
      <section className="flex flex-col md:py-20 py-10 md:px-28 px-10 ">
        <div className="text-center pb-10 mt-[133px]">
          <h2 className="text-[32px] leading-[38.4px] font-semibold mb-2">
            Public Webtraining
          </h2>
          <h2 className="text-[32px] leading-[38.4px] font-semibold mb-4 text-[#2D729F]">
            2024
          </h2>
        </div>
        <Link href="/target-page" className="w-[450px]">
          <div className="bg-slate-100 text-[#2D729F] border border-[#388FC7] py-3 px-2 rounded-lg font-medium text-center hover:bg-gray-200">
            Download Jadwal Public Training Tahun 2024
          </div>
        </Link>
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-10">
            {onlineLearningData?.map((training) => (
              <OnlineLearningSection key={training?.id} training={training} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
