
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 mesh-gradient"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-black/[0.02]"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Detect AI-Generated
            <br />
            <span className="text-gradient">Content Instantly</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Unmask uses advanced machine learning to identify AI-generated images, 
            audio, and videos with unprecedented accuracy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="gradient-primary text-white border-0 hover:opacity-90 transition-all duration-200 px-8 py-6 text-lg rounded-xl"
            >
              Download for iOS
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border/40 glass-effect hover:bg-accent/50 px-8 py-6 text-lg rounded-xl"
            >
              Download for Android
            </Button>
          </div>
          
          {/* App Preview Mockup */}
          <div className="relative max-w-sm mx-auto">
            <div className="relative">
              <div className="w-72 h-[600px] mx-auto bg-card rounded-[3rem] border-8 border-border/20 shadow-2xl overflow-hidden glass-effect">
                <div className="h-full gradient-primary p-8 flex flex-col items-center justify-center text-white">
                  <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold">U</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Unmask</h3>
                  <p className="text-white/80 text-center text-sm">
                    AI Detection Made Simple
                  </p>
                  <div className="mt-8 space-y-3 w-full">
                    <div className="h-3 bg-white/20 rounded-full"></div>
                    <div className="h-3 bg-white/20 rounded-full w-3/4"></div>
                    <div className="h-3 bg-white/20 rounded-full w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
