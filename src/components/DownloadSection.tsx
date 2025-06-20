
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function DownloadSection() {
  return (
    <section id="download" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Card className="border-border/40 glass-effect p-12 relative overflow-hidden">
          <div className="absolute inset-0 mesh-gradient opacity-50"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to
              <span className="text-gradient"> Unmask</span> AI?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of users protecting themselves from AI-generated content. 
              Download Unmask today and experience the future of content verification.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
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
            
            <p className="text-sm text-muted-foreground">
              Available on iOS 14+ and Android 8+
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
