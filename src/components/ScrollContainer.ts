import '../styles/scroll-container.css';
import { ThreeDModel } from './ThreeDModel';

export const ScrollContainer = () => {
    const container = document.createElement('div');
    container.className = 'scroll-container';

    const content = document.createElement('div');
    content.className = 'scroll-content';

    const firstBlock = document.createElement('section');
    firstBlock.className = 'block';
    firstBlock.appendChild(ThreeDModel());
    content.appendChild(firstBlock);

    for (let i = 2; i <= 4; i++) {
        const block = document.createElement('section');
        block.className = 'block';
        block.textContent = `Block ${i}`;
        content.appendChild(block);
    }

    container.appendChild(content);

    return container;
};
