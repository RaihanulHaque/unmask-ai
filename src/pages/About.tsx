
import { ThemeProvider } from "@/components/ThemeProvider"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Users, Target } from "lucide-react"

const About = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="unmask-theme">
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Button 
                variant="ghost" 
                onClick={() => window.history.back()}
                className="mb-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About <span className="text-gradient">Unmask</span>
              </h1>
            </div>
            
            <div className="space-y-8">
              <Card className="border-border/40 glass-effect p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Unmask is a lightweight deepfake detection app developed as part of a university thesis project. 
                      It uses advanced machine learning models to detect AI-generated or manipulated content, including 
                      images, videos, and audio. Our goal is to empower users with a simple tool to verify digital 
                      content authenticity in an era of increasing media manipulation.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="border-border/40 glass-effect p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Who It's For</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Built for researchers, journalists, and everyday users, Unmask provides quick and offline 
                      detection features to protect against misinformation. Whether you're verifying news content, 
                      checking social media posts, or conducting research, Unmask gives you the tools to identify 
                      potentially manipulated media.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="border-border/40 glass-effect p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                    <ul className="text-muted-foreground leading-relaxed text-lg space-y-2">
                      <li>• <strong>Offline Detection:</strong> All analysis happens locally on your device</li>
                      <li>• <strong>Multi-Modal Analysis:</strong> Supports images, videos, and audio files</li>
                      <li>• <strong>High Accuracy:</strong> Advanced ML models with 99%+ accuracy for images and 80%+ for videos</li>
                      <li>• <strong>Privacy-First:</strong> No data collection or cloud processing</li>
                      <li>• <strong>Lightweight:</strong> Optimized for mobile devices</li>
                    </ul>
                  </div>
                </div>
              </Card>
              
              <div className="text-center">
                <Button 
                  size="lg" 
                  className="gradient-primary text-white border-0 hover:opacity-90 transition-all duration-200"
                  onClick={() => window.open('https://drive.usercontent.google.com/download?id=1PiquWkTU1H-eufJX6AR3TAoEfHEh9T0j&export=download&authuser=0', '_blank')}
                >
                  Download Unmask
                </Button>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default About;
