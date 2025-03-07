import React from 'react';

const FigmaEmbed = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <iframe
        className="h-[600px] w-full max-w-4xl rounded-lg border shadow-lg"
        src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/TodPd2jMFIJnpLEDqKQio5/FitJourney-App?node-id=16-45&p=f&t=ATN7GIXRND0ZjSIk-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=16%3A45"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default FigmaEmbed;
