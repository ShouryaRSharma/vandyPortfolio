var mq = window.matchMedia("(max-width: 576px)");
$(document).ready(function() {
    $('#fullpage').fullpage({
        licenseKey: '89B47A42-C1814683-8B1FC555-2A14C7D4',
        menu: '#navbar',
        paddingTop: '58px',
        verticalCentered: true,
        loopBottom: false,
        scrollOverflow: true,
        scrollOverflowEndPrevent: { delay: 500, reversal: false },
        resize : true,
        anchors:['home', 'project1', 'project2', 'project3', 'project4', 'project5', 'project6', 'project7', 'project8', 'project9', 'project10', 'project11'],
        autoScrolling: true,
        navigation: true,
        animateAnchor: true,
        navigationPosition: 'right',
        easingcss3: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
        slidesNavigation: true,
        controlArrows: true,
        css3: true,
        onLeave: (origin, destination, direction) => {
            const section = destination.item;
            const title = section.querySelectorAll("h4");
            const tl = new TimelineMax({delay: 0.5});
            tl.fromTo(title, 0.5, { y: '50', opacity: 0}, {y:0, opacity: 1})
            const subtitle = section.querySelectorAll("h3");
            const tl1 = new TimelineMax({delay: 0.5});
            tl1.fromTo(subtitle, 0.5, { y: '50', opacity: 0}, {y:0, opacity: 1})
            const text = section.querySelectorAll("p");
            const tl2 = new TimelineMax({delay: 0.5});
            tl2.fromTo(text, 0.5, { y: '50', opacity: 0}, {y:0, opacity: 1})
            const caption = section.querySelectorAll("figcaption");
            const tl3 = new TimelineMax({delay: 0.5});
            tl3.fromTo(caption, 0.5, { y: '50', opacity: 0}, {y:0, opacity: 1})
        //     const construction = document.querySelectorAll('.construction');
        //     const tl3 = new TimelineMax({delay: 0.1})
        //     tl3.fromTo(construction, 1, { x:"100%", opacity: 0 }, {x:"0", opacity: 1});
        //     const image2 = document.querySelectorAll('.image2');
        //     const tl4 = new TimelineMax({delay: 0.1})
        //     tl4.fromTo(image2, 1, { y:"100%", opacity: 0 }, {y:"0", opacity: 1});
        //     const image1 = document.querySelectorAll('.image1');
        //     const tl5 = new TimelineMax({delay: 0.1})
        //     tl5.fromTo(image1, 1, { y:"100%", opacity: 0 }, {y:"0", opacity: 1});
        //     const moveLeft = document.querySelectorAll('.move-left');
        //     const tl6 = new TimelineMax({delay: 0.1})
        //     tl6.fromTo(moveLeft, 1, { x:"100%", opacity: 0 }, {x:"0", opacity: 1});
        //     const moveRight = document.querySelectorAll('.move-right');
        //     const tl7 = new TimelineMax({delay: 0.1})
        //     tl7.fromTo(moveRight, 1, { x:"-100%", opacity: 0 }, {x:"0", opacity: 1});
        //     const moveUp = document.querySelectorAll('.move-up');
        //     const tl8 = new TimelineMax({delay: 0.1})
        //     tl8.fromTo(moveUp, 1, { y:"100%", opacity: 0 }, {y:"0", opacity: 1});
        },
    });
});