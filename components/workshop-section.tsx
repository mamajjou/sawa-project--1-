import Image from "next/image"

interface WorkshopSectionProps {
  id: string
  number: string
  title: string
  description: string
  image: string
  color: string
  imagePosition: "left" | "right"
}

export function WorkshopSection({
  id,
  number,
  title,
  description,
  image,
  color,
  imagePosition,
}: WorkshopSectionProps) {
  // Color theme mapping
  const colorThemes = {
    purple: {
      light: "#f3e8ff",
      medium: "#d8b4fe", 
      dark: "#0D1237", // Changed from #7c3aed to your new color
      gradient: "from-purple-50 to-purple-100"
    },
    teal: {
      light: "#ccfbf1", 
      medium: "#5eead4",
      dark: "#0d9488",
      gradient: "from-teal-50 to-teal-100"
    },
    amber: {
      light: "#fef3c7",
      medium: "#fcd34d", 
      dark: "#d97706",
      gradient: "from-amber-50 to-amber-100"
    },
    rose: {
      light: "#ffe4e6",
      medium: "#fda4af", 
      dark: "#e11d48",
      gradient: "from-rose-50 to-rose-100"
    },
    indigo: {
      light: "#e0e7ff",
      medium: "#a5b4fc", 
      dark: "#4f46e5",
      gradient: "from-indigo-50 to-indigo-100"
    },
    cyan: {
      light: "#cffafe",
      medium: "#67e8f9", 
      dark: "#0891b2",
      gradient: "from-cyan-50 to-cyan-100"
    },
    fuchsia: {
      light: "#fae8ff",
      medium: "#f0abfc", 
      dark: "#c026d3",
      gradient: "from-fuchsia-50 to-fuchsia-100"
    },
    blue: {
      light: "#F3EAD3",     
      medium: "#F4D24B",    
      dark: "#1E2643",      
      gradient: "from-[#64BDE1] to-[#C3ECF7]"
    }
  }

  // Get the theme colors or default to purple if the specified color isn't in our mapping
  const theme = colorThemes[color as keyof typeof colorThemes] || colorThemes.purple;
  
  return (
    <section id={id} className="py-16 scroll-mt-20 relative">
      {/* Enhanced background gradient with more depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/80 backdrop-blur-sm -z-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Workshop number badge - floating outside the card with improved visibility */}
        <div className="relative">
          <div 
            className="absolute -top-8 left-10 z-20 w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg transform -translate-y-1/2"
            style={{ 
              backgroundColor: theme.dark, 
              color: 'white',
              boxShadow: `0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 3px ${theme.light}` 
            }}
          >
            {number}
          </div>
          
          {/* Main content card - Significantly increased height */}
          <div 
            className={`relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br ${theme.gradient} backdrop-blur-sm border border-white/30`}
            style={{ 
              boxShadow: `0 15px 35px -5px ${theme.light}90, 0 5px 15px rgba(0, 0, 0, 0.05)`,
              minHeight: "550px" // Explicit minimum height to ensure tallness
            }}
          >
            {/* Enhanced decorative shapes */}
            <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full opacity-20" style={{ backgroundColor: theme.medium }}></div>
            <div className="absolute -left-20 -bottom-20 w-48 h-48 rounded-full opacity-20" style={{ backgroundColor: theme.medium }}></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full opacity-10" style={{ backgroundColor: theme.dark }}></div>
            
            <div className={`flex flex-col ${imagePosition === "left" ? "lg:flex-row" : "lg:flex-row-reverse"} lg:min-h-[550px]`}>
              {/* Content area with significantly increased padding and space */}
              <div className="w-full lg:w-1/2 p-10 lg:p-20 flex flex-col justify-center">
                <h2 
                  className="text-3xl md:text-5xl font-bold mb-8"
                  style={{ color: theme.dark }}
                >
                  {title}
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg md:text-xl">{description}</p>
                </div>
              </div>
              
              {/* Taller image container with improved fallback handling */}
              <div className="w-full lg:w-1/2 relative h-96 md:h-[450px] lg:h-auto overflow-hidden">
                {image ? (
                  <div className="relative w-full h-full">
                    {/* Removed onError handler and using nextjs built-in placeholder="blur" */}
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-fit lg:object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <svg className="w-20 h-20 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 4h16v16H4V4zm1 1v14h14V5H5zm4 4a1 1 0 110-2 1 1 0 010 2zm-2 9h10l-3.5-4.5-2.5 3-1-1L7 18z" />
                    </svg>
                  </div>
                )}
                
                {/* Overlay gradient for better text/image contrast when needed */}
                {imagePosition === "left" && (
                  <div className="absolute inset-0 bg-gradient-to-l from-black/10 to-transparent pointer-events-none"></div>
                )}
                {imagePosition === "right" && (
                  <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent pointer-events-none"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}