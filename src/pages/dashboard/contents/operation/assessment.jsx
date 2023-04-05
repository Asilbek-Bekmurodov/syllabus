import cls from "./styles.module.scss";

function AssessmentOperation() {
    let str = '    <p>&nbsp;</p>\n' +
        '          <p style="line-height: 1.295; text-indent: 35.45pt; text-align: justify; margin-top: 0pt; margin-bottom: 8pt;"><strong><span style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000;">Talabalar bilimini baholash</span></strong></p>\n' +
        '          <p style="line-height: 1.295; text-indent: 35.45pt; text-align: justify; margin-top: 0pt; margin-bottom: 8pt;"><span style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000;">Ushbu fan (modul) bo&lsquo;yicha talabalar bilimini baholash semestr davomida o&lsquo;quv materiallarini (testlar va yozma ishlar) bajarishga asoslanadi.&nbsp; Dars davomida talabalar 100 ballik tizimda baholanadi. Shundan, talabaning dars mashg&lsquo;ulotlaridagi ishtiroki, mustaqil ishlar va joriy natijalar uchun 30 ball, oraliq nazorat uchun 20 ball, yakuniy nazorat uchun 50 ball beriladi. Yakuniy nazorat yozma shaklda amalga oshiriladi. Joriy, oraliq va nazorat vazifalari quyidagicha taqsimlanadi:</span></p>\n' +
        '          <div style="padding-left: 7.2px;" align="left">\n' +
        '          <table style="border: none;"><colgroup><col style="width: 147px;" /><col style="width: 69px;" /><col style="width: 277px;" /><col style="width: 137px;" /><col style="width: 1px;" /></colgroup>\n' +
        '          <tbody>\n' +
        '          <tr>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;" colspan="5">\n' +
        '          <p style="line-height: 1.2; text-indent: 28.35pt; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">TALABALAR BILIMINI BAHOLASH TARTIBI</span></strong></p>\n' +
        '          </td>\n' +
        '          </tr>\n' +
        '          <tr>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">Reytingni baholash turlari</span></strong></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">Maks. ball</span></strong></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">Bajariladigan topshiriqlar</span></strong></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">Topshiriqlarni bajarilish muddati*</span></strong></p>\n' +
        '          </td>\n' +
        '          </tr>\n' +
        '          <tr>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">joriy nazorat, shundan</span></strong></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">30</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">O&lsquo;quv jarayonining jadvali bo&lsquo;yicha</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">&nbsp;</td>\n' +
        '          </tr>\n' +
        '          <tr>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">Dars mashg&lsquo;ulotlaridagi ishtiroki</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">10</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">talabaning dars jadvaliga muvofiq ma&rsquo;ruza, seminar, amaliy mashg&lsquo;ulot, laboratoriya mashg&lsquo;ulotlarida ishtirok etishi. Talabalarning dars mashg&lsquo;ulotlariga ishtirok etishlari majburiy hisoblanadi va talablarning dars mashg&lsquo;ulotlariga ishtiroki rag&lsquo;batlantiriladi</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">Fanning dars jadvalidagi auditoriya vaqtiga mos holda</span></p>\n' +
        '          </td>\n' +
        '          </tr>\n' +
        '          <tr>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">Amaliy mashg&lsquo;ulotlardagi faolligi</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">10</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">fanning xususiyatidan kelib chiqqan holda, seminar, laboratoriya va amaliy mashg&lsquo;ulotlarda og&lsquo;zaki so&lsquo;rov, test o&lsquo;tkazish, suhbat, nazorat ishi, kollokvium, keys stadi, kazus yoki fabula vaziyatli topshiriqlar, loyiha, kurs ishi, uy vazifalarini bajarishi</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">Fanning dars jadvalidagi auditoriya vaqtiga mos holda</span></p>\n' +
        '          </td>\n' +
        '          </tr>\n' +
        '          <tr>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">Mustaqil ta&rsquo;lim, shundan</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">10</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">talabalarning mustaqil ishlari &nbsp; auditoriyada va auditoriyadan tashqari&nbsp; tashkil etiladi</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">&nbsp;</td>\n' +
        '          </tr>\n' +
        '          <tr>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">1-mustaqil ish</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">5</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">mustaqil ta&rsquo;lim mavzularidan biri bo&lsquo;yicha&nbsp; Esse yoki tezis yozish (1000-1200 so&lsquo;zdan kam bo&lsquo;lmasligi lozim)</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">Semestr boshida e&rsquo;lon qilinadi</span></p>\n' +
        '          </td>\n' +
        '          </tr>\n' +
        '          <tr>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">2- mustaqil ish</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">5</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">mustaqil ta&rsquo;lim mavzularidan biri bo&lsquo;yicha fanga yo&lsquo;naltirilgan loyiha ishini tayyorlash va himoya qilish</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">Semestr boshida e&rsquo;lon qilinadi</span></p>\n' +
        '          </td>\n' +
        '          </tr>\n' +
        '          <tr>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">Oraliq nazorat</span></strong></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">20</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">Taqdimot shaklida</span></strong><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;"> (kichik guruhlarda ishlash)</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">Semestr boshida e&rsquo;lon qilinadi</span></p>\n' +
        '          </td>\n' +
        '          </tr>\n' +
        '          <tr>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">Yakuniy nazorat</span></strong></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">50</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-indent: 28.35pt; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">Test&nbsp;</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">Semestr boshida e&rsquo;lon qilinadi</span></p>\n' +
        '          </td>\n' +
        '          </tr>\n' +
        '          <tr>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-indent: 28.35pt; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">Jami</span></strong></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 12pt; font-family: Calibri, sans-serif; color: #000000;">100</span></strong></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">&nbsp;</td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">&nbsp;</td>\n' +
        '          </tr>\n' +
        '          </tbody>\n' +
        '          </table>\n' +
        '          </div>\n' +
        '          <p>&nbsp;</p>\n' +
        '          <p style="line-height: 1.295; text-indent: 35.45pt; text-align: justify; margin-top: 0pt; margin-bottom: 8pt;"><span style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000;">Talabaning semestr davomida fan bo&lsquo;yicha to&lsquo;plagan umumiy balli har bir nazorat turidan belgilangan qoidalarga muvofiq quyidagi formula orqali hisoblanadi:</span></p>\n' +
        '          <p style="line-height: 1.295; text-align: center; margin-top: 0pt; margin-bottom: 8pt;"><strong><span style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000;">UB=DI+JN+ON+YAN</span></strong></p>\n' +
        '          <p style="line-height: 1.295; text-indent: 35.45pt; text-align: justify; margin-top: 0pt; margin-bottom: 8pt;"><span style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000;">bu yerda: DI &ndash; dars mashg&lsquo;ultotlaridagi ishtirok; JN &ndash; joriy nazorat; ON &ndash; oraliq nazorat; YAN &ndash; yakuniy nazorat.</span></p>\n' +
        '          <p style="line-height: 1.295; text-indent: 35.45pt; text-align: justify; margin-top: 0pt; margin-bottom: 8pt;"><strong><em><span style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000;">Eslatma: </span></em></strong><em><span style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000;">dars mashg&lsquo;ultotlaridagi ishtiroki, joriy nazorat va oraliq nazoratlar uchun ajratilgan jami ballar (50 ball) ning kamida 60 foizini to&lsquo;play olmagan talabaning yakuniy nazoratga kirishiga ruxsat berilmaydi.</span></em></p>'
    return (
        <div>
            <h2 className={cls.title}>Assessment section </h2>
            <div dangerouslySetInnerHTML={{__html: str}}></div>

        </div>
    );
}

export default AssessmentOperation;
