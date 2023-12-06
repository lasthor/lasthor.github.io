
gsap.to(".delimiter", {
    duration: 0.3,
    opacity: 0.2,
    repeat: -1, 
    yoyo: true,
  });

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