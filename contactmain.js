
/* =========================================================
   PSYCEDU CLINIC - CONTACT PAGE JAVASCRIPT
   English / Arabic Translation
   Responsive mobile navigation
   WhatsApp contact form + share menu
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    /* =====================================================
       TRANSLATIONS
    ===================================================== */

    const translations = {
        en: {
            navHome: "Home",
            navAbout: "About Dr. Faten",
            navServices: "Services",
            navResources: "Resources",
            navStories: "Stories",
            navContact: "Contact",

            service1: "Psychological Counseling",
            service2: "Psychoeducational Assessment",
            service3: "Psychoeducational Reports",
            service4: "Learning Difficulties & ADHD",
            service5: "Family Guidance & Skills Development",

            shareTitle: "Share this page",
            bookAppointment: "Book Appointment",

            contactHeroLabel: "Contact Psycedu Clinic",
            contactHeroTitle:
                "We're Here to <span>Listen & Support</span>",
            contactHeroDescription:
                "Whether you are looking for psychological support, educational guidance or would like to request an online appointment, feel free to get in touch.",

            getInTouch: "Get in Touch",
            contactHeading: "Connect With <span>Dr. Faten</span>",
            contactIntro:
                "Contact Psycedu Clinic for psychological and educational support, general inquiries or appointment requests.",

            phoneLabel: "Phone",
            callClinic: "Call Psycedu Clinic",
            emailLabel: "Email",
            emailClinic: "Send us an email",
            locationLabel: "Location",
            location: "Chtoura, Lebanon",
            onlineAvailable: "Online appointments available",
            followDoctor: "Follow Dr. Faten",

            sendMessage: "Send a Message",
            formTitle: "How Can We Help?",
            formDescription:
                "Fill in the form below and Psycedu Clinic will get back to you as soon as possible.",

            fullName: "Full Name",
            contactRegarding: "I'm contacting regarding",
            chooseOption: "Choose an option",
            appointmentInquiry: "Appointment Inquiry",
            otherInquiry: "Other Inquiry",
            messageLabel: "Message",
            sendButton: "Send Message",
            privacyMessage:
                "Your information will be treated with care and confidentiality.",

            onlineAppointments: "Online Appointments",
            appointmentContactTitle: "Prefer to Meet Online?",
            appointmentContactText:
                "Request an online appointment with Dr. Faten from wherever you are.",

            footerDescription:
                "Psychological and educational support for people, learning, well-being and brighter tomorrows.",
            quickLinks: "Quick Links",
            contactUs: "Contact Us",
            bookOnline: "Book Online",
            rights: "All Rights Reserved.",
            privacy: "Privacy Policy",
            terms: "Terms"
        },

        ar: {
            navHome: "الرئيسية",
            navAbout: "عن د. فاتن",
            navServices: "الخدمات",
            navResources: "المصادر",
            navStories: "قصص",
            navContact: "تواصل معنا",

            service1: "الاستشارات النفسية",
            service2: "التقييم النفسي التربوي",
            service3: "التقارير النفسية التربوية",
            service4:
                "دعم صعوبات التعلم واضطراب فرط الحركة وتشتت الانتباه",
            service5: "الإرشاد الأسري وتنمية المهارات",

            shareTitle: "مشاركة هذه الصفحة",
            bookAppointment: "احجز موعدًا",

            contactHeroLabel: "تواصل مع عيادة Psycedu",
            contactHeroTitle:
                "نحن هنا <span>لنستمع وندعمك</span>",
            contactHeroDescription:
                "سواء كنت تبحث عن دعم نفسي أو إرشاد تربوي أو ترغب في طلب موعد عبر الإنترنت، يسعدنا أن تتواصل معنا.",

            getInTouch: "تواصل معنا",
            contactHeading: "تواصل مع <span>الدكتورة فاتن</span>",
            contactIntro:
                "تواصل مع عيادة Psycedu للحصول على الدعم النفسي والتربوي، أو للاستفسارات العامة وطلبات المواعيد.",

            phoneLabel: "رقم الهاتف",
            callClinic: "اتصل بعيادة Psycedu",
            emailLabel: "البريد الإلكتروني",
            emailClinic: "أرسل لنا بريدًا إلكترونيًا",
            locationLabel: "الموقع",
            location: "شتورا، لبنان",
            onlineAvailable: "المواعيد عبر الإنترنت متاحة",
            followDoctor: "تابع الدكتورة فاتن",

            sendMessage: "أرسل رسالة",
            formTitle: "كيف يمكننا مساعدتك؟",
            formDescription:
                "املأ النموذج أدناه وسيتواصل معك فريق عيادة Psycedu في أقرب وقت ممكن.",

            fullName: "الاسم الكامل",
            contactRegarding: "أتواصل بخصوص",
            chooseOption: "اختر أحد الخيارات",
            appointmentInquiry: "استفسار عن موعد",
            otherInquiry: "استفسار آخر",
            messageLabel: "الرسالة",
            sendButton: "إرسال الرسالة",
            privacyMessage:
                "سيتم التعامل مع معلوماتك بعناية وسرية.",

            onlineAppointments: "المواعيد عبر الإنترنت",
            appointmentContactTitle: "هل تفضل اللقاء عبر الإنترنت؟",
            appointmentContactText:
                "اطلب موعدًا عبر الإنترنت مع الدكتورة فاتن أينما كنت.",

            footerDescription:
                "دعم نفسي وتربوي للأفراد والتعلّم والرفاهية من أجل غدٍ أفضل.",
            quickLinks: "روابط سريعة",
            contactUs: "تواصل معنا",
            bookOnline: "احجز عبر الإنترنت",
            rights: "جميع الحقوق محفوظة.",
            privacy: "سياسة الخصوصية",
            terms: "الشروط"
        }
    };

    /* =====================================================
       EXTRA TRANSLATIONS
    ===================================================== */

    const extraTranslations = {
        en: {
            socialMedia: "Social Media",
            professionalProfile: "Professional Profile",
            facebook: "Facebook",
            instagram: "Instagram",
            linkedin: "LinkedIn",
            followFacebook: "Follow Dr. Faten on Facebook",
            followInstagram: "Follow Dr. Faten on Instagram",
            connectLinkedIn: "Connect with Dr. Faten on LinkedIn",
            fullNamePlaceholder: "Your full name",
            emailPlaceholder: "Your email address",
            phonePlaceholder: "+961",
            messagePlaceholder: "How can we help you?",
            copied: "Link copied!",
            menuOpen: "Open navigation",
            menuClose: "Close navigation",
            sharePage: "Share this page"
        },

        ar: {
            socialMedia: "وسائل التواصل الاجتماعي",
            professionalProfile: "الملف المهني",
            facebook: "فيسبوك",
            instagram: "إنستغرام",
            linkedin: "لينكدإن",
            followFacebook: "تابع الدكتورة فاتن على فيسبوك",
            followInstagram: "تابع الدكتورة فاتن على إنستغرام",
            connectLinkedIn: "تواصل مع الدكتورة فاتن على لينكدإن",
            fullNamePlaceholder: "أدخل اسمك الكامل",
            emailPlaceholder: "أدخل بريدك الإلكتروني",
            phonePlaceholder: "+961",
            messagePlaceholder: "كيف يمكننا مساعدتك؟",
            copied: "تم نسخ الرابط!",
            menuOpen: "فتح قائمة التنقل",
            menuClose: "إغلاق قائمة التنقل",
            sharePage: "مشاركة هذه الصفحة"
        }
    };

    /* =====================================================
       GET ELEMENTS
    ===================================================== */

    const languageButton =
        document.getElementById("languageButton");

    const mobileLanguageButton =
        document.querySelector(".mobile-language");

    const menuToggle =
        document.getElementById("menuToggle");

    const mainNav =
        document.getElementById("mainNav");

    const shareButton =
        document.getElementById("shareButton");

    const shareMenu =
        document.getElementById("shareMenu");

    const toast =
        document.getElementById("toast");

    const contactForm =
        document.getElementById("contactForm");

    const dropdown =
        document.querySelector(".nav-dropdown");

    const dropdownToggle =
        document.querySelector(".dropdown-toggle");

    /* =====================================================
       CURRENT LANGUAGE
       Supports both previously used storage keys.
    ===================================================== */

    let currentLanguage = "en";

    try {
        currentLanguage =
            localStorage.getItem("psyceduLanguage") ||
            localStorage.getItem("psycedu-language") ||
            "en";
    } catch (error) {
        currentLanguage = "en";
    }

    if (!translations[currentLanguage]) {
        currentLanguage = "en";
    }

    /* =====================================================
       LANGUAGE APPLICATION
    ===================================================== */

    function applyLanguage(language) {
        if (!translations[language]) {
            language = "en";
        }

        const dictionary = translations[language];
        const extra = extraTranslations[language];

        document.documentElement.lang = language;
        document.documentElement.dir =
            language === "ar" ? "rtl" : "ltr";

        document.body.dir =
            language === "ar" ? "rtl" : "ltr";

        /* Translate all data-i18n elements */
        document.querySelectorAll("[data-i18n]").forEach(element => {
            const key = element.dataset.i18n;

            if (!Object.prototype.hasOwnProperty.call(dictionary, key)) {
                return;
            }

            if (
                key === "contactHeroTitle" ||
                key === "contactHeading"
            ) {
                element.innerHTML = dictionary[key];
            } else {
                element.textContent = dictionary[key];
            }
        });

        /* Language button labels */
        document.querySelectorAll(".languageText").forEach(element => {
            element.textContent =
                language === "ar" ? "EN" : "عربي";
        });

        /* Form placeholders */
        const placeholders = {
            fullName: extra.fullNamePlaceholder,
            email: extra.emailPlaceholder,
            phone: extra.phonePlaceholder,
            message: extra.messagePlaceholder
        };

        Object.entries(placeholders).forEach(([id, placeholder]) => {
            const field = document.getElementById(id);

            if (field) {
                field.placeholder = placeholder;
            }
        });

        /* Social media cards */
        document.querySelectorAll(".social-info-card").forEach(card => {
            const icon = card.querySelector(".contact-info-icon i");
            const small = card.querySelector("small");
            const strong = card.querySelector("strong");
            const description = card.querySelector("span");

            if (!icon) return;

            if (icon.classList.contains("fa-facebook-f")) {
                if (small) small.textContent = extra.socialMedia;
                if (strong) strong.textContent = extra.facebook;
                if (description) {
                    description.textContent = extra.followFacebook;
                }
            }

            if (icon.classList.contains("fa-instagram")) {
                if (small) small.textContent = extra.socialMedia;
                if (strong) strong.textContent = extra.instagram;
                if (description) {
                    description.textContent = extra.followInstagram;
                }
            }

            if (icon.classList.contains("fa-linkedin-in")) {
                if (small) {
                    small.textContent = extra.professionalProfile;
                }
                if (strong) strong.textContent = extra.linkedin;
                if (description) {
                    description.textContent = extra.connectLinkedIn;
                }
            }
        });

        /* Accessible button labels */
        if (menuToggle) {
            const isOpen =
                mainNav?.classList.contains("active") || false;

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? extra.menuClose : extra.menuOpen
            );
        }

        if (shareButton) {
            shareButton.setAttribute("aria-label", extra.sharePage);
        }

        if (toast && !toast.classList.contains("show")) {
            toast.textContent = extra.copied;
        }

        /* Browser tab title */
        document.title = language === "ar"
            ? "تواصل معنا | الدكتورة فاتن سكافي - عيادة Psycedu"
            : "Contact | Dr. Faten Skafi - Psycedu Clinic";

        currentLanguage = language;

        try {
            localStorage.setItem("psyceduLanguage", language);
            localStorage.setItem("psycedu-language", language);
        } catch (error) {
            // Language switching still works if storage is unavailable.
        }
    }

    function toggleLanguage() {
        applyLanguage(currentLanguage === "en" ? "ar" : "en");
    }

    if (languageButton) {
        languageButton.addEventListener("click", toggleLanguage);
    }

    if (
        mobileLanguageButton &&
        mobileLanguageButton !== languageButton
    ) {
        mobileLanguageButton.addEventListener("click", toggleLanguage);
    }

    /* =====================================================
       RESPONSIVE NAVIGATION
    ===================================================== */

    function isMobileView() {
        return window.matchMedia("(max-width: 850px)").matches;
    }

    function closeMobileMenu() {
        if (mainNav) {
            mainNav.classList.remove("active");
        }

        if (dropdown) {
            dropdown.classList.remove("active");
        }

        if (dropdownToggle) {
            dropdownToggle.setAttribute("aria-expanded", "false");
        }

        if (menuToggle) {
            menuToggle.setAttribute("aria-expanded", "false");

            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

            menuToggle.setAttribute(
                "aria-label",
                extraTranslations[currentLanguage].menuOpen
            );
        }
    }

    function openMobileMenu() {
        if (!mainNav || !menuToggle) return;

        mainNav.classList.add("active");
        menuToggle.setAttribute("aria-expanded", "true");

        const icon = menuToggle.querySelector("i");

        if (icon) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        }

        menuToggle.setAttribute(
            "aria-label",
            extraTranslations[currentLanguage].menuClose
        );
    }

    if (menuToggle && mainNav) {
        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.addEventListener("click", event => {
            event.preventDefault();
            event.stopPropagation();

            const isOpen = mainNav.classList.contains("active");

            if (isOpen) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }

    /* Services dropdown on phones and tablets */
    if (dropdownToggle && dropdown) {
        dropdownToggle.setAttribute("aria-expanded", "false");

        dropdownToggle.addEventListener("click", event => {
            if (!isMobileView()) return;

            event.preventDefault();
            event.stopPropagation();

            const opening = !dropdown.classList.contains("active");

            dropdown.classList.toggle("active", opening);
            dropdownToggle.setAttribute(
                "aria-expanded",
                String(opening)
            );
        });
    }

    /* Close menu after a visitor selects a link */
    if (mainNav) {
        mainNav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                if (isMobileView()) {
                    closeMobileMenu();
                }
            });
        });
    }

    /* Close navigation when clicking outside */
    document.addEventListener("click", event => {
        if (
            isMobileView() &&
            mainNav &&
            menuToggle &&
            mainNav.classList.contains("active") &&
            !mainNav.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            closeMobileMenu();
        }
    });

    /* Escape key closes menus */
    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeMobileMenu();
            closeShareMenu();
        }
    });

    /* Reset mobile menu state when returning to desktop */
    window.addEventListener("resize", () => {
        if (!isMobileView()) {
            closeMobileMenu();
        }
    });

    /* =====================================================
       SHARE MENU
    ===================================================== */

    function closeShareMenu() {
        if (shareMenu) {
            shareMenu.classList.remove("active");
        }

        if (shareButton) {
            shareButton.setAttribute("aria-expanded", "false");
        }
    }

    if (shareButton && shareMenu) {
        shareButton.setAttribute("aria-expanded", "false");

        shareButton.addEventListener("click", event => {
            event.preventDefault();
            event.stopPropagation();

            const opening = !shareMenu.classList.contains("active");

            shareMenu.classList.toggle("active", opening);
            shareButton.setAttribute("aria-expanded", String(opening));
        });

        shareMenu.addEventListener("click", event => {
            event.stopPropagation();
        });

        document.addEventListener("click", event => {
            if (
                !shareMenu.contains(event.target) &&
                !shareButton.contains(event.target)
            ) {
                closeShareMenu();
            }
        });
    }

    /* =====================================================
       TOAST MESSAGE
    ===================================================== */

    let toastTimeout;

    function showToast(message) {
        if (!toast) return;

        toast.textContent =
            message || extraTranslations[currentLanguage].copied;

        toast.classList.add("show");

        window.clearTimeout(toastTimeout);

        toastTimeout = window.setTimeout(() => {
            toast.classList.remove("show");
        }, 2200);
    }

    /* =====================================================
       SHARE ACTIONS
    ===================================================== */

    async function copyPageLink(url) {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(url);
            } else {
                const input = document.createElement("textarea");

                input.value = url;
                input.setAttribute("readonly", "");
                input.style.position = "fixed";
                input.style.opacity = "0";

                document.body.appendChild(input);
                input.select();

                const copied = document.execCommand("copy");
                input.remove();

                if (!copied) {
                    throw new Error("Copy failed");
                }
            }

            showToast();
        } catch (error) {
            showToast(
                currentLanguage === "ar"
                    ? "تعذّر نسخ الرابط"
                    : "Could not copy link"
            );
        }
    }

    document.querySelectorAll("[data-share]").forEach(button => {
        button.addEventListener("click", async () => {
            const platform = button.dataset.share;
            const pageUrl = window.location.href;
            const pageTitle = document.title;

            let shareUrl = "";

            if (platform === "whatsapp") {
                shareUrl =
                    "https://wa.me/?text=" +
                    encodeURIComponent(pageTitle + " " + pageUrl);
            } else if (platform === "facebook") {
                shareUrl =
                    "https://www.facebook.com/sharer/sharer.php?u=" +
                    encodeURIComponent(pageUrl);
            } else if (platform === "linkedin") {
                shareUrl =
                    "https://www.linkedin.com/sharing/share-offsite/?url=" +
                    encodeURIComponent(pageUrl);
            } else if (platform === "copy") {
                await copyPageLink(pageUrl);
                closeShareMenu();
                return;
            }

            if (shareUrl) {
                window.open(
                    shareUrl,
                    "_blank",
                    "noopener,noreferrer,width=700,height=600"
                );
            }

            closeShareMenu();
        });
    });

    /* =====================================================
       CONTACT FORM - SEND THROUGH WHATSAPP
    ===================================================== */

    if (contactForm) {
        contactForm.addEventListener("submit", event => {
            event.preventDefault();

            const fullNameField = document.getElementById("fullName");
            const emailField = document.getElementById("email");
            const phoneField = document.getElementById("phone");
            const messageField = document.getElementById("message");
            const subjectField = document.getElementById("subject");

            if (
                !fullNameField ||
                !emailField ||
                !messageField ||
                !subjectField
            ) {
                console.error(
                    "Contact form is missing one or more required fields."
                );
                return;
            }

            const whatsappNumber = "96171009259";

            const fullName = fullNameField.value.trim();
            const email = emailField.value.trim();
            const phone = phoneField ? phoneField.value.trim() : "";
            const message = messageField.value.trim();

            const selectedSubject =
                subjectField.options[subjectField.selectedIndex]?.text.trim()
                || "";

            const isArabic = currentLanguage === "ar";

            const whatsappMessage = isArabic
                ? `مرحبًا د. فاتن، لدي رسالة من خلال موقع Psycedu Clinic.

الاسم: ${fullName}
البريد الإلكتروني: ${email}
رقم الهاتف: ${phone || "غير مذكور"}
الموضوع: ${selectedSubject}

الرسالة:
${message}`
                : `Hello Dr. Faten, I am contacting you through the Psycedu Clinic website.

Full Name: ${fullName}
Email: ${email}
Phone Number: ${phone || "Not provided"}
Regarding: ${selectedSubject}

Message:
${message}`;

            const whatsappUrl =
                `https://wa.me/${whatsappNumber}?text=` +
                encodeURIComponent(whatsappMessage);

            const whatsappWindow = window.open(
                whatsappUrl,
                "_blank",
                "noopener,noreferrer"
            );

            if (!whatsappWindow) {
                window.location.href = whatsappUrl;
            }
        });
    }

    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const currentYearElement =
        document.getElementById("currentYear");

    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    /* =====================================================
       RESPONSIVE CSS SUPPORT
       The existing style.css still controls the full design.
    ===================================================== */

    const responsiveStyle = document.createElement("style");

    responsiveStyle.textContent = `
        @media (max-width: 850px) {
            .site-header .header-container {
                position: relative;
            }

            .site-header .menu-toggle {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                flex-shrink: 0;
            }

            .site-header .main-nav {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                width: 100%;
                max-width: 100%;
                max-height: calc(100dvh - 90px);
                overflow-y: auto;
                overscroll-behavior: contain;
                box-sizing: border-box;
                padding: 16px 20px 24px;
                background: #fff;
                box-shadow: 0 14px 30px rgba(0, 0, 0, .13);
                flex-direction: column;
                align-items: stretch;
                gap: 0;
                z-index: 9999;
            }

            .site-header .main-nav.active {
                display: flex;
            }

            .site-header .main-nav > a,
            .site-header .main-nav .dropdown-toggle {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                min-height: 44px;
                box-sizing: border-box;
                padding: 12px 4px;
                text-align: start;
                white-space: normal;
            }

            .site-header .nav-dropdown {
                width: 100%;
            }

            .site-header .dropdown-menu {
                display: none;
                position: static;
                inset: auto;
                width: 100%;
                max-width: 100%;
                box-sizing: border-box;
                box-shadow: none;
                transform: none;
            }

            .site-header .nav-dropdown.active .dropdown-menu {
                display: block;
            }

            .site-header .dropdown-menu a {
                display: block;
                width: 100%;
                box-sizing: border-box;
                padding: 11px 14px;
                white-space: normal;
                overflow-wrap: anywhere;
            }

            .site-header .mobile-nav-actions {
                display: flex;
                flex-direction: column;
                align-items: stretch;
                gap: 12px;
                padding-top: 16px;
                margin-top: 10px;
            }

            .site-header .mobile-nav-actions > * {
                width: 100%;
                max-width: 100%;
                box-sizing: border-box;
                justify-content: center;
            }

            .site-header .header-actions {
                display: none;
            }

            html[dir="rtl"] .site-header .main-nav {
                text-align: right;
            }

            /* Prevent long words and form controls from overflowing */
            .contact-info-card,
            .social-info-card,
            .contact-form,
            .contact-form-section {
                min-width: 0;
                max-width: 100%;
                box-sizing: border-box;
            }

            .contact-form input,
            .contact-form select,
            .contact-form textarea,
            #contactForm input,
            #contactForm select,
            #contactForm textarea {
                width: 100%;
                max-width: 100%;
                min-width: 0;
                box-sizing: border-box;
            }

            .contact-form textarea,
            #contactForm textarea {
                resize: vertical;
            }

            img,
            video,
            iframe {
                max-width: 100%;
            }
        }

        @media (max-width: 480px) {
            .site-header .main-nav {
                padding: 12px 16px 20px;
            }

            .site-header .main-nav > a,
            .site-header .main-nav .dropdown-toggle {
                font-size: 15px;
            }

            #contactForm button,
            #contactForm input[type="submit"],
            .contact-form button {
                max-width: 100%;
                box-sizing: border-box;
            }
        }

        @media (min-width: 851px) {
            .site-header .mobile-nav-actions {
                display: none;
            }
        }
    `;

    document.head.appendChild(responsiveStyle);

    /* =====================================================
       INITIALIZE LANGUAGE
    ===================================================== */

    applyLanguage(currentLanguage);
});
