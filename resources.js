
/* =========================================================
   PSYCEDU CLINIC - RESOURCES PAGE JAVASCRIPT
   Search, filters, article reader, emotional check-in,
   language switch, mobile navigation, and sharing.
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const html = document.documentElement;

    const resourceSearch =
        document.getElementById("resourceSearch");

    const resourceCards =
        document.querySelectorAll(".resource-card");

    const filterButtons =
        document.querySelectorAll("[data-filter]");

    const emptyResources =
        document.getElementById("emptyResources");

    const resourceDialog =
        document.getElementById("resourceDialog");

    const dialogTitle =
        document.getElementById("dialogTitle");

    const dialogContent =
        document.getElementById("dialogContent");

    const closeResource =
        document.getElementById("closeResource");

    const menuToggle =
        document.getElementById("menuToggle");

    const mainNav =
        document.getElementById("mainNav");

    const languageButtons =
        document.querySelectorAll(".language-btn");

    const shareButton =
        document.getElementById("shareButton");

    const shareMenu =
        document.getElementById("shareMenu");

    const moodButtons =
        document.querySelectorAll("[data-mood]");

    const feelingReason =
        document.getElementById("feelingReason");

    const feelingNeed =
        document.getElementById("feelingNeed");

    const reflectButton =
        document.getElementById("reflectButton");

    const reflectionResult =
        document.getElementById("reflectionResult");

    const resetReflection =
        document.getElementById("resetReflection");

    const currentYear =
        document.getElementById("currentYear");


    /* =====================================================
       LANGUAGE SETTINGS
    ===================================================== */

    let currentLanguage = "en";

    const translations = {

        en: {

            navHome: "Home",
            navAbout: "About Dr. Faten",
            navServices: "Services",
            navStories: "Stories",
            navResources: "Resources",
            navContact: "Contact",

            service1: "Psychological Counseling",
            service2: "Psychoeducational Assessment",
            service3: "Psychoeducational Reports",
            service4: "Learning Difficulties & ADHD",
            service5: "Family Guidance & Skills Development",

            bookAppointment: "Book Appointment",
            bookOnline: "Book Online",
            shareTitle: "Share this page",

            footerDescription:
                "Psychological and educational support for people, learning, well-being and brighter tomorrows.",

            quickLinks: "Quick Links",
            contactUs: "Contact Us",
            location: "Chtoura, Lebanon",
            rights: "All Rights Reserved.",
            privacy: "Privacy Policy",
            terms: "Terms",

            eyebrow: "PSYCEDU LEARNING HUB",

            heroTitle:
                "Explore. Learn. <em>Grow.</em>",

            heroDesc:
                "Practical psychology and education resources for families, educators, and young people. Read, reflect, practice, and download.",

            explore: "Explore resources",

            libraryLabel: "YOUR RESOURCE LIBRARY",

            libraryTitle:
                "Find what helps you today",

            libraryDesc:
                "Browse complete articles, practical guides, and ready-to-print worksheets.",

            searchPlaceholder:
                "Search resources by title or topic…",

            all: "All",
            articles: "Articles",
            guides: "Guides",
            worksheets: "Worksheets & PDFs",

            practicalGuide: "Practical guide",
            educationalArticle: "Educational article",
            printablePdf: "Printable PDF",

            readGuide: "Read full guide",
            readArticle: "Read full article",

            preview: "Preview",
            download: "Download",

            noResults:
                "No matching resources. Try a different search.",

            downloadTitle:
                "Download the full resource pack",

            downloadDescription:
                "All five printable PDF resources in one ZIP file.",

            downloadAll: "Download all PDFs",

            activityLabel: "INTERACTIVE ACTIVITY",
            activityTitle: "My Emotional Check-In",

            activityDescription:
                "Pause and reflect. This activity is for self-awareness, not diagnosis. Your answers stay on this page and are not sent to the clinic.",

            activityTag: "A moment for yourself",

            feelingQuestion:
                "How are you feeling today?",

            feelingInstruction:
                "Choose the feeling that best describes your experience right now.",

            reasonQuestion:
                "What might have contributed to this feeling?",

            reasonPlaceholder:
                "Write a thought or situation (optional)",

            needQuestion:
                "What might help you right now?",

            chooseOption: "Choose an option",

            needRest: "Rest or quiet time",
            needListen: "Someone to listen",
            needHelp: "Help solving a problem",
            needMovement: "Movement or a short break",
            needTime: "Time to understand my feelings",

            reflect: "See my reflection",

            reflectionTitle: "Your reflection",

            reflectionPlaceholder:
                "Select a feeling and a helpful action to see your personal reflection here.",

            reset: "Start again",

            privacyMessage:
                "No answers are stored or transmitted.",

            externalLabel: "EXPLORE FURTHER",

            externalTitle:
                "Trusted external resources",

            externalDescription:
                "Further information from established public-health and educational organizations.",

            visitWebsite: "Visit website ↗",

            disclaimer:
                "These resources are for general educational purposes only and do not replace individualized psychological assessment, diagnosis, or professional care. External websites are independent of Psycedu Clinic.",

            readerLabel: "PSYCEDU RESOURCE",

            selectMood:
                "Please choose how you are feeling first.",

            moodIntro:
                "You selected",

            reasonIntro:
                "You mentioned",

            needIntro:
                "Something that may help is",

            reflectionReminder:
                "All feelings are valid. You can take your time, use supportive strategies, and talk to someone you trust.",

            copied: "Link copied!",
            copyFailed: "Unable to copy the link.",

            contentUnavailable:
                "This article is not available yet. Please check that resources-content.js is loaded.",

            happy: "Happy",
            calm: "Calm",
            worried: "Worried",
            sad: "Sad",
            angry: "Angry",
            confused: "Confused"

        },

        ar: {

            navHome: "الرئيسية",
            navAbout: "عن الدكتورة فاتن",
            navServices: "الخدمات",
            navStories: "قصص",
            navResources: "الموارد",
            navContact: "اتصل بنا",

            service1: "الإرشاد النفسي",
            service2: "التقييم النفسي التربوي",
            service3: "التقارير النفسية التربوية",
            service4: "صعوبات التعلم واضطراب فرط الحركة وتشتت الانتباه",
            service5: "الإرشاد الأسري وتنمية المهارات",

            bookAppointment: "احجز موعداً",
            bookOnline: "احجز عبر الإنترنت",
            shareTitle: "مشاركة الصفحة",

            footerDescription:
                "دعم نفسي وتربوي للأفراد والتعلّم والرفاه النفسي وغدٍ أكثر إشراقاً.",

            quickLinks: "روابط سريعة",
            contactUs: "تواصل معنا",
            location: "شتورا، لبنان",
            rights: "جميع الحقوق محفوظة.",
            privacy: "سياسة الخصوصية",
            terms: "الشروط",

            eyebrow: "مكتبة سايك إديو التعليمية",

            heroTitle:
                "اكتشف. تعلّم. <em>تطوّر.</em>",

            heroDesc:
                "موارد نفسية وتربوية عملية للعائلات والمعلّمين واليافعين. اقرأ وتعلّم وتأمّل وحمّل الأنشطة.",

            explore: "استكشف الموارد",

            libraryLabel: "مكتبة الموارد",

            libraryTitle:
                "اعثر على ما يفيدك اليوم",

            libraryDesc:
                "تصفّح المقالات والأدلة العملية وأوراق العمل القابلة للطباعة.",

            searchPlaceholder:
                "ابحث عن مورد حسب العنوان أو الموضوع…",

            all: "الكل",
            articles: "المقالات",
            guides: "الأدلة",
            worksheets: "أوراق العمل وملفات PDF",

            practicalGuide: "دليل عملي",
            educationalArticle: "مقال تربوي",
            printablePdf: "ملف قابل للطباعة",

            readGuide: "قراءة الدليل كاملاً",
            readArticle: "قراءة المقال كاملاً",

            preview: "معاينة",
            download: "تحميل",

            noResults:
                "لم يتم العثور على موارد مطابقة. جرّب البحث بكلمات أخرى.",

            downloadTitle:
                "حمّل مجموعة الموارد كاملة",

            downloadDescription:
                "خمسة ملفات PDF قابلة للطباعة في ملف مضغوط واحد.",

            downloadAll: "تحميل جميع الملفات",

            activityLabel: "نشاط تفاعلي",
            activityTitle: "تفقّد مشاعري",

            activityDescription:
                "خذ لحظة للتأمل في مشاعرك. هذا النشاط لتعزيز الوعي الذاتي وليس للتشخيص. تبقى إجاباتك على هذه الصفحة ولا تُرسل إلى العيادة.",

            activityTag: "لحظة لنفسك",

            feelingQuestion:
                "كيف تشعر اليوم؟",

            feelingInstruction:
                "اختر الشعور الذي يعبّر عن حالتك الآن.",

            reasonQuestion:
                "ما الذي قد يكون ساهم في هذا الشعور؟",

            reasonPlaceholder:
                "اكتب فكرة أو موقفاً (اختياري)",

            needQuestion:
                "ما الذي قد يساعدك الآن؟",

            chooseOption: "اختر خياراً",

            needRest: "الراحة أو الهدوء",
            needListen: "شخص يستمع إليّ",
            needHelp: "المساعدة في حل مشكلة",
            needMovement: "الحركة أو استراحة قصيرة",
            needTime: "وقت لفهم مشاعري",

            reflect: "عرض تأمّلي",

            reflectionTitle: "تأمّلك الشخصي",

            reflectionPlaceholder:
                "اختر شعوراً وما قد يساعدك لتظهر هنا خلاصة تأمّلك.",

            reset: "البدء من جديد",

            privacyMessage:
                "لا يتم تخزين الإجابات أو إرسالها.",

            externalLabel: "اكتشف المزيد",

            externalTitle:
                "مصادر خارجية موثوقة",

            externalDescription:
                "معلومات إضافية من مؤسسات صحية وتربوية معروفة.",

            visitWebsite: "زيارة الموقع ↗",

            disclaimer:
                "هذه الموارد مخصصة للأغراض التثقيفية العامة ولا تحل محل التقييم النفسي الفردي أو التشخيص أو الرعاية المهنية. المواقع الخارجية مستقلة عن عيادة سايك إديو.",

            readerLabel: "مورد تعليمي",

            selectMood:
                "يرجى اختيار شعورك أولاً.",

            moodIntro:
                "لقد اخترت الشعور",

            reasonIntro:
                "وقد ذكرت",

            needIntro:
                "ومن الأمور التي قد تساعدك",

            reflectionReminder:
                "جميع المشاعر مقبولة. يمكنك أن تأخذ وقتك، وأن تستخدم أساليب داعمة، وأن تتحدث إلى شخص تثق به.",

            copied: "تم نسخ الرابط!",
            copyFailed: "تعذّر نسخ الرابط.",

            contentUnavailable:
                "المحتوى غير متوفر حالياً. تأكد من تحميل ملف resources-content.js.",

            happy: "سعيد",
            calm: "هادئ",
            worried: "قلق",
            sad: "حزين",
            angry: "غاضب",
            confused: "مرتبك"

        }

    };


    function t(key) {

        return translations[currentLanguage][key] || key;

    }


    /* =====================================================
       SEARCH AND CATEGORY FILTERS
    ===================================================== */

    let activeFilter = "all";

    function filterResources() {

        const searchTerm =
            (resourceSearch?.value || "")
                .trim()
                .toLowerCase();

        let visibleCount = 0;

        resourceCards.forEach(card => {

            const cardKind =
                card.dataset.kind || "";

            const searchableText = [
                card.dataset.search || "",
                card.textContent || ""
            ].join(" ").toLowerCase();

            const matchesCategory =
                activeFilter === "all" ||
                cardKind === activeFilter;

            const matchesSearch =
                searchableText.includes(searchTerm);

            const visible =
                matchesCategory && matchesSearch;

            card.hidden = !visible;

            if (visible) {
                visibleCount++;
            }

        });

        if (emptyResources) {

            emptyResources.hidden = visibleCount > 0;

        }

    }


    resourceSearch?.addEventListener(
        "input",
        filterResources
    );


    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            activeFilter = button.dataset.filter;

            filterButtons.forEach(item => {

                item.classList.remove("selected");

                item.setAttribute(
                    "aria-pressed",
                    "false"
                );

            });

            button.classList.add("selected");

            button.setAttribute(
                "aria-pressed",
                "true"
            );

            filterResources();

        });

    });


    /* =====================================================
       ARTICLE AND GUIDE READER
    ===================================================== */

    /*
       resources-content.js should define:

       window.resourceContent = {
           "guide-1": {
               title: "Article title",
               content: "<p>Full content...</p>"
           }
       };

       The article content comes from your supplied
       educational material.
    */

    const readButtons =
        document.querySelectorAll("[data-open]");


    function openArticle(resourceId) {

        if (!resourceDialog) return;

        const resources =
            window.resourceContent || {};

        const resource =
            resources[resourceId];

        if (!resource) {

            if (dialogTitle) {
                dialogTitle.textContent =
                    currentLanguage === "ar"
                        ? "المحتوى غير متوفر"
                        : "Content unavailable";
            }

            if (dialogContent) {
                dialogContent.textContent =
                    t("contentUnavailable");
            }

        } else {

            if (dialogTitle) {

                dialogTitle.textContent =
                    resource.title || "";

            }

            if (dialogContent) {

                // Trusted, locally authored article HTML.
                // Do not use untrusted user input here.
                if (typeof resource.content === "string") {

                    dialogContent.innerHTML =
                        resource.content;

                } else {

                    dialogContent.textContent =
                        t("contentUnavailable");

                }

            }

        }

        if (!resourceDialog.open) {
            resourceDialog.showModal();
        }

    }


    readButtons.forEach(button => {

        button.addEventListener("click", () => {

            openArticle(button.dataset.open);

        });

    });


    closeResource?.addEventListener(
        "click",
        () => {

            resourceDialog?.close();

        }
    );


    resourceDialog?.addEventListener(
        "click",
        event => {

            if (event.target === resourceDialog) {

                resourceDialog.close();

            }

        }
    );


    /* =====================================================
       EMOTIONAL CHECK-IN ACTIVITY
    ===================================================== */

    let selectedMood = "";


    moodButtons.forEach(button => {

        button.addEventListener("click", () => {

            selectedMood =
                button.dataset.mood || "";

            moodButtons.forEach(item => {

                item.classList.remove("selected");

                item.setAttribute(
                    "aria-pressed",
                    "false"
                );

            });

            button.classList.add("selected");

            button.setAttribute(
                "aria-pressed",
                "true"
            );

        });

    });


    function getTranslatedMood(mood) {

        const moodKey =
            mood.toLowerCase();

        return t(moodKey);

    }


    function getTranslatedNeed(value) {

        const needMap = {

            "Rest or quiet time": "needRest",

            "Someone to listen": "needListen",

            "Help solving a problem": "needHelp",

            "Movement or a short break": "needMovement",

            "Time to understand my feelings": "needTime"

        };

        return t(needMap[value] || value);

    }


    reflectButton?.addEventListener(
        "click",
        () => {

            if (!reflectionResult) return;

            if (!selectedMood) {

                reflectionResult.textContent =
                    t("selectMood");

                return;

            }

            const reason =
                feelingReason?.value.trim() || "";

            const need =
                feelingNeed?.value || "";

            // Build the reflection using textContent
            // so visitors' input is never interpreted as HTML.

            const parts = [];

            parts.push(
                `${t("moodIntro")}: ${getTranslatedMood(selectedMood)}.`
            );

            if (reason) {

                parts.push(
                    `${t("reasonIntro")}: "${reason}".`
                );

            }

            if (need) {

                parts.push(
                    `${t("needIntro")}: ${getTranslatedNeed(need)}.`
                );

            }

            parts.push(t("reflectionReminder"));

            reflectionResult.textContent =
                parts.join("\n\n");

            reflectionResult.style.whiteSpace =
                "pre-line";

        }
    );


    resetReflection?.addEventListener(
        "click",
        () => {

            selectedMood = "";

            moodButtons.forEach(button => {

                button.classList.remove("selected");

                button.setAttribute(
                    "aria-pressed",
                    "false"
                );

            });

            if (feelingReason) {
                feelingReason.value = "";
            }

            if (feelingNeed) {
                feelingNeed.value = "";
            }

            if (reflectionResult) {

                reflectionResult.textContent =
                    t("reflectionPlaceholder");

            }

        }
    );


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    function closeMobileMenu() {

        mainNav?.classList.remove("is-open");

        menuToggle?.setAttribute(
            "aria-expanded",
            "false"
        );

        const icon =
            menuToggle?.querySelector("i");

        if (icon) {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    }


    menuToggle?.addEventListener(
        "click",
        () => {

            if (!mainNav) return;

            const isOpen =
                mainNav.classList.toggle("is-open");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            const icon =
                menuToggle.querySelector("i");

            if (icon) {

                icon.classList.toggle(
                    "fa-bars",
                    !isOpen
                );

                icon.classList.toggle(
                    "fa-xmark",
                    isOpen
                );

            }

        }
    );


    const dropdownButtons =
        document.querySelectorAll(
            ".nav-dropdown .dropdown-toggle"
        );


    dropdownButtons.forEach(button => {

        button.addEventListener("click", () => {

            const dropdown =
                button.closest(".nav-dropdown");

            const isOpen =
                dropdown.classList.toggle("is-open");

            button.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        });

    });


    mainNav?.querySelectorAll("a").forEach(link => {

        link.addEventListener(
            "click",
            closeMobileMenu
        );

    });


    /* =====================================================
       SHARE MENU
    ===================================================== */

    shareButton?.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            if (!shareMenu) return;

            const isOpen =
                shareMenu.classList.toggle("active");

            shareButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        }
    );


    function closeShareMenu() {

        shareMenu?.classList.remove("active");

        shareButton?.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    document.addEventListener("click", event => {

        if (
            shareMenu &&
            !shareMenu.contains(event.target) &&
            !shareButton?.contains(event.target)
        ) {

            closeShareMenu();

        }

    });


    function showToast(message) {

        let toast =
            document.getElementById("toast");

        if (!toast) {

            toast = document.createElement("div");

            toast.id = "toast";
            toast.className = "toast";

            document.body.appendChild(toast);

        }

        toast.textContent = message;

        toast.classList.add("show");

        clearTimeout(showToast.timeout);

        showToast.timeout = setTimeout(() => {

            toast.classList.remove("show");

        }, 2500);

    }


    document.querySelectorAll("[data-share]")
        .forEach(button => {

            button.addEventListener(
                "click",
                async () => {

                    const platform =
                        button.dataset.share;

                    const url =
                        window.location.href;

                    const encodedUrl =
                        encodeURIComponent(url);

                    const title =
                        encodeURIComponent(
                            document.title
                        );

                    let shareUrl = "";

                    switch (platform) {

                        case "whatsapp":

                            shareUrl =
                                `https://wa.me/?text=${title}%20${encodedUrl}`;

                            break;

                        case "facebook":

                            shareUrl =
                                `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;

                            break;

                        case "linkedin":

                            shareUrl =
                                `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

                            break;

                        case "copy":

                            try {

                                await navigator.clipboard.writeText(url);

                                showToast(t("copied"));

                            } catch (error) {

                                // Fallback for browsers or local
                                // environments without clipboard access.

                                const input =
                                    document.createElement("textarea");

                                input.value = url;

                                input.style.position = "fixed";
                                input.style.opacity = "0";

                                document.body.appendChild(input);

                                input.select();

                                let copied = false;

                                try {
                                    copied =
                                        document.execCommand("copy");
                                } catch (copyError) {
                                    copied = false;
                                }

                                input.remove();

                                showToast(
                                    copied
                                        ? t("copied")
                                        : t("copyFailed")
                                );

                            }

                            closeShareMenu();

                            return;

                    }

                    if (shareUrl) {

                        window.open(
                            shareUrl,
                            "_blank",
                            "noopener,noreferrer"
                        );

                    }

                    closeShareMenu();

                }
            );

        });


    /* =====================================================
       LANGUAGE TRANSLATION
    ===================================================== */

    const resourceCardsData = [

        {
            title: "Helping Children Understand Their Emotions",
            ar: "مساعدة الأطفال على فهم مشاعرهم",
            descriptionAr:
                "دليل عملي لمساعدة الأطفال على التعرف إلى مشاعرهم وفهمها والتعبير عنها بطرق صحية."
        },

        {
            title: "Supporting an Anxious Child",
            ar: "دعم الطفل الذي يعاني من القلق",
            descriptionAr:
                "طرق عملية لفهم القلق لدى الأطفال وتقديم الدعم والطمأنينة المناسبة."
        },

        {
            title: "Creating an Emotionally Supportive Classroom",
            ar: "إنشاء بيئة صفية داعمة نفسياً",
            descriptionAr:
                "استراتيجيات للمعلمين لبناء الثقة ودعم التعبير العاطفي لدى الطلاب."
        },

        {
            title: "Anxiety vs. Stress: Understanding the Difference",
            ar: "القلق والتوتر: فهم الفرق بينهما",
            descriptionAr:
                "تعرّف على أوجه التشابه والاختلاف بين القلق والتوتر ومتى قد تحتاج إلى دعم متخصص."
        },

        {
            title: "Understanding Emotional Regulation in Children and Adolescents",
            ar: "فهم تنظيم المشاعر لدى الأطفال والمراهقين",
            descriptionAr:
                "كيف تتطور مهارات تنظيم المشاعر وكيف يمكن للكبار دعم الأطفال والمراهقين."
        },

        {
            title: "Why Teenagers Sometimes Stop Talking to Their Parents",
            ar: "لماذا يتوقف المراهقون أحياناً عن التحدث مع والديهم؟",
            descriptionAr:
                "أسباب الانسحاب من التواصل وطرق تعزيز الحوار والثقة داخل الأسرة."
        },

        {
            title: "Things Teachers Should Avoid Saying to an Anxious Student",
            ar: "عبارات ينبغي على المعلمين تجنبها مع الطالب القلق",
            descriptionAr:
                "بدائل داعمة لعبارات قد تزيد من قلق الطلاب دون قصد."
        },

        {
            title: "Why a Quiet Student Is Not Always Doing Well",
            ar: "لماذا لا يعني هدوء الطالب دائماً أنه بخير؟",
            descriptionAr:
                "أهمية الانتباه إلى التغيرات في سلوك الطلاب وعدم الحكم على حالتهم من هدوئهم فقط."
        },

        {
            title: "Emotional Check-In",
            ar: "تفقّد المشاعر",
            descriptionAr:
                "نشاط يساعد الأطفال والمراهقين على تحديد مشاعرهم والتفكير في احتياجاتهم."
        },

        {
            title: "My Calm-Down Toolkit",
            ar: "مجموعة أدواتي للتهدئة",
            descriptionAr:
                "خمس استراتيجيات عملية للتعامل مع المشاعر القوية."
        },

        {
            title: "Parent Communication Guide",
            ar: "دليل التواصل الداعم للوالدين",
            descriptionAr:
                "عبارات وأساليب لتعزيز الاستماع والتفاهم والثقة بين الأهل والأطفال."
        },

        {
            title: "Teacher Student Well-Being Guide",
            ar: "دليل المعلم لدعم رفاه الطلاب",
            descriptionAr:
                "إرشادات لملاحظة التغيرات لدى الطلاب وتقديم الدعم المناسب."
        },

        {
            title: "My Feelings Worksheet",
            ar: "ورقة عمل: مشاعري",
            descriptionAr:
                "نشاط قابل للطباعة يساعد الأطفال على فهم مشاعرهم واحتياجاتهم."
        }

    ];


    // Store original English card content before translation.
    const originalCards = Array.from(resourceCards).map(card => ({

        card,

        title: card.querySelector("h3")?.textContent.trim() || "",

        description: card.querySelector("p")?.textContent.trim() || ""

    }));


    function translateResourceCards() {

        originalCards.forEach(item => {

            const titleElement =
                item.card.querySelector("h3");

            const descriptionElement =
                item.card.querySelector("p");

            const resource =
                resourceCardsData.find(entry =>
                    entry.title === item.title
                );

            if (!resource) return;

            if (titleElement) {

                titleElement.textContent =
                    currentLanguage === "ar"
                        ? resource.ar
                        : item.title;

            }

            if (descriptionElement) {

                descriptionElement.textContent =
                    currentLanguage === "ar"
                        ? resource.descriptionAr
                        : item.description;

            }

        });

    }


    function translatePage() {

        const isArabic =
            currentLanguage === "ar";

        html.lang = currentLanguage;

        html.dir = isArabic ? "rtl" : "ltr";

        document.body.dir =
            isArabic ? "rtl" : "ltr";


        // Header and footer translations.
        document.querySelectorAll("[data-i18n]")
            .forEach(element => {

                const key =
                    element.dataset.i18n;

                if (translations[currentLanguage][key]) {

                    element.textContent = t(key);

                }

            });


        // Resources page translations.
        document.querySelectorAll("[data-resource-i18n]")
            .forEach(element => {

                const key =
                    element.dataset.resourceI18n;

                if (translations[currentLanguage][key]) {

                    if (key === "heroTitle") {

                        element.innerHTML = t(key);

                    } else {

                        element.textContent = t(key);

                    }

                }

            });


        // Language button text.
        document.querySelectorAll(".languageText")
            .forEach(element => {

                element.textContent =
                    isArabic ? "EN" : "عربي";

            });


        // Search.
        if (resourceSearch) {

            resourceSearch.placeholder =
                t("searchPlaceholder");

        }


        // Filter buttons.
        const filterLabels = {

            all: "all",
            article: "articles",
            guide: "guides",
            pdf: "worksheets"

        };

        filterButtons.forEach(button => {

            button.textContent =
                t(filterLabels[button.dataset.filter]);

        });


        // Resource cards.
        translateResourceCards();


        // Card type labels and action buttons.
        resourceCards.forEach(card => {

            const kind =
                card.dataset.kind;

            const type =
                card.querySelector(".resource-type");

            if (type) {

                const typeKey = {

                    guide: "practicalGuide",
                    article: "educationalArticle",
                    pdf: "printablePdf"

                }[kind];

                type.textContent = t(typeKey);

            }


            const readButton =
                card.querySelector(".read-resource");

            if (readButton) {

                const label =
                    kind === "guide"
                        ? t("readGuide")
                        : t("readArticle");

                readButton.innerHTML =
                    `${label} <i class="fa-solid fa-arrow-right"></i>`;

            }


            const actions =
                card.querySelectorAll(".card-actions a");

            if (actions.length >= 2) {

                actions[0].innerHTML =
                    `${t("preview")} <i class="fa-solid fa-eye"></i>`;

                actions[1].innerHTML =
                    `${t("download")} <i class="fa-solid fa-download"></i>`;

            }

        });


        // Empty results.
        if (emptyResources) {

            emptyResources.textContent =
                t("noResults");

        }


        // Download banner.
        const banner =
            document.querySelector(".download-banner");

        if (banner) {

            const title =
                banner.querySelector("h3");

            const description =
                banner.querySelector("p");

            const link =
                banner.querySelector("a");

            if (title) {
                title.textContent = t("downloadTitle");
            }

            if (description) {
                description.textContent =
                    t("downloadDescription");
            }

            if (link) {

                link.innerHTML =
                    `<i class="fa-solid fa-file-zipper"></i> ${t("downloadAll")}`;

            }

        }


        // Activity section.
        const activity =
            document.querySelector(".interactive-section");

        if (activity) {

            const heading =
                activity.querySelector(".section-top");

            if (heading) {

                const eyebrow =
                    heading.querySelector(".eyebrow");

                const title =
                    heading.querySelector("h2");

                const description =
                    heading.querySelector("p");

                if (eyebrow) {
                    eyebrow.textContent =
                        t("activityLabel");
                }

                if (title) {
                    title.textContent =
                        t("activityTitle");
                }

                if (description) {
                    description.textContent =
                        t("activityDescription");
                }

            }


            const tag =
                activity.querySelector(".activity-tag");

            if (tag) {

                tag.innerHTML =
                    `<i class="fa-regular fa-heart"></i> ${t("activityTag")}`;

            }


            const activityTitle =
                activity.querySelector(".activity-left h3");

            if (activityTitle) {
                activityTitle.textContent =
                    t("feelingQuestion");
            }


            const instruction =
                activity.querySelector(".activity-left > p");

            if (instruction) {
                instruction.textContent =
                    t("feelingInstruction");
            }


            const labels =
                activity.querySelectorAll(".activity-left label");

            if (labels[0]) {
                labels[0].textContent =
                    t("reasonQuestion");
            }

            if (labels[1]) {
                labels[1].textContent =
                    t("needQuestion");
            }


            if (feelingReason) {
                feelingReason.placeholder =
                    t("reasonPlaceholder");
            }


            // Mood labels.
            const moodIcons = {

                Happy: "😊",
                Calm: "😌",
                Worried: "😟",
                Sad: "😢",
                Angry: "😠",
                Confused: "😕"

            };

            moodButtons.forEach(button => {

                const mood =
                    button.dataset.mood;

                button.textContent =
                    `${moodIcons[mood]} ${getTranslatedMood(mood)}`;

            });


            // Support options.
            if (feelingNeed) {

                const options =
                    feelingNeed.querySelectorAll("option");

                const optionKeys = [

                    "chooseOption",
                    "needRest",
                    "needListen",
                    "needHelp",
                    "needMovement",
                    "needTime"

                ];

                options.forEach((option, index) => {

                    if (optionKeys[index]) {

                        option.textContent =
                            t(optionKeys[index]);

                    }

                });

            }


            if (reflectButton) {

                reflectButton.innerHTML =
                    `${t("reflect")} <i class="fa-solid fa-arrow-right"></i>`;

            }


            const reflectionTitle =
                activity.querySelector(".activity-right h3");

            if (reflectionTitle) {

                reflectionTitle.textContent =
                    t("reflectionTitle");

            }


            if (reflectionResult) {

                reflectionResult.textContent =
                    t("reflectionPlaceholder");

            }


            if (resetReflection) {

                resetReflection.textContent =
                    t("reset");

            }


            const privacy =
                activity.querySelector(".activity-privacy");

            if (privacy) {

                privacy.innerHTML =
                    `<i class="fa-solid fa-lock"></i> ${t("privacyMessage")}`;

            }

        }


        // External resources.
        const external =
            document.querySelector(".external-section");

        if (external) {

            const heading =
                external.querySelector(".section-top");

            if (heading) {

                const eyebrow =
                    heading.querySelector(".eyebrow");

                const title =
                    heading.querySelector("h2");

                const description =
                    heading.querySelector("p");

                if (eyebrow) {
                    eyebrow.textContent =
                        t("externalLabel");
                }

                if (title) {
                    title.textContent =
                        t("externalTitle");
                }

                if (description) {
                    description.textContent =
                        t("externalDescription");
                }

            }


            external.querySelectorAll(
                ".external-grid a span"
            ).forEach(element => {

                element.textContent =
                    t("visitWebsite");

            });

        }


        // Disclaimer.
        const disclaimer =
            document.querySelector(".resources-note p");

        if (disclaimer) {

            disclaimer.textContent =
                t("disclaimer");

        }


        // Dialog label.
        const dialogLabel =
            document.querySelector(".dialog-bar span");

        if (dialogLabel) {

            dialogLabel.textContent =
                t("readerLabel");

        }


        // Reapply filtering after translation.
        filterResources();

    }


    function switchLanguage() {

        currentLanguage =
            currentLanguage === "en"
                ? "ar"
                : "en";

        translatePage();

    }


    languageButtons.forEach(button => {

        button.addEventListener(
            "click",
            switchLanguage
        );

    });


    /* =====================================================
       CLOSE MENUS ON ESCAPE
    ===================================================== */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            closeShareMenu();

            closeMobileMenu();

            document.querySelectorAll(
                ".nav-dropdown.is-open"
            ).forEach(dropdown => {

                dropdown.classList.remove("is-open");

            });

        }

    });


    /* =====================================================
       FOOTER YEAR
    ===================================================== */

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       INITIALIZE
    ===================================================== */

    filterResources();

    translatePage();

});
