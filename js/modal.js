// Use window. to ensure the HTML buttons can always find this function
window.toggleModal = function(serviceName = "General") {
    const modal = document.getElementById('quoteModal');
    if (!modal) return; // Safety check

    const isOpening = modal.classList.contains('hidden');
    
    if (isOpening) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');

        const phoneNumber = "2348147576013";
        const emailAddress = "vetriglobaltrust@gmail.com";
        
        // This creates the custom message
        const message = `I want to get a quote for ${serviceName} with Vetri`;
        const encodedMsg = encodeURIComponent(message);

        // Update the actual links in the HTML
        const waLinkElement = document.getElementById('modalWaLink');
        const mailLinkElement = document.getElementById('modalMailLink');

        if (waLinkElement) {
            waLinkElement.href = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
        }

        if (mailLinkElement) {
            mailLinkElement.href = `mailto:${emailAddress}?subject=Quote Request: ${serviceName}&body=Hi Vetri Team, I am interested in ${serviceName}...`;
        }
        
    } else {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
};