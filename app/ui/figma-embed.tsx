import React from "react";

interface FigmaEmbedProps {
  figmaUrl: string;
}

const FigmaEmbed: React.FC<FigmaEmbedProps> = ({ figmaUrl }) => {
  return (
    <div className="flex h-[90vh] items-center justify-center">
      <iframe
        className="h-[600px] w-full rounded-xl"
        src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default FigmaEmbed;
