import cls from "./styles.module.scss";

function LiteratureJava() {
    let str = '     <p style="line-height: 1.2; text-indent: 35.45pt; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Asosiy adabiyotlar&nbsp;&nbsp;</span></strong></p>\n' +
        '              <ol style="margin-top: 0px; margin-bottom: 0px; padding-inline-start: 48px;">\n' +
        '              <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '              <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Nick Samoylov. Learn Java 12 programming, A Step by step guide to learning essential concepts in Java Se 10,11 and 12 First published: April 2019. </span><em><span style="font-size: 13pt;">(Ushbu kitob universitet ARMda PDF variantda mavjud).</span></em></p>\n' +
        '              </li>\n' +
        '              <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '              <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Uday Kamath Krishna Choppella Dr Uday Kamath, Mastering Java Machine Learning: A Java developer\'s guide to implementing machine learning and big data architectures 1 January 2017 </span><em><span style="font-size: 13pt;">(Ushbu kitob universitet ARMda PDF variantda mavjud).</span></em></p>\n' +
        '              </li>\n' +
        '              </ol>\n' +
        '              <p>&nbsp;</p>\n' +
        '              <p style="line-height: 1.295; text-align: justify; margin-top: 0pt; margin-bottom: 0pt; padding-left: 43.2px;"><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Qo&lsquo;shimcha adabiyotlar&nbsp;</span></strong></p>\n' +
        '              <ol style="margin-top: 0px; margin-bottom: 0px; padding-inline-start: 48px;">\n' +
        '              <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '              <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Bazы dannыx: uchebnik dlya prikladnogo bakalavriata / B. Ya. Sovetov, V. V. Syexanovskiy, V. D. Chertovskoy. - 2-ye izd. - M.: Izdatelstvo Yurayt, 2018. </span><em><span style="font-size: 13pt;">(Ushbu kitob universitet ARMda PDF variantda mavjud).</span></em></p>\n' +
        '              </li>\n' +
        '              <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '              <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">D. Reilly, M. Reilly: &ldquo;Java Network Programming and Distributed Computing&rdquo;, Addison-Wesley, 2002. </span><em><span style="font-size: 13pt;">(Ushbu kitob universitet ARMda PDF variantda mavjud).</span></em></p>\n' +
        '              </li>\n' +
        '              <li style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000; margin-left: 17.45pt;">\n' +
        '              <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt;">Daniel Leuck, Patrick Niemeyer, Marc Loy. Learning Java - An Introduction to Real-World Programming with Java (2020) </span><em><span style="font-size: 13pt;">(Ushbu kitob universitet ARMda PDF variantda mavjud).</span></em></p>\n' +
        '              </li>\n' +
        '              </ol>\n' +
        '              <p><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">&nbsp;Joyce Farrell. Java Programming (2019) </span><em><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">(Ushbu kitob universitet ARMda PDF variantda mavjud).</span></em></p>'
    return (
        <div>
            <h1 className={cls.title}>Literature section </h1>
            <div dangerouslySetInnerHTML={{__html: str}}></div>

        </div>
    );
}

export default LiteratureJava;
