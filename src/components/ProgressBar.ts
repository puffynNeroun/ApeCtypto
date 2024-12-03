import '../styles/progress-bar.css';

export const ProgressBar = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';

    const progress = document.createElement('div');
    progress.className = 'progress';

    progressBar.appendChild(progress);

    const dotPositions = [5, 15, 40, 95];

    dotPositions.forEach((position, i) => {
        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.dataset.page = `${i}`;

        dot.style.left = `${position}%`;

        dot.addEventListener('click', () => {
            const scrollContainer = document.querySelector('.scroll-container')!;
            const scrollWidth = scrollContainer.scrollWidth / dotPositions.length;

            scrollContainer.scrollTo({
                left: scrollWidth * i,
                behavior: 'smooth',
            });

            progress.style.width = `${position}%`;

            document.querySelectorAll('.dot').forEach((dot, index) => {
                if (index === i) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        });

        progressBar.appendChild(dot);
    });

    return progressBar;
};
