document.querySelectorAll('.map-area').forEach(area => {
    area.addEventListener('mouseover', () => {
        area.setAttribute('title', area.dataset.name);
    });

    area.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('modalImage').src = area.dataset.img;
        document.getElementById('modalDescription').textContent = area.dataset.desc;
        document.getElementById('infoModal').style.display = 'block';
    });
});

document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('infoModal').style.display = 'none';
});
