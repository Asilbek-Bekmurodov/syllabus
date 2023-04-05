import cls from "./styles.module.scss";

function IndependentOperation() {
    let str = '              <p style="line-height: 1.295; margin-top: 0pt; margin-bottom: 8pt;"><strong><span style="font-size: 18pt; font-family: Calibri, sans-serif; color: #000000;">Mustaqatil ish mavzulari1</span></strong></p>\n' +
        '        <p style="line-height: 1.295; text-indent: 28.35pt; text-align: justify; margin-top: 0pt; margin-bottom: 8pt;"><span style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000;">Mustaqil ta&rsquo;lim uchun tavsiya etiladigan mavzular:</span></p>\n' +
        '        <ol style="margin-top: 0px; margin-bottom: 0px; padding-inline-start: 48px;">\n' +
        '        <li style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.2; margin-right: 6.75pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Operatsion tizimlar kiritish chiqarishning boshqarish funksiyalari.&nbsp;</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.2; margin-right: 6.75pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Paralel jarayonlarni tashkil yetish.&nbsp;</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.2; margin-right: 6.75pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Mul&rsquo;tidasturlash va mul&rsquo;tiprosessorlash.&nbsp;</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.2; margin-right: 6.75pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Operatsion tizimlarning jarayonlari boshqaruvi.&nbsp;</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.2; margin-right: 6.75pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Operatsion tizimlarning jarayonlari boshqaruvni rejalashtirish parametrlari, rivojlantirish ko&lsquo;rsatgichlari.</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.2; margin-right: 6.75pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Operatsion tizimlarning jarayonni rejalartirish algoritlari.</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.2; margin-right: 6.75pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Operatsion tizimlarda virtual xotira tushunchasi.&nbsp;</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.2; margin-right: 6.75pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">HPFS (yuqori unumdorlikka yega bo&lsquo;lgan fayl tizimi).&nbsp;</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.2; margin-right: 6.75pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">LINUX operatsion tizimlarida fayl boshqruv tizimlari.</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.2; margin-right: 6.75pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Jarayonlarni boshqarishda smefarlar tushunchasi.&nbsp;</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.2; margin-right: 6.75pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Operatsion tizimlarning internyet resurslardan yuklash.</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.2; margin-right: 6.75pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Windows xususiyatlar ekranida Linux uchun Windows quyi tizimini yoqish.</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.2; margin-right: 6.75pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Operatsion tizimlar xavfsizlik kategoriyalari.</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.2; margin-right: 6.75pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Operatsion tizimlarda xotirani boshqarish.&nbsp;</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.2; margin-right: 6.75pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">UNIX operatsion tizimida xavfsizlik.</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.2; margin-right: 6.75pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Virtual address makoni.</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.2; margin-right: 6.75pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Wi-FI texnologiyasi.</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.2; margin-right: 6.75pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Wi-Max texnologiyasi.</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.2; margin-right: 6.75pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Katta xajmdagi ma&rsquo;lumotlar (Big data).</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.2; margin-right: 6.75pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Li-Fi texnologiyasi.</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.2; margin-right: 6.75pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Real vaqt tizimlari.</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.2; margin-right: 6.75pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">O&lsquo;rnatilgan tizimlar.</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.2; margin-right: 6.75pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Mobil operatsion tizimlar.</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.2; margin-right: 6.75pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Xotira o&lsquo;lchov birliklari.</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.2; margin-right: 6.75pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Antivirus dasturlari va ularning turlari.&nbsp;</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.2; margin-right: 6.75pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Operatsion tizimlarda virtual xotira tushunchasi.</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.2; margin-right: 6.75pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Kompyuter viruslari va ulardan himoyalanish.</span></p>\n' +
        '        </li>\n' +
        '        <li style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000; margin-left: 10.35pt;">\n' +
        '        <p style="line-height: 1.2; margin-right: 6.75pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Antivirus dasturlari va ularning sinflanishi.</span></p>\n' +
        '        </li>\n' +
        '        </ol>\n' +
        '        <p style="line-height: 1.295; text-indent: 28.35pt; text-align: justify; margin-top: 0pt; margin-bottom: 8pt;"><span style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000;">Mustaqil o&lsquo;zlashtiriladigan mavzular bo&lsquo;yicha talabalar tomonidan taqdimotlar tayyorlash va uni himoya qilish tavsiya etiladi.</span></p>'
    return (
        <div>
            <div className={cls.courseTitle}>
                <h2 className={cls.title}>Independent section </h2>
            </div>
            <div dangerouslySetInnerHTML={{__html: str}}></div>

        </div>
    );
}

export default IndependentOperation;
