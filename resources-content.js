/* Psycedu resource reader content.
 * Load before resources.js.
 */
(() => {
    "use strict";

    const entries = {
        "guide-1": {
            en: {
                title: "Helping Children Understand Their Emotions",
                content: `
                    <p>Talking about feelings can become part of everyday family and classroom life. The goal is to help children describe their experience and choose a safe next step.</p>

                    <h3>1. Make space to notice</h3>
                    <p>Choose a calm moment and ask, “How are you feeling?” Offer words such as happy, disappointed, worried, or excited. Children can also point to a face, draw, or say they are unsure.</p>

                    <h3>2. Listen before explaining</h3>
                    <p>Try, “It sounds like you felt left out when the game started.” Check your understanding rather than deciding what the child must feel. Allow them to correct you.</p>

                    <h3>3. Accept feelings and set safe limits</h3>
                    <p>You can say, “Being angry is okay. Hitting hurts. Let's find another way to show it.” Separate the emotion from the action without shaming the child.</p>

                    <h3>4. Choose one helpful action</h3>
                    <ul>
                        <li>Ask for a quiet moment or a drink of water.</li>
                        <li>Draw or write about the experience.</li>
                        <li>Ask a trusted adult to listen.</li>
                        <li>Practice a simple sentence: “I feel upset because… I need…”</li>
                    </ul>

                    <h3>5. Return to the conversation</h3>
                    <p>Later, ask what helped and what they might try next time. Notice their effort to communicate, even when they still need support.</p>

                    <p><strong>Try today:</strong> Share one feeling of your own and a safe way you handled it. Invite the child to share without requiring an answer.</p>
                `
            },

            ar: {
                title: "مساعدة الأطفال على فهم مشاعرهم",
                content: `
                    <p>يمكن أن يصبح الحديث عن المشاعر جزءاً من الحياة اليومية في المنزل والصف. الهدف هو مساعدة الطفل على وصف تجربته واختيار خطوة آمنة للتعامل معها.</p>

                    <h3>١. إتاحة مساحة للملاحظة</h3>
                    <p>اختر وقتاً هادئاً واسأل: «كيف تشعر؟». اقترح كلمات مثل سعيد أو محبط أو قلق أو متحمس. يمكن للطفل أيضاً الإشارة إلى وجه مرسوم أو الرسم أو القول إنه غير متأكد.</p>

                    <h3>٢. الاستماع قبل التفسير</h3>
                    <p>جرّب قول: «يبدو أنك شعرت بأنك مستبعد عندما بدأت اللعبة». تحقّق من فهمك بدلاً من تحديد شعوره نيابةً عنه، واترك له فرصة تصحيح ما فهمته.</p>

                    <h3>٣. تقبّل المشاعر ووضع حدود آمنة</h3>
                    <p>يمكنك القول: «من المقبول أن تغضب، لكن الضرب يؤذي. لنبحث عن طريقة أخرى للتعبير». ميّز بين الشعور والتصرف من دون إشعار الطفل بالخجل.</p>

                    <h3>٤. اختيار خطوة مساعدة واحدة</h3>
                    <ul>
                        <li>طلب لحظة هدوء أو شرب الماء.</li>
                        <li>الرسم أو الكتابة عن التجربة.</li>
                        <li>طلب الاستماع من شخص بالغ موثوق.</li>
                        <li>التدرّب على عبارة: «أشعر بالانزعاج لأن… وأحتاج إلى…».</li>
                    </ul>

                    <h3>٥. العودة إلى الحوار</h3>
                    <p>اسأل لاحقاً عمّا ساعده وما الذي قد يجرّبه في المرة المقبلة. قدّر محاولته التعبير حتى إن كان ما زال يحتاج إلى المساندة.</p>

                    <p><strong>جرّب اليوم:</strong> شارك شعوراً مررت به وطريقة آمنة تعاملت بها معه، وادعُ الطفل للمشاركة من دون إلزامه بالإجابة.</p>
                `
            }
        },

        "guide-2": {
            en: {
                title: "Supporting an Anxious Child",
                content: `
                    <p>When a child shares a worry, begin with curiosity and a calm conversation. You do not need to solve everything immediately.</p>

                    <h3>Listen to the child's words</h3>
                    <p>Ask, “What feels difficult about this?” Avoid assuming that you already know the reason. Let the child explain through words, drawing, or play.</p>

                    <h3>Offer honest reassurance</h3>
                    <p>Instead of promising that nothing difficult will happen, say, “I will help you work out what to do.” Acknowledge the feeling without confirming every feared outcome.</p>

                    <h3>Plan a manageable next step</h3>
                    <p>For a worrying classroom presentation, you might offer to practice the opening sentence together. Agree on a small step and review it with the child; avoid surprise demands or pressure.</p>

                    <h3>Build a support plan</h3>
                    <ul>
                        <li>Identify a trusted adult the child can approach.</li>
                        <li>Explain daily plans and changes in clear language.</li>
                        <li>Offer a short pause when the child feels overwhelmed.</li>
                        <li>Notice effort and participation rather than demanding perfect confidence.</li>
                    </ul>

                    <h3>Know when to ask for help</h3>
                    <p>If worries persist, become overwhelming, or interfere with everyday life, discuss your concerns with a qualified professional. This guide cannot determine whether a child has an anxiety disorder.</p>
                `
            },

            ar: {
                title: "دعم الطفل القلق",
                content: `
                    <p>عندما يعبّر الطفل عن قلقه، ابدأ بالفضول والحوار الهادئ. لست مضطراً إلى حل كل شيء فوراً.</p>

                    <h3>الاستماع إلى كلمات الطفل</h3>
                    <p>اسأل: «ما الذي يبدو صعباً في هذا الموقف؟». تجنّب افتراض أنك تعرف السبب مسبقاً. اترك له فرصة التعبير بالكلام أو الرسم أو اللعب.</p>

                    <h3>تقديم طمأنة صادقة</h3>
                    <p>بدلاً من الوعد بأن شيئاً صعباً لن يحدث، قل: «سأساعدك على التفكير فيما يمكنك فعله». اعترف بشعوره من دون تأكيد كل الاحتمالات التي يخشاها.</p>

                    <h3>التخطيط لخطوة ممكنة</h3>
                    <p>إذا كان العرض أمام الصف يقلقه، اقترح التدرّب معاً على الجملة الأولى. اتفقا على خطوة صغيرة وراجعاها معاً، وتجنّب المطالب المفاجئة والضغط.</p>

                    <h3>وضع خطة للمساندة</h3>
                    <ul>
                        <li>تحديد شخص بالغ موثوق يمكنه اللجوء إليه.</li>
                        <li>شرح البرنامج اليومي والتغييرات بكلمات واضحة.</li>
                        <li>إتاحة استراحة قصيرة عند الشعور بالإرهاق.</li>
                        <li>تقدير المحاولة والمشاركة بدلاً من اشتراط الثقة الكاملة.</li>
                    </ul>

                    <h3>متى نطلب المساعدة؟</h3>
                    <p>إذا استمر القلق أو أصبح شديداً أو أثّر في الحياة اليومية، ناقش مخاوفك مع مختص مؤهل. لا يحدّد هذا الدليل ما إذا كان الطفل يعاني اضطراب قلق.</p>
                `
            }
        },

        "guide-3": {
            en: {
                title: "Creating an Emotionally Supportive Classroom",
                content: `
                    <p>A supportive classroom gives students ways to ask questions, make mistakes, and request help while maintaining clear, respectful boundaries.</p>

                    <h3>Make routines understandable</h3>
                    <p>Display the lesson plan, explain transitions, and state expectations in simple language. Let students know how to ask for clarification or a short break.</p>

                    <h3>Offer private check-ins</h3>
                    <p>Try a brief conversation, a written note, or an optional feelings card. Do not require students to disclose personal experiences in front of classmates.</p>

                    <h3>Respond respectfully</h3>
                    <p>Describe the situation without labels: “You have not started the task. What would help you begin?” Avoid public comparisons and comments about a student's character.</p>

                    <h3>Provide different ways to participate</h3>
                    <ul>
                        <li>Allow thinking time before an answer.</li>
                        <li>Offer a written response or paired discussion where appropriate.</li>
                        <li>Break a large task into clear steps.</li>
                        <li>Recognize questions, effort, and respectful cooperation.</li>
                    </ul>

                    <h3>Connect students with support</h3>
                    <p>Follow the school's support and safeguarding procedures when concerns arise. Explain the limits of confidentiality and share concerns only with appropriate people through the school's process.</p>

                    <p><strong>Classroom prompt:</strong> “What is one thing that would help you learn today?” Allow students to pass.</p>
                `
            },

            ar: {
                title: "إنشاء صف داعم للمشاعر",
                content: `
                    <p>يتيح الصف الداعم للطلاب طرح الأسئلة وارتكاب الأخطاء وطلب المساعدة، مع الحفاظ على حدود واضحة ومحترمة.</p>

                    <h3>توضيح الروتين</h3>
                    <p>اعرض خطة الدرس واشرح الانتقال بين الأنشطة والتوقعات بلغة بسيطة. وضّح كيفية طلب شرح إضافي أو استراحة قصيرة.</p>

                    <h3>إتاحة تواصل فردي</h3>
                    <p>جرّب محادثة قصيرة أو ملاحظة مكتوبة أو بطاقة مشاعر اختيارية. لا تُلزم الطلاب بالكشف عن تجاربهم الشخصية أمام زملائهم.</p>

                    <h3>الاستجابة باحترام</h3>
                    <p>صف الموقف من دون إطلاق صفات: «لم تبدأ المهمة بعد، ما الذي يساعدك على البدء؟». تجنّب المقارنات العلنية والتعليقات على شخصية الطالب.</p>

                    <h3>تنويع فرص المشاركة</h3>
                    <ul>
                        <li>إتاحة وقت للتفكير قبل الإجابة.</li>
                        <li>قبول إجابة مكتوبة أو نقاش ثنائي حين يكون ذلك مناسباً.</li>
                        <li>تقسيم المهمة الكبيرة إلى خطوات واضحة.</li>
                        <li>تقدير الأسئلة والمحاولة والتعاون المحترم.</li>
                    </ul>

                    <h3>توجيه الطلاب إلى المساندة</h3>
                    <p>اتبع إجراءات المدرسة للمساندة وحماية الطلاب عند وجود مخاوف. وضّح حدود السرية وشارك المعلومات مع الأشخاص المعنيين فقط عبر الإجراءات المعتمدة.</p>

                    <p><strong>سؤال للصف:</strong> «ما الأمر الذي يساعدك على التعلّم اليوم؟». اسمح للطالب بعدم الإجابة.</p>
                `
            }
        },

        "article-1": {
            en: {
                title: "Anxiety vs. Stress: Understanding the Difference",
                content: `
                    <p>People often use “stress” and “anxiety” to describe feeling under pressure or worried. The words can overlap, and a label alone does not explain someone's experience.</p>

                    <h3>Start with the situation</h3>
                    <p>A student might describe pressure about a deadline as stress and worry about what could happen as anxiety. These are everyday examples, not a way to diagnose a condition.</p>

                    <h3>Ask useful questions</h3>
                    <ul>
                        <li>What is happening, and what am I worried about?</li>
                        <li>How long has this been troubling me?</li>
                        <li>Is it affecting school, relationships, rest, or daily tasks?</li>
                        <li>What support would make the next step easier?</li>
                    </ul>

                    <h3>Choose a practical response</h3>
                    <p>Write down a manageable next task, take a brief pause, or speak with someone you trust. If the difficulty continues or affects everyday life, a qualified professional can help you understand what is happening.</p>

                    <p><strong>Remember:</strong> You do not need to decide on the correct label before asking for support. This article is educational and cannot provide an assessment.</p>
                `
            },

            ar: {
                title: "القلق والضغط النفسي: فهم الفرق",
                content: `
                    <p>يستخدم الناس كلمتي «الضغط النفسي» و«القلق» لوصف الشعور بالضغط أو الانشغال بالمخاوف. قد يتداخل الاستخدام، ولا يكفي الاسم وحده لفهم تجربة الشخص.</p>

                    <h3>البدء بالموقف</h3>
                    <p>قد يصف الطالب ضغط موعد التسليم بأنه ضغط نفسي، ويصف انشغاله بما قد يحدث بأنه قلق. هذه أمثلة يومية وليست وسيلة لتشخيص حالة.</p>

                    <h3>طرح أسئلة مفيدة</h3>
                    <ul>
                        <li>ماذا يحدث، وما الذي يقلقني؟</li>
                        <li>منذ متى يزعجني هذا الأمر؟</li>
                        <li>هل يؤثر في الدراسة أو العلاقات أو الراحة أو المهام اليومية؟</li>
                        <li>ما المساندة التي تجعل الخطوة المقبلة أسهل؟</li>
                    </ul>

                    <h3>اختيار استجابة عملية</h3>
                    <p>دوّن مهمة تالية يمكنك إنجازها، أو خذ استراحة قصيرة، أو تحدث مع شخص تثق به. إذا استمرت الصعوبة أو أثّرت في الحياة اليومية، يمكن لمختص مؤهل مساعدتك على فهم ما تمر به.</p>

                    <p><strong>تذكّر:</strong> لست بحاجة إلى اختيار الاسم الصحيح قبل طلب المساندة. هذا المقال تثقيفي ولا يقدّم تقييماً.</p>
                `
            }
        },

        "article-2": {
            en: {
                title: "Understanding Emotional Regulation in Children and Adolescents",
                content: `
                    <p>For everyday learning, emotional regulation can be understood as noticing a feeling and choosing how to respond. The aim is safe expression rather than never feeling upset.</p>

                    <h3>Notice and name</h3>
                    <p>Invite the young person to describe what they feel and what happened. Offer words without insisting on your interpretation: “Would disappointed fit, or is it something else?”</p>

                    <h3>Pause before problem-solving</h3>
                    <p>Ask whether they would like company, quiet, or a short break. Keep instructions simple and save a longer discussion for a time when they are ready.</p>

                    <h3>Practice choices together</h3>
                    <ul>
                        <li>Use words to request space.</li>
                        <li>Write a message before starting a difficult conversation.</li>
                        <li>Identify someone who can help.</li>
                        <li>Plan a safe response to a recurring disagreement.</li>
                    </ul>

                    <h3>Reflect without blame</h3>
                    <p>Ask, “What helped? What could we change next time?” Adults can model this by acknowledging their own mistakes and repairing hurtful interactions.</p>

                    <p>If emotional difficulties repeatedly disrupt daily life, seek individualized guidance from a qualified professional.</p>
                `
            },

            ar: {
                title: "فهم تنظيم المشاعر لدى الأطفال والمراهقين",
                content: `
                    <p>يمكن فهم تنظيم المشاعر في الحياة اليومية على أنه ملاحظة الشعور واختيار كيفية الاستجابة له. الهدف هو التعبير الآمن، وليس الامتناع الدائم عن الشعور بالانزعاج.</p>

                    <h3>الملاحظة والتسمية</h3>
                    <p>ادعُ الطفل أو المراهق إلى وصف شعوره وما حدث. اقترح كلمات من دون الإصرار على تفسيرك: «هل يناسبك وصف خيبة الأمل، أم أنه شعور آخر؟».</p>

                    <h3>التوقف قبل حل المشكلة</h3>
                    <p>اسأله إن كان يفضّل وجود شخص بجانبه أو الهدوء أو استراحة قصيرة. اجعل التعليمات بسيطة وأجّل النقاش الطويل إلى حين استعداده.</p>

                    <h3>التدرّب معاً على الخيارات</h3>
                    <ul>
                        <li>طلب مساحة بالكلمات.</li>
                        <li>كتابة رسالة قبل بدء حوار صعب.</li>
                        <li>تحديد شخص يمكنه المساعدة.</li>
                        <li>التخطيط لاستجابة آمنة لخلاف متكرر.</li>
                    </ul>

                    <h3>التأمل من دون لوم</h3>
                    <p>اسأل: «ما الذي ساعد؟ وما الذي يمكن تغييره في المرة المقبلة؟». يستطيع الكبار تقديم مثال بالاعتراف بأخطائهم وإصلاح المواقف المؤذية.</p>

                    <p>إذا تكررت الصعوبات العاطفية وأثّرت في الحياة اليومية، اطلب إرشاداً فردياً من مختص مؤهل.</p>
                `
            }
        },

        "article-3": {
            en: {
                title: "Why Teenagers Sometimes Stop Talking to Their Parents",
                content: `
                    <p>A quieter conversation does not tell you everything about a teenager's thoughts. Instead of deciding why they have withdrawn, make room to understand their perspective.</p>

                    <h3>Ask without interrogation</h3>
                    <p>Try, “I've noticed we haven't talked much lately. Would you like some time together?” Offer a choice of when and how to talk, including a message or a walk.</p>

                    <h3>Listen before giving advice</h3>
                    <p>Ask, “Would you like me to listen or help think through options?” Avoid turning every disclosure into a lecture or comparison with someone else.</p>

                    <h3>Respect privacy and explain boundaries</h3>
                    <p>Discuss expectations openly. Do not promise secrecy you cannot keep when safety is involved. Explain what you need to share, with whom, and why.</p>

                    <h3>Keep small connections available</h3>
                    <ul>
                        <li>Offer an ordinary shared activity without requiring a serious conversation.</li>
                        <li>Follow up gently on something they mentioned.</li>
                        <li>Apologize for dismissive comments and invite a fresh start.</li>
                        <li>Keep invitations open if they are not ready to talk.</li>
                    </ul>

                    <p>If withdrawal is a marked change or comes with other concerns about daily life or safety, seek appropriate professional support rather than relying on silence alone to interpret the situation.</p>
                `
            },

            ar: {
                title: "لماذا يتوقف المراهقون أحياناً عن التحدث مع والديهم؟",
                content: `
                    <p>قلة الكلام لا تخبرك بكل ما يفكر فيه المراهق. بدلاً من تحديد سبب انسحابه مسبقاً، أتح فرصة لفهم وجهة نظره.</p>

                    <h3>السؤال من دون استجواب</h3>
                    <p>جرّب: «لاحظت أننا لا نتحدث كثيراً مؤخراً. هل تود قضاء بعض الوقت معاً؟». امنحه خيار الوقت وطريقة التواصل، مثل رسالة أو نزهة.</p>

                    <h3>الاستماع قبل النصيحة</h3>
                    <p>اسأل: «هل تريدني أن أستمع أم أن أساعدك في التفكير بالخيارات؟». تجنّب تحويل كل مشاركة إلى محاضرة أو مقارنة بالآخرين.</p>

                    <h3>احترام الخصوصية وشرح الحدود</h3>
                    <p>ناقش التوقعات بوضوح. لا تعد بسرية لا تستطيع الحفاظ عليها عندما تكون السلامة معنية. اشرح ما تحتاج إلى مشاركته ومع من ولماذا.</p>

                    <h3>الحفاظ على فرص بسيطة للتواصل</h3>
                    <ul>
                        <li>اقترح نشاطاً عادياً مشتركاً من دون اشتراط حوار جدي.</li>
                        <li>تابع بلطف أمراً ذكره سابقاً.</li>
                        <li>اعتذر عن التعليقات التي قلّلت من مشاعره وادعُ إلى بداية جديدة.</li>
                        <li>اترك باب الحوار مفتوحاً إذا لم يكن مستعداً.</li>
                    </ul>

                    <p>إذا كان الانسحاب تغيراً واضحاً أو ترافق مع مخاوف تتعلق بالحياة اليومية أو السلامة، اطلب مساندة مهنية مناسبة بدلاً من تفسير الموقف اعتماداً على الصمت وحده.</p>
                `
            }
        },

        "article-4": {
            en: {
                title: "Things Teachers Should Avoid Saying to an Anxious Student",
                content: `
                    <p>When a student appears worried, use language that invites understanding and offers a clear next step. The examples below are conversation prompts, not a treatment plan.</p>

                    <h3>Instead of “Just calm down”</h3>
                    <p>Try: “Would a short pause help? We can look at the first step together.” Offer support without demanding an immediate change in feelings.</p>

                    <h3>Instead of “There is nothing to worry about”</h3>
                    <p>Try: “What part feels worrying to you?” Listen before deciding what reassurance is useful.</p>

                    <h3>Instead of “Everyone else can do it”</h3>
                    <p>Try: “Let's work out what would help you start.” Keep the conversation focused on the student's needs.</p>

                    <h3>Instead of “You're being dramatic”</h3>
                    <p>Try: “I can see this is difficult. Would you prefer to speak privately?” Avoid judging the intensity of their experience.</p>

                    <h3>Keep expectations clear</h3>
                    <p>Respectful language can sit alongside firm boundaries: “I want to hear you. We need to speak without insulting anyone.” If concerns continue, follow the school's student-support process.</p>
                `
            },

            ar: {
                title: "عبارات ينبغي على المعلمين تجنبها مع الطالب القلق",
                content: `
                    <p>عندما يبدو الطالب قلقاً، استخدم لغة تدعو إلى الفهم وتقترح خطوة واضحة. الأمثلة التالية مقترحات للحوار وليست خطة علاجية.</p>

                    <h3>بدلاً من «اهدأ فحسب»</h3>
                    <p>جرّب: «هل تساعدك استراحة قصيرة؟ يمكننا النظر إلى الخطوة الأولى معاً». قدّم المساندة من دون اشتراط تغيّر شعوره فوراً.</p>

                    <h3>بدلاً من «لا يوجد ما يدعو للقلق»</h3>
                    <p>جرّب: «أي جزء يبدو مقلقاً لك؟». استمع قبل تحديد الطمأنة المناسبة.</p>

                    <h3>بدلاً من «الجميع يستطيع فعل ذلك»</h3>
                    <p>جرّب: «لنكتشف ما الذي يساعدك على البدء». ركّز الحوار على احتياجات الطالب.</p>

                    <h3>بدلاً من «أنت تبالغ»</h3>
                    <p>جرّب: «أرى أن هذا صعب عليك. هل تفضّل الحديث على انفراد؟». تجنّب الحكم على شدة تجربته.</p>

                    <h3>الحفاظ على وضوح التوقعات</h3>
                    <p>يمكن الجمع بين الاحترام والحدود الواضحة: «أريد الاستماع إليك، وعلينا التحدث من دون إهانة أحد». إذا استمرت المخاوف، اتبع إجراءات المدرسة لمساندة الطلاب.</p>
                `
            }
        },

        "article-5": {
            en: {
                title: "Why a Quiet Student Is Not Always Doing Well",
                content: `
                    <p>Quietness is one part of a student's behavior, not a complete picture of well-being. A student may enjoy listening, prefer written participation, or have something they do not yet want to discuss.</p>

                    <h3>Avoid assumptions</h3>
                    <p>Do not treat quietness as proof of distress or proof that everything is fine. Ask how the student experiences school and what helps them participate.</p>

                    <h3>Notice changes in context</h3>
                    <p>Pay attention to changes from the student's usual participation or engagement. Record concrete observations rather than labels: “Did not join the group task on three occasions.”</p>

                    <h3>Check in privately</h3>
                    <p>Try: “I've noticed you haven't joined the activity lately. Is there anything you would like me to know?” Allow time and do not pressure the student to disclose.</p>

                    <h3>Offer accessible ways to connect</h3>
                    <ul>
                        <li>A short written check-in.</li>
                        <li>A choice between speaking and writing an answer.</li>
                        <li>A clear way to request help.</li>
                        <li>A planned follow-up conversation.</li>
                    </ul>

                    <p>When observations raise concerns, follow the school's support and safeguarding procedures. Teachers can notice and support students without assigning a diagnosis.</p>
                `
            },

            ar: {
                title: "لماذا لا يعني هدوء الطالب دائماً أنه بخير؟",
                content: `
                    <p>الهدوء جزء من سلوك الطالب وليس صورة كاملة عن رفاهه. قد يحب الاستماع أو يفضّل المشاركة كتابةً أو يكون لديه أمر لا يريد مناقشته بعد.</p>

                    <h3>تجنّب الافتراضات</h3>
                    <p>لا تعتبر الهدوء دليلاً على الضيق أو دليلاً على أن كل شيء بخير. اسأل الطالب عن تجربته في المدرسة وما يساعده على المشاركة.</p>

                    <h3>ملاحظة التغيّرات في سياقها</h3>
                    <p>انتبه إلى التغيّر عن مستوى مشاركته وتفاعله المعتاد. دوّن ملاحظات محددة بدلاً من الصفات: «لم ينضم إلى النشاط الجماعي في ثلاث مناسبات».</p>

                    <h3>التواصل على انفراد</h3>
                    <p>جرّب: «لاحظت أنك لم تنضم إلى النشاط مؤخراً. هل هناك شيء تود أن أعرفه؟». أتح وقتاً ولا تضغط عليه للكشف عن تفاصيله.</p>

                    <h3>إتاحة وسائل مناسبة للتواصل</h3>
                    <ul>
                        <li>رسالة قصيرة للاطمئنان.</li>
                        <li>الاختيار بين الإجابة شفهياً وكتابياً.</li>
                        <li>طريقة واضحة لطلب المساعدة.</li>
                        <li>موعد لمحادثة متابعة.</li>
                    </ul>

                    <p>عندما تثير الملاحظات مخاوف، اتبع إجراءات المدرسة للمساندة وحماية الطلاب. يستطيع المعلم ملاحظة احتياجات الطلاب ودعمهم من دون وضع تشخيص.</p>
                `
            }
        }
    };

    function getLanguage() {
        return document.documentElement.lang
            .toLowerCase()
            .startsWith("ar")
            ? "ar"
            : "en";
    }

    const resources = {};

    for (const [id, versions] of Object.entries(entries)) {
        resources[id] = {
            get title() {
                return versions[getLanguage()].title;
            },

            get content() {
                return versions[getLanguage()].content;
            }
        };
    }

    window.resourceContent = resources;

    // Refresh an open reader when the page language changes.
    function setup() {
        let activeId = null;

        document.querySelectorAll("[data-open]").forEach(button => {
            button.addEventListener("click", () => {
                activeId = button.dataset.open;
            });
        });

        const observer = new MutationObserver(() => {
            const dialog = document.getElementById("resourceDialog");
            const entry = resources[activeId];

            if (!dialog?.open || !entry) {
                return;
            }

            const title = document.getElementById("dialogTitle");
            const content = document.getElementById("dialogContent");

            if (title) {
                title.textContent = entry.title;
            }

            if (content) {
                content.innerHTML = entry.content;
            }
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["lang"]
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", setup, {
            once: true
        });
    } else {
        setup();
    }
})();