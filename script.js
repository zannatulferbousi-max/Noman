// পেজ লোড হওয়া পর্যন্ত অপেক্ষা করা
window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.card');

    // অ্যানিমেশনের শুরুর অবস্থা সেট করা
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
    });

    // স্ক্রল করার সময় কার্ডগুলো দেখানোর লজিক
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { 
        threshold: 0.1 // কার্ডের ১০% দেখা গেলেই অ্যানিমেশন শুরু হবে
    });

    cards.forEach(card => {
        observer.observe(card);
    });
});
