import cls from "./styles.module.scss";

function IndependentJava() {
    let str = '      <p style="line-height: 1.2; text-indent: 20.7pt; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">IV.Mustaqil ta&rsquo;lim va mustaqil ishlar</span></strong></p>\n' +
        '          <p style="line-height: 1.2; text-indent: 20.7pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Mustaqil ta&rsquo;lim uchun tavsiya etiladigan mavzular:</span></p>\n' +
        '          <ol style="margin-top: 0px; margin-bottom: 0px; padding-inline-start: 48px;">\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Java vs C++; Dasturlash tillarini taqqoslang.</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">JDK vs JRE vs JVM; Asosiy farqlar</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Java vs C#; Dasturlash tillaridagi 10 ta asosiy farq.</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Java vs Python; Dasturlash tillarini taqqoslang.</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Java vs Scala; Dasturlash tillarini taqqoslang.</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Java da taqqoslanuvchi va solishtiruvchi. Asosiy farqlar.</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Java vs Kotlin; Dasturlash tillarini taqqoslang.</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Java da loop operatorlari.</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Java da solishtirish va tekshirish operatorlari.</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Java da kalkulyator dasturini yaratish.</span></p>\n' +
        '          </li>\n' +
        '          </ol>\n' +
        '          <p style="line-height: 1.295; text-indent: 35.45pt; text-align: justify; margin-top: 0pt; margin-bottom: 8pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Mustaqil o&lsquo;zlashtiriladigan mavzular bo&lsquo;yicha talabalar tomonidan loyiha ishi, esse, tezis yoki&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;ilmiy maqola yozish, referatlar tayyorlash va uni taqdimot qilish tavsiya etiladi.</span></p>'
    return (
        <div>
            <h1 className={cls.title}>Independent section </h1>
            <div dangerouslySetInnerHTML={{__html: str}}></div>

        </div>
    );
}

export default IndependentJava;
