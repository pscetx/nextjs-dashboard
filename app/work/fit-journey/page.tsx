import FigmaEmbed from '@/app/ui/figma-embed';

export default function Page() {
  return (
    <div className="p-6">
      <h1 className="mb-4 text-center text-2xl font-semibold">
        Fit Journey
      </h1>
      <FigmaEmbed figmaUrl="https://www.figma.com/proto/TodPd2jMFIJnpLEDqKQio5/FitJourney-App?node-id=16-45&p=f&t=ATN7GIXRND0ZjSIk-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=16%3A45" />
    </div>
  );
}
