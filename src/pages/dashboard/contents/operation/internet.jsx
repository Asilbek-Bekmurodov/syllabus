import cls from "./styles.module.scss";

function InternetOperation() {
    let str = '  <p style="line-height: 1.295; text-indent: 21.3pt; margin-top: 0pt; margin-bottom: 8pt;"><strong><span style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000;">Qo&lsquo;shimcha adabiyotlar havolari</span></strong></p>\n' +
        '          <ol style="margin-top: 0px; margin-bottom: 0px; padding-inline-start: 48px;">\n' +
        '          <li style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000; margin-left: 3.3pt;">\n' +
        '          <p style="line-height: 1.2; margin-right: -0.1pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Gordeyev A.V. Операционные системы//Учебное пособие, Moskva: Izd.dom: "Piter", 2008, &mdash; 384 str. </span><em><span style="font-size: 13pt;">(Ushbu kitob universitet ARMda PDF variantda mavjud).</span></em></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000; margin-left: 3.3pt;">\n' +
        '          <p style="line-height: 1.2; margin-right: -0.1pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Olifer V.G., Olifer N.A., Setevыye Operatsionnыye sistemы. M:Piter 2006. 560 str. </span><em><span style="font-size: 13pt;">(Ushbu kitob universitet ARMda PDF variantda mavjud).</span></em></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000; margin-left: 3.3pt;">\n' +
        '          <p style="line-height: 1.2; margin-right: -0.1pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Andrew S. Tanenbaum, Albert S. Woodhull. Operating Systems: Design and Implementation, Third Edition. Prentice Hall. 2006 &ndash; 1080p. </span><em><span style="font-size: 13pt;">(Ushbu kitob universitet ARMda PDF variantda mavjud).</span></em></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000; margin-left: 3.3pt;">\n' +
        '          <p style="line-height: 1.2; margin-right: -0.1pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Trent Jaeger. Operating Systems Security. Sibsankar Haldar, Alex Alagarsamy Aravind. Operating Systems. 2010 &ndash; 563p.&nbsp; </span><em><span style="font-size: 13pt;">(Ushbu kitob universitet ARMda PDF variantda mavjud).</span></em></p>\n' +
        '          </li>\n' +
        '          </ol>\n' +
        '          <p>&nbsp;</p>\n' +
        '          <p style="line-height: 1.295; text-indent: 21.3pt; text-align: justify; margin-top: 0pt; margin-bottom: 8pt;"><strong><span style="font-size: 22pt; font-family: Calibri, sans-serif; color: #000000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></strong><strong><span style="font-size: 13pt; font-family: Calibri, sans-serif; color: #000000;">Axborot manbaalari&nbsp;</span></strong></p>\n' +
        '          <ol style="margin-top: 0px; margin-bottom: 0px; padding-inline-start: 48px;">\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 3.3pt;">\n' +
        '          <p style="line-height: 1.2; margin-right: 7.15pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><a style="text-decoration: none;" href="http://www.gov.uz"><span style="font-size: 13pt; color: #0563c1;">www.gov.uz</span></a><span style="font-size: 13pt; text-decoration: underline; text-decoration-skip-ink: none;"> </span><span style="font-size: 13pt;">&ndash; O&lsquo;zbekiston Respublikasi xukumat portali.</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 3.3pt;">\n' +
        '          <p style="line-height: 1.2; margin-right: 7.15pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><a style="text-decoration: none;" href="http://www.lex.uz" aria-invalid="true"><span style="font-size: 13pt; color: #0563c1; text-decoration: underline; text-decoration-skip-ink: none;">www.lex.uz</span></a><span style="font-size: 13pt;"> &ndash; O&lsquo;zbekiston Respublikasi Qonun hujjatlari ma&rsquo;lumotlari milliy&nbsp; bazasi.</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 3.3pt;">\n' +
        '          <p style="line-height: 1.2; margin-right: 7.15pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><a style="text-decoration: none;" href="http://www.ziyonet.uz/" aria-invalid="true"><span style="font-size: 13pt; color: #0563c1; text-decoration: underline; text-decoration-skip-ink: none;">www.ziyonet.uz</span></a><span style="font-size: 13pt;"> &ndash;&nbsp; O&lsquo;zbekiston Respublikasi ta&rsquo;lim portali.</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 3.3pt;">\n' +
        '          <p style="line-height: 1.2; margin-right: 7.15pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><a style="text-decoration: none;" href="http://wikipedia.org/"><span style="font-size: 13pt; color: #0563c1; text-decoration: underline; text-decoration-skip-ink: none;">http://wikipedia.org</span></a><span style="font-size: 13pt;"> &ndash;&nbsp; Erkin ensiklopediya.</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 3.3pt;">\n' +
        '          <p style="line-height: 1.2; margin-right: 7.15pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><a style="text-decoration: none;" href="http://uzreport.uz/"><span style="font-size: 13pt; color: #0563c1; text-decoration: underline; text-decoration-skip-ink: none;">www.UzReport.uz</span></a><span style="font-size: 13pt;"> &ndash; UzReport agentligining axborot sayti.</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 3.3pt;">\n' +
        '          <p style="line-height: 1.2; margin-right: 7.15pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><a style="text-decoration: none;" href="http://www.citforum.ru"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #0563c1; text-decoration: underline; text-decoration-skip-ink: none;">http://www.citforum.ru</span></a><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">&nbsp; &ndash; axborot texnologiyalar bo&lsquo;yicha axborot sayti.</span></p>\n' +
        '          </li>\n' +
        '          </ol>'
    return (

        <div>
            <h1 className={cls.title}>Internet section </h1>
            <div dangerouslySetInnerHTML={{__html: str}}></div>

        </div>
    );
}

export default InternetOperation;
