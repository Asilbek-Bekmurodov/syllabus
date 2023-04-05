// qisqa kalit rfce

import cls from "./styles.module.scss";

// style ulash

function AboutCourseJava() {
    let str = '           <p style="line-height: 1.8; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">FAN TO&lsquo;GʻRISIDA MA&rsquo;LUMOT</span></strong></p>\n' +
        '        <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Fan shifri: </span><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">PROJAV6</span></strong></p>\n' +
        '        <p style="text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Fan nomi:&nbsp; </span><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Java dasturlash tili</span></strong></p>\n' +
        '        <p style="text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Semestr/Yil</span><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">: 6-semestr/ 2022-2023 o&lsquo;quv yili (asosiy fan)</span></strong></p>\n' +
        '        <p style="text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Kafedra:</span><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;"> Raqamli iqtisodiyot va axborot texnologiyalari</span></strong></p>\n' +
        '        <p style="text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Soatlar/kreditlar miqdori:&nbsp; </span><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">6 ECTS (72 auditoriya soati)</span></strong></p>\n' +
        '        <p>&nbsp;</p>\n' +
        '        <p style="text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Fan bo&lsquo;yicha mashg&lsquo;ulotlarning joylashuvi:&nbsp;</span></strong></p>\n' +
        '        <p style="text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Auditoriya vaqti: Dars jadvaliga asosan</span></p>\n' +
        '        <p style="text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Talablar:&nbsp;</span></p>\n' +
        '        <p style="text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Fan uchun mas&rsquo;ul kafedra: Raqamli iqtisodiyot va axborot texnologiyalari kafedrasi</span></p>\n' +
        '        <p>&nbsp;</p>\n' +
        '        <p style="text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">O&lsquo;QITUVCHI TO&lsquo;GʻRISIDA MA&rsquo;LUMOT</span></strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">&nbsp;</span></p>\n' +
        '        <p style="text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">O&lsquo;qituvchilar: M. Abdullayev, B. Karimov</span></p>\n' +
        '        <p style="text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Kafedra joylashgan joyi: TDIU, 5-o&lsquo;quv binosi, 105-xona</span></p>\n' +
        '        <p style="text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Telefon: 71-239-28-41 ish telefoni</span></p>\n' +
        '        <p style="margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">E-mail: </span><a style="text-decoration: none;" href="mailto:m.abdullayev@tsue.uz"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #0563c1; text-decoration: underline; text-decoration-skip-ink: none;">m.abdullayev@tsue.uz</span></a><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">, </span><a style="text-decoration: none;" href="mailto:botir.karim1@gmail.com"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #0563c1; text-decoration: underline; text-decoration-skip-ink: none;">botir.karim1@gmail.com</span></a></p>\n' +
        '        <p style="text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Talabalarni qabul qilish vaqti</span></strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">: Talabalar darsdan tashqari vaqtda o&lsquo;qituvchi bilan uchrashish uchun o&lsquo;qituvchi elektron pochtasiga xat bilan murojaat qilib uchrashuv vaqtini belgilab olishlari mumkin.</span></p>\n' +
        '        <p style="text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">&nbsp;</span></p>\n' +
        '        <ol style="margin-top: 0px; margin-bottom: 0px; padding-inline-start: 48px;">\n' +
        '        <li style="list-style-type: upper-roman; font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; font-weight: bold; margin-left: 17.45pt;">\n' +
        '        <p style="line-height: 1.295; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 13pt;">Fan tavsifi</span></strong></p>\n' +
        '        </li>\n' +
        '        </ol>\n' +
        '        <p style="line-height: 1.2; text-indent: 35.45pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Dasturlashni kuchli bilgan odam hozirgi axborot asrida haqiqiy mustaqil odam desak adashmaymiz. Chunki, dasturchi Afrikada ham, Xitoyda ham, Amerikada ham dasturchida. Uni dastgohi shaxsiy kompyuteri, tili esa dasturlash tili. Uni tayyorlagan mahsulotni xitoy fermeri ham, Londonlik professor ham bir xil tushuna oladi va foydalanadi. Bugungi kunda dasturchilar o&lsquo;ndan ortiq dasturlash tillaridan foydalanadi. 2017 yil yilda Java dasturlash tili eng ko&lsquo;p foydalanilgan 3 ta tildan biri hisoblandi. Ko&lsquo;lami va qamrovi jihatidan bu til axborot sohasining eng katta qismini egallagan. Bu tilda deyarli barcha texnika va tizimlarga dasturlar yozish mumkin.</span></p>\n' +
        '        <p style="line-height: 1.2; text-indent: 35.45pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Shu boisdan ham Java dasturlash tili universal til. U yordamida veb dasturlardan tortib, mobil, kompyuter va qo&lsquo;shimcha elektron qurilmalar, moslamalargacha yaratish va ishlab chiqarish mumkin. Nega Java tili universal? Hamma gap uning &ldquo;virtual mashinasida&rdquo; &ndash; bu komponent yozilgan kodlarni har qanday uskunaga, moslamaga yoki operasion tizimga moslashtirib beradi.</span></p>\n' +
        '        <p>&nbsp;</p>\n' +
        '        <ol style="margin-top: 0px; margin-bottom: 0px; padding-inline-start: 48px;" start="2">\n' +
        '        <li style="list-style-type: upper-roman; font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; font-weight: bold; margin-left: 17.45pt;">\n' +
        '        <p style="line-height: 1.295; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 13pt;">Fanning maqsadi</span></strong></p>\n' +
        '        </li>\n' +
        '        </ol>\n' +
        '        <p style="text-indent: 35.45pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Fanni o&lsquo;qitishdan maqsad &ndash; talabalarga dasturiy ta&rsquo;minotni loyihalashtirish va ishlab chiqish bo&lsquo;yicha nazariy bilimlarni berish, Java interface yangiliklari bilan tanishtirish, zamonaviy dasturlash tillari orqali dasturiy vositalarni ishlab chiqish va testlash metodlaridan foydalanish, hamda bugungi kunda ommalashgan veb ilovalarni yaratish bo&lsquo;yicha amaliy ko&lsquo;nikmalarini shakllantirishdan iborat.</span></p>\n' +
        '        <p style="line-height: 1.2; text-indent: 35.45pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Fanning vazifasi &ndash; talabalarda fan doirasida, ya&rsquo;ni Java operatorlari, Javada shart, solishtirish va sikl operatorlari, Javada massivlar bilan ishlash, Java String, Javada ma&rsquo;lumotlarni bir turdan boshqa turga o&lsquo;tkazish, ob&rsquo;yektga yo&lsquo;naltirilgan dasturlash (OOP) 1, (OOP) 2 hamda Java kutubxonalarida ishlash bo&lsquo;yicha nazariy bilimlar va amaliy ko&lsquo;nikmalarni shakllantirish kabi vazifalarini bajaradi.</span></p>\n' +
        '        <p>&nbsp;</p>\n' +
        '        <ol style="margin-top: 0px; margin-bottom: 0px; padding-inline-start: 48px;" start="3">\n' +
        '        <li style="list-style-type: upper-roman; font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; font-weight: bold; margin-left: 17.45pt;">\n' +
        '        <p style="line-height: 1.295; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 13pt;">Ta&rsquo;lim berish natijalari</span></strong></p>\n' +
        '        </li>\n' +
        '        </ol>\n' +
        '        <p style="line-height: 1.2; text-indent: 35.45pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">-</span><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;"> </span><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">zamonaviy dasturiy vositalarning ishlab chiqish usullaridan foydalanish;</span></p>\n' +
        '        <p style="line-height: 1.2; text-indent: 35.45pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">- dasturiy vositani testdan o&lsquo;tkazish va dasturiy mahsulotni hujjatlashtirish jarayonlarini bilish va ulardan foydalana olish;</span></p>\n' +
        '        <p style="line-height: 1.2; text-indent: 35.45pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">-</span><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;"> </span><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">zamonaviy dasturlash tillari orqali dasturiy vositalarni yaratishning optimal modelini tanlash;</span></p>\n' +
        '        <p style="line-height: 1.2; text-indent: 35.45pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">- dasturiy ta&rsquo;minot arxitekturasini ishlab chiqish hamda dasturiy vositani testdan o&lsquo;tkazish va sozlash;</span></p>\n' +
        '        <p style="line-height: 1.2; text-indent: 35.45pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">-</span><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;"> </span><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">zamonaviy dasturlash texnologiyalaridan yuqori darajada foydalanish;</span></p>\n' +
        '        <p style="line-height: 1.2; text-indent: 35.45pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">- dasturiy mahsulotning hayot sikli va ishlab chiqarish bosqichlari, dasturiy mahsulotlarning ishlab chiqish usullari, modulli dasturlash, strukturali loyihalashtirish, foydalanuvchining interfeysini loyihalashtirish kabi ko&lsquo;nikmalar va malakalarga ega bo&lsquo;ladi.</span></p>\n' +
        '        <p>&nbsp;</p>\n' +
        '        <p style="line-height: 1.2; text-indent: 35.45pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">IV. Ta&rsquo;lim berish usullari</span></strong></p>\n' +
        '        <ul style="margin-top: 0px; margin-bottom: 0px; padding-inline-start: 48px;">\n' +
        '        <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '        <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">ma&rsquo;ruzalar</span></p>\n' +
        '        </li>\n' +
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
        '        </ul>'
    return (
        <div>
            <div className={cls.courseTitle}>
                <h2 className={cls.title}>About course</h2>
            </div>
            <div dangerouslySetInnerHTML={{__html: str}}></div>

        </div>
    );
}

export default AboutCourseJava;
