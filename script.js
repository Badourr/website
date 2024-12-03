// Add interactivity to like buttons
document.querySelectorAll('.like-btn').forEach(button => {
    let liked = false;
    button.addEventListener('click', () => {
        liked = !liked;
        button.innerHTML = liked ? '❤️ Liked' : '❤️ Like';
        button.style.color = liked ? '#ff4d4d' : '';
    });
});

// Animate progress circles on page load
document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.progress-circle');
    circles.forEach(circle => {
        const percentage = circle.querySelector('span').textContent;
        circle.style.setProperty('--progress', percentage);
    });
});

// Comment and share button placeholders
document.querySelectorAll('.comment-btn, .share-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Feature coming soon!');
    });
});

// Floating bar task buttons
document.querySelectorAll('.task-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert(`Navigating to ${button.textContent} section`);
    });
});
