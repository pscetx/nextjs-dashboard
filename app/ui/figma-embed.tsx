import React from "react";

interface FigmaEmbedProps {
  figmaUrl: string;
}

const FigmaEmbed: React.FC<FigmaEmbedProps> = ({ figmaUrl }) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <iframe
        className="h-[600px] w-full max-w-4xl rounded-lg border shadow-lg"
        src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default FigmaEmbed;
