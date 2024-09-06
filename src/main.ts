import mqtt from "mqtt";

const brokerUrl = process.env.MQTT_BROKER_URL ||  "mqtt://localhost:1883";

console.log(`Connecting to broker: ${brokerUrl}`);

const client = mqtt.connect(brokerUrl);

const subscribedTopicName = "$share/inno/iot-device-telemetry";

client.on("connect", () => {
    client.subscribe(subscribedTopicName, (err) => {
        if (err)
            console.log(`Mqtt Client CANNOT subscribed to topic: ${subscribedTopicName}`);
        else
            console.log(`Mqtt Client subscribed to topic: ${subscribedTopicName}`);
    });
});


client.on("message", (topic, message) => {
    console.log(`Topic: ${topic} - Message:${message.toString()}`);

    // TODO: Send messages to Kafka
});