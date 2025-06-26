import React from "react";

interface ConceptCardProps {
  label: string;
  image: string;
  alt?: string;
}

const ConceptCard: React.FC<ConceptCardProps> = ({ label, image, alt }) => (
  <div className="bg-[#232323] rounded-2xl p-4 md:p-8 w-full max-w-xl shadow-lg relative">
    {/* Label */}
    <div className="absolute top-4 left-4 bg-[#323643] text-white text-xs px-4 py-1 rounded-full font-medium shadow">
      {label}
    </div>
    {/* Image */}
    <div className="flex items-center justify-center min-h-[300px]">
      <img
        src={image}
        alt={alt || label}
        className="rounded-xl max-w-full max-h-[350px] object-contain border border-[#323643]"
        style={{ background: "#181818" }}
      />
    </div>
  </div>
);

export default ConceptCard;