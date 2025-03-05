import FigmaEmbed from '@/app/ui/FigmaEmbed';

export default function Page() {
  return (
    <div className="p-6">
      <h1 className="mb-4 text-center text-2xl font-semibold">
        Figma Prototype
      </h1>
      <FigmaEmbed />
    </div>
  );
}
