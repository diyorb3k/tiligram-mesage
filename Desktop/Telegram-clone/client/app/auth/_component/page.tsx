import { FaTelegram } from "react-icons/fa";
import StateAuth from "./state";
import Social from "./social";
import { ModeToggle } from "@/components/ui/shared/mode-toggle";

const Auth = () => {
  return (
    <div className="container max-w-md w-full h-screen flex justify-center items-center flex-col space-y-4 bg">
      <FaTelegram size={120} className="text-blue-500" />
      <div className="flex items-center gap-2">
        <h1 className="text-4xl font-bold">Telegram</h1>
        <ModeToggle/>
      </div>
      <p className="text-center text-muted-foreground text-sm">Telegram is d messaging app with a focus on speed and security, it's super-fast,simple and free.</p>
    <StateAuth/>
    <Social/>
    </div>
  );
};
export default Auth;
