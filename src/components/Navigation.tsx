
import { ThemeToggle } from "@/components/ThemeToggle"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">U</span>
            </div>
            <span className="text-xl font-bold">Unmask</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#download" className="text-foreground/80 hover:text-foreground transition-colors">
              Download
            </a>
            <a href="#support" className="text-foreground/80 hover:text-foreground transition-colors">
              Support
            </a>
            <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">
              About
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              className="gradient-primary text-white border-0 hover:opacity-90 transition-opacity"
              onClick={() => window.open('https://drive.usercontent.google.com/download?id=1PiquWkTU1H-eufJX6AR3TAoEfHEh9T0j&export=download&authuser=0', '_blank')}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
