import { App } from './components/App';

document.body.appendChild(App());

const scrollContainer = document.querySelector('.scroll-container')!;
const dots = document.querySelectorAll('.dot');
const progress = document.querySelector('.progress') as HTMLElement;

// Используем те же позиции, что и для точек
const dotPositions = [5, 15, 40, 95];

scrollContainer.addEventListener('scroll', () => {
    const totalPages = dots.length;
    const scrollWidth = scrollContainer.scrollWidth / totalPages;
    const currentPage = Math.round(scrollContainer.scrollLeft / scrollWidth);

    // Обновляем активный класс у точек
    dots.forEach((dot, index) => {
        if (index === currentPage) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });

    // Устанавливаем ширину линии прогресса на основе текущей страницы
    progress.style.width = `${dotPositions[currentPage]}%`;
});



