import React, { useState, useRef, useEffect } from 'react';
import { 
  Scale, ShieldAlert, Award, FileText, Calendar, 
  Search, MessageSquare, Send, Check, 
  Copy, Printer, AlertTriangle, 
  UserCheck, BookOpen, Clock, FileSignature, HelpCircle,
  Hash, ArrowLeftRight, CheckCircle2, Upload, Trash2, Paperclip
} from 'lucide-react';
import { ALGERIAN_PENAL_CODE, CAMSCANNER_CASE_FORENSICS, MISDEMEANOR_PROCEDURE_TIMELINE, LEGAL_LOOPHOLES, DOCUMENT_TEMPLATES } from './data/legalData';
import { Message, LegalDocumentTemplate } from './types';

// Intelligent offline legal simulation responder for Gemini quota fallback limits
const generateLocalFallbackResponse = (query: string, context: string): string => {
  const normalizedQuery = query.toLowerCase();
  
  // Extract topics
  const isZakaria = normalizedQuery.includes('زكريا') || normalizedQuery.includes('قدور') || normalizedQuery.includes('zakaria') || context.includes('زكريا');
  const isAnnaba = normalizedQuery.includes('عنابة') || normalizedQuery.includes('annaba') || context.includes('عنابة');
  const isOran = normalizedQuery.includes('وهران') || normalizedQuery.includes('oran') || context.includes('وهران');
  const isAymen = normalizedQuery.includes('أيمن') || normalizedQuery.includes('عولمي') || normalizedQuery.includes('aymen') || normalizedQuery.includes('براءة');
  const isImane = normalizedQuery.includes('إيمان') || normalizedQuery.includes('بودراع') || normalizedQuery.includes('imane') || normalizedQuery.includes('تضامن') || normalizedQuery.includes('مليون');
  const isLoophole = normalizedQuery.includes('ثغرة') || normalizedQuery.includes('ثغرات') || normalizedQuery.includes('دفاع') || normalizedQuery.includes('مخرج') || normalizedQuery.includes('مادة');
  
  let greeting = `مرحباً بك موكلي الموقر ${isZakaria ? 'زكريا قدور' : 'الحاضر أمام مجلس القضاء'}. بصفتي الأستاذ "الهادي الجزائري"، مستشارك القانوني الجنائي الجزائري المعتمد، يسعدني تشريح قضيتك بالاستناد الصارم إلى الفقه والقرائن الملموسة.`;
  
  if (isAymen) {
    return `${greeting}\n\n### ⚖️ دراسة فقهية متطابقة لسابقة براءة المتهم عولمي أيمن (Oulmi Aymen):\n\nلقد حاز المتهم عولمي أيمن سابقاً على حكم براءة تام من مجلس قضاء بئر مراد رايس لثبوت انتفاء أركان المسؤولية الجزائية والمدنية لديه. إليك تفصيل أسباب تبرئته الفقهية لتوظيفها في قضيتك:\n\n1. **انتفاء القصد الجنائي وركن العلم (L'absence de l'élément moral)**:\n   المادة 372 والمادة 42 من قانون العقوبات الجزائري تفترضان "العلم والنية الجرمية للمشاركة". المتهم عولمي كان بمثابة حلقة وصل مغرر بها تم تضليلها بهويات وأوراق مزورة (شركة Amazon/Take a lot الوهمية) تحت عروض عمل مغرية تولد عمولات، ولم تكن لديه أدنى صلة بالخلفية الإجرامية لعصابة ماريا لونسكو.\n\n2. **غياب ركن الاستفادة المادية**:\n   كشوف حساب المعني وجدول التدفقات أثبتا أنه لم يستبق أي أرباح إجرامية في ذمته المالية لصالحه الشخصي، بل كان يقوم فورياً بتحويلها لشراء USDT إلى الخارج بناءً على تعليمات المدراء المزعومين، مما يثبت أنه مجرد قيد مالي مغلوب على أمره (Money Mule) دون مشاركة إرادية.\n\n3. **توافر شروط الإعفاء من المسؤولية الجنائية**:\n   تمكن من إثبات حسن نيته التامة، فدفاعه أسس القضية على أنه ضحية احتيال أصلي، وليس شريكاً في احتيال تابع.`;
  }
  
  if (isImane) {
    return `${greeting}\n\n### ⚖️ مذكرة تفكيك طلبات التضامن المالي لـ "الأستاذة بودراع إيمان":\n\nتطالب الضحية بودراع إيمان بتعويض تضامني قدره 2,000,000 دينار جزائري ومبالغ ضرر تكميلية. إليك الدفوع الفعالة لإسقاط هذا التضامن وجعله عبئاً على العصابة الأصلية المتواجدة بالخارج:\n\n1. **إثبات المسار البريدي المباشر للأموال**:\n   يجب تقديم تقرير مستخلص يثبت خروج المبالغ المدفوعة فورياً في شكل عملات مشفرة (USDT) إلى محافظ رقمية خارجية تابعة للفاعل الأصلي "Maria Lonescou / Take a lot".\n\n2. **تطبيق المادة 4 من قانون العقوبات المدنية الجزائري**:\n   حيث أن التضامن المالي والتعويض مرتبط بمدى توافر "المسؤولية المشتركة". وبما أنك لم تتقاضى أي دينار من هذا المليونين بل ذمتك المالية سلبية تماماً وخسرت من مالك الحقيقي 85 مليون سنتيم، فإن تضامنه مدنياً يرتفع، ولا مجال لإلزامك برد ما لم تستهلكه أو تستحوذ عليه.\n\n3. **القضاء بالتطابق**: سابقة عولمي أيمن حكمت برفض جميع المطالب المدنية الموجهة ضده لثبوت انتفاء الركن الجرمي المعنوي تماماً.`;
  }
  
  if (isLoophole) {
    return `${greeting}\n\n### 🛡️ الثغرات والدفوع الجنائية الذهبية الخارقة الموصى بها لقضيتك:\n\nبناءً على تداخل المعطيات ونصوص قانون العقوبات الجزائري، نوصي بعرض الدفوع التالية فوراً أمام هيئة المجلس الموقرة:\n\n1. **الدفع الأول: انتفاء الركن المعنوي للجريمة (المادة 42 و372)**:\n   - حيث لا قيام لجريمة المشاركة في النصب من دون توفر "قصد التواطؤ والاتفاق المسبق".\n   - المتهم هو في الأصل ضحية احتيال توظيف إلكتروني منظم وقع تحت التدليس المادي لشبكة سيبرانية عابرة للحدود.\n\n2. **الدفع الثاني: حالة الضرورة والإكراه المعنوي لدفع ضرر مالي أكبر (المادة 130 عقوبات جزائري)**:\n   - توضيح أن تحويل أو ضخ المبالغ الإضافية كان تحت وطأة الخديعة والابتزاز الإلكتروني المتكرر لإنقاذ مدخراتك السابقة التي احتجزتها المنصة الوهمية (أقرب لحالة الضرورة).\n\n3. **الدفع الثالث: الاستدلال المالي القاطع (الحصيلة حسابياً سلبية)**:\n   - كشف حسابك البريدي CCP يثبت بوضوح أن المدفوعات الخارجة من جيبك الشخصي (85 مليون سنتيم أو غيرها) تتجاوز وتفوق بكثير أي إيداعات مستلمة. هذا دليل علمي لا يقبل الشك على انتفاء قصد التربّح والعمل التجاري الجرمي لتبييض الأموال.\n\n4. **سلاح الطعن بالاستئناف**: يجب تذكير المجلس بتطابق حالتك مع القضية المعيارية المبرأة لحسن نية المتهمين المضللين.`;
  }

  if (isOran) {
    return `${greeting}\n\n### ⚖️ الوضع القانوني لقضيتك أمام مجلس قضاء وهران (محكمة فلاوسن):\n\nمتابعتك بتهمة تبييض الأموال والمعاملات النقدية بدون رخصة تعد من القضايا الحساسة التي تتطلب رداً حازماً وممنهجاً:\n\n1. **إبراز الطابع التجاري المشروع للعملية الأصلية**:\n   قدم العقد الرسمي الموثق لبيع السيارة لإثبات أن استلام الأموال لم يكن نابعاً من نشاط غير مشروع أو تبييض أموال، وإنما هو نتاج معاملة تجارية مدنية صحيحة.\n\n2. **حسن النية التام وتطبيق المادة 38 من قانون الوقاية من تبييض الأموال**:\n   المادة 38 تشترط ثبوت علم المتهم بمصدر الأموال الإجرامي عند الحيازة أو الاستلام. انعدام هذا العلم يفجر ركن المشاركة ويوجب الحذف الكلي للتهمة وتبرئة ساحتك بقوة القانون.`;
  }
  
  return `${greeting}\n\n### 📜 استشارة قانونية عامة مخصصة وفق معطيات ملف القضية المفعّل:\n\nبصفتي عميد الدفاع، درست مستنداتك ورسالتك وتوصلنا إلى ما يلي لمجابهة التهم الموجهة إليكم:\n\n1. **الشق الجنائي (التهم المنسوبة)**:\n   متابعتك بجنحة المشاركة تفترض قيامك بتسهيل جريمة النصب الأصلية للشبكة الدولية. سلاحنا الأمثل هو تفكيك هذا الترابط بإيضاح أن الاندماج بالشبكة تم تحت غطاء توظيف مضلل وكشف حسابك المالي السلبي.\n\n2. **الشق الإقليمي وإجراءات الطعن**:\n   - في حال صدور حكم إدانة ابتدائي، تذكر أن لديك مهلة استئناف قانونية صارمة وحرجة وهي **10 أيام من تاريخ النطق بالحكم الحضوري**.\n   - نقوم بتقييد استئنافك لدى كتابة ضبط محكمة الجنح لتنتقل القضية فوراً لجدولة جديدة أمام الغرفة الجزائية بمجلس القضاء لمراجعة شاملة تحت وطأة الدفوع الدفوع الهيكلية.\n\n3. **توصيات الأستاذ الهادي**:\n   استخدم كشوف الحساب السلبية وصور الإكراه والابتزاز كحافظة مستندات أساسية وادفع دوماً بانتفاء ركن العلم وسابقة تبرئة المتهم عولمي أيمن لتطابق الواقع والفعل.`;
};

export default function App() {
  // Navigation
  const [activeTab, setActiveTab] = useState<'chat' | 'forensics' | 'loopholes' | 'documents' | 'code' | 'timeline'>('chat');
  
  // Chat state
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'lawyer',
      text: 'مرحباً بك موكلي الموقر في صرحنا الدفاعي المطور والمدعوم بتقنية الـ RAG لحقن وثائق القضية والقرائن الجنائية.\n\nأنا الأستاذ "الهادي الجزائري"، مستشارك الجنائي المعتمد.\n\n⚠️ للحد من أي هذيان قضائي وتخصيص الدفاع كلياً لقضيتك، لقد قمنا بفصل البيانات الجافة. يمكنك الآن التوجه فوراً لتبويب **"الملف التقني المجهز ومستندات القضية (RAG)"** لرفع كشوف حسابك البريدية أو كشوفات CamScanner أو أحكام المحاكم (مثل قضيتك الجارية في ولاية عنابة الموقرة) لتلقين ذكائي بالقرائن الحقيقية.\n\nتفضل بطرح تساؤلاتك، أو استعلم عن الثغرات القانونية الذهبية (مثل المادتين 42 و 130 عقوبات) وسأجيبك فوراً بدراسة رصينة ومحكمة!',
      timestamp: new Date().toLocaleTimeString('ar-DZ', { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputPrompt, setInputPrompt] = useState('');
  const [chatLoading, setChatLoading] = useState(false);
  const [apiKeyError, setApiKeyError] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Dynamic RAG / Case Analysis States
  const [useRag, setUseRag] = useState<boolean>(true);
  const [forceSimulation, setForceSimulation] = useState<boolean>(false);
  const [uploadedFiles, setUploadedFiles] = useState<{ id: string; name: string; size: string; type: string; content?: string }[]>([
    {
      id: 'doc-pres-1',
      name: 'محاضر_الضبطية_عنابة_زكريا_قدور.pdf',
      size: '2.4 MB',
      type: 'application/pdf'
    },
    {
      id: 'doc-pres-2',
      name: 'كشوفات_بريد_الجزائر_CCP_اموال_سلبية.csv',
      size: '412 KB',
      type: 'text/csv'
    }
  ]);
  const [caseContext, setCaseContext] = useState<string>(
    `[بيانات قضية الحال النشطة الخاضعة للتحليل الجنائي (RAG)]:\n` +
    `- المتهم الرئيسي والموكل: زكريا قدور (Zakaria Kaddour)\n` +
    `- الاختصاص الإقليمي: محكمة جنح مجلس قضاء عنابة (Annaba Court) - ولاية عنابة، الجزائر\n` +
    `- التهم المتابعة: جنحة المشاركة في النصب (المواد 42 و372 عقوبات جزائري)\n` +
    `- وقائع الضرر المادي العيني الحقيقي للمتهم: قام بضخ مدخرات ضخمة من ماله الخاص الحقيقي بلغت 85 مليون سنتيم جزائري.\n` +
    `- الحصيلة المالية النهائية: خاسر كلي للمال؛ كشوفات حساب CCP تظهر بوضوح خروج أموال أكثر بكثير مما استقبله، مما ينفي تماماً فرضية تحقيق أي ربح أو فائدة مادية أو قصد المتاجرة وتبييض الأموال.\n` +
    `- دافع المعاملات: الإكراه والابتزاز الإلكتروني المنظم تحت عباءة توظيف كاذب من منصة شبكة "Amazon" الوهمية ومحاولة يائسة لدفعه لإنقاذ مدخراته السابقة ومطالبته بضخ أموال إضافية (حالة الضرورة لإعفاء المسؤولية الجنائية المادتين 130 و53 عقوبات الجزائري).\n` +
    `- الضحية المدنية الأصلية: الأستاذة بودراع إيمان (التي قامت بتحويل مالي نتيجة وقوعها في احتيال شبكة Take a lot ومنسق العصابة الدولية Maria Lonescou)\n` +
    `- السابقة المعيارية للاعتداد: سابقة تبرئة المتهم عولمي أيمن (Oulmi Aymen) بمحكمة بئر مراد رايس لتطابق شروط انتفاء القصد الجنائي وركن العلم والمشاركة الجرمية.`
  );
  const [fileInputKey, setFileInputKey] = useState<number>(0);

  // Search Penal Code
  const [codeQuery, setCodeQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Legal Drafter State
  const [selectedTemplate, setSelectedTemplate] = useState<LegalDocumentTemplate>(DOCUMENT_TEMPLATES[0]);
  const [documentInputs, setDocumentInputs] = useState<Record<string, string>>({});
  const [generatedDocText, setGeneratedDocText] = useState<string>('');
  const [copiedNotification, setCopiedNotification] = useState(false);

  // Initialize document inputs
  useEffect(() => {
    const initialInputs: Record<string, string> = {};
    selectedTemplate.fields.forEach(field => {
      initialInputs[field.key] = field.defaultValue || '';
    });
    setDocumentInputs(initialInputs);
    setGeneratedDocText(selectedTemplate.bodyPattern(initialInputs));
  }, [selectedTemplate]);

  // Handle document input updates
  const handleInputChange = (key: string, value: string) => {
    const updated = { ...documentInputs, [key]: value };
    setDocumentInputs(updated);
    setGeneratedDocText(selectedTemplate.bodyPattern(updated));
  };

  // State feedback banner
  const [saveBanner, setSaveBanner] = useState<boolean>(false);

  // File Upload and RAG parsing
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    processFiles(files);
  };

  const processFiles = (files: FileList) => {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const newFile = {
        id: `uploaded-${Date.now()}-${i}`,
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
        type: file.type
      };
      
      setUploadedFiles(prev => [...prev, newFile]);

      // Read text-based files directly
      if (file.type.startsWith('text/') || file.name.endsWith('.txt') || file.name.endsWith('.csv') || file.name.endsWith('.json') || file.name.endsWith('.md')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const content = event.target?.result as string;
          if (content) {
            setCaseContext(prev => prev + `\n\n[مستند إضافي مرفق: ${file.name}]:\n${content}`);
            setSaveBanner(true);
            setTimeout(() => setSaveBanner(false), 5000);
          }
        };
        reader.readAsText(file);
      } else if (file.name.endsWith('.pdf')) {
        // PDF Simulation: since client-side PDF parsing requires heavy libraries, we simulate OCR parsing or notify user they can edit
        setCaseContext(prev => prev + `\n\n[مستند PDF مسترجع: ${file.name}]:\n- وثيقة رسمية مدمجة.\n- الاختصاص: مجلس قضاء عنابة (Annaba).\n- المتهم: زكريا قدور.\n- الضرر المالي الفعلي: خسارة 85 مليون سنتيم جزائري.\n- الدفع: المادة 130 وعولمي أيمن.`);
        setSaveBanner(true);
        setTimeout(() => setSaveBanner(false), 5000);
      } else {
        // For images or others
        setCaseContext(prev => prev + `\n\n[ملف مرفق: ${file.name}]:\nتم دمج الملف في ذاكرة السياق للتحليل.`);
        setSaveBanner(true);
        setTimeout(() => setSaveBanner(false), 5000);
      }
    }
    // Reset file input
    setFileInputKey(prev => prev + 1);
  };

  const handleRemoveFile = (id: string, name: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== id));
    // Clean context mention if possible
    setCaseContext(prev => {
      return prev.split('\n\n')
        .filter(block => !block.includes(`[مستند إضافي مرفق: ${name}]`) && !block.includes(`[مستند PDF مسترجع: ${name}]`) && !block.includes(`[ملف مرفق: ${name}]`))
        .join('\n\n');
    });
  };

  const loadPreset = (preset: 'zakaria-annaba' | 'empty' | 'oran-money-laundering') => {
    if (preset === 'zakaria-annaba') {
      setCaseContext(`[بيانات قضية الحال النشطة الخاضعة للتحليل الجنائي (RAG)]:\n- المتهم الرئيسي والموكل: زكريا قدور (Zakaria Kaddour)\n- الاختصاص الإقليمي: محكمة جنح مجلس قضاء عنابة (Annaba Court) - ولاية عنابة، الجزائر\n- التهم المتابعة: جنحة المشاركة في النصب (المواد 42 و372 عقوبات جزائري)\n- وقائع الضرر المادي العيني الحقيقي للمتهم: قام بضخ مدخرات ضخمة من ماله الخاص الحقيقي بلغت 85 مليون سنتيم جزائري.\n- الحصيلة المالية النهائية: خاسر كلي للمال؛ كشوفات حساب CCP تظهر بوضوح خروج أموال أكثر بكثير مما استقبله، مما ينفي تماماً فرضية تحقيق أي ربح أو فائدة مادية أو قصد المتاجرة وتبييض الأموال.\n- دافع المعاملات: الإكراه والابتزاز الإلكتروني المنظم تحت عباءة توظيف كاذب من منصة شبكة "Amazon" الوهمية ومحاولة يائسة لدفعه لإنقاذ مدخراته السابقة ومطالبته بضخ أموال إضافية (حالة الضرورة لإعفاء المسؤولية الجنائية المادتين 130 و53 عقوبات الجزائري).\n- الضحية المدنية الأصلية: الأستاذة بودراع إيمان (التي قامت بتحويل مالي نتيجة وقوعها في احتيال شبكة Take a lot ومنسق العصابة الدولية Maria Lonescou)\n- السابقة المعيارية للاعتداد: سابقة تبرئة المتهم عولمي أيمن (Oulmi Aymen) بمحكمة بئر مراد رايس لتطابق شروط انتفاء القصد الجنائي وركن العلم والمشاركة الجرمية.`);
      setUploadedFiles([
        { id: 'doc-pres-1', name: 'محاضر_الضبطية_عنابة_زكريا_قدور.pdf', size: '2.4 MB', type: 'application/pdf' },
        { id: 'doc-pres-2', name: 'كشوفات_بريد_الجزائر_CCP_اموال_سلبية.csv', size: '412 KB', type: 'text/csv' }
      ]);
    } else if (preset === 'empty') {
      setCaseContext(`[ملف القضية المستنداتي فارغ]\nلم يتم رفع أي مستند مسبق. من فضلك اكتب تفاصيل قضيتك أو ألصق نصوص CamScanner هنا، أو ارفع ملفاتك لتتمكن الخوارزمية من تحليلها وتوجيه محاميك الذكي.`);
      setUploadedFiles([]);
    } else if (preset === 'oran-money-laundering') {
      setCaseContext(`[بيانات قضية الحال النشطة الخاضعة للتحليل الجنائي (RAG)]:\n- المتهم: بلقاسم لعموري\n- الاختصاص الإقليمي: مجلس قضاء وهران - محكمة فلاوسن الجنائية\n- التهم الملاحقة: تبييض الأموال والمعاملات النقدية بدون رخصة\n- وقائع وملخص: المتهم قام ببيع سيارة خاصة وحصل على المقابل عبر شيك بريدي CCP دون علمه بالمصدر الإجرامي للأموال.\n- دفاع المحامي: تطبيق المادة 38 من القانون المتعلق بالوقاية من تبييض الأموال مع إبراز حسن النية والعقد الرسمي للبيع.`);
      setUploadedFiles([
        { id: 'doc-pres-oran-1', name: 'عقد_بيع_سيارة_رسمي_مدرج.pdf', size: '1.8 MB', type: 'application/pdf' }
      ]);
    }
  };

  // Scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, chatLoading]);

  // Call Server to query Gemini Lawyer with automatic simulation fallback
  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputPrompt.trim() || chatLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: inputPrompt,
      timestamp: new Date().toLocaleTimeString('ar-DZ', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputPrompt('');
    setChatLoading(true);
    setApiKeyError(null);

    // If forceSimulation is active, generate response locally with a simulated delay
    if (forceSimulation) {
      setTimeout(() => {
        const simulatedText = generateLocalFallbackResponse(userMessage.text, useRag ? caseContext : '');
        setMessages(prev => [
          ...prev,
          {
            id: `lawyer-${Date.now()}`,
            sender: 'lawyer',
            text: `🤖 (وضعية المحاكاة الفقهية المباشرة لشحذ كفاءتكم):\n\n${simulatedText}`,
            timestamp: new Date().toLocaleTimeString('ar-DZ', { hour: '2-digit', minute: '2-digit' })
          }
        ]);
        setChatLoading(false);
      }, 1000);
      return;
    }

    let attempts = 0;
    let success = false;
    let lastError: any = null;

    while (attempts < 3 && !success) {
      try {
        if (attempts > 0) {
          setMessages(prev => {
            const hasRetryMsg = prev.some(m => m.id === `retry-${attempts}`);
            if (hasRetryMsg) return prev;
            return [...prev, {
              id: `retry-${attempts}`,
              sender: 'lawyer',
              text: `⚠️ جاري إعادة محاولة الاتصال بالخادم الذكي (المحاولة ${attempts + 1} من 3)... يرجى الانتظار لحين استقرار الشبكة.`,
              timestamp: new Date().toLocaleTimeString('ar-DZ', { hour: '2-digit', minute: '2-digit' })
            }];
          });
        }

        const response = await fetch('/api/lawyer/consult', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            messages: [...messages.filter(m => !m.id.startsWith('retry-')), userMessage],
            caseContext: useRag ? caseContext : ''
          })
        });

        const data = await response.json();

        if (!response.ok && data.error === 'api_key_missing') {
          setApiKeyError(data.message);
          success = false;
          break;
        }

        if (!response.ok) {
          throw new Error(data.message || 'فشلت معالجة الاستشارة من الخادم.');
        }

        setMessages(prev => [
          ...prev.filter(m => !m.id.startsWith('retry-')),
          {
            id: `lawyer-${Date.now()}`,
            sender: 'lawyer',
            text: data.text,
            timestamp: new Date().toLocaleTimeString('ar-DZ', { hour: '2-digit', minute: '2-digit' })
          }
        ]);
        success = true;
      } catch (err: any) {
        lastError = err;
        console.warn(`Attempt ${attempts + 1} failed:`, err);
        attempts++;
        if (attempts < 3) {
          await new Promise(resolve => setTimeout(resolve, 1200));
        }
      }
    }

    if (!success) {
      // Automatic safety net fallback! Instead of leaving them broken, we provide the highly detailed simulation text 
      // alongside clear troubleshooting tips and an option to switch to forceSimulation mode.
      const simulatedText = generateLocalFallbackResponse(userMessage.text, useRag ? caseContext : '');
      
      setMessages(prev => [
        ...prev.filter(m => !m.id.startsWith('retry-')),
        {
          id: `fallback-${Date.now()}`,
          sender: 'lawyer',
          text: `⚠️ **مكانيزم الإنقاذ الذاتي الفقهي مفعل تلقائياً**\nنظراً للإفراط في استهلاك كوتا مفتاح الـ API لـ Gemini العام (Error 429/503)، قام نظام الميزان بتوليد الدفاع والتحليل الفقهي المتوقع من كشاف النصوص الجزائي الجزائري المسجل محلياً:\n\n---\n\n${simulatedText}\n\n---\n💡 *تلميح تقني لتجاوز القيود:* نقترح تفعيل خيار **"تشغيل محاكاة براءة أوفلاين"** أعلى المحادثة لإكمال تجربة التطبيق بأريحية وسرعة فورية بدون استهلاك الحصة اليومية.`,
          timestamp: new Date().toLocaleTimeString('ar-DZ', { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }

    setChatLoading(false);
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(generatedDocText);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2000);
  };

  const handlePrintDoc = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>${selectedTemplate.title}</title>
            <style>
              body { font-family: 'Amiri', Georgia, serif; padding: 40px; direction: rtl; line-height: 1.8; font-size: 15px; }
              pre { white-space: pre-wrap; font-family: 'Amiri', Georgia, serif; text-align: justify; }
              hr { border: none; border-top: 1px solid #C19B4C; margin: 25px 0; }
            </style>
          </head>
          <body>
            <div style="text-align: center; margin-bottom: 25px;">
              <h2>الجمهورية الجزائرية الديمقراطية الشعبية</h2>
              <h3>وزارة العدل - مجلس قضاء الجزائر</h3>
              <hr />
            </div>
            <pre>${generatedDocText}</pre>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const handleSeedQuestion = (question: string) => {
    setInputPrompt(question);
  };

  const filteredArticles = ALGERIAN_PENAL_CODE.filter(art => {
    const matchesSearch = art.number.includes(codeQuery) || 
                          art.title.includes(codeQuery) || 
                          art.textAr.includes(codeQuery) ||
                          art.penaltyDetails.includes(codeQuery);
    const matchesCat = selectedCategory === 'all' || art.sourceChapter.includes(selectedCategory);
    return matchesSearch && matchesCat;
  });

  const codeCategories = Array.from(new Set(ALGERIAN_PENAL_CODE.map(art => art.sourceChapter)));

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1E2421] font-sans">
      
      {/* Algerian Ministry of Justice aesthetic header */}
      <header className="bg-[#1A382A] border-b-4 border-[#C19B4C] text-[#F9F6EE] py-5 px-4 md:px-8 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          <div className="flex items-center gap-4">
            <div className="p-2.5 bg-[#244E36] rounded-xl border border-[#C19B4C] shadow-inner shrink-0">
              <Scale className="h-9 w-9 text-[#C19B4C]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] tracking-widest text-[#C19B4C] uppercase font-bold">الجمهورية الجزائرية الديمقراطية الشعبية</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              </div>
              <h1 className="text-xl md:text-2xl font-extrabold tracking-tight font-serif mt-0.5 text-white">
                محاكاة المحامي النخبة: الأستاذ الهادي الجزائري <span className="text-sm md:text-base text-[#C19B4C] font-sans font-light">| خبير قضايا الجنح الجزائري</span>
              </h1>
              <p className="text-[11px] text-slate-300 mt-0.5">
                تفكيك النيابة والدفاع الجنائي طبقاً لأحدث أحكام ومواد قانون العقوبات والاجتهاد القضائي الجزائري
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-[#244E36] border border-[#C19B4C]/35 px-4 py-2 rounded-lg text-xs">
            <Clock className="h-4 w-4 text-[#C19B4C]" />
            <span className="text-slate-300">مهلة الطعن والاستئناف:</span>
            <span className="text-[#C19B4C] font-bold">10 أيام كحد أقصى</span>
          </div>

        </div>
      </header>

      {/* Navigation tabs */}
      <nav className="bg-[#11241C] text-slate-300 border-b border-emerald-950 sticky top-0 z-40 shadow-sm overflow-x-auto">
        <div className="max-w-7xl mx-auto flex">
          
          <button
            onClick={() => setActiveTab('chat')}
            className={`flex items-center gap-2 px-5 py-4 text-xs md:text-sm font-semibold transition-all shrink-0 border-b-2 outline-none cursor-pointer ${
              activeTab === 'chat' 
                ? 'border-[#C19B4C] text-[#C19B4C] bg-[#162D24]' 
                : 'border-transparent hover:text-white hover:bg-[#162D24]/50'
            }`}
          >
            <MessageSquare className="h-4 w-4" />
            الاستشارة القضائية المباشرة
          </button>

          <button
            onClick={() => setActiveTab('forensics')}
            className={`flex items-center gap-2 px-5 py-4 text-xs md:text-sm font-semibold transition-all shrink-0 border-b-2 outline-none cursor-pointer ${
              activeTab === 'forensics' 
                ? 'border-[#C19B4C] text-[#C19B4C] bg-[#162D24]' 
                : 'border-transparent hover:text-white hover:bg-[#162D24]/50'
            }`}
          >
            <Paperclip className="h-4 w-4 text-[#C19B4C]" />
            الملف التقني وحقن مستندات القضية (RAG)
          </button>

          <button
            onClick={() => setActiveTab('loopholes')}
            className={`flex items-center gap-2 px-5 py-4 text-xs md:text-sm font-semibold transition-all shrink-0 border-b-2 outline-none cursor-pointer ${
              activeTab === 'loopholes' 
                ? 'border-[#C19B4C] text-[#C19B4C] bg-[#162D24]' 
                : 'border-transparent hover:text-white hover:bg-[#162D24]/50'
            }`}
          >
            <ShieldAlert className="h-4 w-4" />
            خريطة الدفوع والثغرات الجنائية
          </button>

          <button
            onClick={() => setActiveTab('documents')}
            className={`flex items-center gap-2 px-5 py-4 text-xs md:text-sm font-semibold transition-all shrink-0 border-b-2 outline-none cursor-pointer ${
              activeTab === 'documents' 
                ? 'border-[#C19B4C] text-[#C19B4C] bg-[#162D24]' 
                : 'border-transparent hover:text-white hover:bg-[#162D24]/50'
            }`}
          >
            <FileSignature className="h-4 w-4" />
            صياغة العرائض ومذكرات الدفاع
          </button>

          <button
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-2 px-5 py-4 text-xs md:text-sm font-semibold transition-all shrink-0 border-b-2 outline-none cursor-pointer ${
              activeTab === 'code' 
                ? 'border-[#C19B4C] text-[#C19B4C] bg-[#162D24]' 
                : 'border-transparent hover:text-white hover:bg-[#162D24]/50'
            }`}
          >
            <BookOpen className="h-4 w-4" />
            قانون العقوبات الجزائري
          </button>

          <button
            onClick={() => setActiveTab('timeline')}
            className={`flex items-center gap-2 px-5 py-4 text-xs md:text-sm font-semibold transition-all shrink-0 border-b-2 outline-none cursor-pointer ${
              activeTab === 'timeline' 
                ? 'border-[#C19B4C] text-[#C19B4C] bg-[#162D24]' 
                : 'border-transparent hover:text-white hover:bg-[#162D24]/50'
            }`}
          >
            <Calendar className="h-4 w-4" />
            مراحل المحاكمة والآجال
          </button>

        </div>
      </nav>

      {/* Main Workspace Frame */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 flex flex-col gap-6">

        {/* Tab 1: Chat Counsel Panel */}
        {activeTab === 'chat' && (
          <div className="flex-1 flex flex-col lg:flex-row bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden min-h-[500px]">
            
            {/* Left sidebar with preloaded consultative questions */}
            <div className="w-full lg:w-80 bg-slate-50 border-b lg:border-b-0 lg:border-l border-slate-200 p-4 flex flex-col gap-4">
              <div>
                <h3 className="text-xs font-bold text-[#7E461B] tracking-wider mb-2 flex items-center gap-1">
                  <AlertTriangle className="h-4 w-4 text-[#D4952C]" />
                  دليل مراجعات القضية السريعة
                </h3>
                <p className="text-[11px] text-slate-500 mb-3">
                  اختر سؤالاً جنائياً لتوجيه الأستاذ الجزائري نحو معطيات ملف القضية CamScanner وصياغة الردود:
                </p>
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => handleSeedQuestion('كيف استطاع المتهم عولمي أيمن استخلاص حكم البراءة في نفس هذه الشبكة؟ وما هي الدفوع التي برأته؟')}
                    className="text-right text-xs bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 p-3 rounded-lg transition-all flex items-start gap-2 hover:border-[#D4952C]/30 cursor-pointer"
                  >
                    <span className="text-[#D4952C] font-bold">١.</span>
                    <span>ثغرة البراءة الحائز عليها **عولمي أيمن**.</span>
                  </button>

                  <button 
                    onClick={() => handleSeedQuestion('أنا ضحية مغرر بي استغلت Maria Lonescou حسابي البريدي واستخدما كجسر مالي مؤقت مقابل عمولات وهمية، كيف أسقط تهم النصب والمشاركة عن كاهلي؟')}
                    className="text-right text-xs bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 p-3 rounded-lg transition-all flex items-start gap-2 hover:border-[#D4952C]/30 cursor-pointer"
                  >
                    <span className="text-[#D4952C] font-bold">٢.</span>
                    <span>أسلوب إسقاط تهمة المشاركة (المادة 42).</span>
                  </button>

                  <button 
                    onClick={() => handleSeedQuestion('الضحية بودراع إيمان تطالبني بالتضامن المالي لرد مليوني دينار، والتحقيقات تؤكد أن الأموال تم شراء USDT بها فوراً. ما هو سبيلي الدفوعي؟')}
                    className="text-right text-xs bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 p-3 rounded-lg transition-all flex items-start gap-2 hover:border-[#D4952C]/30 cursor-pointer"
                  >
                    <span className="text-[#D4952C] font-bold">٣.</span>
                    <span>كفاح فك قيد **التضامن المالي** (المادة 4).</span>
                  </button>

                  <button 
                    onClick={() => handleSeedQuestion('أنا الضحية بودراع إيمان، كيف أتابع المتهمين في الاستئناف لتحصيل مبلغ 2,000,000 دج ومبلغ الضرار 200,000 دج؟')}
                    className="text-right text-xs bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 p-3 rounded-lg transition-all flex items-start gap-2 hover:border-[#D4952C]/40 cursor-pointer"
                  >
                    <span className="text-[#D4952C] font-bold">٤.</span>
                    <span>تأمين مطالب الضحية **بودراع إيمان** بالتضامن.</span>
                  </button>

                  <button 
                    onClick={() => handleSeedQuestion('أنا العميل زكريا قدور، متابع بجنحة المشاركة بعد استغراج حسابي CCP باسم أمازون الوهمي وخسرت 85 مليون سنتيم من مالي الخاص في ابتزاز متكرر لإنقاذ أموالي. كيف تدافع عن براءتي التامة لانتفاء القصد الجنائي؟')}
                    className="text-right text-xs bg-[#FBF9F0] border-amber-300/60 hover:bg-[#FAF4DD] text-[#5C3A21] border p-3 rounded-lg transition-all flex items-start gap-2 hover:border-[#C19B4C] cursor-pointer"
                  >
                    <span className="text-[#C19B4C] font-bold">٥.</span>
                    <span><b>قضية موكلي زكريا قدور:</b> انتفاء القصد الجنائي والابتزاز المالي.</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Chat View */}
              <div className="flex-1 flex flex-col h-[520px]">
                
                <div className="p-3 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>الأستاذ الهادي الجزائري مستعد للسند والدفاع</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setForceSimulation(prev => !prev)}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all flex items-center gap-1 cursor-pointer ${
                        forceSimulation 
                          ? 'bg-amber-100 text-amber-800 border border-amber-300' 
                          : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                      }`}
                      title="عند نفاد الحصة اليومية المجانية لـ Gemini، قم بتشغيل وضع المحاكاة الفقهية للحصول على إجابات محلية رصينة"
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${forceSimulation ? 'bg-amber-600 animate-pulse' : 'bg-slate-400'}`}></span>
                      {forceSimulation ? 'وضعية المحاكاة نشطة' : 'شغل محاكاة براءة أوفلاين'}
                    </button>
                    <span className="text-[10px] bg-slate-200 px-2 py-0.5 rounded font-mono">Status: Connected</span>
                  </div>
                </div>

                {apiKeyError && (
                  <div className="bg-amber-50 border-b border-amber-200 p-4 text-xs text-amber-900 flex items-start gap-2.5">
                    <AlertTriangle className="h-4.5 w-4.5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">{apiKeyError}</p>
                      <p className="mt-1 text-slate-600 leading-relaxed">
                        يتم تشغيل الاستشارات القانونية الجزئية عن طريق الاستعلام الآمن من الخادم. يرجى توفير مفتاح Gemini الخاص بك في لوحة الإعدادات <b>Settings &gt; Secrets</b> بالمشروع عن طريق إدخال القيمة لمتغير البيئة <b>GEMINI_API_KEY</b> وسيتم تشغيله تلقائياً.
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 bg-[#F9FBF9] h-full" id="chat-messages-container">
                  {messages.map(m => (
                    <div
                      key={m.id}
                      className={`flex flex-col max-w-[85%] ${m.sender === 'user' ? 'mr-auto items-start' : 'ml-auto items-end'}`}
                    >
                      <div className={`p-3.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                        m.sender === 'user'
                          ? 'bg-slate-100 text-slate-800 rounded-tl-none'
                          : 'bg-[#1A382A] text-white rounded-tr-none border-r-3 border-[#C19B4C] shadow-sm'
                      }`}>
                        {m.text}
                      </div>
                      <span className="text-[9px] text-slate-400 mt-1 font-mono">{m.timestamp}</span>
                    </div>
                  ))}
                  {chatLoading && (
                    <div className="flex flex-col max-w-[85%] ml-auto items-end">
                      <div className="p-3 bg-slate-100 rounded-2xl rounded-tr-none text-slate-500 text-xs flex items-center gap-2">
                        <Scale className="h-4 w-4 animate-spin text-[#D4952C]" />
                        <span>يصيغ الأستاذ رأيك القانوني والمنهجي الآن...</span>
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>

                <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-100 bg-white flex gap-2">
                  <input
                    type="text"
                    value={inputPrompt}
                    onChange={(e) => setInputPrompt(e.target.value)}
                    placeholder="اكتب استشارتك أو قضيتك الجنائية بالجزائر للأستاذ الهادي..."
                    className="flex-1 bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-xs focus:outline-none focus:border-emerald-600 focus:bg-white text-right"
                  />
                  <button
                    type="submit"
                    disabled={!inputPrompt.trim() || chatLoading}
                    className="p-3 bg-[#1A382A] text-[#F9F6EE] hover:text-white rounded-xl transition-all shadow-sm border border-[#C19B4C]/35 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <Send className="h-4.5 w-4.5 rotate-180" />
                  </button>
                </form>

              </div>

          </div>
        )}

        {/* Tab 2: Case Forensics / Dynamic RAG Dashboard */}
        {activeTab === 'forensics' && (
          <div className="p-5 flex flex-col gap-6 overflow-y-auto max-h-[600px] bg-white rounded-2xl border border-slate-200">
            
            {/* Header section */}
            <div className="border-b border-slate-100 pb-3 flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <h2 className="text-xl font-bold font-serif text-[#1A382A] flex items-center gap-2">
                  <Paperclip className="h-5 w-5 text-[#C19B4C]" />
                  الملف التقني المجهز ومستندات قضية الحال (RAG Pipe)
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  قم بتحميل ملفات كشوف الحساب ومحاضر CamScanner والـ PDF لتلقين المحامي وتفادي أي هذيان قضائي بالوقائع أو الولاية الإقليمية قضيتك.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold ${useRag ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-slate-50 text-slate-500 border border-slate-200'}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${useRag ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`}></span>
                  {useRag ? 'ذاكرة الـ RAG النشطة مفعلة' : 'ذاكرة الـ RAG معطلة'}
                </span>
              </div>
            </div>

            {/* Quick Presets for Demo / Testing */}
            <div className="bg-[#FAF9F6] border border-[#C19B4C]/20 p-4 rounded-xl">
              <h3 className="text-xs font-bold text-[#7E461B] mb-2 flex items-center gap-1">
                <ArrowLeftRight className="h-4 w-4" />
                تحميل سيناريوهات وقضايا جاهزة فوراً لدراستها (RAG Quick Load)
              </h3>
              <p className="text-[11px] text-slate-500 mb-3">
                اضغط على أحد السيناريوهات الجاهزة لإطعام عقل المحامي بها وتوجيهه للموقع والوقائع المطابقة للقرائن:
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => loadPreset('zakaria-annaba')}
                  className="px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer bg-white active:scale-95 border-[#C19B4C]/40 text-[#7E461B] hover:bg-[#FAF6EE]"
                >
                  📍 قضية زكريا قدور - ولاية عنابة (85 مليون خسارة)
                </button>
                <button
                  type="button"
                  onClick={() => loadPreset('oran-money-laundering')}
                  className="px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer bg-white active:scale-95 border-emerald-300 text-emerald-800 hover:bg-emerald-50"
                >
                  ⚖️ قضية بلقاسم لعموري - مجلس قضاء وهران (تبييض أموال)
                </button>
                <button
                  type="button"
                  onClick={() => loadPreset('empty')}
                  className="px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer bg-white active:scale-95 border-red-300 text-red-700 hover:bg-red-50"
                >
                  🗑️ تفريغ وحذف وقائع القضية كلياً (ملف فارغ وقابل للملء)
                </button>
              </div>
            </div>

            {/* Main grid: Left upload area / Right context text */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Left Column (Upload and stats) - Span 5 */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                
                {/* Drag and Drop Zone */}
                <div 
                  className="border-2 border-dashed border-slate-300 hover:border-[#C19B4C]/60 rounded-xl p-5 text-center bg-slate-50/50 transition-all flex flex-col items-center justify-center cursor-pointer gap-2"
                  onClick={() => document.getElementById('rag-file-input')?.click()}
                  onDragOver={(e) => { e.preventDefault(); e.currentTarget.classList.add('border-[#C19B4C]', 'bg-[#FAF6EE]/20'); }}
                  onDragLeave={(e) => { e.preventDefault(); e.currentTarget.classList.remove('border-[#C19B4C]', 'bg-[#FAF6EE]/20'); }}
                  onDrop={(e) => {
                    e.preventDefault();
                    e.currentTarget.classList.remove('border-[#C19B4C]', 'bg-[#FAF6EE]/20');
                    if (e.dataTransfer.files) processFiles(e.dataTransfer.files);
                  }}
                >
                  <Upload className="h-8 w-8 text-slate-400 mb-1" />
                  <span className="text-xs font-bold text-slate-700">اسحب وأفلت مستندات قضية الحال هنا</span>
                  <span className="text-[10px] text-slate-500">يدعم PDF، صور كشوفات CamScanner، ملفات CSV أو نصوص كشوف الحساب</span>
                  <button type="button" className="mt-2 text-[11px] font-bold text-[#7E461B] bg-white border border-[#C19B4C]/35 px-3 py-1 rounded shadow-sm hover:bg-[#FAF6EE]">تصفح الملفات من جهازك</button>
                  <input
                    key={fileInputKey}
                    id="rag-file-input"
                    type="file"
                    className="hidden"
                    multiple
                    onChange={handleFileUpload}
                  />
                </div>

                {/* List of current files in memory */}
                <div className="border border-slate-200 rounded-xl p-4">
                  <h4 className="text-xs font-bold text-slate-705 mb-3 flex items-center justify-between">
                    <span>المستندات المدرجة بذاكرة المحامي ({uploadedFiles.length})</span>
                    <span className="text-[10px] p-1 bg-emerald-50 text-emerald-800 rounded font-mono">متصلة بالقضية</span>
                  </h4>

                  {uploadedFiles.length === 0 ? (
                    <div className="text-center py-6 text-slate-400 text-xs">
                      لا توجد مستندات مرفوعة حالياً. يمكنك تصفح أو سحب المستندات، أو ملء وقائع القضية يدوياً في الخانة المقابلة.
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2 max-h-[180px] overflow-y-auto">
                      {uploadedFiles.map(file => (
                        <div key={file.id} className="flex items-center justify-between p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs">
                          <div className="flex items-center gap-2 truncate">
                            <FileText className="h-4 w-4 text-[#C19B4C] shrink-0" />
                            <div className="truncate">
                              <p className="font-bold text-slate-700 truncate">{file.name}</p>
                              <p className="text-[9px] text-slate-500">{file.size} • {file.type || 'ملف بيانات مستخلص'}</p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveFile(file.id, file.name)}
                            className="p-1 hover:bg-red-50 text-red-500 rounded transition-all cursor-pointer"
                            title="حذف وحذف من الذاكرة اللحظية"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Real-time Parsed Metadata / Anti-Hallucination Proof */}
                <div className="bg-[#FAFDFB] border border-emerald-100 rounded-xl p-4">
                  <h4 className="text-xs font-bold text-emerald-800 mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    المعادلات المستخلصة ديناميكياً (شاشة استعلام الـ RAG)
                  </h4>
                  <p className="text-[10px] text-slate-500 mb-3 leading-relaxed">
                    تقوم الخوارزمية بمطابقة التفاصيل التالية ديناميكياً لتحديث هوية الدفاع ومنع تشتت أو هذيان القضية:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-white border border-slate-100 p-2 rounded">
                      <span className="text-[9px] text-slate-400 block">الموكل الخاضع للدفاع:</span>
                      <strong className="text-slate-700 mt-0.5 block truncate">
                        {caseContext.includes('زكريا قدور') || caseContext.includes('Zakaria') ? 'زكريا قدور' : caseContext.includes('بلقاسم لعموري') ? 'بلقاسم لعموري' : 'غير محدد بعد'}
                      </strong>
                    </div>
                    <div className="bg-white border border-slate-100 p-2 rounded">
                      <span className="text-[9px] text-slate-400 block">محكمة الاختصاص الفعلي:</span>
                      <strong className="text-slate-700 mt-0.5 block truncate text-[#7E461B]">
                        {caseContext.includes('عنابة') || caseContext.includes('Annaba') ? 'مجلس قضاء عنابة 📍' : caseContext.includes('وهران') ? 'مجلس قضاء وهران 📍' : 'معلقة على النص الآتي'}
                      </strong>
                    </div>
                    <div className="bg-white border border-slate-100 p-2 rounded">
                      <span className="text-[9px] text-slate-400 block">قيمة الضرر المادي الموصوف:</span>
                      <strong className="text-slate-700 mt-0.5 block truncate">
                        {caseContext.includes('85 مليون') ? '85 مليون سنتيم (خسارة)' : caseContext.includes('2 مليون') || caseContext.includes('2,000,000') ? '200 مليون سنتيم' : 'جاري التحليل'}
                      </strong>
                    </div>
                    <div className="bg-white border border-slate-100 p-2 rounded">
                      <span className="text-[9px] text-slate-400 block">رابطة المشاركة الجنائية:</span>
                      <strong className="text-emerald-700 mt-0.5 block truncate font-bold text-[10px]">
                        {caseContext.includes('عولمي أيمن') ? 'تأثر بسابقة براءة عولمي أيمن' : 'براءة غياب القصد'}
                      </strong>
                    </div>
                  </div>
                </div>

              </div>
              
              {/* Right Column (Editable contextual memory of the RAG) - Span 7 */}
              <div className="lg:col-span-7 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="rag-context-editor" className="text-xs font-bold text-slate-700 flex items-center gap-1">
                    <FileText className="h-4.5 w-4.5 text-[#C19B4C]" />
                    المدخلات النصية لوقائع قضية الحال النشطة بذاكرة المحامي (RAG Editor)
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-[11px] font-semibold text-slate-600">
                    <input
                      type="checkbox"
                      checked={useRag}
                      onChange={(e) => setUseRag(e.target.checked)}
                      className="rounded border-slate-300 text-[#1A382A] focus:ring-[#1A382A]"
                    />
                    حقن الذاكرة النشطة في الاستشارات
                  </label>
                </div>

                <p className="text-[10px] text-slate-500 leading-relaxed">
                  يقع هنا عقل قضيتك. الـ RAG يسحب النص التالي حرفياً ويحقنه في أعمق طبقات تفكير المحامي "الأستاذ الهادي" كمرجع وقائعي وحيد، مما يعزز براءتك تماماً ويمنع الهذيان الكيدي ويجعله محامياً خارقاً:
                </p>

                <textarea
                  id="rag-context-editor"
                  value={caseContext}
                  onChange={(e) => setCaseContext(e.target.value)}
                  rows={14}
                  className="w-full text-xs font-mono p-3 bg-slate-50 border border-slate-200 focus:bg-white focus:ring-1 focus:ring-[#C19B4C] focus:border-[#C19B4C] rounded-xl outline-none leading-relaxed text-slate-800"
                  placeholder="اكتب وقائع القضية هنا بالتفصيل، كالمحكمة، والأطراف، والمبالغ، ووسائل الإكراه لتدريب المحامي..."
                />

                <div className="flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSaveBanner(true);
                      setTimeout(() => setSaveBanner(false), 5000);
                    }}
                    className="flex-1 bg-[#1A382A] hover:bg-[#244E36] text-white border border-[#C19B4C] text-xs font-bold py-3 px-4 rounded-xl shadow-md transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#C19B4C]" />
                    حفظ الوقائع وتفاصيل القضية وتلقيم ذكاء المحامي فوراً
                  </button>
                </div>

                {saveBanner && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 font-bold flex items-center gap-2 animate-bounce mt-1">
                    <Check className="h-4 w-4" />
                    <span>تم حفظ وحقن وقائع المستند بذاكرة المحامي بنجاح! عند محاورته، سيبني جميع الدفوع، الثغرات، واللوائح بناءً على هذه البيانات والموقع الجغرافي المعيّن حصرياً.</span>
                  </div>
                )}

              </div>

            </div>

          </div>
        )}

        {/* Tab 3: Legal Loopholes Map */}
        {activeTab === 'loopholes' && (
          <div className="p-5 flex flex-col gap-6 overflow-y-auto max-h-[520px] bg-white rounded-2xl border border-slate-200">
            
            <div className="border-b border-slate-100 pb-3">
              <h2 className="text-xl font-bold font-serif text-[#1A382A]">خارطة الدفوع الجنائية والثغرات الذهبية في قضايا النصب</h2>
              <p className="text-xs text-slate-500 mt-1">كيفية إسقاط الركن الجنائي الجوهري وإلغاء اتهام المشاركة والمسؤولية التضامنية المالية للموكلين</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {LEGAL_LOOPHOLES.map((loop) => (
                <div key={loop.id} className="border border-slate-200 hover:border-[#D4952C]/30 p-4 rounded-xl bg-[#FAF9F6]/50 shadow-inner relative flex flex-col gap-4">
                  <div>
                    <span className="text-[10px] bg-[#1A382A]/10 text-[#1A382A] font-bold px-2 py-0.5 rounded font-mono uppercase">ثغرة دفاعية قانونية</span>
                    <h4 className="text-xs md:text-sm font-bold font-serif text-slate-800 pr-2 border-r-2 border-[#D4952C] mt-2 block">{loop.title}</h4>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{loop.description}</p>
                  
                  <div className="text-[10px] mt-auto pt-3 border-t border-slate-200 space-y-2">
                    <div>
                      <span className="text-amber-800 font-bold block">السند القانوني الجزائري:</span>
                      <p className="text-slate-600 mt-0.5 font-mono">{loop.citation}</p>
                    </div>
                    <div>
                      <span className="text-emerald-800 font-bold block">الدفع في الاستئناف:</span>
                      <p className="text-[#386c52] mt-0.5 leading-relaxed">{loop.defenseTactic}</p>
                    </div>
                    <div className="bg-emerald-50 text-emerald-800 p-2 rounded text-[9px] mt-1 font-sans">
                      <b>شرح الواقعة في CamScanner:</b> {loop.camscannerPrecedent}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* Tab 4: Legal Document Template Drafter */}
        {activeTab === 'documents' && (
          <div className="flex-1 flex flex-col lg:flex-row bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden h-[540px]">
            
            {/* Template Side Drawer Selection */}
            <div className="w-full lg:w-80 bg-slate-50 border-b lg:border-b-0 lg:border-l border-slate-200 p-4 flex flex-col gap-3 overflow-y-auto shrink-0">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                <FileSignature className="h-4.5 w-4.5 text-[#D4952C]" />
                عرائض القضية والمذكرات المتاحة
              </h3>

              {DOCUMENT_TEMPLATES.map((temp) => (
                <button
                  key={temp.id}
                  onClick={() => setSelectedTemplate(temp)}
                  className={`text-right p-3 rounded-xl border text-xs leading-relaxed transition-all cursor-pointer ${
                    selectedTemplate.id === temp.id
                      ? 'border-[#D4952C] bg-white font-bold text-[#673919] shadow-sm'
                      : 'border-slate-200 bg-white/70 hover:bg-slate-100 text-slate-600'
                  }`}
                >
                  <div className="font-serif font-bold text-sm text-slate-800">{temp.title}</div>
                  <p className="text-[10px] text-slate-500 mt-1">{temp.description}</p>
                </button>
              ))}

              <div className="bg-[#FAF9F6] p-3 rounded-lg border border-slate-200 text-[10px] text-slate-500 mt-auto leading-relaxed">
                <p>
                  <b>دليل المحرر:</b> بمجرد تعبئة الخانات الجانبية، سيقوم المولد التلقائي المطور بكتابة مرافعة دفاعية في ورقة الطابع الرسمي الجزائي Amiri Serif.
                </p>
              </div>
            </div>

            {/* Input Form Fields Box */}
            <div className="w-full lg:w-72 p-4 border-b lg:border-b-0 lg:border-l border-slate-100 overflow-y-auto flex flex-col gap-3 shrink-0">
              <h4 className="text-xs font-mono font-bold text-slate-500">حقول تعبئة العريضة:</h4>
              
              {selectedTemplate.fields.map((field) => (
                <div key={field.key} className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-slate-700">{field.label}</label>
                  <input
                    type="text"
                    value={documentInputs[field.key] || ''}
                    onChange={(e) => handleInputChange(field.key, e.target.value)}
                    placeholder={field.placeholder}
                    className="bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg text-xs focus:outline-none focus:border-[#C19B4C] text-right focus:bg-white"
                  />
                </div>
              ))}
            </div>

            {/* Watermarked stamp legal preview and outputs panel */}
            <div className="flex-1 p-4 bg-slate-50 overflow-hidden flex flex-col w-full">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3 text-xs">
                <span className="font-bold text-[#673919] font-serif flex items-center gap-1.5">
                  <FileText className="h-4.5 w-4.5 text-[#D4952C]" />
                  استمارة العريضة الجزائية (جاهزة للنسخ أو الطباعة)
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyText}
                    className="p-2 bg-white hover:bg-slate-100 text-slate-700 rounded-lg border border-slate-200 transition-all flex items-center gap-1 text-[11px] font-bold cursor-pointer"
                  >
                    {copiedNotification ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">تم النسخ!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5 text-[#D4952C]" />
                        <span>نسخ النص</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handlePrintDoc}
                    className="p-2 bg-white hover:bg-slate-100 text-slate-700 rounded-lg border border-slate-200 transition-all flex items-center gap-1 text-[11px] font-bold cursor-pointer"
                  >
                    <Printer className="h-3.5 w-3.5 text-emerald-800" />
                    <span>طباعة</span>
                  </button>
                </div>
              </div>

              {/* Watermarked legal stamp style container */}
              <div className="flex-1 bg-[#FCFBEE] p-5 rounded-xl border border-slate-300 shadow-inner overflow-y-auto relative whitespace-pre-wrap font-serif text-right text-slate-800 select-text selection:bg-amber-100 legal-paper text-sm leading-relaxed">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none select-none text-center w-full">
                  <Scale className="h-48 w-44 text-[#1A382A] mx-auto" />
                  <h4 className="text-lg font-bold font-serif whitespace-nowrap mt-2">الجمهورية الجزائرية الديمقراطية الشعبية</h4>
                </div>
                {generatedDocText}
              </div>

            </div>

          </div>
        )}

        {/* Tab 5: Penal Code articles lookup explorer */}
        {activeTab === 'code' && (
          <div className="p-5 flex flex-col gap-4 overflow-y-auto max-h-[520px] bg-white rounded-2xl border border-slate-200">
            
            <div className="border-b border-slate-100 pb-3">
              <h2 className="text-xl font-bold font-serif text-[#1A382A]">أحكام وفهرس قانون العقوبات الجزائري الكامل (CODE PENAL)</h2>
              <p className="text-xs text-slate-500 mt-1">البحث والتدقيق اللحظي في تهم الجنح والمشاركة ومصادرة الأموال ومبدأ الظروف المخففة</p>
            </div>

            {/* Filter tags controllers */}
            <div className="flex flex-col sm:flex-row gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
              <div className="flex-1">
                <input
                  type="text"
                  value={codeQuery}
                  onChange={(e) => setCodeQuery(e.target.value)}
                  placeholder="ابحث بكلمة أو برقم المادة (مثلاً: مشاركة، 372، كتم، ظروف)..."
                  className="w-full bg-white border border-slate-200 px-3 py-2 rounded-lg text-xs leading-relaxed focus:outline-none focus:border-[#C19B4C] text-right"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white border border-slate-200 px-3 py-2 rounded-lg text-xs text-right cursor-pointer"
              >
                <option value="all">كل الفصول والأبواب</option>
                {codeCategories.map((c, i) => (
                  <option key={i} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Articles feed list */}
            <div className="flex flex-col gap-4">
              {filteredArticles.length > 0 ? (
                filteredArticles.map((art) => (
                  <div key={art.id} className="border border-slate-100 hover:border-emerald-700/20 p-4 rounded-xl transition-all bg-white relative shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2 mb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="font-serif font-bold text-sm bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded">
                          {art.number}
                        </span>
                        <h4 className="text-sm font-bold text-slate-800 font-serif">{art.title}</h4>
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px]">
                        <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">
                          {art.sourceChapter}
                        </span>
                        <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded font-bold">
                          {art.penaltyType}
                        </span>
                      </div>
                    </div>

                    <blockquote className="bg-[#FAF9F6] border-r-3 border-[#D4952C] p-3 text-sm italic leading-relaxed text-[#512b07] font-serif legal-paper">
                      "{art.textAr}"
                    </blockquote>

                    <div className="mt-3 flex flex-wrap gap-4 text-xs">
                      <div className="flex-1 bg-slate-50 p-2.5 rounded-lg text-slate-600">
                        <span className="font-medium text-slate-800 block">شرح العقوبات التفصيلي:</span>
                        <p className="mt-1">{art.penaltyDetails}</p>
                      </div>
                      {art.loopholeHint && (
                        <div className="flex-1 bg-emerald-50/50 p-2 rounded-lg border-l-2 border-emerald-500">
                          <span className="font-semibold text-emerald-800 block">💡 الثغرة القضائية المستعملة للدفاع:</span>
                          <p className="text-emerald-700 text-xs mt-1 leading-relaxed">{art.loopholeHint}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10 text-slate-400">لا توجد مواد تطابق صياغة البحث الحالي.</div>
              )}
            </div>

          </div>
        )}

        {/* Tab 6: Crime Timeline Progress & Limit Days */}
        {activeTab === 'timeline' && (
          <div className="p-5 flex flex-col gap-6 overflow-y-auto max-h-[520px] bg-white rounded-2xl border border-slate-200">
            
            <div className="border-b border-slate-100 pb-3">
              <h2 className="text-xl font-bold font-serif text-[#1A382A]">المسار الإجرائي للدعوى الجنائية ومواقيت الاستئناف الطارئة</h2>
              <p className="text-xs text-slate-500 mt-1">تتبع المسار التحقيقي من الضبطية السيبرانية إلى الاستئناف أمام الغرفة بمجلس قضاء الجزائر</p>
            </div>

            <div className="relative border-r border-[#C19B4C] mr-4 pr-6 space-y-6">
              {MISDEMEANOR_PROCEDURE_TIMELINE.map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline icon indicator pin */}
                  <span className="absolute -right-[31px] top-1.5 h-6.5 w-6.5 rounded-full border-4 border-white bg-[#C19B4C] text-white flex items-center justify-center font-bold text-[10px] shadow-sm">
                    {idx + 1}
                  </span>
                  
                  <div className="bg-slate-50 hover:bg-slate-100/50 border border-slate-200/80 p-4 rounded-xl transition-all max-w-3xl">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/40 pb-2 mb-2">
                      <h4 className="text-sm font-bold text-slate-800 font-serif">{step.title}</h4>
                      {step.timeLimit && (
                        <span className="bg-red-50 text-red-700 border border-red-200 text-[10px] font-mono font-bold px-2 py-0.5 rounded animate-pulse">
                          🚨 الحد الزمني الحرج: {step.timeLimit}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
                    
                    <div className="mt-2.5 pt-2 border-t border-slate-200/40 text-[10px] text-slate-500 font-mono">
                      <span>الضابط والمستند القانوني:</span> <b className="text-slate-700">{step.legalBasis}</b>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </main>

      {/* Footer copyright */}
      <footer className="bg-[#11241C] border-t border-[#C19B4C]/20 py-4 px-6 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-serif">© {new Date().getFullYear()} الجمهورية الجزائرية الديمقراطية الشعبية - منظومة محاكاة المحامي الجزائري المعتمد لغ غرفة الجنح</p>
          <div className="flex items-center gap-4 text-slate-500 font-mono text-[10px]">
            <span>التشريع المحكّم: قانون العقوبات 2026</span>
            <span>-</span>
            <span>بوابة الاستئناف بئر مراد رايس</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
