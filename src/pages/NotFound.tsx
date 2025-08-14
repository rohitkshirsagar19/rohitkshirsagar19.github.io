import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Gamepad2, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const [funMessage, setFunMessage] = useState("");

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Generate a random fun message with a retro twist
    const messages = [
      "404: Page not found. It must have glitched out in the matrix!",
      "Oops! This page got pixelated into oblivion.",
      "Level not found. Insert coin to continue?",
      "404 Error: The page has been abducted by aliens. 👾",
      "Whoops! This route crashed harder than a retro game cartridge.",
      "Page missing. Maybe it's stuck in an infinite loop?",
      "404: Reality glitch detected. Press reset to try again.",
      "The page you're seeking has leveled up and left the server."
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    setFunMessage(messages[randomIndex]);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-retro-black">
      <div className="text-center pixel-border bg-retro-dark-gray p-8 animate-pixel-fade-in">
        <div className="mb-6 animate-pixel-pulse">
          <AlertTriangle className="w-24 h-24 mx-auto text-retro-purple" />
        </div>
        <h1 className="font-pixel text-6xl text-retro-purple mb-4 animate-blink">
          404
        </h1>
        <p className="font-retro text-xl text-retro-light-gray mb-6">
          {funMessage}
        </p>
        <a
          href="/"
          className="pixel-button flex items-center justify-center mx-auto"
        >
          RETURN TO HOME BASE
          <Gamepad2 className="ml-2 w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default NotFound;