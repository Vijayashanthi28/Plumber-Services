//Payment
function selectPaymentMethod(method) {
            console.log('Selected payment method:', method);
            // Add your payment method selection logic here
            
            // Visual feedback
            const buttons = document.querySelectorAll('.payment-option');
            buttons.forEach(btn => btn.style.background = 'transparent');
            event.target.closest('.payment-option').style.background = '#f0f7ff';
        }

        function processPayment() {
            console.log('Processing payment of ₹379');
            // Add your payment processing logic here
            
            // Visual feedback
            const payBtn = document.querySelector('.pay-button');
            payBtn.textContent = 'PROCESSING...';
            payBtn.style.background = '#999';
            
            setTimeout(() => {
                payBtn.textContent = 'PAY ₹379';
                payBtn.style.background = '#D2691E';
            }, 2000);
        }

        // Back button functionality
        document.querySelector('.back-arrow').addEventListener('click', function() {
            console.log('Back button clicked');
            // Add your back navigation logic here
            window.history.back();
        });

        // Add hover effects for better interactivity
        document.addEventListener('DOMContentLoaded', function() {
            const paymentOptions = document.querySelectorAll('.payment-option');
            
            paymentOptions.forEach(option => {
                option.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateX(2px)';
                });
                
                option.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateX(0)';
                });
            });
        });

        //signup page
         function toggleForm(formType) {
            const signUpForm = document.getElementById('signUpForm');
            const signInForm = document.getElementById('signInForm');

            if (formType === 'signIn') {
                signUpForm.classList.remove('active');
                signInForm.classList.add('active');
            } else {
                signInForm.classList.remove('active');
                signUpForm.classList.add('active');
            }
        }

        function showAlert(type, title, message) {
            const modal = document.getElementById('alertModal');
            const icon = document.getElementById('alertIcon');
            const iconText = document.getElementById('alertIconText');
            const alertTitle = document.getElementById('alertTitle');
            const alertMessage = document.getElementById('alertMessage');

            // Set icon and styling based on type
            if (type === 'success') {
                icon.className = 'alert-icon success';
                iconText.textContent = '✓';
            } else if (type === 'error') {
                icon.className = 'alert-icon error';
                iconText.textContent = '✗';
            }

            alertTitle.textContent = title;
            alertMessage.textContent = message;
            modal.style.display = 'flex';
        }

        function closeAlert() {
            document.getElementById('alertModal').style.display = 'none';
        }

        function validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        function validatePassword(password) {
            return password.length >= 6;
        }

        function handleSignUp() {
            const name = document.getElementById('signupName').value.trim();
            const email = document.getElementById('signupEmail').value.trim();
            const password = document.getElementById('signupPassword').value;

            // Validation
            if (!name) {
                showAlert('error', 'Invalid Input', 'Please enter your full name.');
                return;
            }

            if (!email) {
                showAlert('error', 'Invalid Email', 'Please enter your email address.');
                return;
            }

            if (!validateEmail(email)) {
                showAlert('error', 'Invalid Email', 'Please enter a valid email address.');
                return;
            }

            if (!password) {
                showAlert('error', 'Invalid Password', 'Please enter a password.');
                return;
            }

            if (!validatePassword(password)) {
                showAlert('error', 'Weak Password', 'Password must be at least 6 characters long.');
                return;
            }

            // Success
            showAlert('success', 'Account Created!', `Welcome ${name}! Your account has been created successfully. Please check your email for verification.`);
            
            // Clear form
            document.getElementById('signupName').value = '';
            document.getElementById('signupEmail').value = '';
            document.getElementById('signupPassword').value = '';
        }

        function handleSignIn() {
            const email = document.getElementById('signinEmail').value.trim();
            const password = document.getElementById('signinPassword').value;

            // Validation
            if (!email) {
                showAlert('error', 'Missing Email', 'Please enter your email address.');
                return;
            }

            if (!validateEmail(email)) {
                showAlert('error', 'Invalid Email', 'Please enter a valid email address.');
                return;
            }

            if (!password) {
                showAlert('error', 'Missing Password', 'Please enter your password.');
                return;
            }

            // Simulate authentication
            // In real app, you would make an API call here
            if (email === 'demo@example.com' && password === 'password') {
                showAlert('success', 'Login Successful!', 'Welcome back! You have been logged in successfully.');
            } else {
                showAlert('error', 'Login Failed', 'Invalid email or password. Please try again or use demo@example.com with password "password".');
            }
        }

        function showForgotPasswordAlert() {
            showAlert('success', 'Password Reset', 'Password reset instructions have been sent to your email address. Please check your inbox and spam folder.');
        }

        // Close modal when clicking outside
        document.getElementById('alertModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeAlert();
            }
        });

        // Form submission on Enter key
        document.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const activeForm = document.querySelector('.form-section.active');
                if (activeForm.id === 'signUpForm') {
                    handleSignUp();
                } else {
                    handleSignIn();
                }
            }
        });

        // Add floating animation delays
        document.addEventListener('DOMContentLoaded', function() {
            const elements = document.querySelectorAll('.floating-element');
            elements.forEach((element, index) => {
                element.style.animationDelay = `${index * 0.5}s`;
            });
        });

        //Plumber
          function requestService() {
            alert('Service request submitted! We will contact you shortly.');
            console.log('Service request initiated');
        }

        // Add smooth scrolling for internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add intersection observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe service cards for animation
        document.addEventListener('DOMContentLoaded', function() {
            const serviceCards = document.querySelectorAll('.service-card');
            serviceCards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'all 0.6s ease';
                observer.observe(card);
            });

            // Add hover effects to service cards
            serviceCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px) scale(1.02)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });
        });

        // Add click tracking for service cards
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('click', function() {
                const serviceName = this.querySelector('.service-name').textContent;
                console.log(`Service selected: ${serviceName}`);
                alert(`You selected ${serviceName} service. We'll contact you shortly!`);
            });
        });

        //Navbar
          function toggleDropdown(element) {
            // Close all other dropdowns
            const allItems = document.querySelectorAll('.nav-item');
            allItems.forEach(item => {
                if (item !== element.parentElement) {
                    item.classList.remove('active');
                }
            });
            
            // Toggle current dropdown
            element.parentElement.classList.toggle('active');
        }

        function toggleMobileMenu() {
            const navMenu = document.getElementById('navMenu');
            navMenu.classList.toggle('active');
        }

        function requestService() {
            alert('Service request submitted! We will contact you shortly at +91 9876234567');
        }

        // Close dropdowns when clicking outside
        document.addEventListener('click', function(event) {
            const navItems = document.querySelectorAll('.nav-item');
            const isClickInsideNav = event.target.closest('.nav-item');
            
            if (!isClickInsideNav) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                });
            }
        });

        // Handle keyboard navigation
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                const navItems = document.querySelectorAll('.nav-item');
                navItems.forEach(item => {
                    item.classList.remove('active');
                });
            }
        });

        // Add smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add navigation highlighting based on scroll position
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            // Add scroll-based highlighting logic here if needed
        });

      //Schedule Date
         class ServiceBookingManager {
            constructor() {
                this.currentStepIndex = 1;
                this.totalStepsCount = 4;
                this.formDataStorage = {};
                this.isTransitioning = false;
                
                this.initializeEventHandlers();
                this.updateNavigationState();
                this.validateCurrentStep();
            }

            initializeEventHandlers() {
                const nextButton = document.getElementById('next-step-button');
                const backButton = document.getElementById('back-step-button');
                const submitButton = document.getElementById('submit-form-button');

                if (nextButton) {
                    nextButton.addEventListener('click', () => this.proceedToNextStep());
                }
                if (backButton) {
                    backButton.addEventListener('click', () => this.returnToPreviousStep());
                }
                if (submitButton) {
                    submitButton.addEventListener('click', () => this.handleFormSubmission());
                }

                this.addInputValidationListeners();
            }

            addInputValidationListeners() {
                const allInputFields = document.querySelectorAll('.text-input-field, .textarea-input-field');
                allInputFields.forEach(field => {
                    field.addEventListener('input', () => this.validateCurrentStep());
                    field.addEventListener('blur', () => this.saveFieldData(field));
                });
            }

            saveFieldData(fieldElement) {
                this.formDataStorage[fieldElement.id] = fieldElement.value;
            }

            validateCurrentStep() {
                let isStepValid = true;
                
                if (this.currentStepIndex === 1) {
                    const fullName = document.getElementById('customer-full-name');
                    isStepValid = fullName && fullName.value.trim().length > 0;
                } else if (this.currentStepIndex === 2) {
                    const email = document.getElementById('customer-email-address');
                    const phone = document.getElementById('customer-phone-number');
                    isStepValid = email && email.value.trim().length > 0 && 
                                 phone && phone.value.trim().length > 0;
                } else if (this.currentStepIndex === 3) {
                    const address = document.getElementById('service-street-address');
                    const city = document.getElementById('service-city-name');
                    isStepValid = address && address.value.trim().length > 0 && 
                                 city && city.value.trim().length > 0;
                } else if (this.currentStepIndex === 4) {
                    const date = document.getElementById('preferred-service-date');
                    isStepValid = date && date.value.trim().length > 0;
                }

                const nextButton = document.getElementById('next-step-button');
                const submitButton = document.getElementById('submit-form-button');
                
                if (this.currentStepIndex < this.totalStepsCount) {
                    if (nextButton) nextButton.disabled = !isStepValid;
                } else {
                    if (submitButton) submitButton.disabled = !isStepValid;
                }

                return isStepValid;
            }

            proceedToNextStep() {
                if (this.isTransitioning || this.currentStepIndex >= this.totalStepsCount) {
                    return;
                }
                
                if (this.validateCurrentStep()) {
                    this.transitionToStep(this.currentStepIndex + 1);
                }
            }

            returnToPreviousStep() {
                if (this.isTransitioning || this.currentStepIndex <= 1) {
                    return;
                }
                
                this.transitionToStep(this.currentStepIndex - 1);
            }

            transitionToStep(targetStepNumber) {
                if (this.isTransitioning) {
                    return;
                }
                
                if (targetStepNumber < 1 || targetStepNumber > this.totalStepsCount) {
                    return;
                }
                
                this.isTransitioning = true;
                
                const currentStepElement = document.querySelector(`.form-step-wrapper[data-step="${this.currentStepIndex}"]`);
                const targetStepElement = document.querySelector(`.form-step-wrapper[data-step="${targetStepNumber}"]`);
                
                if (!targetStepElement) {
                    this.isTransitioning = false;
                    return;
                }

                if (currentStepElement) {
                    currentStepElement.classList.add('step-exit');
                    currentStepElement.classList.remove('step-active');
                }

                setTimeout(() => {
                    document.querySelectorAll('.form-step-wrapper').forEach(step => {
                        step.classList.remove('step-active', 'step-exit');
                    });
                    
                    targetStepElement.classList.add('step-active');
                    
                    this.currentStepIndex = targetStepNumber;
                    
                    this.updateProgressIndicators();
                    this.updateNavigationState();
                    this.validateCurrentStep();
                    
                    const firstInput = targetStepElement.querySelector('.text-input-field, .textarea-input-field');
                    if (firstInput) {
                        firstInput.focus();
                    }
                    
                    this.isTransitioning = false;
                }, 300);
            }

            updateProgressIndicators() {
                const progressDots = document.querySelectorAll('.progress-step-dot');
                progressDots.forEach((dot, index) => {
                    const dotStep = index + 1;
                    dot.classList.remove('dot-active', 'dot-completed');
                    
                    if (dotStep < this.currentStepIndex) {
                        dot.classList.add('dot-completed');
                    } else if (dotStep === this.currentStepIndex) {
                        dot.classList.add('dot-active');
                    }
                });
            }

            updateNavigationState() {
                const backButton = document.getElementById('back-step-button');
                const nextButton = document.getElementById('next-step-button');
                const submitButton = document.getElementById('submit-form-button');

                if (backButton) {
                    backButton.disabled = this.currentStepIndex === 1;
                }

                if (this.currentStepIndex === this.totalStepsCount) {
                    if (nextButton) nextButton.style.display = 'none';
                    if (submitButton) submitButton.style.display = 'inline-block';
                } else {
                    if (nextButton) nextButton.style.display = 'inline-block';
                    if (submitButton) submitButton.style.display = 'none';
                }
            }

            collectAllFormData() {
                const formData = {
                    fullName: document.getElementById('customer-full-name')?.value || '',
                    email: document.getElementById('customer-email-address')?.value || '',
                    phone: document.getElementById('customer-phone-number')?.value || '',
                    address: document.getElementById('service-street-address')?.value || '',
                    city: document.getElementById('service-city-name')?.value || '',
                    state: document.getElementById('service-state-name')?.value || '',
                    zipCode: document.getElementById('service-zip-code')?.value || '',
                    serviceDate: document.getElementById('preferred-service-date')?.value || '',
                    serviceTime: document.getElementById('preferred-service-time')?.value || '',
                    problemDescription: document.getElementById('problem-description-text')?.value || ''
                };
                return formData;
            }

            handleFormSubmission() {
                if (!this.validateCurrentStep()) {
                    alert('Please fill in all required fields.');
                    return;
                }

                const formData = this.collectAllFormData();
                
                const requiredFields = ['fullName', 'email', 'phone', 'address', 'city', 'serviceDate'];
                const missingFields = requiredFields.filter(field => !formData[field] || formData[field].trim() === '');
                
                if (missingFields.length > 0) {
                    alert('Please complete all previous steps before submitting.');
                    return;
                }

                alert('Service request submitted successfully! We will contact you soon.');
                console.log('Form submitted with data:', formData);
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            window.bookingManager = new ServiceBookingManager();
        });
        //Booking Date slot
            class CartBookingManager {
            constructor() {
                this.baseAmount = 379;
                this.selectedTip = 0;
                this.selectedDate = null;
                this.offersExpanded = false;
                
                this.initializeEventHandlers();
            }

            initializeEventHandlers() {
                // Date & Time Selection Modal
                const dateTimeButton = document.getElementById('dateTimeButton');
                const dateModal = document.getElementById('dateBookingModal');
                const modalClose = document.getElementById('modalCloseButton');
                
                dateTimeButton.addEventListener('click', () => this.openDateModal());
                modalClose.addEventListener('click', () => this.closeDateModal());
                dateModal.addEventListener('click', (e) => {
                    if (e.target === dateModal) this.closeDateModal();
                });

                // Date Selection
                const dateButtons = document.querySelectorAll('.date-slot-button');
                dateButtons.forEach(button => {
                    button.addEventListener('click', () => this.selectDate(button));
                });

                // Offers Toggle
                const viewOffersButton = document.getElementById('viewOffersButton');
                const additionalOffersList = document.getElementById('additionalOffersList');
                
                viewOffersButton.addEventListener('click', () => this.toggleOffers());

                // Tip Selection
                const tipButtons = document.querySelectorAll('.tip-amount-button');
                tipButtons.forEach(button => {
                    button.addEventListener('click', () => this.selectTip(button));
                });

                // Add Service Button
                const addServiceButton = document.querySelector('.add-service-button');
                addServiceButton.addEventListener('click', () => this.addSuggestedService());

                // Preference Checkbox
                const preferenceCheckbox = document.querySelector('.preference-checkbox');
                preferenceCheckbox.addEventListener('click', () => this.togglePreference());

                // Edit Address Button
                const editAddressButton = document.querySelector('.edit-address-button');
                editAddressButton.addEventListener('click', () => this.editAddress());

                // Proceed to Pay Button
                const proceedPayButton = document.querySelector('.proceed-payment-button');
                proceedPayButton.addEventListener('click', () => this.proceedToPayment());

                // Coupon Section
                const couponSection = document.querySelector('.coupon-section-wrapper');
                couponSection.addEventListener('click', () => this.openCoupons());
            }

            openDateModal() {
                const modal = document.getElementById('dateBookingModal');
                modal.classList.add('modal-visible');
                document.body.style.overflow = 'hidden';
            }

            closeDateModal() {
                const modal = document.getElementById('dateBookingModal');
                modal.classList.remove('modal-visible');
                document.body.style.overflow = 'auto';
            }

            selectDate(selectedButton) {
                // Remove previous selection
                document.querySelectorAll('.date-slot-button').forEach(btn => {
                    btn.classList.remove('date-selected');
                });

                // Add selection to clicked button
                selectedButton.classList.add('date-selected');
                
                const dateValue = selectedButton.getAttribute('data-date');
                const dayName = selectedButton.querySelector('.day-name-text').textContent;
                
                this.selectedDate = {
                    date: dateValue,
                    day: dayName
                };

                // Update the main button text
                const dateTimeButton = document.getElementById('dateTimeButton');
                dateTimeButton.textContent = `${dayName}, ${dateValue} - Select Time`;
                dateTimeButton.style.background = '#10b981';

                // Auto-close modal after selection
                setTimeout(() => {
                    this.closeDateModal();
                }, 1000);
            }

            toggleOffers() {
                const offersButton = document.getElementById('viewOffersButton');
                const offersList = document.getElementById('additionalOffersList');
                
                this.offersExpanded = !this.offersExpanded;
                
                if (this.offersExpanded) {
                    offersList.classList.add('offers-expanded');
                    offersButton.textContent = 'View Less Offers ↑';
                } else {
                    offersList.classList.remove('offers-expanded');
                    offersButton.textContent = 'View More Offers ↓';
                }
            }

            selectTip(selectedButton) {
                // Remove previous selection
                document.querySelectorAll('.tip-amount-button').forEach(btn => {
                    btn.classList.remove('tip-selected');
                });

                // Add selection to clicked button
                selectedButton.classList.add('tip-selected');
                
                const tipValue = selectedButton.getAttribute('data-tip');
                
                if (tipValue === 'custom') {
                    const customTip = prompt('Enter custom tip amount (Rs):');
                    if (customTip && !isNaN(customTip) && customTip > 0) {
                        this.selectedTip = parseInt(customTip);
                        selectedButton.textContent = `Rs ${customTip}`;
                    } else {
                        selectedButton.classList.remove('tip-selected');
                        return;
                    }
                } else {
                    this.selectedTip = parseInt(tipValue);
                }

                this.updateFinalAmount();
            }

            updateFinalAmount() {
                const finalAmount = this.baseAmount + this.selectedTip;
                const finalAmountDisplay = document.getElementById('finalAmountDisplay');
                finalAmountDisplay.textContent = `₹${finalAmount}`;
            }

            addSuggestedService() {
                const addButton = document.querySelector('.add-service-button');
                const serviceItem = addButton.closest('.suggested-service-item');
                
                // Change button state
                addButton.textContent = 'Added ✓';
                addButton.style.background = '#10b981';
                addButton.style.color = 'white';
                addButton.style.borderColor = '#10b981';
                addButton.disabled = true;

                // Update cart totals (assuming shower filter is ₹199)
                this.baseAmount += 199;
                
                // Update item total in payment summary
                const itemTotalElement = document.querySelector('.payment-line-item .line-item-amount');
                itemTotalElement.textContent = `₹${this.baseAmount - 80}`; // Minus fees
                
                // Update total amount
                const totalAmountElement = document.querySelector('.total-amount-row .line-item-amount');
                totalAmountElement.textContent = `₹${this.baseAmount}`;
                
                this.updateFinalAmount();

                // Show success feedback
                this.showNotification('Service added to cart!', 'success');
            }

            togglePreference() {
                const checkbox = document.querySelector('.preference-checkbox');
                const isChecked = checkbox.classList.contains('checked');
                
                if (isChecked) {
                    checkbox.classList.remove('checked');
                    checkbox.style.background = 'transparent';
                    checkbox.innerHTML = '';
                } else {
                    checkbox.classList.add('checked');
                    checkbox.style.background = '#3b82f6';
                    checkbox.innerHTML = '<span style="color: white; font-size: 10px;">✓</span>';
                }
            }

            editAddress() {
                const newAddress = prompt('Enter new address:', 'HOME 12,RTG STREET,MHYFDFFFG,TRHIY');
                if (newAddress && newAddress.trim()) {
                    const addressText = document.querySelector('.address-full-text');
                    addressText.textContent = newAddress;
                    this.showNotification('Address updated successfully!', 'success');
                }
            }

            proceedToPayment() {
                if (!this.selectedDate) {
                    this.showNotification('Please select a date and time first!', 'error');
                    return;
                }

                // Show loading state
                const payButton = document.querySelector('.proceed-payment-button');
                const originalText = payButton.textContent;
                payButton.textContent = 'Processing...';
                payButton.disabled = true;

                // Simulate payment processing
                setTimeout(() => {
                    payButton.textContent = originalText;
                    payButton.disabled = false;
                    this.showNotification('Redirecting to payment gateway...', 'info');
                }, 2000);
            }

            openCoupons() {
                const availableCoupons = [
                    { code: 'FIRST10', discount: '10% off', description: 'First order discount' },
                    { code: 'SAVE50', discount: '₹50 off', description: 'Minimum order ₹300' },
                    { code: 'WEEKEND20', discount: '20% off', description: 'Weekend special' }
                ];

                let couponHTML = 'Available Coupons:\n\n';
                availableCoupons.forEach(coupon => {
                    couponHTML += `${coupon.code} - ${coupon.discount}\n${coupon.description}\n\n`;
                });

                alert(couponHTML);
            }

            showNotification(message, type = 'info') {
                // Create notification element
                const notification = document.createElement('div');
                notification.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
                    color: white;
                    padding: 15px 20px;
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                    z-index: 10000;
                    font-size: 14px;
                    font-weight: 500;
                    max-width: 300px;
                    animation: slideInRight 0.3s ease-out;
                `;
                
                notification.textContent = message;
                document.body.appendChild(notification);

                // Add animation keyframes
                if (!document.querySelector('#notificationStyles')) {
                    const style = document.createElement('style');
                    style.id = 'notificationStyles';
                    style.textContent = `
                        @keyframes slideInRight {
                            from { transform: translateX(100%); opacity: 0; }
                            to { transform: translateX(0); opacity: 1; }
                        }
                        @keyframes slideOutRight {
                            from { transform: translateX(0); opacity: 1; }
                            to { transform: translateX(100%); opacity: 0; }
                        }
                    `;
                    document.head.appendChild(style);
                }

                // Remove notification after 3 seconds
                setTimeout(() => {
                    notification.style.animation = 'slideOutRight 0.3s ease-in forwards';
                    setTimeout(() => {
                        if (notification.parentNode) {
                            notification.parentNode.removeChild(notification);
                        }
                    }, 300);
                }, 3000);
            }

            // Initialize cart data
            initializeCartData() {
                const cartData = {
                    services: [
                        { name: 'Tap And Filter Installation', price: 299 }
                    ],
                    fees: {
                        visitation: 60,
                        tax: 20
                    },
                    selectedDate: null,
                    selectedTip: 0,
                    preferences: {
                        avoidCalling: false
                    }
                };

                return cartData;
            }

            // Get complete booking summary
            getBookingSummary() {
                return {
                    contact: '+919876534526',
                    address: document.querySelector('.address-full-text').textContent,
                    selectedDate: this.selectedDate,
                    services: document.querySelectorAll('.service-item-header').length,
                    totalAmount: this.baseAmount + this.selectedTip,
                    tip: this.selectedTip,
                    preferences: {
                        avoidCalling: document.querySelector('.preference-checkbox').classList.contains('checked')
                    }
                };
            }
        }

        // Initialize the cart manager when page loads
        document.addEventListener('DOMContentLoaded', () => {
            new CartBookingManager();
        });

        // Handle escape key for modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const modal = document.getElementById('dateBookingModal');
                if (modal.classList.contains('modal-visible')) {
                    modal.classList.remove('modal-visible');
                    document.body.style.overflow = 'auto';
                }
            }
        });

        //Plumbing Services
         class PlumbingServicesManager {
            constructor() {
                this.currentQuantity = 1;
                this.basePrice = 299;
                this.initializeEventHandlers();
            }

            initializeEventHandlers() {
                // Quantity controls
                document.getElementById('increaseQty').addEventListener('click', () => {
                    this.updateQuantity(1);
                });

                document.getElementById('decreaseQty').addEventListener('click', () => {
                    this.updateQuantity(-1);
                });

                // Add service buttons
                document.querySelectorAll('.add-service-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        if (!e.target.closest('.modal-header-section')) {
                            this.addService(e.target);
                        }
                    });
                });

                // Modal close on backdrop click
                document.getElementById('serviceModal').addEventListener('click', (e) => {
                    if (e.target.id === 'serviceModal') {
                        this.closeServiceModal();
                    }
                });

                // Escape key to close modal
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') {
                        this.closeServiceModal();
                    }
                });
            }

            updateQuantity(change) {
                const newQuantity = this.currentQuantity + change;
                
                if (newQuantity >= 1 && newQuantity <= 10) {
                    this.currentQuantity = newQuantity;
                    document.getElementById('qtyDisplay').textContent = this.currentQuantity;
                    
                    const totalAmount = this.basePrice * this.currentQuantity;
                    document.getElementById('payableAmount').textContent = `₹${totalAmount}`;
                    
                    // Add visual feedback
                    this.showQuantityFeedback();
                }
            }

            showQuantityFeedback() {
                const qtyDisplay = document.getElementById('qtyDisplay');
                qtyDisplay.style.transform = 'scale(1.2)';
                qtyDisplay.style.color = '#3b82f6';
                
                setTimeout(() => {
                    qtyDisplay.style.transform = 'scale(1)';
                    qtyDisplay.style.color = '#111827';
                }, 200);
            }

            addService(button) {
                const originalText = button.textContent;
                button.textContent = 'ADDED ✓';
                button.style.background = '#10b981';
                button.style.color = 'white';
                button.disabled = true;

                // Show success notification
                this.showNotification('Service added to cart!');

                // Simulate adding to cart (you can implement actual cart logic here)
                setTimeout(() => {
                    // Reset button after 2 seconds (optional)
                    // button.textContent = originalText;
                    // button.style.background = '';
                    // button.style.color = '';
                    // button.disabled = false;
                }, 2000);
            }

            showNotification(message) {
                const notification = document.createElement('div');
                notification.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: #10b981;
                    color: white;
                    padding: 12px 20px;
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                    z-index: 10000;
                    font-size: 14px;
                    font-weight: 500;
                    animation: slideIn 0.3s ease-out;
                `;
                notification.textContent = message;
                document.body.appendChild(notification);

                // Add CSS animation if not exists
                if (!document.querySelector('#notificationStyles')) {
                    const style = document.createElement('style');
                    style.id = 'notificationStyles';
                    style.textContent = `
                        @keyframes slideIn {
                            from { transform: translateX(100%); opacity: 0; }
                            to { transform: translateX(0); opacity: 1; }
                        }
                    `;
                    document.head.appendChild(style);
                }

                setTimeout(() => {
                    notification.remove();
                }, 3000);
            }

            closeServiceModal() {
                const modal = document.getElementById('serviceModal');
                const modalContent = document.getElementById('modalContent');
                
                modalContent.classList.remove('modal-slide-in');
                
                setTimeout(() => {
                    modal.classList.remove('modal-active');
                    document.body.style.overflow = 'auto';
                }, 300);
            }
        }

        // Global functions for modal and FAQ
        function openServiceModal(serviceType) {
            const modal = document.getElementById('serviceModal');
            const modalContent = document.getElementById('modalContent');
            const modalTitle = document.getElementById('modalTitle');
            const modalPrice = document.getElementById('modalPrice');

            // Set content based on service type
            const serviceData = {
                'fixture': {
                    title: 'Fixture Installation & Replacement',
                    price: '₹129 | 30 mins'
                },
                'repair': {
                    title: 'Repair & Maintenance',
                    price: '₹199 | 45 mins'
                },
                'drainage': {
                    title: 'Drainage & Blockage Solutions',
                    price: '₹299 | 60 mins'
                },
                'water-tank': {
                    title: 'Water Tank & Motor Services',
                    price: '₹399 | 90 mins'
                },
                'consultation': {
                    title: 'Plumbing Consultation',
                    price: '₹99 | 30 mins'
                }
            };

            const service = serviceData[serviceType] || serviceData['fixture'];
            modalTitle.textContent = service.title;
            modalPrice.textContent = service.price;

            modal.classList.add('modal-active');
            document.body.style.overflow = 'hidden';
            
            setTimeout(() => {
                modalContent.classList.add('modal-slide-in');
            }, 10);
        }

        function closeServiceModal() {
            const servicesManager = new PlumbingServicesManager();
            servicesManager.closeServiceModal();
        }

        function toggleFAQ(element) {
            const faqItem = element.parentElement;
            const isExpanded = faqItem.classList.contains('faq-expanded');
            
            // Close all other FAQs
            document.querySelectorAll('.faq-item-wrapper').forEach(item => {
                item.classList.remove('faq-expanded');
            });
            
            // Toggle current FAQ
            if (!isExpanded) {
                faqItem.classList.add('faq-expanded');
            }
        }

        // Initialize the services manager when page loads
        document.addEventListener('DOMContentLoaded', () => {
            new PlumbingServicesManager();
        });
