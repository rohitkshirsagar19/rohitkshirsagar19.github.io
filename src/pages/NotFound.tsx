import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSound } from "@/context/SoundContext";
import { Helmet } from "react-helmet-async";

const NotFound: React.FC = () => {
  const { playError, playClick } = useSound();

  useEffect(() => {
    playError();
  }, [playError]);

  return (
    <div className="min-h-screen bg-[#0000AA] text-white font-mono p-8 md:p-16 flex flex-col items-center justify-center relative overscroll-none overflow-hidden selection:bg-white selection:text-[#0000AA]">
      <Helmet>
        <title>404 Error - BSOD | Rohit Kshirsagar</title>
        <meta name="theme-color" content="#0000AA" />
      </Helmet>

      <div className="max-w-4xl w-full animate-pixel-fade-in">
        <h1 className="text-xl md:text-3xl mb-8 bg-white text-[#0000AA] inline-block px-2">
          *** STOP: 0x0000404 (PAGE_NOT_FOUND_EXCEPTION)
        </h1>

        <p className="mb-6 text-lg md:text-xl">
          A fatal exception 404 has occurred at 0028:C0011E36 in VXD VMM(01) +
          00010E36. The current application will be terminated.
        </p>

        <ul className="mb-8 list-disc list-inside space-y-2 text-lg md:text-xl">
          <li>Check to make sure any URLs you typed are correct.</li>
          <li>If this is the first time you've seen this stop error screen, congratulations! You found a secret.</li>
          <li>Press any key to continue (or click the button below).</li>
        </ul>

        <div className="mt-12 text-center md:text-left">
          <p className="mb-4">Press ENTER to return to Windows (Home)</p>
          <Link
            to="/"
            onClick={playClick}
            className="inline-block border-2 border-white px-6 py-2 hover:bg-white hover:text-[#0000AA] transition-colors duration-0 font-bold"
          >
            Press any key to continue _
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 text-sm opacity-70">
        <p>Technical Information:</p>
        <p>*** STOP: 0x00000000 (0x00000000, 0x00000000, 0x00000000, 0x00000000)</p>
        <p>*** rohitkshirsagar19.sys - Address F86B5A10 base at F86B5000, DateStamp 3dd991eb</p>
      </div>
    </div>
  );
};

export default NotFound;