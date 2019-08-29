import * as nodemailer from 'nodemailer';
import { RecoverMailDto } from 'src/components/account-setting/dto/recover-email.dto';
import { RegisterDto } from './../components/auth/dto/register.dto';

export function createObjectForMail(userData: RegisterDto) {
    const mailData = {
        email: userData.email, password: userData.password,
        firstname: userData.firstname, lastname: userData.lastname,
    };
    return mailData;
}
export async function sendMail(mailData: RecoverMailDto) {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'funkoilnetwork@gmail.com',
                pass: 'ppd53brx',
            },
            tls: {
                rejectUnauthorized: false
            },
        });
        const dataTransport = {
            to: `${mailData.email}`,
            subject: 'פאנקו ישראל - הרשת החברתית הגדולה ביותר',
            html: `<div style="direction:rtl">
            <p>היי <b>${mailData.firstname} ${mailData.lastname}</b> ראינו ששכחת את הסיסמא שלך<br>
            אז אל דאגה, הנה הסיסמא הזמנית שלך <b>${mailData.password}</b><br>לאחר שתתחבר תוכל לשנות את הסיסמא שלך בדרך הבאה : <ul>
            <li>הגדרות חשבון -> החלף סיסמא</li></ul></p>
            </div>`,
        };
        const resultSendMail = await transporter.sendMail(dataTransport);
        if (resultSendMail) {
            return 'המייל נשלח בהצלחה';
        }
        return 'משתמש לא קיים';
    } catch (error) {
        throw new Error(`Error has been found: ${error}`);
    }
}

