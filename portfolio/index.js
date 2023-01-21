gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: ".work_exp",
    pin: '.work_heading',
    start: "top 150px",
    end: "bottom 300px",
    markers: false
})

ScrollTrigger.create({
    trigger:'.projects',
    pin:'.project_heading',
    start:'top 150px',
    end: 'bottom 300px',
    markers: false
})