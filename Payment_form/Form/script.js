document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");
    
    // Switch between tabs
    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            tabs.forEach(t => t.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            this.classList.add("active");
            const tabId = this.getAttribute("data-tab");
            document.getElementById(tabId).classList.add("active");
        });
    });

    // Handle Card Payment Validation
    document.getElementById("card-form").addEventListener("submit", function (e) {
        e.preventDefault();
        
        const cardNumber = document.getElementById("card-number").value;
        const expiryDate = document.getElementById("expiry-date").value;
        const cvv = document.getElementById("cvv").value;
        
        if (!/^\d{16}$/.test(cardNumber)) {
            alert("Invalid Card Number! Must be 16 digits.");
            return;
        }

        if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
            alert("Invalid Expiry Date! Format: MM/YY");
            return;
        }

        if (!/^\d{3}$/.test(cvv)) {
            alert("Invalid CVV! Must be 3 digits.");
            return;
        }

        alert("Card Payment Successful!");
        this.reset();
    });

    // Handle UPI Payment
    document.getElementById("upi-form").addEventListener("submit", function (e) {
        e.preventDefault();
        
        const upiId = document.getElementById("upi-id").value;
        if (!/^\w+@\w+$/.test(upiId)) {
            alert("Invalid UPI ID! Format: example@upi");
            return;
        }

        alert("UPI Payment Successful!");
        this.reset();
    });

    // Handle Net Banking
    document.getElementById("netbanking-form").addEventListener("submit", function (e) {
        e.preventDefault();
        
        const bank = document.getElementById("bank-select").value;
        if (bank === "") {
            alert("Please select a bank.");
            return;
        }

        alert(`Redirecting to ${bank} for payment.`);
    });
});
