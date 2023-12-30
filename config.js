import twilio from 'twilio';

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

// Verifique se as variáveis de ambiente estão definidas
if (!accountSid || !authToken) {
  throw new Error("ACCOUNT_SID and AUTH_TOKEN are required");
}

const client = new twilio(accountSid, authToken);

export { client };
