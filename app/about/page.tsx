import DownloadButton from "../ui/pdf-download";

export default function Page() {
  return(
    <div className="w-full">
      <div className="flex flex-col items-center justify-center">
        <DownloadButton />
        <iframe
          src="/PhamCongThanh_CV.pdf"
          className="md:w-[800px] md:h-[1173px] w-[300px] h-[435px] rounded-md"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </div>
  );
}
