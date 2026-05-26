import type { CyberFeature } from '@/types'

export const CYBER_FEATURES: CyberFeature[] = [
  {
    title: 'Pentesting caja negra y blanca',
    description: 'Simulamos ataques reales para encontrar puntos criticos antes que un atacante.',
    highlights: [
      'Escenario externo e interno',
      'Reporte con evidencia y CVSS',
      'Retoque y re-testeo incluido',
    ],
  },
  {
    title: 'Mitigacion DDoS y hardening',
    description: 'Blindamos tu infraestructura para resistir picos de trafico malicioso.',
    highlights: [
      'WAF, rate-limit y reglas personalizadas',
      'Proteccion por capas cloud + edge',
      'Monitoreo continuo y alertas',
    ],
  },
  {
    title: 'Auditoria de codigo y cloud',
    description: 'Revisamos repositorios, CI/CD y configuraciones cloud con enfoque preventivo.',
    highlights: [
      'OWASP, CIS y buenas practicas',
      'Hallazgos priorizados por impacto',
      'Plan de remediacion ejecutable',
    ],
  },
  {
    title: 'Respuesta a incidentes 24/7',
    description: 'Contencion inmediata y analisis forense para minimizar impacto.',
    highlights: [
      'Equipo dedicado en guardia',
      'Playbooks por severidad',
      'Informe post-mortem ejecutivo',
    ],
  },
]
