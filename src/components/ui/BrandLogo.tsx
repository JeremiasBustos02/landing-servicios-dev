type BrandLogoProps = {
  className?: string
}

export default function BrandLogo({ className = 'h-8 w-auto' }: BrandLogoProps) {
  return (
    <svg 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink" 
      x="0px" 
      y="0px"
      viewBox="165 47 670 906"
      className={className} 
      aria-hidden="true"
      xmlSpace="preserve"
    >
      <g id="Capa_2">
        <path 
          id="Logo" 
          fill="#FFFFFF" 
          d="M834.48,550.78v190.61L503.5,952.59L165.52,740.65V566.23c137.48-82.33,274.95-164.65,412.44-246.98
            c27.96-16.02,44.04-46.58,40.89-77.55c-3.56-35.04-31.07-64.29-67.34-70.65H279.96v209.73L165.52,452.9V47.41h486.85
            c83.79,7.68,154.14,67.05,175.52,147.93c20.96,79.28-9.21,164.03-75.8,212.68c-123.76,74.45-348.39,148.9-472.15,223.34v44.16
            l224.09,88.93l217.47-83.41v-62.92l-182.14-1.11l193.18-130.26L834.48,550.78z"
        />
      </g>
    </svg>
  )
}