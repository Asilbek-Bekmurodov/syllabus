import cls from "./styles.module.scss";

function AssessmentGovernment() {
    let str = '          <p>&nbsp;</p>\n' +
        '          <p style="line-height: 1.2; text-indent: 28.35pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">VIII.&nbsp; Assessment of student knowledge.</span></strong></p>\n' +
        '          <p style="line-height: 1.2; text-indent: 35.45pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Assessment of student knowledge in this subject (module) is based on the completion of study materials (tests and written work) during the semester. During the lesson, students are evaluated on a 100-point system. From this, 30 points are given for the student\'s participation in classes, independent work, and current results, 20 points for midterm control, and 50 points for final control. The final control is done in writing. Current, intermediate, and control tasks are divided as follows:</span></p>\n' +
        '          <p><br /><br /><br /></p>\n' +
        '          <div style="padding-left: 7.2px;" align="left">\n' +
        '          <table style="border: none;"><colgroup><col style="width: 147px;" /><col style="width: 69px;" /><col style="width: 277px;" /><col style="width: 137px;" /><col style="width: 1px;" /></colgroup>\n' +
        '          <thead>\n' +
        '          <tr>\n' +
        '          <th style="vertical-align: top; border: 0.5pt solid #000000;" colspan="5" scope="col">\n' +
        '          <p style="line-height: 1.2; text-indent: 28.35pt; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">STUDENTS\' KNOWLEDGE ASSESSMENT PROCEDURE</span></strong></p>\n' +
        '          </th>\n' +
        '          </tr>\n' +
        '          <tr>\n' +
        '          <th style="vertical-align: top; border: 0.5pt solid #000000;" scope="col">\n' +
        '          <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">Types of rating evaluation</span></strong></p>\n' +
        '          </th>\n' +
        '          <th style="vertical-align: top; border: 0.5pt solid #000000;" scope="col">\n' +
        '          <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">Max. score</span></strong></p>\n' +
        '          </th>\n' +
        '          <th style="vertical-align: top; border: 0.5pt solid #000000;" scope="col">\n' +
        '          <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">Tasks to be completed</span></strong></p>\n' +
        '          </th>\n' +
        '          <th style="vertical-align: top; border: 0.5pt solid #000000;" scope="col">\n' +
        '          <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">Task completion time*</span></strong></p>\n' +
        '          </th>\n' +
        '          </tr>\n' +
        '          <tr>\n' +
        '          <th style="vertical-align: top; border: 0.5pt solid #000000;" scope="col">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">current control, therefore</span></strong></p>\n' +
        '          </th>\n' +
        '          <th style="vertical-align: top; border: 0.5pt solid #000000;" scope="col">\n' +
        '          <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000; font-weight: 400;">30</span></p>\n' +
        '          </th>\n' +
        '          <th style="vertical-align: top; border: 0.5pt solid #000000;" scope="col">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000; font-weight: 400;">According to the schedule of the educational process</span></p>\n' +
        '          </th>\n' +
        '          <th style="vertical-align: top; border: 0.5pt solid #000000;" scope="col">&nbsp;</th>\n' +
        '          </tr>\n' +
        '          </thead>\n' +
        '          <tbody>\n' +
        '          <tr>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">Participation in class activities</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">10</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">student\'s participation in lectures, seminars, practical training, laboratory training according to the lesson schedule. Student attendance is mandatory and class attendance is encouraged.</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">According to the audience time in the science lesson schedule</span></p>\n' +
        '          </td>\n' +
        '          </tr>\n' +
        '          <tr>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">Activity in practical training</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">10</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">depending on the nature of the subject, oral inquiry, test, interview, control work, colloquium, case study, casus or fable situation assignments, project, coursework, homework in seminars, laboratories and practical training</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">According to the audience time in the science lesson schedule</span></p>\n' +
        '          </td>\n' +
        '          </tr>\n' +
        '          <tr>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">Independent education, therefore</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">10</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">independent work of students is organized in the auditorium and outside the auditorium</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">&nbsp;</td>\n' +
        '          </tr>\n' +
        '          <tr>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">1st independent work</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">5</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">Writing an essay or thesis on one of the topics of independent education (must not be less than 1000-1200 words)</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">It will be announced at the beginning of the semester</span></p>\n' +
        '          </td>\n' +
        '          </tr>\n' +
        '          <tr>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">2- independent work</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">5</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">preparation and defense of a science-oriented project work on one of the topics of independent study</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">It will be announced at the beginning of the semester</span></p>\n' +
        '          </td>\n' +
        '          </tr>\n' +
        '          <tr>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">Intermediate control</span></strong></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">20</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">In the form of a presentation </span></strong><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">(work in small groups)</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">It will be announced at the beginning of the semester</span></p>\n' +
        '          </td>\n' +
        '          </tr>\n' +
        '          <tr>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">Final control</span></strong></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">50</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-indent: 28.35pt; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">Test</span></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">It will be announced at the beginning of the semester</span></p>\n' +
        '          </td>\n' +
        '          </tr>\n' +
        '          <tr>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-indent: 28.35pt; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">Total</span></strong></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">\n' +
        '          <p style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 12pt; font-family: \'Times New Roman\'; color: #000000;">100</span></strong></p>\n' +
        '          </td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">&nbsp;</td>\n' +
        '          <td style="vertical-align: top; border: 0.5pt solid #000000;">&nbsp;</td>\n' +
        '          </tr>\n' +
        '          </tbody>\n' +
        '          </table>\n' +
        '          </div>\n' +
        '          <p>&nbsp;</p>\n' +
        '          <p style="line-height: 1.2; text-indent: 35.45pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">The total score of the student in the subject during the semester is calculated by the following formula in accordance with the established rules for each control type:</span></p>\n' +
        '          <p style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">TS=PA+MC+IMC+FW</span></strong></p>\n' +
        '          <p style="line-height: 1.2; text-indent: 35.45pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">where: PA &ndash; participation in class activities; MC &ndash; current control; IMC &ndash; intermediate control; FW is the final control.</span></p>\n' +
        '          <p style="line-height: 1.2; text-indent: 35.45pt; text-align: justify; margin-top: 0pt; margin-bottom: 0pt;"><strong><em><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">Note: </span></em></strong><em><span style="font-size: 13pt; font-family: \'Times New Roman\'; color: #000000;">a student who fails to collect at least 60% of the total points (50 points) allocated for participation in class activities, current control, and mid-term control will not be allowed to enter the final control.</span></em></p>'
    return (
        <div>
            <div className={cls.courseTitle}>
                <h2 className={cls.title}>Assessment section  </h2>
            </div>
            <div dangerouslySetInnerHTML={{__html: str}}></div>

        </div>
    );
}

export default AssessmentGovernment;
