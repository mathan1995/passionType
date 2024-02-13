import { useRef } from "react";
import { MdRefresh } from "react-icons/md";

const RestartButton = ({
  onRestart: handleRestart,
  className = "",
}: {
  onRestart: () => void;
  className?: string;
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    buttonRef.current?.blur();
    handleRestart();
  };

  return (
    <button
      tabIndex={-1} // to prevent focus
      ref={buttonRef}
      className={`flex flex-row items-center  rounded-3xl px-8 py-2 hover:bg-slate-700/50   ${className}`}
      onClick={handleClick}
    >
      <MdRefresh className="w-8 h-8 rounded-xl text-green-600" /> &nbsp;
      <span className="text-green-600 text-xl">Restart</span>
    </button>
  );
};

export default RestartButton;
