import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Made The Buisness",
      name: " Shree Devnath Shah",
      designation: "Owner",
      src: "https://github.com/PradumTiwari/Kd/blob/master/Assets/WhatsApp%20Image%202025-05-24%20at%2019.07.53_dc54e555.jpg?raw=true", 
    },{
      quote:
        "Has Worked On The Buisness",
      name: "Kundan Kumar",
      designation: "Future Owner",
      src: "https://github.com/PradumTiwari/Kd/blob/master/Assets/445799879_1363958224246817_4559949347578493852_n.jpg?raw=true",
    },{
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "BanSakta Hai Owner",
      designation: "Chota Future Owner",
      src: "https://github.com/PradumTiwari/Kd/blob/master/Assets/WhatsApp%20Image%202025-05-24%20at%2018.59.33_367281ec.jpg?raw=true",
    },{
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Nahi Bangega Owner",
      designation: "Product Manager at TechFlow",
      src: "https://github.com/PradumTiwari/Kd/blob/master/Assets/WhatsApp%20Image%202025-05-24%20at%2018.58.44_e9f2453b.jpg?raw=true",
    },


  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
