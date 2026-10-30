
/* =========================================================
   SERVICES PAGE JAVASCRIPT
   Faten Skafi Psycedu Clinic
   Translation + responsive navigation + share menu

   Use this file instead of main.js on services.html.
========================================================= */

(() => {
    "use strict";

    const $ = (selector, root = document) =>
        root.querySelector(selector);

    const $$ = (selector, root = document) =>
        [...root.querySelectorAll(selector)];

    const menuToggle = $("#menuToggle");
    const mainNav = $("#mainNav");
    const dropdown = $(".nav-dropdown");
    const dropdownToggle = $(".dropdown-toggle");
    const shareButton = $("#shareButton");
    const shareMenu = $("#shareMenu");
    const languageButtons = $$(".language-btn");
    const languageTexts = $$(".languageText");
    const toast = $("#toast");
    const currentYear = $("#currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    /* =====================================================
       ENGLISH AND ARABIC TRANSLATIONS
    ===================================================== */

    const translations = {
        en: {
            navHome: "Home",
            navAbout: "About Dr. Faten",
            navServices: "Services",
            navStories: "Stories",
            navResources: "Resources",
            navContact: "Contact",
            bookAppointment: "Book Appointment",
            shareTitle: "Share this page",

            service1: "Psychological Counseling",
            service2: "Psychoeducational Assessment",
            service3: "Psychoeducational Reports",
            service4: "Learning Difficulties & ADHD",
            service5: "Family Guidance & Skills Development",

            servicesLabel: "HOW WE CAN HELP",
            servicesPageTitle:
                'Support for Every <span>Journey.</span>',
            servicesPageDescription:
                "Every person has a unique story, and every journey deserves thoughtful support. Discover our psychological and educational services designed to nurture well-being, learning, confidence and growth.",
            exploreAllServices: "Explore Our Services",
            personalizedSupport:
                "Personalized care. Meaningful progress.",

            ourExpertise: "OUR EXPERTISE",
            servicesCollectionTitle:
                'Find the Support <span>That Fits You.</span>',
            servicesCollectionDescription:
                "Explore our five areas of support and discover the approach that best meets your needs.",

            supportiveCare: "Supportive Care",
            psychologicalWellbeing: "PSYCHOLOGICAL WELL-BEING",
            service1Description:
                "Emotional and psychological support for individuals of all ages in a safe and understanding environment.",
            discoverService: "Discover this service",

            individualUnderstanding: "Individual Understanding",
            assessmentCategory: "ASSESSMENT & UNDERSTANDING",
            service2Description:
                "Comprehensive evaluation of cognitive, academic, emotional and behavioral needs.",

            professionalDocumentation: "Professional Documentation",
            educationalDocumentation: "EDUCATIONAL DOCUMENTATION",
            service3Description:
                "Professional reports prepared for school, educational and academic purposes.",

            learningSupport: "Learning Support",
            learningDevelopment: "LEARNING & DEVELOPMENT",
            service4Description:
                "Assessment and targeted interventions for learning difficulties, ADHD and behavioral challenges.",

            growthTogether: "Growing Together",
            familyDevelopment: "FAMILY & PERSONAL DEVELOPMENT",
            service5Description:
                "Parental support, stronger family relationships, and development of life and social skills.",

            ourApproach: "OUR APPROACH",
            approachTitle:
                'Your Needs. <span>Your Journey.</span>',
            approachDescription:
                "The right support starts with understanding you. We focus on individual needs, thoughtful guidance and practical steps toward meaningful progress.",
            meetDrFaten: "Meet Dr. Faten Skafi",

            approachStep1Title: "Understand",
            approachStep1Text:
                "Explore your needs, concerns and goals.",

            approachStep2Title: "Find Direction",
            approachStep2Text:
                "Identify suitable guidance and next steps.",

            approachStep3Title: "Grow",
            approachStep3Text:
                "Build skills and move forward at your own pace.",

            footerDescription:
                "Psychological and educational support for people, learning, well-being and brighter tomorrows.",
            quickLinks: "Quick Links",
            contactUs: "Contact Us",
            location: "Chtoura, Lebanon",
            bookOnline: "Book Online",
            rights: "All Rights Reserved.",
            privacy: "Privacy Policy",
            terms: "Terms"
        },

        ar: {
            navHome: "الرئيسية",
            navAbout: "عن د. فاتن",
            navServices: "الخدمات",
            navStories: "قصص",
            navResources: "المصادر",
            navContact: "تواصل معنا",
            bookAppointment: "احجز موعداً",
            shareTitle: "مشاركة الصفحة",

            service1: "الاستشارات النفسية",
            service2: "التقييم النفسي التربوي",
            service3: "التقارير النفسية التربوية",
            service4:
                "صعوبات التعلّم واضطراب فرط الحركة وتشتّت الانتباه",
            service5: "الإرشاد الأسري وتنمية المهارات",

            servicesLabel: "كيف يمكننا مساعدتك",
            servicesPageTitle:
                'دعم لكل <span>رحلة.</span>',
            servicesPageDescription:
                "لكل شخص قصته الفريدة، ولكل رحلة حقّ في الحصول على الدعم المناسب. اكتشف خدماتنا النفسية والتربوية المصممة لتعزيز الرفاه النفسي والتعلّم والثقة والنمو.",
            exploreAllServices: "اكتشف خدماتنا",
            personalizedSupport: "رعاية مخصصة. وتقدّم ملموس.",

            ourExpertise: "مجالات خبرتنا",
            servicesCollectionTitle:
                'اكتشف الدعم <span>الذي يناسبك.</span>',
            servicesCollectionDescription:
                "تعرّف على مجالات الدعم الخمسة لدينا واكتشف النهج الأنسب لاحتياجاتك.",

            supportiveCare: "رعاية داعمة",
            psychologicalWellbeing: "الرفاه النفسي",
            service1Description:
                "دعم نفسي وعاطفي للأفراد من جميع الأعمار ضمن بيئة آمنة ومتفهّمة.",
            discoverService: "اكتشف هذه الخدمة",

            individualUnderstanding: "فهم الاحتياجات الفردية",
            assessmentCategory: "التقييم والفهم",
            service2Description:
                "تقييم شامل للاحتياجات المعرفية والأكاديمية والعاطفية والسلوكية.",

            professionalDocumentation: "توثيق مهني",
            educationalDocumentation: "التوثيق التربوي",
            service3Description:
                "إعداد تقارير مهنية للأغراض المدرسية والتربوية والأكاديمية.",

            learningSupport: "دعم التعلّم",
            learningDevelopment: "التعلّم والنمو",
            service4Description:
                "تقييم وتدخلات موجهة لدعم صعوبات التعلّم واضطراب فرط الحركة وتشتّت الانتباه والتحديات السلوكية.",

            growthTogether: "ننمو معاً",
            familyDevelopment: "النمو الأسري والشخصي",
            service5Description:
                "دعم الوالدين وتعزيز العلاقات الأسرية وتنمية المهارات الحياتية والاجتماعية.",

            ourApproach: "نهجنا",
            approachTitle:
                'احتياجاتك. <span>رحلتك.</span>',
            approachDescription:
                "يبدأ الدعم المناسب بفهمك وفهم احتياجاتك. نركّز على الاحتياجات الفردية والإرشاد المدروس والخطوات العملية نحو تقدّم ملموس.",
            meetDrFaten: "تعرّف على د. فاتن سكافي",

            approachStep1Title: "نفهم",
            approachStep1Text:
                "نتعرّف على احتياجاتك ومخاوفك وأهدافك.",

            approachStep2Title: "نحدّد الاتجاه",
            approachStep2Text:
                "نحدّد الإرشاد المناسب والخطوات التالية.",

            approachStep3Title: "ننمو",
            approachStep3Text:
                "نطوّر المهارات ونتقدّم وفق وتيرتك الخاصة.",

            footerDescription:
                "دعم نفسي وتربوي للإنسان والتعلّم والرفاه النفسي نحو غدٍ أكثر إشراقاً.",
            quickLinks: "روابط سريعة",
            contactUs: "تواصل معنا",
            location: "شتورة، لبنان",
            bookOnline: "احجز عبر الإنترنت",
            rights: "جميع الحقوق محفوظة.",
            privacy: "سياسة الخصوصية",
            terms: "الشروط والأحكام"
        }
    };

    /* =====================================================
       LANGUAGE MANAGEMENT
    ===================================================== */

    let currentLanguage = "en";

    try {
        currentLanguage =
            localStorage.getItem("psycedu-language") || "en";
    } catch (error) {
        currentLanguage = "en";
    }

    if (!translations[currentLanguage]) {
        currentLanguage = "en";
    }

    function setLanguage(language) {
        if (!translations[language]) {
            language = "en";
        }

        currentLanguage = language;

        const html = document.documentElement;

        html.lang = language;
        html.dir = language === "ar" ? "rtl" : "ltr";
        document.body.dir = html.dir;

        $$("[data-i18n]").forEach((element) => {
            const key = element.dataset.i18n;

            if (
                Object.prototype.hasOwnProperty.call(
                    translations[language],
                    key
                )
            ) {
                element.innerHTML = translations[language][key];
            }
        });

        languageTexts.forEach((element) => {
            element.textContent =
                language === "en" ? "عربي" : "EN";
        });

        languageButtons.forEach((button) => {
            button.setAttribute(
                "aria-label",
                language === "ar"
                    ? "Switch to English"
                    : "التبديل إلى العربية"
            );

            button.setAttribute(
                "title",
                language === "ar" ? "English" : "العربية"
            );
        });

        if (menuToggle) {
            menuToggle.setAttribute(
                "aria-label",
                language === "ar"
                    ? "فتح القائمة"
                    : "Open navigation"
            );
        }

        try {
            localStorage.setItem("psycedu-language", language);
        } catch (error) {
            // The language switch still works without localStorage.
        }
    }

    /* =====================================================
       MOBILE AND TABLET NAVIGATION
    ===================================================== */

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

            menuToggle.setAttribute(
                "aria-label",
                currentLanguage === "ar"
                    ? "فتح القائمة"
                    : "Open navigation"
            );

            menuToggle.innerHTML =
                '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
        }
    }

    if (menuToggle && mainNav) {
        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.addEventListener("click", () => {
            const opening = !mainNav.classList.contains("active");

            mainNav.classList.toggle("active", opening);

            menuToggle.setAttribute(
                "aria-expanded",
                String(opening)
            );

            menuToggle.setAttribute(
                "aria-label",
                opening
                    ? (
                        currentLanguage === "ar"
                            ? "إغلاق القائمة"
                            : "Close navigation"
                    )
                    : (
                        currentLanguage === "ar"
                            ? "فتح القائمة"
                            : "Open navigation"
                    )
            );

            menuToggle.innerHTML = opening
                ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>'
                : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
        });
    }

    /* Services dropdown on phones and tablets */
    if (dropdownToggle && dropdown) {
        dropdownToggle.setAttribute("aria-expanded", "false");

        dropdownToggle.addEventListener("click", (event) => {
            if (window.matchMedia("(max-width: 850px)").matches) {
                event.preventDefault();

                const opening = !dropdown.classList.contains("active");

                dropdown.classList.toggle("active", opening);

                dropdownToggle.setAttribute(
                    "aria-expanded",
                    String(opening)
                );
            }
        });
    }

    /* Close the mobile menu after selecting a navigation link */
    $$(".main-nav a").forEach((link) => {
        link.addEventListener("click", () => {
            if (
                window.matchMedia("(max-width: 850px)").matches
            ) {
                closeMobileMenu();
            }
        });
    });

    /* Close menus with Escape */
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMobileMenu();

            if (shareMenu) {
                shareMenu.classList.remove("active");
            }

            if (shareButton) {
                shareButton.setAttribute("aria-expanded", "false");
            }
        }
    });

    /* =====================================================
       LANGUAGE SWITCH BUTTONS
    ===================================================== */

    languageButtons.forEach((button) => {
        button.addEventListener("click", () => {
            setLanguage(
                currentLanguage === "en" ? "ar" : "en"
            );
        });
    });

    /* =====================================================
       SHARE MENU
    ===================================================== */

    function showToast(message) {
        if (!toast) return;

        toast.textContent = message;
        toast.classList.add("show");

        window.setTimeout(() => {
            toast.classList.remove("show");
        }, 2200);
    }

    if (shareButton && shareMenu) {
        shareButton.setAttribute("aria-expanded", "false");

        shareButton.addEventListener("click", (event) => {
            event.stopPropagation();

            const opening = !shareMenu.classList.contains("active");

            shareMenu.classList.toggle("active", opening);

            shareButton.setAttribute(
                "aria-expanded",
                String(opening)
            );
        });

        document.addEventListener("click", (event) => {
            if (
                !shareMenu.contains(event.target) &&
                !shareButton.contains(event.target)
            ) {
                shareMenu.classList.remove("active");

                shareButton.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }
        });
    }

    $$("[data-share]").forEach((button) => {
        button.addEventListener("click", async () => {
            const pageURL = window.location.href;
            const pageTitle = document.title;
            const type = button.dataset.share;

            let shareURL = "";

            if (type === "whatsapp") {
                shareURL =
                    "https://wa.me/?text=" +
                    encodeURIComponent(pageTitle + " " + pageURL);

            } else if (type === "facebook") {
                shareURL =
                    "https://www.facebook.com/sharer/sharer.php?u=" +
                    encodeURIComponent(pageURL);

            } else if (type === "linkedin") {
                shareURL =
                    "https://www.linkedin.com/sharing/share-offsite/?url=" +
                    encodeURIComponent(pageURL);

            } else if (type === "copy") {
                try {
                    if (
                        navigator.clipboard &&
                        window.isSecureContext
                    ) {
                        await navigator.clipboard.writeText(pageURL);
                    } else {
                        const temporaryInput =
                            document.createElement("textarea");

                        temporaryInput.value = pageURL;
                        temporaryInput.style.position = "fixed";
                        temporaryInput.style.opacity = "0";

                        document.body.appendChild(temporaryInput);
                        temporaryInput.select();

                        const copied =
                            document.execCommand("copy");

                        temporaryInput.remove();

                        if (!copied) {
                            throw new Error("Copy command failed");
                        }
                    }

                    showToast(
                        currentLanguage === "ar"
                            ? "تم نسخ الرابط"
                            : "Link copied!"
                    );

                } catch (error) {
                    showToast(
                        currentLanguage === "ar"
                            ? "تعذّر نسخ الرابط"
                            : "Could not copy link"
                    );
                }

                if (shareMenu) {
                    shareMenu.classList.remove("active");
                }

                if (shareButton) {
                    shareButton.setAttribute("aria-expanded", "false");
                }

                return;
            }

            if (shareURL) {
                window.open(
                    shareURL,
                    "_blank",
                    "noopener,noreferrer"
                );
            }

            if (shareMenu) {
                shareMenu.classList.remove("active");
            }

            if (shareButton) {
                shareButton.setAttribute("aria-expanded", "false");
            }
        });
    });

    /* =====================================================
       RESPONSIVE NAVIGATION FALLBACK CSS

       Ensures the navigation appears inside a dropdown menu
       on phones and tablets, even if style.css needs updating.
    ===================================================== */

    const responsiveNavStyle = document.createElement("style");

    responsiveNavStyle.textContent = `
        @media (max-width: 850px) {
            .site-header .header-container {
                position: relative;
            }

            .site-header .menu-toggle {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            }

            .site-header .main-nav {
                display: none;
                position: absolute;
                top: 100%;
                inset-inline: 0;
                z-index: 1000;
                width: 100%;
                max-height: calc(100vh - 90px);
                overflow-y: auto;
                padding: 18px 22px 22px;
                background: #fff;
                box-shadow: 0 18px 35px rgba(15, 42, 67, .16);
                flex-direction: column;
                align-items: stretch;
                gap: 0;
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
                padding: 13px 4px;
                text-align: start;
            }

            .site-header .nav-dropdown {
                width: 100%;
            }

            .site-header .dropdown-menu {
                display: none;
                position: static;
                width: 100%;
                box-shadow: none;
            }

            .site-header .nav-dropdown.active .dropdown-menu {
                display: block;
            }

            .site-header .mobile-nav-actions {
                display: flex;
                flex-direction: column;
                align-items: stretch;
                gap: 12px;
                padding-top: 14px;
            }

            .site-header .mobile-nav-actions .language-btn,
            .site-header .mobile-nav-actions .appointment-btn {
                width: 100%;
                justify-content: center;
            }

            .site-header .header-actions {
                display: none;
            }
        }

        @media (min-width: 851px) {
            .site-header .mobile-nav-actions {
                display: none;
            }
        }
    `;

    document.head.appendChild(responsiveNavStyle);

    /* =====================================================
       INITIALIZE PAGE
    ===================================================== */

    setLanguage(currentLanguage);

})();
