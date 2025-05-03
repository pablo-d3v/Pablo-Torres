export function loadNavbar(content) {
    const buttons = {
        1: document.querySelector('#section1'),
        2: document.querySelector('#section2'),
        3: document.querySelector('#section3'),
    };

    Object.keys(buttons).forEach((key) => {
        const index = parseInt(key);
        if (content.sections[index - 1] && buttons[key]) {
            buttons[key].textContent = content.sections[index - 1];
        }
    });
}