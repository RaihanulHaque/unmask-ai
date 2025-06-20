
import { Card } from "@/components/ui/card"
import { Image, Video } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Image,
      title: "Image Detection",
      description: "Advanced computer vision models detect AI-generated images with 99.2% accuracy",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Video, // Using Video for audio since we can't use other lucide icons
      title: "Audio Detection", 
      description: "Sophisticated audio analysis identifies deepfake voices and synthetic speech",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Video,
      title: "Video Detection",
      description: "Multi-modal analysis detects deepfake videos and AI-generated content",
      color: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Three Powerful
            <span className="text-gradient"> Detection Models</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our cutting-edge AI models work together to provide comprehensive 
            detection across all media types.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden border-border/40 glass-effect hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              <div className="p-8">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Accuracy Badge */}
                <div className="mt-6 inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {feature.title === "Video Detection" ? "80%+ Accuracy" : "99%+ Accuracy"}
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
