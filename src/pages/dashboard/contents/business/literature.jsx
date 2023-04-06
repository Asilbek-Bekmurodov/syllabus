import cls from "./styles.module.scss";

function LiteratureBusiness() {

    let str = '<p style="line-height: 1.2; text-indent: 28.35pt; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Asosiy adabiyotlar</span></strong></p>\n' +
        '<ol style="margin-top: 0px; margin-bottom: 0px; padding-inline-start: 48px;">\n' +
        '<li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 10.35pt;">\n' +
        '<p style="margin-right: -7.1pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Paul Beynon-Davies. Business information systems. Third edition, Springer Nature Limited, 2020. P. 511. </span><em><span style="font-size: 13pt;">(Ushbu kitob universitet ARMda PDF variantda mavjud).</span></em></p>\n' +
        '</li>\n' +
        '<li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 10.35pt;">\n' +
        '<p style="margin-right: -7.1pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Laudon, J. P. and K. C. Laudon (2020). Management Information Systems: Managing the Digital Firm. Harlow: Pearson. </span><em><span style="font-size: 13pt;">(Ushbu kitob universitet ARMda PDF variantda mavjud).</span></em></p>\n' +
        '</li>\n' +
        '</ol>\n' +
        '<p style="margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;"> </span></strong><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;"> </span></strong></p>\n' +
        '<p style="margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Qo&lsquo;shimcha adabiyotlar&nbsp;</span></strong></p>\n' +
        '<p style="margin-top: 0pt; margin-right: -7.1pt; margin-bottom: 0pt; text-align: justify; padding-left: 72px;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Bobojonov A.B. Raqamli biznes modellar. O&lsquo;quv qo&lsquo;llanma. &ndash; T.: &ldquo;Innovasion rivojlanish nashriyoi-matbaa uyi&rdquo;, 2021, 196 b. </span><em><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">(Ushbu kitob universitet ARMda PDF variantda mavjud).</span></em></p>\n' +
        '<p style="margin-top: 0pt; margin-right: -7.1pt; margin-bottom: 0pt; text-align: justify; padding-left: 72px;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Kitchin, R. (2014). e Data Revolution: Big Data, Open Data, Data Infrastructures and their Consequences. London: Sage Publications. </span><em><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">(Ushbu kitob universitet ARMda PDF variantda mavjud).</span></em></p>\n' +
        '<p style="margin-top: 0pt; margin-right: -7.1pt; margin-bottom: 0pt; text-align: justify; padding-left: 72px;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Zaramenskix Ye.P. Osnovы biznes-informatiki: uchebnik i praktikum dlya vuzov / Ye.P.Zaramenskix. - Moskva: Izdatelstvo Yurayt, 2021. - 407 s. </span><em><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">(Ushbu kitob universitet ARMda PDF variantda mavjud).</span></em></p>\n' +
        '<p style="margin-top: 0pt; margin-right: -7.1pt; margin-bottom: 0pt; text-align: justify; padding-left: 72px;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Informasionnыye sistemы v ekonomike: uchebnik dlya akademicheskogo bakalavriata / Pod red. V. N. Volkovoy, V. N. Yuryeva. - M.: Izdatelstvo Yurayt, 2018. </span><em><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">(Ushbu kitob universitet ARMda PDF variantda mavjud).</span></em></p>'
    return (

        <div>
            <div className={cls.courseTitle}>
                <h2 className={cls.title}>Literature section </h2>
            </div>
            <div dangerouslySetInnerHTML={{__html: str}}></div>

        </div>
    );
}

export default LiteratureBusiness;
