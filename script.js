// Kodların çalışması için DOM'un tamamen yüklenmesini bekliyoruz
document.addEventListener('DOMContentLoaded', () => {

    // ===== KARANLIK MOD DEĞİŞTİRİCİ =====
    const themeToggle = document.getElementById('checkbox');
    const body = document.body;

    // Sayfa yüklendiğinde kullanıcının son tercihini kontrol et (localStorage)
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.checked = true;
    }

    // Butona tıklandığında modu değiştir
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark'); // Tercihi kaydet
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light'); // Tercihi kaydet
        }
    });


    // ===== MOBİL MENÜ (HAMBURGER) =====
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = navLinks.querySelectorAll('a'); // Menüdeki linkler

    // Hamburger ikona tıklandığında menüyü aç/kapat
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Hamburger ikonu animasyonu (isteğe bağlı, CSS ile yapılabilir)
        hamburger.classList.toggle('is-active'); 
    });

    // Mobil menüde bir linke tıklandığında menüyü kapat
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('is-active');
            }
        });
    });


    // ===== FOOTER YIL GÜNCELLEYİCİ =====
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
    
});