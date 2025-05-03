// Configuración inicial
const LANG = 'en';
const SELECTORS = {
    name: '#name',
    role: '#role',
    sectionButtons: {
        1: '#section1',
        2: '#section2',
        3: '#section3',
    }
};

// Cache de elementos DOM
const elements = {
    name: document.querySelector(SELECTORS.name),
    role: document.querySelector(SELECTORS.role),
    sectionButtons: {
        1: document.querySelector(SELECTORS.sectionButtons[1]),
        2: document.querySelector(SELECTORS.sectionButtons[2]),
        3: document.querySelector(SELECTORS.sectionButtons[3])
    }
};

// Función para cargar los textos desde el archivo JSON
export async function loadTexts() {
    try {
        const response = await fetch('texts.json');
        
        if (!response.ok) throw new Error('Network response was not OK');
        
        const data = await response.json();
        const content = data[LANG];
        
        // Actualizar contenido básico
        elements.name.textContent = content.name;
        elements.role.textContent = content.role;
        
        // Actualizar textos de los botones
        Object.keys(elements.sectionButtons).forEach((key) => {
            const index = parseInt(key);
            if (content.sections[index - 1]) {
                elements.sectionButtons[index].textContent = content.sections[index - 1];
            }
        });

        // Retornar el contenido para usarlo en otra parte
        return content;

    } catch (error) {
        console.error('Error loading content:', error);
        document.querySelector('#projects').innerHTML = `
            <p class="error-message">⚠️ Error loading portfolio. Please try refreshing the page or contact me at pablotorres11001@gmail.com</p>
        `;
    }
}
