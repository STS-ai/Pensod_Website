const translations = {
    en: {
        // Navigation
        home: "Home",
        technology: "Technology",
        platform: "Platform",
        about: "About",
        blog: "Blog",
        requestDemo: "Request a Demo",
        benefits: "Benefits",
        calculator: "Calculator",
        testimonials: "Testimonials",
        contact: "Contact",
        advisorLogin: "Advisor Login",
        
        // Hero Section
        heroTitle: "Financial Advisory",
        heroSubtitle: "Powered by AI",
        heroDescription: "Revolutionizing retirement advisory with AI – for users and institutions",
        learnMore: "Learn More",
        
        // Problem Section
        problemTitle: "Manual Work is Killing Advisor Efficiency",
        outdatedProcesses: "Outdated Processes",
        outdatedProcessesDesc: "Offline documentation using spreadsheets or printed forms",
        inefficientCommunication: "Inefficient Communication",
        inefficientCommunicationDesc: "Client conversations occur annually with no digital tracking",
        fragmentedWorkflows: "Fragmented Workflows",
        fragmentedWorkflowsDesc: "Advisors use non-integrated systems",
        heavyAdministrativeLoad: "Heavy Administrative Load",
        heavyAdministrativeLoadDesc: "65% of advisor time is spent on back-office",
        cognitiveLoadBurnout: "Cognitive Load & Burnout",
        cognitiveLoadBurnoutDesc: "71% of advisors report frequent stress",
        hiddenHeadcountCosts: "Hidden Headcount Costs",
        hiddenHeadcountCostsDesc: "Solo advisors hire 1–2 assistants to cope",
        
        // Technology Section
        techTitle: "AI-Empowered Financial Professionals",
        techSubtitle: "Leveraging Robo-Advisors capabilities into human decision-centric protocols",
        aiPoweredInsights: "AI-Powered Insights",
        aiPoweredInsightsDesc: "Algorithms generate personalized retirement scenarios",
        hybridRecommendation: "Hybrid-Recommendation Engine",
        hybridRecommendationDesc: "Rules + ML logic for explainability",
        dualPlatform: "Dual-Platform",
        dualPlatformDesc: "Advisor dashboard + client mobile app",
        seamlessIntegration: "Seamless-Integration",
        seamlessIntegrationDesc: "Fast connection with your existing systems via API",
        whiteLabelTech: "White-Label Technology",
        whiteLabelTechDesc: "Custom branding, your logo, full agency experience",
        
        // Benefits Section
        benefitsTitle: "Benefits for Your Agency",
        reduceTimeTitle: "Reduce Time Spent on Manual Tasks",
        reduceTimeDesc: "Pension.ai automates calculations and scenario planning, freeing advisors to focus on relationships instead of paperwork. Reports are generated instantly — and with your agency's branding.",
        increaseProductivityTitle: "Increase Advisor Productivity",
        increaseProductivityDesc: "Advisors gain powerful visualization tools that make it easy to explain complex pension topics. The platform streamlines day-to-day work, leading to faster client onboarding and fewer errors.",
        enhanceExperienceTitle: "Enhance Client Experience",
        enhanceExperienceDesc: "Clients get 24/7 access to their pension information through your branded mobile app. With interactive tools and secure messaging, they stay engaged and confident in their plan.",
        integrateTitle: "Integrate Without Disruption",
        integrateDesc: "Our platform connects to your existing systems via API. That means no manual transfers, no data loss, and no disruption to your current workflows.",
        matchBrandTitle: "Match Your Brand",
        matchBrandDesc: "Pension.ai is a white-label solution. From reports to the client app, your branding — your logo, colors, and identity — takes the lead while we handle the technology.",
        
        // Calculator Section
        calculatorTitle: "Calculate Your Potential Savings",
        calculatorSubtitle: "See how Pension.ai can transform your advisory practice",
        platformTitle: "Our Platform",
        platformDescription: "Experience our cutting-edge platform that combines advanced AI technology with financial expertise to provide personalized pension solutions. Our intuitive interface makes it easy to manage your retirement planning with confidence.",
        advisorsLabel: "Number of Advisors",
        assistantsLabel: "Number of Admin Assistants",
        clientsLabel: "Average Clients per Advisor",
        hourlyLabel: "Average Advisor Hourly Rate ($)",
        adminLabel: "Hours Spent on Admin Tasks (Monthly)",
        calculateButton: "Calculate Savings",
        timeSavingsTitle: "Annual Time Savings",
        timeSavingsDesc: "Time freed up for client relationships",
        costSavingsTitle: "Cost Savings",
        costSavingsDesc: "Reduced operational costs",
        staffReductionTitle: "Staff Reduction",
        staffReductionDesc: "Potential admin staff reduction",
        capacityTitle: "Additional Capacity",
        capacityDesc: "More clients you can serve",
        
        // Testimonials Section
        testimonialsTitle: "What Our Clients Say",
        testimonialsSubtitle: "Trusted by leading financial institutions",
        
        // About Section
        aboutTitle: "About Us",
        aboutLead: "At Pension.ai, we are redefining how retirement and wealth planning are delivered.",
        aboutDesc1: "We empower both financial advisors and wealth management agencies with intelligent tools that boost productivity, improve client outcomes, and simplify complex operations. Our platform blends advanced AI with real-world financial expertise to support firms of any size.",
        aboutDesc2: "Our mission is to bridge the gap between human insight and machine intelligence. By combining the judgment of experienced advisors with smart algorithms and real-time data, we help professionals scale their impact, reduce overhead, and navigate regulatory challenges, all while keeping the client experience personal.",
        aboutDesc3: "Founded by a team of seasoned experts in AI, fintech, and enterprise software, Pension.ai is proud to be part of the Microsoft for Startups program and operates from the heart of Tel Aviv's innovation district.",
        missionStatement: "We're building a future where retirement advice is more accessible, more efficient, and more intelligent for everyone.",
        
        // Ecosystem Section
        ecosystemTitle: "Ecosystem Collaborations",
        ecosystemDesc: "We collaborate with leading tech and financial institutions to ensure seamless integration and cutting-edge performance.",
        
        // Security Section
        securityTitle: "Security & Compliance",
        securitySubtitle: "Your data security is our top priority",
        bankLevelTitle: "Bank-Level Security",
        bankLevelDesc: "256-bit encryption and multi-factor authentication ensure your data remains protected at all times.",
        complianceTitle: "Compliance Ready",
        complianceDesc: "Built to meet GDPR, CCPA, and financial industry regulations with regular compliance audits.",
        dataProtectionTitle: "Data Protection",
        dataProtectionDesc: "Regular backups, secure data centers, and strict access controls protect your information.",
        certifiedTitle: "Certified & Audited",
        certifiedDesc: "ISO 27001 certified with regular security audits and penetration testing.",
        
        // Blog Section
        blogTitle: "Blog",
        blogSubtitle: "Stay ahead with the latest innovations in FinTech",
        blogPost1Title: "The Future of AI in Financial Advisory",
        blogPost1Desc: "How Artificial Intelligence is Transforming Retirement Planning",
        blogPost1Content: "Artificial Intelligence is revolutionizing the financial advisory landscape, particularly in retirement planning. This article explores how AI-powered tools are enabling advisors to provide more personalized, data-driven recommendations while reducing administrative burdens. We'll examine real-world applications, success stories, and the future potential of AI in financial advisory.",
        blogPost2Title: "Navigating Regulatory Changes in Retirement Planning",
        blogPost2Desc: "A Guide to Staying Compliant in an Evolving Advisory Landscape",
        blogPost2Content: "The regulatory environment for retirement planning is constantly evolving. This comprehensive guide helps financial advisors stay compliant while maximizing client benefits. We cover recent regulatory changes, compliance best practices, and how technology can help streamline regulatory reporting and documentation.",
        blogPost3Title: "Addressing Advisor Burnout Through Technology",
        blogPost3Desc: "How Smart Tools Can Restore Focus and Reignite Purpose",
        blogPost3Content: "Advisor burnout is a growing concern in the financial services industry. This article examines how technology can help reduce administrative tasks, improve work-life balance, and allow advisors to focus on what matters most: building meaningful client relationships. Learn practical strategies for leveraging technology to prevent burnout and enhance job satisfaction.",
        blogPost4Title: "The Millennial Wealth Transfer: Are You Ready?",
        blogPost4Desc: "Positioning Your Advisory Firm for the $84 Trillion Opportunity",
        blogPost4Content: "The largest wealth transfer in history is underway, with millennials set to inherit $84 trillion. This article provides actionable insights for financial advisors looking to attract and serve millennial clients. We explore their unique needs, preferences, and how technology can help bridge the generational gap in financial advisory services.",
        
        // Contact Section
        getInTouch: "Get in Touch",
        name: "Name",
        email: "Email",
        company: "Company",
        message: "Message",
        sendMessage: "Send Message",
        ctaText: "Let us show you how Pension.ai can upgrade your agency's advisory experience.",
        contactEmail: "Email: stav@pensionai.org",
        contactAddress: "Address: 144 Menachem Begin Blvd. Floor 50, Tel Aviv",
        
        // Footer
        copyright: "Copyright © 2025 Pension.ai"
    },
    he: {
        // Navigation
        home: "בית",
        technology: "טכנולוגיה",
        platform: "פלטפורמה",
        about: "אודות",
        blog: "בלוג",
        requestDemo: "בקש הדגמה",
        benefits: "יתרונות",
        calculator: "מחשבון",
        testimonials: "המלצות",
        contact: "צור קשר",
        advisorLogin: "כניסת יועץ",
        
        // Hero Section
        heroTitle: "ייעוץ פיננסי",
        heroSubtitle: "מונע בינה מלאכותית",
        heroDescription: "מהפכה בייעוץ פנסיוני עם בינה מלאכותית – למשתמשים ולמוסדות",
        learnMore: "למידע נוסף",
        
        // Problem Section
        problemTitle: "עבודה ידנית פוגעת ביעילות היועץ",
        outdatedProcesses: "תהליכים מיושנים",
        outdatedProcessesDesc: "תיעוד לא מקוון באמצעות גיליונות אלקטרוניים או טפסים מודפסים",
        inefficientCommunication: "תקשורת לא יעילה",
        inefficientCommunicationDesc: "שיחות לקוחות מתקיימות פעם בשנה ללא מעקב דיגיטלי",
        fragmentedWorkflows: "זרימות עבודה מקוטעות",
        fragmentedWorkflowsDesc: "יועצים משתמשים במערכות לא משולבות",
        heavyAdministrativeLoad: "עומס אדמיניסטרטיבי כבד",
        heavyAdministrativeLoadDesc: "65% מזמן היועץ מושקע בעבודת משרד",
        cognitiveLoadBurnout: "עומס קוגניטיבי ושחיקה",
        cognitiveLoadBurnoutDesc: "71% מהיועצים מדווחים על לחץ תכוף",
        hiddenHeadcountCosts: "עלויות כוח אדם נסתרות",
        hiddenHeadcountCostsDesc: "יועצים עצמאיים מעסיקים 1-2 עוזרים כדי להתמודד",
        
        // Technology Section
        techTitle: "מקצוענים פיננסיים מועצמים בבינה מלאכותית",
        techSubtitle: "מינוף יכולות של רובו-יועצים לפרוטוקולים מבוססי החלטות אנושיות",
        aiPoweredInsights: "תובנות מונעות בינה מלאכותית",
        aiPoweredInsightsDesc: "אלגוריתמים מייצרים תרחישי פרישה מותאמים אישית",
        hybridRecommendation: "מנוע המלצות היברידי",
        hybridRecommendationDesc: "לוגיקה של כללים + למידת מכונה להסבריות",
        dualPlatform: "פלטפורמה כפולה",
        dualPlatformDesc: "לוח בקרה ליועץ + אפליקציית מובייל ללקוח",
        seamlessIntegration: "אינטגרציה חלקה",
        seamlessIntegrationDesc: "חיבור מהיר למערכות הקיימות שלך באמצעות API",
        whiteLabelTech: "טכנולוגיית מותג לבן",
        whiteLabelTechDesc: "מותג מותאם אישית, הלוגו שלך, חוויית סוכנות מלאה",
        
        // Benefits Section
        benefitsTitle: "יתרונות לסוכנות שלך",
        reduceTimeTitle: "הפחתת זמן המושקע במשימות ידניות",
        reduceTimeDesc: "Pension.ai ממכן חישובים ותכנון תרחישים, ומשחרר יועצים להתמקד ביחסים במקום בניירת. דוחות נוצרים באופן מיידי — ועם המותג של הסוכנות שלך.",
        increaseProductivityTitle: "הגדלת פריון היועץ",
        increaseProductivityDesc: "יועצים מקבלים כלי ויזואליזציה חזקים שמקלים על הסבר נושאי פנסיה מורכבים. הפלטפורמה מפשטת את העבודה היומיומית, מובילה להטמעת לקוחות מהירה יותר ופחות שגיאות.",
        enhanceExperienceTitle: "שיפור חווית הלקוח",
        enhanceExperienceDesc: "לקוחות מקבלים גישה 24/7 למידע הפנסיוני שלהם דרך אפליקציית המובייל המותגת שלך. עם כלים אינטראקטיביים והודעות מאובטחות, הם נשארים מעורבים ובטוחים בתוכנית שלהם.",
        integrateTitle: "אינטגרציה ללא הפרעה",
        integrateDesc: "הפלטפורמה שלנו מתחברת למערכות הקיימות שלך באמצעות API. זה אומר ללא העברות ידניות, ללא אובדן נתונים, וללא הפרעה לזרימות העבודה הנוכחיות שלך.",
        matchBrandTitle: "התאמה למותג שלך",
        matchBrandDesc: "Pension.ai הוא פתרון מותג לבן. מדוחות ועד אפליקציית הלקוח, המותג שלך — הלוגו, הצבעים והזהות שלך — מובילים בעוד אנחנו מטפלים בטכנולוגיה.",
        
        // Calculator Section
        calculatorTitle: "חשב את החיסכון הפוטנציאלי שלך",
        calculatorSubtitle: "ראה כיצד Pension.ai יכול לשנות את פרקטיקת הייעוץ שלך",
        platformTitle: "פלטפורמה שלנו",
        platformDescription: "חוו את פלטפורמת הטכנולוגיה המתקדמת שלנו שמשלבת את האינטליגנציה של האלגוריתמים עם מומחיות פיננסיות מעשית לתמיכה בחברות בכל גודל.",
        advisorsLabel: "מספר יועצים",
        assistantsLabel: "מספר עוזרים אדמיניסטרטיביים",
        clientsLabel: "ממוצע לקוחות ליועץ",
        hourlyLabel: "שכר שעתי ממוצע של יועץ ($)",
        adminLabel: "שעות המושקעות במשימות אדמיניסטרטיביות (חודשי)",
        calculateButton: "חשב חיסכון",
        timeSavingsTitle: "חיסכון שנתי בזמן",
        timeSavingsDesc: "זמן פנוי ליחסי לקוחות",
        costSavingsTitle: "חיסכון בעלויות",
        costSavingsDesc: "הפחתת עלויות תפעול",
        staffReductionTitle: "הפחתת כוח אדם",
        staffReductionDesc: "פוטנציאל להפחתת כוח אדם אדמיניסטרטיבי",
        capacityTitle: "קיבולת נוספת",
        capacityDesc: "לקוחות נוספים שתוכל לשרת",
        
        // Testimonials Section
        testimonialsTitle: "מה הלקוחות שלנו אומרים",
        testimonialsSubtitle: "מוכר על ידי מוסדות פיננסיים מובילים",
        
        // About Section
        aboutTitle: "אודותינו",
        aboutLead: "ב-Pension.ai, אנחנו מגדירים מחדש את אופן מתן הייעוץ לפנסיה ותכנון עושר.",
        aboutDesc1: "אנחנו מעצימים יועצים פיננסיים וסוכנויות ניהול עושר עם כלים חכמים שמגבירים פריון, משפרים תוצאות ללקוחות ומפשטים פעולות מורכבות. הפלטפורמה שלנו משלבת בינה מלאכותית מתקדמת עם מומחיות פיננסית מעשית לתמיכה בחברות בכל גודל.",
        aboutDesc2: "המשימה שלנו היא לגשר על הפער בין תובנה אנושית לבינה מלאכותית. על ידי שילוב השיפוט של יועצים מנוסים עם אלגוריתמים חכמים ונתונים בזמן אמת, אנחנו עוזרים למקצוענים להרחיב את ההשפעה שלהם, להפחית עלויות תפעול ולנווט באתגרים רגולטוריים, תוך שמירה על חוויית לקוח אישית.",
        aboutDesc3: "נוסד על ידי צוות של מומחים מנוסים בבינה מלאכותית, פינטק ותוכנה ארגונית, Pension.ai גאה להיות חלק מתכנית Microsoft for Startups ומפעיל את משרדיו בלב אזור החדשנות של תל אביב.",
        missionStatement: "אנחנו בונים עתיד שבו ייעוץ פנסיוני נגיש יותר, יעיל יותר וחכם יותר לכולם.",
        
        // Ecosystem Section
        ecosystemTitle: "שיתופי פעולה אקולוגיים",
        ecosystemDesc: "אנחנו משתפים פעולה עם מוסדות טכנולוגיה ופיננסים מובילים כדי להבטיח אינטגרציה חלקה וביצועים מתקדמים.",
        
        // Security Section
        securityTitle: "אבטחה ותאימות",
        securitySubtitle: "אבטחת הנתונים שלך היא העדיפות העליונה שלנו",
        bankLevelTitle: "אבטחה ברמת בנק",
        bankLevelDesc: "הצפנת 256-ביט ואימות רב-שלבי מבטיחים שהנתונים שלך נשארים מוגנים בכל עת.",
        complianceTitle: "מוכן לתאימות",
        complianceDesc: "נבנה לעמוד בתקנות GDPR, CCPA ותקנות תעשיית הפיננסים עם ביקורות תאימות קבועות.",
        dataProtectionTitle: "הגנת נתונים",
        dataProtectionDesc: "גיבויים קבועים, מרכזי נתונים מאובטחים ובקרות גישה קפדניות מגנים על המידע שלך.",
        certifiedTitle: "מוסמך ומבוקר",
        certifiedDesc: "מוסמך ISO 27001 עם ביקורות אבטחה קבועות ובדיקות חדירה.",
        
        // Blog Section
        blogTitle: "בלוג",
        blogSubtitle: "הישאר מעודכן עם החידושים האחרונים בפינטק",
        blogPost1Title: "עתיד הבינה המלאכותית בייעוץ פיננסי",
        blogPost1Desc: "כיצד בינה מלאכותית משנה את תכנון הפרישה",
        blogPost1Content: "בינה מלאכותית מהפכת את נוף הייעוץ הפיננסי, במיוחד בתכנון פרישה. מאמר זה בוחן כיצד כלים מבוססי בינה מלאכותית מאפשרים ליועצים לספק המלצות מותאמות אישית יותר, מבוססות נתונים, תוך הפחתת עומס אדמיניסטרטיבי. נבחן יישומים בעולם האמיתי, סיפורי הצלחה והפוטנציאל העתידי של בינה מלאכותית בייעוץ פיננסי.",
        blogPost2Title: "ניווט בשינויים רגולטוריים בתכנון פרישה",
        blogPost2Desc: "מדריך לשמירה על תאימות בסביבת ייעוץ מתפתחת",
        blogPost2Content: "הסביבה הרגולטורית לתכנון פרישה מתפתחת ללא הרף. מדריך מקיף זה עוזר ליועצים פיננסיים להישאר תאימים תוך מיקסום הטבות ללקוחות. אנו מכסים שינויים רגולטוריים אחרונים, שיטות עבודה מומלצות לתאימות, וכיצד טכנולוגיה יכולה לעזור לייעל דיווח ותיעוד רגולטורי.",
        blogPost3Title: "טיפול בשחיקת יועצים באמצעות טכנולוגיה",
        blogPost3Desc: "כיצד כלים חכמים יכולים להחזיר את המיקוד ולהצית מחדש את התכלית",
        blogPost3Content: "שחיקת יועצים היא דאגה גוברת בתעשיית השירותים הפיננסיים. מאמר זה בוחן כיצד טכנולוגיה יכולה לעזור להפחית משימות אדמיניסטרטיביות, לשפר איזון עבודה-חיים, ולאפשר ליועצים להתמקד במה שחשוב ביותר: בניית יחסי לקוחות משמעותיים. למד אסטרטגיות מעשיות למינוף טכנולוגיה למניעת שחיקה ושיפור שביעות רצון בעבודה.",
        blogPost4Title: "העברת העושר של דור המילניום: האם אתה מוכן?",
        blogPost4Desc: "מיצוב חברת הייעוץ שלך להזדמנות של 84 טריליון דולר",
        blogPost4Content: "העברת העושר הגדולה בהיסטוריה בעיצומה, כאשר דור המילניום עתיד לרשת 84 טריליון דולר. מאמר זה מספק תובנות מעשיות ליועצים פיננסיים המבקשים למשוך ולשרת לקוחות מדור המילניום. אנו בוחנים את הצרכים הייחודיים שלהם, העדפות, וכיצד טכנולוגיה יכולה לעזור לגשר על הפער הבין-דורי בשירותי ייעוץ פיננסי.",
        
        // Contact Section
        getInTouch: "צור קשר",
        name: "שם",
        email: "דוא״ל",
        company: "חברה",
        message: "הודעה",
        sendMessage: "שלח הודעה",
        ctaText: "תן לנו להראות לך איך Pension.ai יכול לשדרג את חווית הייעוץ של הסוכנות שלך.",
        contactEmail: "דוא״ל: stav@pensionai.org",
        contactAddress: "כתובת: שדרות מנחם בגין 144, קומה 50, תל אביב",
        
        // Footer
        copyright: "זכויות יוצרים © 2025 Pension.ai"
    }
};

// Language configuration
const languageConfig = {
    en: {
        direction: 'ltr',
        fontFamily: 'Inter, sans-serif',
        textAlign: 'left'
    },
    he: {
        direction: 'rtl',
        fontFamily: 'Heebo, sans-serif',
        textAlign: 'right'
    }
}; 