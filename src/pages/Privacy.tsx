
import { ThemeProvider } from "@/components/ThemeProvider"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Lock, Mail } from "lucide-react"

const Privacy = () => {
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
                Privacy <span className="text-gradient">Policy</span>
              </h1>
            </div>
            
            <div className="space-y-8">
              <Card className="border-border/40 glass-effect p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">No Data Collection</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      <strong>Unmask does not collect, store, or share any personal user data.</strong>
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                      The app uses the device's camera and file system locally to analyze media files for deepfake detection. 
                      No files or data are uploaded to external servers. All detection happens directly on your device.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="border-border/40 glass-effect p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                    <Lock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Privacy Commitment</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      We respect your privacy and are committed to protecting it. This app complies with standard 
                      privacy guidelines and does not use third-party tracking or analytics tools.
                    </p>
                    <ul className="text-muted-foreground leading-relaxed text-lg mt-4 space-y-2">
                      <li>• No user tracking or analytics</li>
                      <li>• No cloud storage of your files</li>
                      <li>• No personal information collection</li>
                      <li>• Complete offline functionality</li>
                    </ul>
                  </div>
                </div>
              </Card>
              
              <Card className="border-border/40 glass-effect p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      For questions regarding privacy, please contact:
                    </p>
                    <div className="mt-4">
                      <Button 
                        variant="outline"
                        onClick={() => window.open('mailto:singharayanonno@gmail.com?subject=Unmask Privacy Policy Question', '_blank')}
                        className="inline-flex items-center gap-2"
                      >
                        <Mail className="h-4 w-4" />
                        singharayanonno@gmail.com
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Privacy;
