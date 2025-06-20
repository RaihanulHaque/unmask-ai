
import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">U</span>
            </div>
            <span className="text-xl font-bold">Unmask</span>
          </Link>
          
          <div className="flex items-center space-x-8 text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <a href="#support" className="hover:text-foreground transition-colors">Support</a>
            <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/40 text-center text-muted-foreground">
          <p>&copy; 2024 Unmask. All rights reserved. Powered by advanced AI detection technology.</p>
        </div>
      </div>
    </footer>
  )
}
