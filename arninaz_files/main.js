lucide.createIcons();
  
    const screenshotFrame = document.getElementById('screenshot-frame');

    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 25;
      const y = (e.clientY / window.innerHeight - 0.5) * 25;

      screenshotFrame.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
      screenshotFrame.style.boxShadow = `${x}px ${y}px 60px rgba(0,255,255,0.3)`;
    });
