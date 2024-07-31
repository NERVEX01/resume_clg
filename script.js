function submitFeedback() {
    const feedback = document.getElementById('feedback').value;
    if (feedback) {
        alert('Thank you for your feedback!');
        document.getElementById('feedback-form').reset();
    } else {
        alert('Please enter your feedback.');
    }
}

