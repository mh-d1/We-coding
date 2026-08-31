export const state = {
    theme: 'green',
    project: { html: '', css: '', js: '' },
    currentFile: 'index.html',
    currentProject: 'starter',
    deviceSize: 'desktop',
    editorView: 'code',
};

export function saveState() {
    try {
        const data = {
            theme: state.theme,
            project: state.project,
            currentFile: state.currentFile,
            currentProject: state.currentProject,
            deviceSize: state.deviceSize,
        };
        localStorage.setItem('codeforge_pro_state', JSON.stringify(data));
    } catch (_) {}
}

export function loadState() {
    try {
        const raw = localStorage.getItem('codeforge_pro_state');
        if (!raw) return false;
        const data = JSON.parse(raw);
        Object.assign(state, data);
        if (!state.project.html) state.project.html = '';
        if (!state.project.css) state.project.css = '';
        if (!state.project.js) state.project.js = '';
        return true;
    } catch (_) { return false; }
}
