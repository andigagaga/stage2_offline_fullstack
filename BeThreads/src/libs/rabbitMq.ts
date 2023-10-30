import * as amqp from "amqplib"

export default new class messageQueue {
    async messageSend(queueName: string, payload: any): Promise<Boolean> {
        try {
            const connection = await amqp.connect(process.env.RABBIT_MQ)
            const channel = await connection.createChannel()

            await channel.assertQueue(queueName)
            channel.sendToQueue(queueName, Buffer.from(JSON.stringify(payload)))


            await channel.close()
            await connection.close()

            return null
        } catch (error) {
            return error
        }
    }
}
