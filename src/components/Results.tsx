import { motion } from "framer-motion";
import { State } from "../hooks/useEngine";
import { formatPercentage } from "../utils/helpers";
import { GiBowman } from "react-icons/gi";
import { MdWifiTetheringError } from "react-icons/md";
import { RiFocus2Line } from "react-icons/ri";

const Results = ({
  state,
  errors,
  accuracyPercentage,
  total,
  className = "",
}: {
  state: State;
  errors: number;
  accuracyPercentage: number;
  total: number;
  className?: string;
}) => {
  if (state !== "finish") {
    return null;
  }

  const initial = { opacity: 0 };
  const animate = { opacity: 1 };

  return (
    <motion.ul
      initial={initial}
      animate={animate}
      role="list"
      className="m-8 max-w-screen-md"
    >
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="group relative flex flex-col pb-8 pl-7 last:pb-0"
      >
        <div className="absolute bottom-0 left-[calc(0.25rem-0.5px)] top-0 w-px bg-white/10 group-first:top-3"></div>
        <div className="absolute left-0 top-2 h-2 w-2 rounded-full  bg-yellow-300 bg-zinc-950"></div>
        <h3 className="mt-2 text-sm/6 font-semibold text-yellow-300">
          Accuracy
        </h3>

        <p className="font-display text-xl order-first font-semibold tracking-[0.2em] text-yellow-300">
          <GiBowman className="h-10 w-10 " />{" "}
          {formatPercentage(accuracyPercentage)}
        </p>
        <p className="mt-0.5 text-sm/6 text-zinc-400">
          If you practice more your accuracy will be increased by 10X better. Go
          On practice and deliver.
        </p>
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ duration: 0.3, delay: 1 }}
        className="group relative flex flex-col pb-8 pl-7 last:pb-0"
      >
        <div className="absolute bottom-0 left-[calc(0.25rem-0.5px)] top-0 w-px bg-white/10 group-first:top-3"></div>
        <div className="absolute left-0 top-2 h-2 w-2 rounded-full  bg-red-500 bg-zinc-950"></div>
        <h3 className="mt-2 text-sm/6 font-semibold text-red-500">Errors</h3>

        <p className="font-display text-xl order-first font-semibold tracking-[0.2em] text-red-500">
          <MdWifiTetheringError className="h-10 w-10 " /> {errors}
        </p>
        <p className="mt-0.5 text-sm/6 text-zinc-400">
          Nothing to worry , your device is is hiting some error on typing, keep
          going with the flow, errors eliminates automatically.
        </p>
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ duration: 0.3, delay: 1.4 }}
        className="group relative flex flex-col pb-8 pl-7 last:pb-0"
      >
        <div className="absolute bottom-0 left-[calc(0.25rem-0.5px)] top-0 w-px bg-white/10 group-first:top-3"></div>
        <div className="absolute left-0 top-2 h-2 w-2 rounded-full  bg-green-600 bg-zinc-950"></div>
        <h3 className="mt-2 text-sm/6 font-semibold text-green-600">
          You Typed
        </h3>

        <p className="font-display text-xl order-first font-semibold tracking-[0.2em] text-green-600">
          <RiFocus2Line className="h-10 w-10 " /> {total}
        </p>
        <p className="mt-0.5 text-sm/6 text-zinc-400">
          Look at this how much you typed well done , keep the flow running !
        </p>
      </motion.li>
    </motion.ul>
  );
};

export default Results;
