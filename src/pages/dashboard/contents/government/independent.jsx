import cls from "./styles.module.scss";

function IndependentGovernment() {
    let str = '  <p style="line-height: 1.2; text-indent: 28.35pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">VI. Independent study topics</span></strong></p>\n' +
        '          <p style="line-height: 1.2; text-indent: 28.35pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">&nbsp;</span></strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Recommended topics for independent study:</span></p>\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">1. The role of information and communication technologies in state administration.</span></p>\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">2. Regulations on electronic government.</span></p>\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">3. Development stages of the electronic government system in the Republic of Uzbekistan.</span></p>\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">4. Foreign experiences in creating an electronic government system.</span></p>\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">5. E-government strategy.</span></p>\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">6. Forms of electronic government interaction.</span></p>\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">7. Issues of ensuring information security in the "Electronic Government" system.</span></p>\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">8. The concept of introducing innovative technologies in electronic government.</span></p>\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">9. The role of the "Electronic Government" system in the development of small business and entrepreneurship.</span></p>\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">10. Electronic payment systems.</span></p>\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">11. Electronic document circulation system. State of introduction and development of electronic document circulation systems in the Republic of Uzbekistan.</span></p>\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">12. The main project of creating databases of electronic government.</span></p>\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">13. Implementation mechanism of "Electronic Government" projects.</span></p>\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">14. The main tasks of the "Electronic Government" system development center.</span></p>\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">15. Structure of websites. The structure of the government portal of the Republic of Uzbekistan and its goals and tasks.</span></p>\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">16. Interactive services are provided through the single interactive state services portal.</span></p>\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">17. Use of a single interactive public services portal.</span></p>\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">18. Electronic digital signature.</span></p>\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">19. Electronic document exchange systems.</span></p>\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">20. Decision-making processes in electronic government.</span></p>\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">21. Relationship between electronic government and ERP system.</span></p>\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">22. Electronic government and financial information.</span></p>\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">23. Digitization of digital business and processes.</span></p>\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">24. Cloud solutions ((SaaS) and cloud infrastructure (IaaS).</span></p>\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">25. Digital platforms (PaaS).</span></p>\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">26. Information security of business processes.</span></p>\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">27. The role, importance, and impact of e-government on the economic development of countries in the process of globalization.</span></p>\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">28. The deepening of digital integration processes and directions for the development of electronic government management.</span></p>\n' +
        '          <p style="line-height: 1.2; text-indent: 28.35pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">It is recommended to prepare and defend presentations by students on independent learning topics.</span></p>'
    return (
        <div>
            <div className={cls.courseTitle}>
                <h2 className={cls.title}>Independent section </h2>
            </div>
            <div dangerouslySetInnerHTML={{__html: str}}></div>

        </div>
    );
}

export default IndependentGovernment;
