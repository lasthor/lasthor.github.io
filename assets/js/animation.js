
gsap.to(".delimiter", {
    duration: 0.3,
    opacity: 0.2,
    repeat: -1, 
    yoyo: true,
  });


// timeLine for writeter words
gsap.defaults({ease: "none"});
const tl = gsap.timeline({repeat:-1, repeatDelay:3, yoyo:true});
tl.to("#name", {
                duration: 2, 
                text:{
                  value:"ABDELLATIF HOUR" ,
                },
                color: "hsl(230, 80%, 90%)",
                textShadow: "0 0 1em hsla(320, 100%, 50%, 0.5), 0 0 0.125em hsla(320, 100%, 60%, 0.5), -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2), 0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4)"
              });
tl.to("#ImSoft", {
  duration: 2, 
  text:{
    value:"I'm a Software Engineer." ,
  },
  color: "hsl(230, 80%, 90%)",
  textShadow: "0 0 1em hsla(320, 100%, 50%, 0.5), 0 0 0.125em hsla(320, 100%, 60%, 0.5), -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2), 0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4)"
});



//time line for scrolling


const t_scroll = gsap.timeline()
// t_scroll.from('.paraIamsoft', {
  
//   scrollTrigger: {
//     trigger: '.paraIamsoft',
//     markers: true,
//     start: "top 70%",
//     end: "top 10%",
//     scrub: 8,
    
//   },
//   ease: "power2.out",
//   x: -1500,
//   // y: 50,
//   opacity: 0,
//   })


//work exp scroll

t_scroll.from('#titl_workexp',{
              scrollTrigger: {
                trigger: '#titl_workexp',
                // markers: true,
                start: "top 70%",
                end: "-20% 10%",
                scrub: 8,
                
              },
              ease: "power2.out",
              x: -1500,
              opacity: 0,
            })
t_scroll.from('.main_container',{
  scrollTrigger: {
    trigger: '.main_container',
    // markers: true,
    start: "top 100%",
    end: "-20% 10%",
    scrub: 8,
    
  },
  ease: "power2.out",
  x: -1500,
  opacity: 0,
})


const lenis = new Lenis()
lenis.on('scroll', (e) => {
  console.log('scroll')
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
