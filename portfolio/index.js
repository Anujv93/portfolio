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

ScrollReveal().reveal('.courses',{delay:200})
ScrollReveal().reveal('.about_me',{delay: 200});
ScrollReveal().reveal('.work_heading');
ScrollReveal().reveal('.work_list')
ScrollReveal().reveal('project_heading',{delay: 200})
ScrollReveal().reveal('.projects_list',{delay: 200});
ScrollReveal().reveal('.get_in_touch',{delay: 200})