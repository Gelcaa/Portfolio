// "use client";
// import { useState } from "react";
// // Update the import path below if 'lens' is located elsewhere, for example:
// import { Lens } from "./ui/lens";
// // Or provide the correct relative path to the 'lens' component file.
// import { motion } from "motion/react";
// import { cn } from "@/lib/utils";

// export default function LensDemo() {
//   const [hovering, setHovering] = useState(false);

//   return (
//     <div>
//       <div className="w-full relative rounded-3xl overflow-hidden max-w-md mx-auto bg-gradient-to-r from-[#1D2235] to-[#121318] p-8 my-10">
//         <Rays />
//         <Beams />
//         <div className="relative z-10">
//           <Lens hovering={hovering} setHovering={setHovering}>
//             <img
//               src="https://images.unsplash.com/photo-1713869820987-519844949a8a?q=80&w=3500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="image"
//               width={500}
//               height={500}
//               className="rounded-2xl"
//             />
//           </Lens>
//           <motion.div
//             animate={{
//               filter: hovering ? "blur(2px)" : "blur(0px)",
//             }}
//             className="py-4 relative z-20"
//           >
//             <h2 className="text-white text-2xl text-left font-bold">
//               Apple Vision Pro
//             </h2>
//             <p className="text-neutral-200 text-left  mt-4">
//               The all new apple vision pro was the best thing that happened
//               around 8 months ago, not anymore.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Sorry about this but it looks cool

// const Beams = () => {
//   return (
//     <svg
//       width="380"
//       height="315"
//       viewBox="0 0 380 315"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className="absolute top-0 left-1/2 -translate-x-1/2 w-full pointer-events-none"
//     >
//       <g filter="url(#filter0_f_120_7473)">
//         <circle cx="34" cy="52" r="114" fill="#6925E7" />
//       </g>
//       <g filter="url(#filter1_f_120_7473)">
//         <circle cx="332" cy="24" r="102" fill="#8A4BFF" />
//       </g>
//       <g filter="url(#filter2_f_120_7473)">
//         <circle cx="191" cy="53" r="102" fill="#802FE3" />
//       </g>
//       <defs>
//         {/* ...SVG filters omitted for brevity, copy from your original... */}
//       </defs>
//     </svg>
//   );
// };

// const Rays = ({ className }: { className?: string }) => {
//   return (
//     <svg
//       width="380"
//       height="397"
//       viewBox="0 0 380 397"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className={cn(
//         "absolute left-0 top-0  pointer-events-none z-[1]",
//         className
//       )}
//     >
//       {/* ...SVG paths omitted for brevity, copy from your original... */}
//     </svg>
//   );
// };
