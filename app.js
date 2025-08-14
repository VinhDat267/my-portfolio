// Chạy code chỉ sau khi toàn bộ HTML đã được tải xong
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. THEME SWITCHER ---
    const themeSwitcher = document.querySelector('#theme-switcher');
    const body = document.querySelector('body');
    if (themeSwitcher && body) {
        themeSwitcher.addEventListener('click', () => {
            body.classList.toggle('dark-mode');

            // Lấy icon bên trong nút
            const icon = themeSwitcher.querySelector('i');

            // Kiểm tra và đổi icon tương ứng
            if (body.classList.contains('dark-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });
    }

    // --- 2. HAMBURGER MENU ---
    const hamburgerButton = document.querySelector('#hamburger-menu');
    const navigationList = document.querySelector('.nav-ul');
    if (hamburgerButton && navigationList) {
        hamburgerButton.addEventListener('click', () => {
            navigationList.classList.toggle('nav-open');
        });
    }

    // --- 3. SMOOTH SCROLLING cho các link trong Nav ---
    const navLinks = document.querySelectorAll('.nav-ul a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Đóng menu di động (nếu đang mở) sau khi bấm vào một link
            if (navigationList.classList.contains('nav-open')) {
                navigationList.classList.remove('nav-open');
            }
        });
    });

});