import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Fututre Owner",
      designation: "Product Manager at TechFlow",
      src: "https://instagram.fidr4-3.fna.fbcdn.net/v/t51.2885-19/445799879_1363958224246817_4559949347578493852_n.jpg?_nc_ht=instagram.fidr4-3.fna.fbcdn.net&_nc_cat=105&_nc_oc=Q6cZ2QGyI8RsabH7ovBfxvWR0s5iZkFVL4HNKsDU8LZtYkXtGV1LePtFv4Ti2KVeU8uWkWuHOtne2uj4qaPELtpRZN_r&_nc_ohc=LpZqj8p4y68Q7kNvwHMdgua&_nc_gid=6vUgQ6lvV9LuNxkT0-LUPg&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfJvgAhzeKa13RVsjrXtO7DqY-BZik6OL2UTM_-9Qn9G9Q&oe=68379893&_nc_sid=7a9f4b",
    },
   
    
    
    
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
