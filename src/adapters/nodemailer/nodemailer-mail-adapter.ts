import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapters";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "42877b09fba2e0",
        pass: "0646dade2d67ca"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Fidget <oi@feedget.com>',
            to: 'Caio Fernandes <caio.aspira2000@gmail.com>',
            subject: subject,
            html: body,
        });

    };
}