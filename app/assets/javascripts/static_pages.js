$(document).ready(function() {
    $('#fullpage').fullpage({
        licenseKey: '89B47A42-C1814683-8B1FC555-2A14C7D4',
        menu: '#navbar',
        paddingTop: '68px',
        verticalCentered: true,
        loopBottom: true,
        scrollOverflow: true,
        scrollOverflowReset: true,
        resize : true,
        anchors:['project1', 'project2', 'project3', 'project4'],
        autoScrolling: true,
        navigation: false,
        animateAnchor: true,
        navigationPosition: 'right',
        navigationTooltips:['Project 1', 'Project 2', 'Project 3', 'Project 4'],
        easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
        slidesNavigation: true,
        controlArrows: false,
        css3: true
    });
});