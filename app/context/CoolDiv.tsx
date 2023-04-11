'use client';
import { motion } from 'framer-motion';

function template({ rotate, x }) {
  return `rotate(${rotate}) translateX(${x})`;
}

export default function CoolDiv() {
  return (
    <>
      <motion.div
        transformTemplate={template}
        animate={{ rotate: 360 }}
        style={{ rotate: 0, x: 'calc(50vh - 100px)' }}
      />
      <p>Motion</p>
    </>
  );
}
