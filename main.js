fetch('texts.json')
  .then(res => res.json())
  .then(data => {
    const lang = 'en';
    const content = data[lang];

    document.getElementById('name').textContent = content.name;
    document.getElementById('role').textContent = content.role;

    content.sections.forEach((text, index) => {
      const id = `section${index + 1}`;
      document.getElementById(id).textContent = text;
    });
  });
