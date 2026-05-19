import LiquidGlassCard from './LiquidGlassCard' // Ajusta la ruta si es necesario

export interface ProjectData {
  title: string;
  category: string;
  image: string;
}

interface CarouselCardProps {
  project: ProjectData;
  positionClass: string;
}

export function CarouselCard({ project, positionClass }: CarouselCardProps) {
  return (
    <div className={`slide-base ${positionClass}`}>
      <LiquidGlassCard className="card-wrapper">
        <div className="relative w-full h-full">
          <img
            src={project.image}
            alt={project.title}
            className="card-image"
          />
          <div className="card-gradient" />
          <div className="card-content">
            <h3 className="card-title">{project.title}</h3>
            <p className="card-category">{project.category}</p>
          </div>
        </div>
      </LiquidGlassCard>
    </div>
  )
}