/* =========================================================
   ABOUT PAGE SCRIPT  (aboutmain.js)
   - Mobile navbar + services dropdown
   - Share menu + toast
   - English / Arabic translation (header, footer, about content)
   Language is shared with the home page through localStorage
   key "psycedu-language".
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");
    const dropdown = document.querySelector(".nav-dropdown");
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const shareButton = document.getElementById("shareButton");
    const shareMenu = document.getElementById("shareMenu");
    const languageButtons = document.querySelectorAll(".language-btn");
    const languageTexts = document.querySelectorAll(".languageText");
    const toast = document.getElementById("toast");

    const MOBILE_BREAKPOINT = 850;


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    function setYear() {
        const year = document.getElementById("currentYear");
        if (year) {
            year.textContent = new Date().getFullYear();
        }
    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    function openMenu() {
        mainNav.classList.add("active");
        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }

    function closeMenu() {
        mainNav.classList.remove("active");
        if (dropdown) {
            dropdown.classList.remove("active");
        }
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function (event) {

            event.stopPropagation();

            if (mainNav.classList.contains("active")) {
                closeMenu();
            } else {
                openMenu();
            }

        });

        /* Close menu when tapping a normal link */
        mainNav.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {
                if (window.innerWidth <= MOBILE_BREAKPOINT) {
                    closeMenu();
                }
            });

        });

        /* Close menu when tapping outside of it */
        document.addEventListener("click", function (event) {

            if (
                window.innerWidth <= MOBILE_BREAKPOINT &&
                mainNav.classList.contains("active") &&
                !mainNav.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {
                closeMenu();
            }

        });

    }


    /* =====================================================
       MOBILE SERVICES DROPDOWN
    ===================================================== */

    if (dropdownToggle && dropdown) {

        dropdownToggle.addEventListener("click", function (event) {

            if (window.innerWidth <= MOBILE_BREAKPOINT) {
                event.preventDefault();
                event.stopPropagation();
                dropdown.classList.toggle("active");
            }

        });

    }


    /* =====================================================
       SHARE MENU
    ===================================================== */

    if (shareButton && shareMenu) {

        shareButton.addEventListener("click", function (event) {

            event.stopPropagation();

            shareMenu.classList.toggle("active");

            shareButton.setAttribute(
                "aria-expanded",
                shareMenu.classList.contains("active")
            );

        });

        document.addEventListener("click", function (event) {

            if (
                !shareMenu.contains(event.target) &&
                !shareButton.contains(event.target)
            ) {
                shareMenu.classList.remove("active");
                shareButton.setAttribute("aria-expanded", "false");
            }

        });

    }


    /* =====================================================
       TOAST
    ===================================================== */

    function showToast(message) {

        if (!toast) {
            return;
        }

        toast.textContent = message;
        toast.classList.add("show");

        setTimeout(function () {
            toast.classList.remove("show");
        }, 2200);

    }


    /* =====================================================
       SHARE OPTIONS
    ===================================================== */

    document.querySelectorAll("[data-share]").forEach(function (button) {

        button.addEventListener("click", async function () {

            const type = button.dataset.share;
            const pageURL = window.location.href;
            const pageTitle = document.title;

            let shareURL = "";

            if (type === "whatsapp") {
                shareURL =
                    "https://wa.me/?text=" +
                    encodeURIComponent(pageTitle + " " + pageURL);
            }

            if (type === "facebook") {
                shareURL =
                    "https://www.facebook.com/sharer/sharer.php?u=" +
                    encodeURIComponent(pageURL);
            }

            if (type === "linkedin") {
                shareURL =
                    "https://www.linkedin.com/sharing/share-offsite/?url=" +
                    encodeURIComponent(pageURL);
            }

            if (type === "copy") {

                try {
                    await navigator.clipboard.writeText(pageURL);
                    showToast(
                        currentLanguage === "ar"
                            ? "تم نسخ الرابط"
                            : "Link copied!"
                    );
                } catch (error) {
                    console.error("Unable to copy link.", error);
                }

                shareMenu.classList.remove("active");
                return;

            }

            if (shareURL) {
                window.open(shareURL, "_blank", "noopener,noreferrer");
            }

            shareMenu.classList.remove("active");

        });

    });


    /* =====================================================
       TRANSLATIONS — HEADER / FOOTER (data-i18n)
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
            service4: "دعم صعوبات التعلم واضطراب فرط الحركة وتشتت الانتباه",
            service5: "الإرشاد الأسري وتنمية المهارات",

            footerDescription:
                "دعم نفسي وتربوي للإنسان والتعلّم والرفاه النفسي وغدٍ أكثر إشراقاً.",
            quickLinks: "روابط سريعة",
            contactUs: "تواصل معنا",
            location: "شتورة، لبنان",
            bookOnline: "احجز أونلاين",
            rights: "جميع الحقوق محفوظة.",
            privacy: "سياسة الخصوصية",
            terms: "الشروط"
        }

    };


    /* =====================================================
       TRANSLATIONS — ABOUT PAGE CONTENT
       Each entry: [CSS selector, [Arabic text for each match,
       in the same order they appear in the page]].
       No changes to about.html are needed.
    ===================================================== */

    const aboutArabic = [

        /* ---------- HERO ---------- */

        [".about-eyebrow p", [
            "تعرّف على صاحبة رؤية Psycedu"
        ]],

        [".about-hero-content h1", [
            'د. فاتن <span>سكافي</span>'
        ]],

        [".about-hero-content h2", [
            "دكتوراه في علم النفس"
        ]],

        [".about-professional-title", [
            'علم النفس العيادي والتربوي <span>•</span> التعليم العالي <span>•</span> البحث العلمي'
        ]],

        [".about-hero-description", [
            "تجمع بين علم النفس والتربية والبحث العلمي والممارسة المهنية الإنسانية لدعم التعلّم والصحة النفسية والنمو الإنساني."
        ]],

        [".about-hero-buttons .primary-btn span", [
            "احجز موعداً"
        ]],

        [".about-outline-btn", [
            'اكتشف مسيرتها <i class="fa-solid fa-arrow-down"></i>'
        ]],

        [".about-mini-details span", [
            "لبنان · البقاع / بيروت",
            "علم النفس · التربية · البحث العلمي"
        ]],

        [".about-floating-card.experience strong", [
            "+20"
        ]],

        [".about-floating-card.experience span", [
            "سنة من<br>الخبرة"
        ]],

        [".about-floating-card.phd small", [
            "الدرجة الأكاديمية"
        ]],

        [".about-floating-card.phd strong", [
            "دكتوراه في علم النفس"
        ]],


        /* ---------- STORY ---------- */

        [".about-story-heading .about-section-label", [
            "قصتها"
        ]],

        [".about-story-heading h2", [
            'حيث يلتقي علم النفس والتربية <span>والتنمية البشرية</span>.'
        ]],

        [".story-lead", [
            "على مدى أكثر من عقدين، تشكّلت مسيرة د. فاتن سكافي المهنية حول هدف واحد: مساعدة الناس على التعلّم والنمو وتحقيق قدر أكبر من الرفاه النفسي."
        ]],

        [".about-story-content > p:not(.story-lead)", [
            "بصفتها أستاذة مساعدة واختصاصية في علم النفس التربوي، يربط عملها بين علم النفس العيادي وعلم النفس التربوي والصحة النفسية والبحث العلمي وتنمية الطلاب والتدريب المهني.",
            "تمتد خبرتها عبر الجامعات والممارسة النفسية والنفسية التربوية، والقيادة المدرسية، وتطوير المناهج، والإشراف على الأبحاث، والصحة النفسية المجتمعية، والعمل مع الأطفال والمراهقين والأسر."
        ]],

        [".story-quote p", [
            "فهم الإنسان هو الخطوة الأولى نحو تعلّم هادف ونمو أكثر صحة وتغيير يدوم."
        ]],


        /* ---------- HIGHLIGHTS ---------- */

        [".highlight-number", [
            "+20"
        ]],

        [".profile-highlight h3", [
            "سنة",
            "التعليم العالي",
            "علم النفس",
            "البحث العلمي"
        ]],

        [".profile-highlight p", [
            "في علم النفس والتربية والبحث والتدريب",
            "تدريس جامعي لمرحلتي الإجازة والدراسات العليا",
            "ممارسة عيادية وتربوية ونفسية تربوية",
            "بحوث إقليمية وتطبيقية متعددة التخصصات"
        ]],


        /* ---------- EXPERTISE ---------- */

        [".expertise-section .about-section-label", [
            "مجالات الخبرة"
        ]],

        [".expertise-section .about-section-heading h2", [
            'معرفة تربط <span>الناس بالتعلّم</span>'
        ]],

        [".expertise-section .about-section-heading > p", [
            "تجمع خلفية د. فاتن متعددة التخصصات بين العلوم النفسية والممارسة التربوية والصحة النفسية والتنمية البشرية."
        ]],

        [".expertise-card h3", [
            "علم النفس العيادي",
            "علم النفس التربوي",
            "الصحة النفسية",
            "التقييم النفسي",
            "نمو الأطفال والمراهقين",
            "التعلّم والانتباه",
            "نمو الطفولة المبكرة",
            "دعم الأسرة والمربّين"
        ]],

        [".expertise-card p", [
            "فهم الاحتياجات النفسية والصحة النفسية والممارسة النفسية التطبيقية.",
            "الربط بين التعلّم والنمو والسلوك والرفاه النفسي.",
            "الصحة النفسية والرفاه النفسي الاجتماعي في البيئات التربوية والمجتمعية.",
            "التقييم المعرفي والسلوكي والانفعالي والتربوي.",
            "دعم الاحتياجات النفسية والتربوية والنمائية في مختلف مراحل النمو.",
            "دعم فردي لصعوبات التعلّم والسلوك والانتباه.",
            "بحث وممارسة تركّز على النمو والتعليم ورفاه الطفل.",
            "إرشاد وتدريب يعززان البيئات الداعمة المحيطة بالأطفال."
        ]],


        /* ---------- JOURNEY ---------- */

        [".journey-section .about-section-label", [
            "المسيرة المهنية"
        ]],

        [".journey-section .about-section-heading h2", [
            'خبرة عبر <span>التربية وعلم النفس</span>'
        ]],

        [".journey-section .about-section-heading > p", [
            "مسيرة تجمع بين التعليم الجامعي والممارسة النفسية والبحث والقيادة المدرسية والصحة النفسية المجتمعية."
        ]],

        [".journey-category", [
            "التعليم العالي",
            "القيادة الأكاديمية",
            "البحث العلمي",
            "الممارسة النفسية",
            "القيادة المدرسية",
            "التعليم"
        ]],

        [".journey-card h3", [
            "مدرّسة علم النفس العيادي ومشرفة على أبحاث الماجستير",
            "أستاذة مساعدة",
            "باحثة مشاركة",
            "اختصاصية في علم النفس التربوي",
            "مديرة واختصاصية في علم النفس التربوي",
            "معلمة ومنسّقة ومدرّبة"
        ]],

        [".journey-card h4", [
            "الجامعة اللبنانية",
            "جامعة بيروت العربية",
            "الشبكة العربية للطفولة المبكرة",
            "عيادة نفسية خاصة · البقاع الغربي",
            "مدرسة الأخوّة الوطنية",
            "مركز عمر المختار التربوي"
        ]],

        [".journey-card p", [
            "تدريس علم النفس العيادي والإشراف على أبحاث ورسائل الماجستير، بما في ذلك تصميم البحث والمنهجية والتحليل والكتابة الأكاديمية.",
            "تدريس مقررات في علم النفس والصحة النفسية والعلوم الاجتماعية ومجالات ذات صلة لمرحلتي الإجازة والدراسات العليا، مع دعم تطوير المقررات وإرشاد الطلاب.",
            "المساهمة في أبحاث إقليمية ومتعددة الدول حول نمو الطفولة المبكرة والتعليم والصحة النفسية والنوع الاجتماعي والرفاه النفسي الاجتماعي.",
            "الإرشاد النفسي والتدخلات النفسية التربوية والتقييمات والدعم الفردي للأطفال والمراهقين والأسر.",
            "قيادة الإدارة المدرسية وتطوير المعلمين وتحسين المناهج واعتماد استراتيجيات تدعم احتياجات التعلّم والسلوك المتنوعة.",
            "التدريس والتنسيق التربوي وتطوير المناهج وبرامج التطوير المهني للمعلمين."
        ]],


        /* ---------- EDUCATION ---------- */

        [".education-intro .about-section-label", [
            "الأساس الأكاديمي"
        ]],

        [".education-intro h2", [
            'تعليم قائم على <span>علم النفس</span>'
        ]],

        [".education-intro > p", [
            "يعكس مسار د. فاتن الأكاديمي تخصصاً متواصلاً في علم النفس وعلم النفس التربوي."
        ]],

        [".degree-level", [
            "دكتوراه",
            "ماجستير",
            "إجازة"
        ]],

        [".degree-card h3", [
            "دكتوراه في علم النفس",
            "ماجستير في علم النفس التربوي",
            "إجازة في علم النفس التربوي"
        ]],

        [".degree-card p", [
            "الجامعة اللبنانية",
            "الجامعة اللبنانية",
            "الجامعة اللبنانية"
        ]],


        /* ---------- RESEARCH ---------- */

        [".research-profile-section .about-section-label", [
            "البحث والعمل الأكاديمي"
        ]],

        [".research-profile-section .about-section-heading h2", [
            'تحويل المعرفة إلى <span>أثر ملموس</span>'
        ]],

        [".research-profile-section .about-section-heading > p", [
            "تقع اهتماماتها البحثية عند تقاطع علم النفس والتربية والصحة النفسية والنمو والسياق الاجتماعي."
        ]],

        [".research-feature > span", [
            "محور البحث"
        ]],

        [".research-feature h3", [
            "علم النفس والتربية من منظور إنساني ونمائي وثقافي."
        ]],

        [".research-feature p", [
            "يشمل عملها البحوث النوعية والكمية، والتعاون الإقليمي، والإشراف على الأبحاث، والكتابة الأكاديمية، وتقديم توصيات مبنية على الأدلة."
        ]],

        [".research-topic p", [
            "علم النفس العيادي والتربوي",
            "الصحة النفسية والرفاه النفسي الاجتماعي",
            "نمو الطفولة المبكرة",
            "التعليم في الأزمات والنزوح",
            "التعليم الدامج والمراعي للصدمات",
            "المنظورات الثقافية المقارنة في المنطقة العربية"
        ]],


        /* ---------- APPROACH ---------- */

        [".approach-content .about-section-label", [
            "نهجها المهني"
        ]],

        [".approach-content h2", [
            'فهم <span>الإنسان بكليّته</span>'
        ]],

        [".approach-intro", [
            "يقوم عمل د. فاتن على إدراك أن الرفاه النفسي والتعلّم والأسرة والنمو والبيئة عوامل مترابطة بعمق."
        ]],

        [".approach-list p", [
            "<strong>قائم على الأدلة</strong> مبني على البحث النفسي والممارسة المهنية.",
            "<strong>فردي</strong> دعم يُصمَّم وفق احتياجات كل شخص ونقاط قوته وظروفه.",
            "<strong>شامل</strong> يحترم الخلفيات التربوية والاجتماعية والثقافية المختلفة.",
            "<strong>تشاركي</strong> عمل مع الأفراد والأسر والمربّين وفرق متعددة التخصصات."
        ]],

        [".approach-main-circle h3", [
            "الإنسان أولاً"
        ]],

        [".approach-main-circle p", [
            "علم نفس بفهم، وتربية بهدف."
        ]],

        [".approach-orbit", [
            "علم النفس",
            "التربية",
            "الرفاه النفسي"
        ]],


        /* ---------- FOOTER (parts without data-i18n) ---------- */

        [".footer-logo strong", [
            "فاتن سكافي"
        ]],

        [".footer-logo small", [
            "عيادة Psycedu"
        ]],

        [".footer-bottom-container > p", [
            '© <span id="currentYear"></span> عيادة فاتن سكافي Psycedu. <span data-i18n="rights">جميع الحقوق محفوظة.</span>'
        ]]

    ];


    /* =====================================================
       LANGUAGE
    ===================================================== */

    let currentLanguage =
        localStorage.getItem("psycedu-language") || "en";


    function applyAboutContent(language) {

        aboutArabic.forEach(function (entry) {

            const selector = entry[0];
            const arabicValues = entry[1];

            document.querySelectorAll(selector).forEach(function (el, index) {

                /* remember the original English markup once */
                if (el.dataset.enHtml === undefined) {
                    el.dataset.enHtml = el.innerHTML;
                }

                if (language === "ar" && arabicValues[index] !== undefined) {
                    el.innerHTML = arabicValues[index];
                } else {
                    el.innerHTML = el.dataset.enHtml;
                }

            });

        });

        /* "Present" in the journey dates */
        document.querySelectorAll(".journey-date span").forEach(function (el) {

            if (el.dataset.enText === undefined) {
                el.dataset.enText = el.textContent;
            }

            if (el.dataset.enText.trim() === "Present") {
                el.textContent =
                    language === "ar" ? "حتى الآن" : el.dataset.enText;
            }

        });

        /* image alt text */
        const photo = document.querySelector(".about-photo-frame img");

        if (photo) {
            photo.alt =
                language === "ar" ? "د. فاتن سكافي" : "Dr. Faten Skafi";
        }

        /* page title + description */
        document.title =
            language === "ar"
                ? "عن د. فاتن | عيادة Psycedu"
                : "About Dr. Faten | Psycedu Clinic";

        const metaDescription =
            document.querySelector('meta[name="description"]');

        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                language === "ar"
                    ? "تعرّف على د. فاتن سكافي، دكتوراه في علم النفس - علم النفس العيادي والتربوي، التعليم العالي، البحث العلمي، التقييم النفسي والدعم النفسي التربوي."
                    : "Meet Dr. Faten Skafi, PhD - Clinical and Educational Psychology, higher education, research, psychological assessment and psychoeducational support."
            );
        }

    }


    function setLanguage(language) {

        currentLanguage = language;

        const html = document.documentElement;

        html.lang = language === "ar" ? "ar" : "en";
        html.dir = language === "ar" ? "rtl" : "ltr";

        document.body.setAttribute("dir", html.dir);


        /* 1) about page content */
        applyAboutContent(language);


        /* 2) header + footer (data-i18n) */
        document.querySelectorAll("[data-i18n]").forEach(function (element) {

            const key = element.dataset.i18n;

            if (translations[language] && translations[language][key]) {
                element.innerHTML = translations[language][key];
            }

        });


        /* 3) toast + language button text */
        if (toast) {
            toast.textContent =
                language === "ar" ? "تم نسخ الرابط" : "Link copied!";
        }

        languageTexts.forEach(function (text) {
            text.textContent = language === "en" ? "عربي" : "EN";
        });

        setYear();

        localStorage.setItem("psycedu-language", language);

    }


    languageButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            setLanguage(currentLanguage === "en" ? "ar" : "en");

        });

    });


    /* =====================================================
       KEEP PHONE / EMAIL LEFT-TO-RIGHT IN ARABIC
    ===================================================== */

    const fixStyle = document.createElement("style");

    fixStyle.textContent =
        '.footer-contact a[href^="tel:"] span,' +
        '.footer-contact a[href^="mailto:"] span' +
        '{direction:ltr;unicode-bidi:isolate;}';

    document.head.appendChild(fixStyle);


    /* =====================================================
       LOAD LANGUAGE
    ===================================================== */

    setLanguage(currentLanguage);


    /* =====================================================
       RESIZE
    ===================================================== */

    window.addEventListener("resize", function () {

        if (window.innerWidth > MOBILE_BREAKPOINT && mainNav && menuToggle) {
            closeMenu();
        }

    });

});