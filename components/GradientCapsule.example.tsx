/**
 * EJEMPLO DE COMPONENTE CON GRADIENTE OSCURO-VIOLETA
 * 
 * Este archivo contiene ejemplos de cómo aplicar el gradiente
 * de diferentes formas. NO se importa en la aplicación.
 */

// ============================================
// OPCIÓN 1: Usando Tailwind con clase personalizada
// ============================================
export function GradientCapsuleOption1() {
  return (
    <div className="bg-[linear-gradient(to_right,#1A1A2E_0%,#2F295F_50%,#1F1A2B_100%)] backdrop-blur-sm border border-accent/20 rounded-full shadow-lg shadow-purple-500/20 p-8 md:p-12 lg:p-16">
      <div className="text-center text-white">
        <h3 className="text-2xl font-bold mb-2">Título</h3>
        <p className="text-white/80">Contenido de la cápsula</p>
      </div>
    </div>
  )
}

// ============================================
// OPCIÓN 2: Usando inline style (RECOMENDADO)
// ============================================
export function GradientCapsuleOption2() {
  return (
    <div 
      className="backdrop-blur-sm border border-accent/20 rounded-full shadow-lg shadow-purple-500/20 p-8 md:p-12 lg:p-16"
      style={{
        background: 'linear-gradient(to right, #1A1A2E 0%, #2F295F 50%, #1F1A2B 100%)'
      }}
    >
      <div className="text-center text-white">
        <h3 className="text-2xl font-bold mb-2">Título</h3>
        <p className="text-white/80">Contenido de la cápsula</p>
      </div>
    </div>
  )
}

// ============================================
// OPCIÓN 3: Gradiente con glow más intenso
// ============================================
export function GradientCapsuleOption3() {
  return (
    <div 
      className="backdrop-blur-sm border border-accent/20 rounded-full p-8 md:p-12 lg:p-16"
      style={{
        background: 'linear-gradient(to right, #1A1A2E 0%, #2F295F 50%, #1F1A2B 100%)',
        boxShadow: '0 10px 40px rgba(147, 51, 234, 0.3), 0 0 20px rgba(147, 51, 234, 0.1)'
      }}
    >
      <div className="text-center text-white">
        <h3 className="text-2xl font-bold mb-2">Título</h3>
        <p className="text-white/80">Contenido de la cápsula</p>
      </div>
    </div>
  )
}

// ============================================
// COMPONENTE COMPLETO DE EJEMPLO
// ============================================
export default function GradientCapsule() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div 
          className="backdrop-blur-sm border border-accent/20 rounded-full shadow-lg shadow-purple-500/20 p-8 md:p-12 lg:p-16"
          style={{
            background: 'linear-gradient(to right, #1A1A2E 0%, #2F295F 50%, #1F1A2B 100%)'
          }}
        >
          <div className="text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ejemplo de Cápsula</h3>
            <p className="text-white/80 text-lg">
              Este es un ejemplo de cápsula con gradiente oscuro-violeta
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * REFERENCIA DE CÓDIGO:
 * 
 * 1. CLASE TAILWIND PERSONALIZADA:
 *    className="bg-[linear-gradient(to_right,#1A1A2E_0%,#2F295F_50%,#1F1A2B_100%)]"
 * 
 * 2. INLINE STYLE:
 *    style={{
 *      background: 'linear-gradient(to right, #1A1A2E 0%, #2F295F 50%, #1F1A2B 100%)'
 *    }}
 * 
 * 3. SHADOW PARA GLOW:
 *    className="shadow-lg shadow-purple-500/20"
 *    // O para un glow más intenso:
 *    style={{
 *      boxShadow: '0 10px 40px rgba(147, 51, 234, 0.3), 0 0 20px rgba(147, 51, 234, 0.1)'
 *    }}
 * 
 * COLORES DEL GRADIENTE:
 * - Inicio: #1A1A2E (azul oscuro)
 * - Medio: #2F295F (violeta medio)
 * - Fin: #1F1A2B (azul oscuro con tinte violeta)
 */

