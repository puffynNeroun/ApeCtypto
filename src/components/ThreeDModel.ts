import '../styles/three-d-model.css'

export const ThreeDModel = () => {
    const container = document.createElement('div');
    container.className = 'three-d-model';

    const iframe = document.createElement('iframe');
    iframe.src = 'https://my.spline.design/cubic-2e86da307fac2757f8c1880eea8b66e4/';
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.style.border = 'none';

    container.appendChild(iframe);

    return container;
};
