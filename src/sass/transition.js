import { TimelineMax as Timeline, Power1 } from 'gsap';

const getHome = (node, delay) => {
    const timeline = new Timeline({ paused: true });
    const container = node.querySelector('.container2 > div');

    timeline
        .from(node, 0.3, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn })
        .staggerFrom(container, 0.5, { autoAlpha: 0, y: 25, ease: Power1.easeInOut }, 0.5);

    return timeline;
}


const getDefaultTimeline = (node, delay) => {
    const timeline = new Timeline({ paused: true });
    const texts = node.querySelectorAll('.inner > div');

    timeline
        .from(node, 0, { display: 'none', autoAlpha: 0, delay })
        .staggerFrom(texts, 0.4, { autoAlpha: 0, x: -150, ease: Power1.easeOut }, 0.5); // 0.4-duration; 0.5-second  div delays for .5ms from the first

    return timeline;
}



export const play = (pathname, node, appears) => {
    const delay = appears ? 0 : 0.5;
    let timeline

    if (pathname === '/me')
        timeline = getHome(node, delay);
    else
        timeline = getDefaultTimeline(node, delay);

    window
        .loadPromise
        .then(() => requestAnimationFrame(() => timeline.play()))
}

export const exit = (node) => {
    const timeline = new Timeline({ paused: true });

    timeline.to(node, 0.15, { autoAlpha: 0, ease: Power1.easeOut });
    timeline.play();
}

//https://codesandbox.io/s/github/jeremenichelli/react-view-transition-example/tree/master/?from-embed=&file=/src/timelines/index.js:423-432