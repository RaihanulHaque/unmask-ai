
import { Button } from "@/components/ui/button"
import { ArrowDown, Shield, Scan, Eye } from "lucide-react"

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
              onClick={() => window.open('https://drive.usercontent.google.com/download?id=1PiquWkTU1H-eufJX6AR3TAoEfHEh9T0j&export=download&authuser=0', '_blank')}
            >
              Download for Android
            </Button>
            <p className="text-sm text-muted-foreground">
              iOS version coming soon
            </p>
          </div>
          
          {/* Playful App Preview */}
          <div className="relative max-w-md mx-auto">
            <div className="relative floating-animation">
              {/* Main Phone Container */}
              <div className="relative">
                <div className="w-80 h-[500px] mx-auto bg-gradient-to-br from-card to-card/80 rounded-[2.5rem] border-4 border-border/30 shadow-2xl overflow-hidden glass-effect relative">
                  {/* Phone Screen */}
                  <div className="absolute inset-4 rounded-[2rem] bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 overflow-hidden">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center p-4 text-white/80 text-sm">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-white/60 rounded-sm"></div>
                        <div className="w-4 h-2 bg-white/60 rounded-sm"></div>
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* App Content */}
                    <div className="p-6 h-full flex flex-col items-center justify-center text-white relative">
                      {/* App Icon */}
                      <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 shadow-lg">
                        <Shield className="w-10 h-10 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-2">Unmask</h3>
                      <p className="text-white/80 text-center text-sm mb-8">
                        AI Detection Made Simple
                      </p>
                      
                      {/* Feature Icons */}
                      <div className="flex gap-6 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <Eye className="w-6 h-6 text-white" />
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <Scan className="w-6 h-6 text-white" />
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <Shield className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      
                      {/* Loading Bars */}
                      <div className="space-y-3 w-full max-w-48">
                        <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                          <div className="h-full bg-white/80 rounded-full w-3/4 animate-pulse"></div>
                        </div>
                        <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                          <div className="h-full bg-white/80 rounded-full w-1/2 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        </div>
                        <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                          <div className="h-full bg-white/80 rounded-full w-5/6 animate-pulse" style={{animationDelay: '1s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-border/50 rounded-full"></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-bounce" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 animate-bounce" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/3 -left-6 w-4 h-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 animate-bounce" style={{animationDelay: '1.5s'}}></div>
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
