gsap.from(".name div", {
  opacity: 0,
  duration: 1,
  y: 50,
  stagger: {
    each: 0.1,
    amount: 1,
  },
});

gsap.from(".button", {
  opacity: 0,
  y: -10,
  duration: 2,
});

gsap.from(".button .menu", {
  opacity: 0,
  y: -10,
  delay: 1.2,
  stagger: {
    each: 0.2,
  },
});

gsap.from(".button .dash1", {
  opacity: 0,
  x: -20,
  delay: 1.1,
});

gsap.from(".button .dash2", {
  opacity: 0,
  x: 20,
  delay: 1,
});

gsap.from(".button .dash3", {
  opacity: 0,
  x: -20,
  delay: 1.2,
});

gsap.to(".content .box", {
  duration: 2,
  delay: 4,
  ease: "bounce.inOut",
  yoyo:true,
  rotate: 360,
  repeat: -1,
  repeatDelay: 1.5,
});

gsap.to(".content .anything .i", {
  rotateX: -180,
  delay:4,
  ease: "bounce.inOut",
  duration: 1,
  repeat: -1,
  repeatDelay: 2,
  yoyo: true,
});

var path = "M 10 100 Q 500 100 990 100"
var finalPath = "M 10 100 Q 500 100 990 100"

var string = document.querySelector("#string");

string.addEventListener("mousemove", function (dets) {
  path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`

  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.2,
    ease: "power3.out"
  })
})

string.addEventListener("mouseleave", function () {

  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1,0.2)"
  })
})

gsap.to(".text .text1 span",{
  duration:5,
  repeat:-1,
  repeatDelay:2,
  color:"rgb(121, 238, 110)",
  yoyo:true,
  text:{
    value:"anything JS can touch",
  }
})

gsap.to(".text .text2 span",{
  duration:10,
  repeat:-1,
  repeatDelay:1,
  color:"rgb(111, 119, 240)",
  yoyo:true,
  text:{
    value:"so you can focus on the fun stuff",
  }
})

var main = document.querySelector('body')
var pointed = document.querySelector('.pointed')

main.addEventListener("mousemove" , function(dets){
  gsap.to(pointed,{
    x:dets.x,
    y:dets.y,
    duration:0.5,
    ease:"power5.inOut"
  })
})