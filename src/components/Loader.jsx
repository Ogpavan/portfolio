import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 grid place-content-center bg-[#0F0F0F]">
      <BarLoader />

    </div>
  );
};

const variants = {
  initial: {
    scaleY: 0.7,
    opacity: 0,
  },
  animate: {
    scaleY: 2,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 0.7,
      ease: "circIn",
    },
  },
};

const BarLoader = () => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
      initial="initial"
      animate="animate"
      className="flex gap-1"
    >
      <motion.div variants={variants} className="h-12 w-2 rounded-sm  bg-purple-200" />
      <motion.div variants={variants} className="h-12 w-2 rounded-sm  bg-blue-200" />
      <motion.div variants={variants} className="h-12 w-2 rounded-sm  bg-pink-200" />
      <motion.div variants={variants} className="h-12 w-2 rounded-sm  bg-orange-200" />
      <motion.div variants={variants} className="h-12 w-2 rounded-sm  bg-red-200" />
    </motion.div>
  );
};

export default Loader;
