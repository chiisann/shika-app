"use client";

import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import DeerIcon from "../public/shika-icon.svg";

export default function Home() {
  const router = useRouter();

  const handleStartFinding = () => {
    router.push("/upload");
  };

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-[#ff7f50] to-[#ffa07a]">
      {/* Header */}
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-white text-2xl font-mono tracking-wider">
          SHIKA-FINDER
        </h1>
        <button className="text-white" aria-label="Menu">
          <Menu size={32} />
        </button>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center flex-col p-6 gap-10">
        <button
          className="w-64 h-64 bg-white rounded-full flex flex-col items-center justify-center transform transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50"
          aria-label="Start finding"
          onClick={handleStartFinding}
        >
          <svg
            // version="1.1"
            // id="_x32_"
            // xmlns="http://www.w3.org/2000/svg"
            // x="0px"
            // y="0px"
            viewBox="0 -50 550 650"
            // className="width: 128px; height: 128px; opacity: 1;"
          >
            <g>
              <path
                d="M335.793,260.01c39.304-8.204,61.984-45.15,64.227-71.993c-39.276-31.905-90.818,2.452-103.086,22.09
		c0,0-9.751,0.015-21.946,1.1c0-0.158-0.021-0.302-0.021-0.46c0.035-5.695,1.322-12.548,6.636-20.889
		c5.35-8.305,15.057-18.207,32.574-28.425c18.71-10.929,36.787-23.621,50.881-38.29c7.046-7.363,13.109-15.252,17.574-23.924
		c4.444-8.643,7.263-18.206,7.263-28.273c0-6.479-1.187-13.094-3.61-19.48c-3.638-9.614-7.766-15.748-16.452-24.125
		c-8.722-8.391-30.575-19.659-51.327-26.21c-13.9-4.386-16.474,4.911-6.644,12.009c15,10.829,27.612,19.638,38.657,33.746
		c2.977,3.804,7.018,11.843,8.219,15.007c1.201,3.178,1.69,6.09,1.704,9.053c-0.007,4.552-1.252,9.412-4.013,14.827
		c-2.286,4.494-7.751,11.512-12.044,16.337c-1.482,1.661,0.453,9.988-1.23,11.664c-0.906-3.546-26.785-35.846-50.313-41.116
		c-11.656-2.61-13.195,4.911-3.07,11.045c23.14,14.022,23.32,23.93,23.751,30.69c0.108,1.654-0.381,3.804-2.308,7.198
		c-1.927,3.365-7.212,9.765-13.439,14.95c-1.022,0.863-7.457,4.408-8.19,5.458c-19.113,11.548-24.7,19.422-32.746,31.926
		c-8.427,13.022-11.368,26.095-11.325,36.824c0,1.892,0.115,3.674,0.266,5.415c-3.552,1.028-6.86,2.214-9.65,3.631
		c0,0-80.6,56.303-82.549,60.208c-1.956,3.911-13.676,37.104-13.676,37.104s-78.12,54.685-83.973,60.545
		c-5.86,5.86,54.678,66.406,68.347,62.501c13.67-3.912,106.386-25.397,106.386-25.397L262.563,512h193.904L335.793,260.01z"
                className="st0 fill-[#ff7f50]"
              ></path>
            </g>
          </svg>

          {/* <div className="w-20 h-20 text-[#ff7f50] mb-4">
            <img src={DeerIcon} alt="Deer Icon" className="w-16 h-16" />
          </div> */}
        </button>
        <div className="text-white text-m">Click to start</div>
      </div>

      {/* Footer */}
      <footer className="p-6 text-center">
        <p className="text-white font-mono tracking-wider">CHIT560 2024</p>
      </footer>
    </main>
  );
}
