
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, Clock } from "lucide-react"

export function SupportSection() {
  return (
    <section id="support" className="py-24 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Need
            <span className="text-gradient"> Support?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Found a bug? Have a feature suggestion? We're here to help you get the most out of Unmask.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="border-border/40 glass-effect p-8 text-center">
            <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-semibold mb-4">Get Direct Support</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Need help with using Unmask? Found a bug or want to suggest a feature? 
              Feel free to contact me directly for assistance.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center gap-3 text-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <span className="font-medium">singharayanonno@gmail.com</span>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <Clock className="h-5 w-5" />
                <span>Response Time: Within 48 hours</span>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="gradient-primary text-white border-0 hover:opacity-90 transition-all duration-200"
              onClick={() => window.open('mailto:singharayanonno@gmail.com?subject=Unmask App Support', '_blank')}
            >
              <Mail className="h-5 w-5 mr-2" />
              Contact Support
            </Button>
            
            <p className="text-sm text-muted-foreground mt-6">
              Thank you for using Unmask and helping us fight against digital misinformation.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
