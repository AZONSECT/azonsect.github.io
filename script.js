document.addEventListener('DOMContentLoaded', () => {
    
    // Mobil menü tetiğini ve menü linklerini seç
    const menuTusu = document.querySelector('.mobil-menu-tusu');
    const navLinks = document.querySelector('.nav-links');

    // Menü tuşuna tıklandığında
    menuTusu.addEventListener('click', () => {
        // nav-links elementine 'active' class'ını ekle/kaldır
        navLinks.classList.toggle('active');
        
        // Menü tuşuna 'active' class'ını ekle/kaldır (X animasyonu için)
        menuTusu.classList.toggle('active');
    });

    // Menüdeki bir linke tıklandığında menüyü kapat
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuTusu.classList.remove('active');
            }
        });
    });

});