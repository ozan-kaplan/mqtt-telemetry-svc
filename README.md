# MQTT Client App

This Node.js application connects to an MQTT broker, subscribes to a shared topic, and logs incoming messages. Future plans include sending these messages to Kafka.

## Features
- Connects to an MQTT broker
- Subscribes to a shared MQTT topic: `$share/inno/iot-device-telemetry`
- Logs incoming messages to the console
- Future: Sends messages to Kafka (TBD)

## Prerequisites

Before you begin, ensure you have met the following requirements:
- **Node.js** installed (version 14 or later)
- **MQTT broker** accessible via a URL (default: `mqtt://localhost:1883`)

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name