"use client";

export default function DownloadButton() {
  const filePath = "/PhamCongThanh_UIUXDesigner_Resume.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = filePath.substring(filePath.lastIndexOf("/") + 1);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="relative gap-2 p-3 mt-2 tracking-wide text-center text-gray-500 text-lg italic before:absolute before:inset-0 before:m-auto before:h-[50%] before:w-full before:rounded-full before:bg-amber-500 before:opacity-0 before:blur-md before:transition-opacity before:duration-500 hover:text-amber-800 hover:before:opacity-50"
    >
      click to download resume
    </button>
  );
}
