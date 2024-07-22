const menuItems = document.querySelectorAll('.menu-item');
    const labelItems = document.querySelectorAll('.label-item p');

    menuItems.forEach(menuItem => {
        menuItem.addEventListener('mouseover', () => {
            const labelId = menuItem.getAttribute('data-label');
            const label = document.querySelector(`#${labelId} p`);
            label.classList.add('active');
        });

        menuItem.addEventListener('mouseout', () => {
            const labelId = menuItem.getAttribute('data-label');
            const label = document.querySelector(`#${labelId} p`);
            label.classList.remove('active');
        });
    });



    const profileIcon = document.querySelector('.profile-icon img');
    const menuIcon = document.querySelector('.menu-icon');

    profileIcon.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click from propagating to the document
        menuIcon.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (!profileIcon.contains(event.target) && !menuIcon.contains(event.target)) {
            menuIcon.classList.remove('active');
        }
    });