import { PROJECTS } from './projects.js';

export function debounce(fn, ms) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), ms);
    };
}

export function getProject(name) {
    return PROJECTS[name] || PROJECTS.starter;
}
