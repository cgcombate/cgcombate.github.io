function showProject(projectName) {
    const notification = document.getElementById('notification');
    notification.innerHTML = `You clicked on ${projectName}`;
    notification.style.display = 'block';

    // Hide the notification after 3 seconds
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}