const breackpoints = {
  Mobile : 480 ,
  Tablet : 1024 , 
  Desktop : 1025 ,
};


gsap.to(".delimiter", {duration: 0.3,opacity: 0.2,repeat: -1, yoyo: true,});
gsap.defaults({ease: "none"});
const tl = gsap.timeline({repeat:-1, repeatDelay:3, yoyo:true});
tl.to("#name", {duration: 2, text:{value:"ABDELLATIF HOUR" ,},color: "hsl(230, 80%, 90%)",textShadow: "0 0 1em hsla(320, 100%, 50%, 0.5), 0 0 0.125em hsla(320, 100%, 60%, 0.5), -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2), 0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4)"});
tl.to("#ImSoft", {duration: 2, text:{value:"I'm a Software Engineer." ,},color: "hsl(230, 80%, 90%)",textShadow: "0 0 1em hsla(320, 100%, 50%, 0.5), 0 0 0.125em hsla(320, 100%, 60%, 0.5), -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2), 0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4)"});



//! here adds the class the you want to make somthing withit in scroll event
const scrollTargetsClasses = ['.titl_workexp' , '.main_container' , '.div-para']
//? tween for the targets class
const t0 = gsap.from( scrollTargetsClasses[0], { x : '-100vw'})
const t1 = gsap.from( scrollTargetsClasses[1], { x : '-100vw' })
const t2 = gsap.to( scrollTargetsClasses[2], { scale:6 , duration:0.5 , y:950 , opacity:0 });

// markers: true
ScrollTrigger.create({trigger: scrollTargetsClasses[0] ,start: "top center",end: "+=10",scrub: 1.5 ,animation: t0,onEnter:()=>{gsap.to('.nav_' , {backgroundColor: 'hsla(265, 62%, 7%, 0.95)', duration:0.5})} ,onEnterBack:()=>{gsap.to('.nav_' , {backgroundColor: '#1A0B2E', duration:0.5})}});
ScrollTrigger.create({trigger: scrollTargetsClasses[1] ,start: "100 center",end: "+=10",scrub: 1.5 ,animation: t1,});
ScrollTrigger.create({trigger: scrollTargetsClasses[2]  ,start: "-50 center",end: "+=950",scrub: 2 ,animation: t2,
onLeave :()=>{gsap.to('.div-skills-icons', {opacity:1 , delay:0.5 ,duration:1})},
onEnterBack : ()=>{gsap.to('.div-skills-icons', {opacity:0  })}});






































