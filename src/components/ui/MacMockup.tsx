interface MacMockupProps {
  src: string;
  alt?: string;
  title: string;
  features: string[];
  screenTop?: string;
  screenLeft?: string;
  screenWidth?: string;
  screenHeight?: string;
}

export default function MacMockup({
  src,
  alt = 'Proyecto web',
  title,
  features,
  screenTop = '2%',
  screenLeft = '10.2%',
  screenWidth = '79.5%',
  screenHeight = '88%',
}: MacMockupProps) {
  return (
    <div className="group relative aspect-[4608/2675] w-full max-w-5xl mx-auto overflow-hidden">
      <div
        className="absolute overflow-hidden"
        style={{
          top: screenTop,
          left: screenLeft,
          width: screenWidth,
          height: screenHeight,
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover"
        />
      </div>

      <div
        className="absolute bg-black/80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 p-6 text-center"
        style={{
          top: screenTop,
          left: screenLeft,
          width: screenWidth,
          height: screenHeight,
        }}
      >
        <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{title}</h3>
        <ul className="space-y-2">
          {features.map((f, i) => (
            <li key={i} className="text-sm text-white/80">
              {f}
            </li>
          ))}
        </ul>
      </div>

      <img
        src="/mac-book.png"
        alt="MacBook mockup"
        className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none z-20"
        draggable={false}
      />
    </div>
  )
}
