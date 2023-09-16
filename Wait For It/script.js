var tl = gsap.timeline({defaults:{duration:1}})

tl.from(".header",{
    y:"-100%",
    ease:"bounce"})
 
   .from(".l",{
    opacity:0,
    stagger:0.5 // for each link delay
   })
    
   .from(".left",{
    x:"-100%",
    ease:"power4.in",
   })

   .from(".right",{
    x:"-100vw",
    ease:"power4.in"
   })

   .to(".foot",{
    y:0,
    ease:"elastic"
   })

   .fromTo(".btn",{
    opacity: 0, 
    scale: 0, 
    rotation: 720 
   },
   {
    opacity: 1, 
    scale: 1, 
    rotation: 0 
   })
