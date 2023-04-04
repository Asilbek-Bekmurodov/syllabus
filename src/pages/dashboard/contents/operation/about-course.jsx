// qisqa kalit rfce

import cls from "./styles.module.scss";

// style ulash

function AboutCourseOperation() {
    let str = '  <p style="line-height: 1.8; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">FAN TO&lsquo;GʻRISIDA MA&rsquo;LUMOT</span></strong></p>\n' +
        '        <p style="line-height: 1.295; text-align: justify; margin-top: 0pt; margin-bottom: 8pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Fan shifri: </span><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">OPESYS6</span></strong></p>\n' +
        '        <p style="text-align: justify; margin-top: 0pt; margin-bottom: 8pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Fan nomi: </span><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Operatsion tizimlar</span></strong></p>\n' +
        '        <p style="text-align: justify; margin-top: 0pt; margin-bottom: 8pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Semestr/Yil</span><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">: 5-semestr/ 2022-2023 o&lsquo;quv yili (asosiy fan)</span></strong></p>\n' +
        '        <p style="text-align: justify; margin-top: 0pt; margin-bottom: 8pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Kafedra:</span><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;"> Raqamli iqtisodiyot va axborot texnologiyalari</span></strong></p>\n' +
        '        <p style="text-align: justify; margin-top: 0pt; margin-bottom: 8pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Soatlar/kreditlar miqdori:&nbsp; </span><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">6 ECTS (72 auditoriya soati)</span></strong></p>\n' +
        '        <p>&nbsp;</p>\n' +
        '        <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">O&lsquo;QITUVCHI TO&lsquo;GʻRISIDA MA&rsquo;LUMOT</span></strong></p>\n' +
        '        <p>&nbsp;</p>\n' +
        '        <p style="line-height: 1.295; text-align: justify; margin-top: 0pt; margin-bottom: 8pt;"><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">O&lsquo;qituvchilar</span></strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">: M.M. Abdulaxatov</span></p>\n' +
        '        <p style="line-height: 1.295; text-align: justify; margin-top: 0pt; margin-bottom: 8pt;"><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Kafedra joylashgan joyi:</span></strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;"> TDIU, 5-o&lsquo;quv binosi, 105-xona&nbsp;</span></p>\n' +
        '        <p style="line-height: 1.295; text-align: justify; margin-top: 0pt; margin-bottom: 8pt;"><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Telefon:</span></strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;"> 71-239-28-41 ish telefoni&nbsp;</span></p>\n' +
        '        <p style="line-height: 1.295; text-align: justify; margin-top: 0pt; margin-bottom: 8pt;"><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">E-mail:</span></strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">&nbsp; </span><a style="text-decoration: none;" href="mailto:muzaffar.abdulakhatov@gmail.com"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #0563c1; text-decoration: underline; text-decoration-skip-ink: none;">muzaffar.abdulakhatov@gmail.com</span></a><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">&nbsp;</span></p>\n' +
        '        <p style="line-height: 1.295; text-align: justify; margin-top: 0pt; margin-bottom: 8pt;"><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Talablarni qabul qilish vaqti</span></strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">: Talabalar darsdan tashqari vaqtda o&lsquo;qituvchi bilan uchrashish uchun o&lsquo;qituvchi elektron pochtasiga xat bilan murojaat qilib uchrashuv vaqtini belgilab olishlari mumkin.</span></p>\n' +
        '        <p>&nbsp;</p>\n' +
        '        <ol style="margin-top: 0px; margin-bottom: 0px; padding-inline-start: 48px;">\n' +
        '        <li style="list-style-type: upper-roman; font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; font-weight: bold; margin-left: 10.35pt; padding-left: 18pt;">\n' +
        '        <p style="line-height: 1.295; text-align: justify; margin-top: 0pt; margin-bottom: 8pt;"><strong><span style="font-size: 13pt;">Fan tavsifi</span></strong></p>\n' +
        '        </li>\n' +
        '        </ol>\n' +
        '        <p style="line-height: 1.295; text-indent: 28.35pt; text-align: justify; margin-top: 0pt; margin-bottom: 8pt;"><span style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000;">Xozirgi axborot asrida axborot texnologiyalari inson faoliyatining deyarli hamma jabxalarga kirib borish jarayoni borgan sari rivojlanib chuqurlashib bormoqda. Umumiy soni, ko&lsquo;p yuz milliondan oshib ketgan, keng tarqalgan shaxsiy kompyuterlardan tashqari, hisoblash tizimlarining maxsus vositalari ham ko&lsquo;payib bormoqda. Bu turli-tuman hisoblash texnikasidan foydalanuvchilar soni ham ko&lsquo;payib borayotganini bildiradi, bunda ikki qarama-qarshi tendensiyani rivojlanishi kuzatilmoqda. Bir tomondan, axborot texnologiyalari borgan sari murakkablashmoqda va ularni qo&lsquo;llash uchun, va ularni keyingi rivojlanishi uchun juda chuqur bilimlar talab qilinadi. Boshqa tomondan, foydalanuvchilarning kompyuterlar bilan muloqati soddalashmoqda. Kompyuterlar va axborot tizimlari borgan sari do&lsquo;stona bo&lsquo;lib bormoqda, va hatto ular informatika va hisoblash texnikasi sohasida mutahassis bo&lsquo;lmagan odamlar uchun ham tushunarli bo&lsquo;lib bormoqda. Bu narsa, eng avvalo foydalanuvchilar va ularning dasturlari, hisoblash texnikasi bilan maxsus (tizimli) dasturiy ta&rsquo;minot &ndash; operatsion tizim orqali muloqat qilganliklari uchungina yuzaga keldi.&nbsp;</span></p>\n' +
        '        <p style="line-height: 1.295; text-indent: 28.35pt; text-align: justify; margin-top: 0pt; margin-bottom: 8pt;"><span style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000;">Operatsion tizimlar foydalanuvchilar uchun ham, bajariluvchi ilovalar uchun ham interfeysni tashkil etadi. Foydalanuvchilar va ko&lsquo;pgina hizmatchi dasturlar, dasturiy taьminotdan hamma dasturlarda tez-tez uchraydigan amallarni bajarishni so&lsquo;raydi. Bunday amallarga, birinchi navbatda, kiritishchiqarish, biror-bir dasturini ishga tushirish va to&lsquo;xtatish, qo&lsquo;shimcha xotira blokini olish yoki uni bo&lsquo;shatish va boshqa ko&lsquo;pgina amallar kiradi.</span></p>\n' +
        '        <p>&nbsp;</p>\n' +
        '        <p style="line-height: 1.295; text-indent: 28.35pt; text-align: justify; margin-top: 0pt; margin-bottom: 8pt;"><strong><span style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000;">II.&nbsp;Fanning maqsadi</span></strong></p>\n' +
        '        <ul style="margin-top: 0px; margin-bottom: 0px; padding-inline-start: 48px;">\n' +
        '        <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.295; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">mustaqil fikrlashni namoyish etish;</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.295; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">mustaqil ishlashga tayyorlash;</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.295; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">talabalarga operatsion tizimlarning xisoblash tizimida hisoblash jarayonini tashkil etish;&nbsp;</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.295; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">&nbsp;alohida yechilayotgan masalalari o&lsquo;rtasida xisoblash resurslarini rasional taqsimlash foydalanuvchilarga dasturlash jarayonlarini va masalani sozlashni yengillashtiruvchi turli servis vositalari haqida bilim berish va ularni amaliyotga qo&lsquo;llash malakaviy ko&lsquo;nikmalarini shakllantirish.</span></p>\n' +
        '        </li>\n' +
        '        </ul>\n' +
        '        <p>&nbsp;</p>\n' +
        '        <p style="line-height: 1.295; text-indent: 35.45pt; text-align: justify; margin-top: 0pt; margin-bottom: 8pt;"><strong><span style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000;">III.&nbsp;Ta&rsquo;lim berish natijalari</span></strong></p>\n' +
        '        <ul style="margin-top: 0px; margin-bottom: 0px; padding-inline-start: 48px;">\n' +
        '        <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.295; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Operatsion tizim aniq konfigurasiyasini sozlash, tarmoq operatsion tizim xizmatlari va resurslariga murojaatlarni ko&lsquo;rib chiqish tasavvuriga ega bo&lsquo;lishi;</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.295; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Fayl tizimi funksiyalarini bilishi, operatsion tizimlarda axborot xavfsizligini ta&rsquo;minlash kompetensiyalari bilishi va ulardan foydalana olishi;&nbsp;</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.295; text-align: justify; margin-top: 0pt; margin-bottom: 8pt;"><span style="font-size: 13pt;">Turli operatsion tizim muhiti va ilovalarida ishlash, turli operatsion tizim muhitlarida administrlash, malakalariga ega bo&lsquo;lishi kerak.</span></p>\n' +
        '        </li>\n' +
        '        </ul>\n' +
        '        <p style="line-height: 1.295; text-indent: 35.45pt; text-align: justify; margin-top: 0pt; margin-bottom: 8pt;"><strong><span style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000;">IV.&nbsp;Ta&rsquo;lim berish usullari</span></strong></p>\n' +
        '        <ul style="margin-top: 0px; margin-bottom: 0px; padding-inline-start: 48px;">\n' +
        '        <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '        <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">real vaziyatga asoslangan amaliy ishlarni bajarish;</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '        <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">esse, tezis va maqolalar yozish;</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '        <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">vaziyatli topshiriqlarni (keys-stadi) yechish;</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '        <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">jarayonli-yo&lsquo;naltirilgan ta&rsquo;lim;</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '        <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">muhokamalarda ishtirok etish;</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '        <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">kichik guruhlarda ishlash;</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '        <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">loyiha ishi bajarish;</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '        <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">mustaqil ishlarni bajarish;</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '        <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">taqdimot tayyorlash;</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '        <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">turli darajadagi testlarni yechish;</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '        <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">so&lsquo;rov o&lsquo;tkazish;</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '        <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">muammoni hal qilish.</span></p>\n' +
        '        </li>\n' +
        '        </ul>\n' +
        '        <p><br /><br /><br /></p>'
    return (
        <div>
            <h1 className={cls.title}>About course</h1>
            <div dangerouslySetInnerHTML={{__html: str}}></div>


        </div>
    );
}

export default AboutCourseOperation;
