import cls from "./styles.module.scss";

function InternetGovernment() {
    let str = '                <p style="line-height: 1.2; margin-top: 0pt; margin-right: 7.15pt; margin-bottom: 0pt; text-align: justify; padding-left: 28.4px;"><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Sources of information</span></strong><span style="font-size: 14pt; font-family: \'Times New Roman\'; color: #0000ff; text-decoration: underline; text-decoration-skip-ink: none;">&nbsp;</span></p>\n' +
        '          <ol style="margin-top: 0px; margin-bottom: 0px; padding-inline-start: 48px;">\n' +
        '          <li style="font-size: 14pt; font-family: \'Times New Roman\'; color: #0000ff; text-decoration: underline; text-decoration-skip-ink: none; margin-left: 3.3pt;">\n' +
        '          <p style="line-height: 1.2; margin-right: 7.15pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><a style="text-decoration: none;" href="http://www.gov.uz"><span style="font-size: 14pt; color: #0000ff; text-decoration: underline;">www.gov.uz</span></a><span style="font-size: 14pt; text-decoration: underline;"> </span><span style="font-size: 14pt; color: #000000;">&ndash; The portal of the government of Uzbekistan</span><span style="font-size: 14pt;">.</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 14pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 3.3pt;">\n' +
        '          <p style="line-height: 1.2; margin-right: 7.15pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><a style="text-decoration: none;" href="http://www.lex.uz"><span style="font-size: 14pt; color: #0000ff; text-decoration: underline; text-decoration-skip-ink: none;">www.lex.uz</span></a><span style="font-size: 14pt; color: #0000ff; text-decoration: underline; text-decoration-skip-ink: none;"> </span><span style="font-size: 14pt;">&ndash; National database of information on legal documents of the Republic of Uzbekistan.</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 14pt; font-family: \'Times New Roman\'; color: #0000ff; text-decoration: underline; text-decoration-skip-ink: none; margin-left: 3.3pt;">\n' +
        '          <p style="line-height: 1.2; margin-right: 7.15pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><a style="text-decoration: none;" href="http://www.ziyonet.uz/" aria-invalid="true"><span style="font-size: 14pt; color: #0000ff; text-decoration: underline;">www.ziyonet.uz</span></a><span style="font-size: 14pt; color: #000000;"> &ndash; Education portal of the Republic of Uzbekistan.</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 14pt; font-family: \'Times New Roman\'; color: #0000ff; text-decoration: underline; text-decoration-skip-ink: none; margin-left: 3.3pt;">\n' +
        '          <p style="line-height: 1.2; margin-right: 7.15pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><a style="text-decoration: none;" href="http://wikipedia.org/"><span style="font-size: 14pt; color: #0000ff; text-decoration: underline;">http://wikipedia.org</span></a><span style="font-size: 14pt; color: #000000;">&ndash;The free encyclopedia.</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 14pt; font-family: \'Times New Roman\'; color: #0000ff; text-decoration: underline; text-decoration-skip-ink: none; margin-left: 3.3pt;">\n' +
        '          <p style="line-height: 1.2; margin-right: 7.15pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><a style="text-decoration: none;" href="http://uzreport.uz/"><span style="font-size: 14pt; color: #0000ff; text-decoration: underline;">www.UzReport.uz</span></a><span style="font-size: 14pt; text-decoration: underline;"> </span><span style="font-size: 14pt; color: #000000;">&ndash;Information site of UzReport agency.</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 14pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 3.3pt;">\n' +
        '          <p style="line-height: 1.2; margin-right: 7.15pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><a style="text-decoration: none;" href="http://www.citforum.ru"><span style="font-size: 14pt; color: #0000ff; text-decoration: underline; text-decoration-skip-ink: none;">http://www.citforum.ru</span></a><span style="font-size: 14pt; color: #0000ff;">&nbsp; </span><span style="font-size: 14pt;">&ndash;An information site on information technologies.</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 14pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 3.3pt;">\n' +
        '          <p style="line-height: 1.2; margin-right: 7.15pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><a style="text-decoration: none;" href="http://model-a-platform.com/digital-platform-ontology-2/-" aria-invalid="true"><span style="font-size: 13pt; color: #0000ff; text-decoration: underline; text-decoration-skip-ink: none;">http://model-a-platform.com/digital-platform-ontology-2/-</span></a><span style="font-size: 12pt;"> </span><span style="font-size: 13pt;">information site about digital platforms.</span></p>\n' +
        '          </li>\n' +
        '          <li style="font-size: 14pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 3.3pt;">\n' +
        '          <p style="line-height: 1.2; margin-right: 7.15pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><a style="text-decoration: none;" href="http://www.lex.uz"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #0000ff; text-decoration: underline; text-decoration-skip-ink: none;">www.lex.uz</span></a><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;"> &ndash; National database of information on legal documents of the Republic of Uzbekistan.</span></p>\n' +
        '          </li>\n' +
        '          </ol>'
    return (
        <div>
            <div className={cls.courseTitle}>
                <h2 className={cls.title}>Internet section </h2>
            </div>
            <div dangerouslySetInnerHTML={{__html: str}}></div>

        </div>
    );
}

export default InternetGovernment;
