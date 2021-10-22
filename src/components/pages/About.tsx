import React, { useEffect } from "react";
import { motion } from "framer-motion";

import { containerVariants } from "../../utils/constData";

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 520);
  }, []);
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      About
    </motion.div>
  );
};

export default About;
