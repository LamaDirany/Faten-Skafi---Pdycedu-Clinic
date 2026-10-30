/* =========================================================
   ELEMENTS
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const mainNav =
    document.getElementById("mainNav");

const dropdown =
    document.querySelector(".nav-dropdown");

const dropdownToggle =
    document.querySelector(".dropdown-toggle");

const shareButton =
    document.getElementById("shareButton");

const shareMenu =
    document.getElementById("shareMenu");

const languageButtons =
    document.querySelectorAll(".language-btn");

const languageTexts =
    document.querySelectorAll(".languageText");

const toast =
    document.getElementById("toast");



/* =========================================================
   CURRENT YEAR
========================================================= */

const currentYear =
    document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}



/* =========================================================
   MOBILE MENU
========================================================= */

if (menuToggle && mainNav) {

    menuToggle.addEventListener(
        "click",
        function () {

            mainNav.classList.toggle("active");

            const isOpen =
                mainNav.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );


            menuToggle.innerHTML =
                isOpen
                    ? '<i class="fa-solid fa-xmark"></i>'
                    : '<i class="fa-solid fa-bars"></i>';

        }
    );

}



/* =========================================================
   MOBILE SERVICES DROPDOWN
========================================================= */

if (dropdownToggle && dropdown) {

    dropdownToggle.addEventListener(
        "click",
        function (event) {

            if (window.innerWidth <= 850) {

                event.preventDefault();

                dropdown.classList.toggle("active");

            }

        }
    );

}



/* =========================================================
   CLOSE MOBILE MENU AFTER LINK CLICK
========================================================= */

document.querySelectorAll(
    ".main-nav a"
).forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            if (window.innerWidth <= 850) {

                mainNav.classList.remove("active");

                menuToggle.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );

});



/* =========================================================
   SHARE MENU
========================================================= */

if (shareButton && shareMenu) {

    shareButton.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            shareMenu.classList.toggle("active");

            shareButton.setAttribute(
                "aria-expanded",
                shareMenu.classList.contains("active")
            );

        }
    );

}



/* =========================================================
   SHARE OPTIONS
========================================================= */

document.querySelectorAll(
    "[data-share]"
).forEach(function (button) {

    button.addEventListener(
        "click",
        async function () {

            const type =
                button.dataset.share;

            const pageURL =
                window.location.href;

            const pageTitle =
                document.title;


            let shareURL = "";


            if (type === "whatsapp") {

                shareURL =
                    "https://wa.me/?text=" +
                    encodeURIComponent(
                        pageTitle + " " + pageURL
                    );

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

                    await navigator.clipboard.writeText(
                        pageURL
                    );

                    showToast(
                        currentLanguage === "ar"
                            ? "تم نسخ الرابط"
                            : "Link copied!"
                    );

                } catch (error) {

                    console.error(
                        "Unable to copy link.",
                        error
                    );

                }

                shareMenu.classList.remove("active");

                return;

            }


            if (shareURL) {

                window.open(
                    shareURL,
                    "_blank",
                    "noopener,noreferrer"
                );

            }


            shareMenu.classList.remove("active");

        }
    );

});



/* =========================================================
   CLOSE SHARE MENU
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        if (
            shareMenu &&
            shareButton &&
            !shareMenu.contains(event.target) &&
            !shareButton.contains(event.target)
        ) {

            shareMenu.classList.remove("active");

            shareButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);



/* =========================================================
   TOAST
========================================================= */

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



/* =========================================================
   TRANSLATIONS
========================================================= */

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


        heroEyebrow:
            "People · Learning · Well-Being",

        heroTitle:
            'Supporting Brighter <span>Journeys</span>',

        heroDescription:
            "A welcoming space for psychological and educational support for children, adolescents, adults and families.",

        heroBook:
            "Book an Online Appointment",

        exploreServices:
            "Explore Our Services",

        onlineSupport:
            "Online Support",

        location:
            "Chtoura, Lebanon",

        heroCardSmall:
            "Psycedu Clinic",

        heroCardTitle:
            "A Healthier Mind.<br>A Brighter Future.",

        heroCardText:
            "Because everyone deserves support on their journey.",

        support:
            "Support",

        growth:
            "Growth",


        welcomeLabel:
            "Welcome to Psycedu Clinic",

        welcomeTitle:
            'People. Learning. Well-Being. <span>Brighter Tomorrows.</span>',

        welcomeDescription:
            "Psycedu Clinic brings psychology and education together to provide thoughtful, professional and personalized support for individuals and families.",

        children:
            "Children",

        adolescents:
            "Adolescents",

        adults:
            "Adults",

        families:
            "Families",


        servicesLabel:
            "How We Can Help",

        servicesTitle:
            'Professional Support <span>For Every Journey</span>',

        servicesDescription:
            "Explore psychological and educational services designed around individual needs, growth and well-being.",


        service1:
            "Psychological Counseling",

        service1Description:
            "Emotional and psychological support for individuals of all ages in a safe and understanding environment.",


        service2:
            "Psychoeducational Assessment",

        service2Description:
            "Comprehensive evaluation of cognitive, academic, emotional and behavioral needs.",


        service3:
            "Psychoeducational Reports",

        service3Description:
            "Professional reports prepared for school, educational and academic purposes.",


        service4:
            "Learning Difficulties & ADHD",

        service4Description:
            "Assessment and targeted interventions for learning difficulties, ADHD and behavioral challenges.",


        service5:
            "Family Guidance & Skills Development",

        service5Description:
            "Parental support, stronger family relationships, and development of life and social skills.",


        learnMore:
            "Learn More",


        meetDoctor:
            "Meet Dr. Faten",

        doctorName:
            "Dr. Faten Skafi",

        doctorRole:
            "Psychologist · Educator · Researcher",

        doctorDescription:
            "With more than two decades of experience across psychology, education, counseling, training and research, Dr. Faten Skafi is committed to helping individuals and families understand their needs, strengthen their abilities and move toward healthier, brighter futures.",

        doctorPhoto:
            "Dr. Faten's Photo",

        yearsExperience:
            "Years of Experience",

        value1:
            "Evidence-informed support",

        value2:
            "Personalized guidance",

        value3:
            "Psychology & education expertise",

        discoverDoctor:
            "Discover Dr. Faten's Story",


        appointmentLabel:
            "Online Appointments",

        appointmentTitle:
            'Getting Support Is <span>Simple</span>',

        appointmentDescription:
            "Begin your journey from wherever you are through a simple online appointment process.",


        step1Title:
            "Choose a Service",

        step1Text:
            "Select the type of psychological or educational support you need.",


        step2Title:
            "Request an Appointment",

        step2Text:
            "Choose your preferred date and provide your contact information.",


        step3Title:
            "Receive Confirmation",

        step3Text:
            "The clinic will contact you to confirm the session details.",


        step4Title:
            "Attend Online",

        step4Text:
            "Connect online for your scheduled confidential session.",


        requestAppointment:
            "Request an Appointment",


        ctaSmall:
            "We're Here for You",

        ctaTitle:
            "Ready to Take the Next Step?",

        ctaDescription:
            "Small steps can create meaningful change. Start your journey with Psycedu Clinic today.",


        footerDescription:
            "Psychological and educational support for people, learning, well-being and brighter tomorrows.",

        quickLinks:
            "Quick Links",

        contactUs:
            "Contact Us",

        bookOnline:
            "Book Online",

        rights:
            "All Rights Reserved.",

        privacy:
            "Privacy Policy",

        terms:
            "Terms"

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


        heroEyebrow:
            "الإنسان · التعلّم · الرفاه النفسي",

        heroTitle:
            'نرافقك نحو <span>مستقبل أكثر إشراقاً</span>',

        heroDescription:
            "مساحة داعمة وآمنة لتقديم الدعم النفسي والتربوي للأطفال والمراهقين والبالغين والأسر.",

        heroBook:
            "احجز موعداً أونلاين",

        exploreServices:
            "اكتشف خدماتنا",

        onlineSupport:
            "دعم أونلاين",

        location:
            "شتورة، لبنان",

        heroCardSmall:
            "عيادة Psycedu",

        heroCardTitle:
            "عقل أكثر صحة.<br>مستقبل أكثر إشراقاً.",

        heroCardText:
            "لأن كل شخص يستحق الدعم في رحلته.",

        support:
            "الدعم",

        growth:
            "النمو",


        welcomeLabel:
            "أهلاً بكم في عيادة Psycedu",

        welcomeTitle:
            'الإنسان. التعلّم. الرفاه النفسي. <span>غدٌ أكثر إشراقاً.</span>',

        welcomeDescription:
            "تجمع عيادة Psycedu بين علم النفس والتربية لتقديم دعم مهني ومدروس ومخصص للأفراد والأسر.",

        children:
            "الأطفال",

        adolescents:
            "المراهقون",

        adults:
            "البالغون",

        families:
            "الأسر",


        servicesLabel:
            "كيف يمكننا مساعدتك",

        servicesTitle:
            'دعم مهني <span>لكل رحلة</span>',

        servicesDescription:
            "اكتشف خدمات نفسية وتربوية مصممة وفق الاحتياجات الفردية والنمو والرفاه النفسي.",


        service1:
            "الاستشارات النفسية",

        service1Description:
            "دعم نفسي وعاطفي للأفراد من جميع الأعمار ضمن بيئة آمنة ومتفهّمة.",


        service2:
            "التقييم النفسي التربوي",

        service2Description:
            "تقييم شامل للقدرات والاحتياجات الأكاديمية والنفسية والسلوكية.",


        service3:
            "التقارير النفسية التربوية",

        service3Description:
            "إعداد تقارير مهنية معتمدة للأغراض المدرسية والتربوية والأكاديمية.",


        service4:
            "دعم صعوبات التعلم واضطراب فرط الحركة وتشتت الانتباه ",


        service4Description:
            "تقييم وتدخلات مخصصة لصعوبات التعلم واضطراب فرط الحركة وتشتت الانتباه والتحديات السلوكية.",


        service5:
            "الإرشاد الأسري وتنمية المهارات",

        service5Description:
            "دعم الوالدين وتعزيز العلاقات الأسرية وتنمية المهارات الحياتية والاجتماعية.",


        learnMore:
            "اعرف المزيد",


        meetDoctor:
            "تعرّف على د. فاتن",

        doctorName:
            "د. فاتن سكافي",

        doctorRole:
            "اختصاصية نفسية · تربوية · باحثة",

        doctorDescription:
            "بخبرة تمتد لأكثر من عقدين في علم النفس والتربية والإرشاد والتدريب والبحث، تسعى د. فاتن سكافي إلى مساعدة الأفراد والأسر على فهم احتياجاتهم وتعزيز قدراتهم والتقدم نحو مستقبل أكثر صحة وإشراقاً.",

        doctorPhoto:
            "صورة د. فاتن",

        yearsExperience:
            "عاماً من الخبرة",

        value1:
            "دعم قائم على المعرفة والممارسة المهنية",

        value2:
            "إرشاد مخصص لكل حالة",

        value3:
            "خبرة في علم النفس والتربية",

        discoverDoctor:
            "تعرّف أكثر على د. فاتن",


        appointmentLabel:
            "المواعيد الأونلاين",

        appointmentTitle:
            'الحصول على الدعم <span>بسيط</span>',

        appointmentDescription:
            "ابدأ رحلتك أينما كنت من خلال خطوات بسيطة لحجز موعد أونلاين.",


        step1Title:
            "اختر الخدمة",

        step1Text:
            "اختر نوع الدعم النفسي أو التربوي الذي تحتاجه.",


        step2Title:
            "اطلب موعداً",

        step2Text:
            "اختر التاريخ المناسب وأدخل معلومات التواصل الخاصة بك.",


        step3Title:
            "استلم التأكيد",

        step3Text:
            "ستتواصل معك العيادة لتأكيد تفاصيل الجلسة.",


        step4Title:
            "احضر الجلسة أونلاين",

        step4Text:
            "تواصل أونلاين في الموعد المحدد لجلسة خاصة وسرية.",


        requestAppointment:
            "اطلب موعداً",


        ctaSmall:
            "نحن هنا لدعمك",

        ctaTitle:
            "هل أنت مستعد للخطوة التالية؟",

        ctaDescription:
            "الخطوات الصغيرة قد تصنع تغييراً كبيراً. ابدأ رحلتك مع عيادة Psycedu اليوم.",


        footerDescription:
            "دعم نفسي وتربوي للإنسان والتعلّم والرفاه النفسي وغدٍ أكثر إشراقاً.",

        quickLinks:
            "روابط سريعة",

        contactUs:
            "تواصل معنا",

        bookOnline:
            "احجز أونلاين",

        rights:
            "جميع الحقوق محفوظة.",

        privacy:
            "سياسة الخصوصية",

        terms:
            "الشروط"

    }

};



/* =========================================================
   LANGUAGE
========================================================= */

let currentLanguage =
    localStorage.getItem("psycedu-language") || "en";


function setLanguage(language) {

    currentLanguage = language;


    const html =
        document.documentElement;


    html.lang =
        language === "ar"
            ? "ar"
            : "en";


    html.dir =
        language === "ar"
            ? "rtl"
            : "ltr";


    document.body.setAttribute(
        "dir",
        html.dir
    );


    document.querySelectorAll(
        "[data-i18n]"
    ).forEach(function (element) {

        const key =
            element.dataset.i18n;


        if (
            translations[language] &&
            translations[language][key]
        ) {

            element.innerHTML =
                translations[language][key];

        }

    });


    languageTexts.forEach(
        function (text) {

            text.textContent =
                language === "en"
                    ? "عربي"
                    : "EN";

        }
    );


    localStorage.setItem(
        "psycedu-language",
        language
    );

}



/* LANGUAGE BUTTONS */

languageButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const newLanguage =
                    currentLanguage === "en"
                        ? "ar"
                        : "en";

                setLanguage(
                    newLanguage
                );

            }
        );

    }
);



/* =========================================================
   LOAD LANGUAGE
========================================================= */

setLanguage(
    currentLanguage
);



/* =========================================================
   RESIZE
========================================================= */

window.addEventListener(
    "resize",
    function () {

        if (window.innerWidth > 850) {

            mainNav?.classList.remove("active");

            dropdown?.classList.remove("active");

            if (menuToggle) {

                menuToggle.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }

    }
);

