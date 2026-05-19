import { PROJECTS } from '../../data/constants'
import { useCarousel } from '../../hooks/useCarousel' 
import { CarouselCard } from '../ui/CarouselCard' 
import { CarouselIndicators } from '../ui/CarouselIndicators' 

const getSlidePositionClass = (index: number, activeIndex: number, totalItems: number): string => {
  const diff = (index - activeIndex + totalItems) % totalItems

  if (diff === 0) return 'slide-active'
  if (diff === 1) return 'slide-next'
  if (diff === totalItems - 1) return 'slide-prev'
  return 'slide-hidden'
}

export default function Projects() {
  const { active, setActive } = useCarousel(PROJECTS.length)

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        {PROJECTS.map((project, index) => {
          const positionClass = getSlidePositionClass(index, active, PROJECTS.length)
          
          return (
            <CarouselCard 
              key={project.title} 
              project={project} 
              positionClass={positionClass} 
            />
          )
        })}
      </div>

      <CarouselIndicators 
        total={PROJECTS.length} 
        active={active} 
        onChange={setActive} 
      />
    </section>
  )
}