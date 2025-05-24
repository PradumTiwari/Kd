import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: " Owner",
      designation: "Product Manager at TechFlow",
      src: "",
    },{
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Fututre Owner",
      designation: "Product Manager at TechFlow",
      src: "https://github.com/PradumTiwari/Kd/blob/master/Assets/445799879_1363958224246817_4559949347578493852_n.jpg",
    },{
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Fututre Owner",
      designation: "Product Manager at TechFlow",
      src: "https://github.com/PradumTiwari/Kd/blob/master/Assets/445799879_1363958224246817_4559949347578493852_n.jpg",
    },{
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Fututre Owner",
      designation: "Product Manager at TechFlow",
      src: "https://github.com/PradumTiwari/Kd/blob/master/Assets/445799879_1363958224246817_4559949347578493852_n.jpg",
    },
   
    
    
    
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
