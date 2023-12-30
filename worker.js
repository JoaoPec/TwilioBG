import User from './db/userModel.js';
import { client } from './config.js';

const marginOfError = 30000;

async function checkScheduledTasks() {

    console.log("Checking for scheduled tasks");
    const now = new Date();

    try {
        const users = await User.find({ 'tasks.when': { $lte: new Date(now.getTime() + marginOfError) } }).exec();
        console.log(users);

        for (const user of users) {
            const matchingTasks = user.tasks.filter((task) => Math.abs(task.when - now) < marginOfError);

            for (const task of matchingTasks) {
                await client.messages.create({
                    body: `Olá ${user.name}, Este é um lembrete para a seguinte tarefa: ${task.description}`,
                    from: 'whatsapp:+14155238886',
                    to: `whatsapp:${user.phoneNum}`
                }).then(message => console.log(message.sid)).catch(err => console.error(err));
                console.log(`Sending message for task: ${task.description}`);
            }

        }
    } catch (err) {
        console.error(err);
    }
}
export default checkScheduledTasks;
