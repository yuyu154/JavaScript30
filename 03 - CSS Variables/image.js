function handleUpdate(event) {
    console.log(this.dataset.sizing);
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, event.target.value + suffix);
}

function init() {
    const inputs = Array.from(document.querySelectorAll('.controls input'));
    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
}

init();