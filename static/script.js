document.addEventListener('DOMContentLoaded', function() {
    // ดึง URL รูปภาพจาก data attribute
    const imageData = document.getElementById('image-data');
    const imageUrl = imageData ? imageData.getAttribute('data-image-url') : null;
    
    // สร้างหัวใจลอย
    function createHearts() {
        const container = document.querySelector('.container');
        const heartCount = 15;
        
        for (let i = 0; i < heartCount; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.classList.add('heart');
            
            // ตำแหน่งและขนาดแบบสุ่ม
            const size = Math.random() * 20 + 15;
            const left = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = Math.random() * 3 + 3;
            
            heart.style.fontSize = `${size}px`;
            heart.style.left = `${left}%`;
            heart.style.top = `${Math.random() * 100}%`;
            heart.style.animationDelay = `${delay}s`;
            heart.style.animationDuration = `${duration}s`;
            
            container.appendChild(heart);
        }
    }
    
    // เอฟเฟกต์เมื่อคลิก - ใช้รูปภาพแทนหัวใจ
    document.addEventListener('click', function(e) {
        createClickImage(e.clientX, e.clientY);
    });
    
    // ฟังก์ชันสร้างรูปภาพเมื่อคลิก
    function createClickImage(x, y) {
        const element = document.createElement('div');
        
        if (imageUrl) {
            // ถ้ามีรูปภาพ ให้ใช้รูป
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = "รูปของเรา";
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            img.style.borderRadius = '50%';
            element.appendChild(img);
        } else {
            // ถ้าไม่มีรูปภาพ ให้ใช้หัวใจเป็น fallback
            element.innerHTML = '❤️';
            element.style.fontSize = '40px';
            element.style.textAlign = 'center';
            element.style.lineHeight = '50px';
        }
        
        element.style.position = 'fixed';
        element.style.left = `${x - 25}px`;
        element.style.top = `${y - 25}px`;
        element.style.width = '50px';
        element.style.height = '50px';
        element.style.pointerEvents = 'none';
        element.style.zIndex = '9999';
        element.style.borderRadius = '50%';
        element.style.background = 'rgba(255, 255, 255, 0.9)';
        element.style.boxShadow = '0 4px 15px rgba(255, 107, 107, 0.5)';
        element.style.animation = 'float 2s ease-out forwards';
        
        document.body.appendChild(element);
        
        // ลบ element หลังจาก animation เสร็จ
        setTimeout(() => {
            element.remove();
        }, 2000);
    }
    
    // เริ่มต้นสร้างหัวใจ
    createHearts();
    
    // เพิ่มเอฟเฟกต์เมื่อเลื่อน
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        const heartBackground = document.querySelector('.heart-background');
        if (heartBackground) {
            heartBackground.style.transform = `translateY(${rate}px)`;
        }
    });
});