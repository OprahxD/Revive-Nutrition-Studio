
function createEmailButton(buttonId, recipientEmail, subject, body) {
  const button = document.getElementById(buttonId);

  if (!button) {
    console.error(`Button with ID "${buttonId}" not found.`);
    return;
  }

  button.addEventListener('click', () => {
    const mailtoLink = `mailto:${encodeURIComponent(recipientEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  });
}
