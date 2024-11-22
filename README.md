# AI ChatConnect

AI ChatConnect is a responsive, feature-rich Next.js-based interface designed to interact with an AI backend. This application allows users to communicate with an AI model, providing a real-time conversational experience. It's a great starting point for developers looking to integrate AI features into web applications.

## Features

-   **Real-Time AI Interaction**: Engage with an AI model and receive responses in real-time.
-   **Dynamic UI**: Modern, responsive design with clear message distinction for user and assistant roles.
-   **Error Handling**: Displays user-friendly messages in case of API failures.
-   **Efficient State Management**: Built-in loading states and seamless input handling.
-   **Customizable**: Easily adapt the design and API endpoint for your needs.

## Technology Stack

-   **Frontend**: [Next.js](https://nextjs.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Backend**: Connects to an AI API (e.g., Llama, OpenAI).

## Requirements

-   Node.js (16.x or higher)
-   An AI backend API accessible at `http://localhost:11434/api/chat`
-   A modern browser for testing

## Setup Instructions

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/ai-chatconnect.git
    cd ai-chatconnect
    ```

2. Install dependencies:

```bash
npm install
```

Configure the AI API endpoint:

Update the fetch URL in handleSubmit inside pages/index.tsx if your backend API URL is different.

Run the development server:

```bash
npm run dev
Open your browser and navigate to:
```

```arduino
http://localhost:3000
```

## Ollama Backend

To start Ollama, you can on Windows :

```
ollama serve
```

```bash
curl http://localhost:11434/api/pull -d '{
  "model": "llama3.2"
}'
```

It will prepare the endpoint at the port 11434 for the model llama3.2, find other LLM on (Ollama)[https://ollama.com/]

## Usage

Enter your message in the input field at the bottom of the page.
Press "Send" or hit Enter to interact with the AI.
View AI-generated responses in real-time.
If there’s an issue, an error message will appear to help debug.

## Project Structure

```bash
.
├── public/
│ └── favicon.ico # Favicon
├── src/
│ └── pages/
│ └── index.tsx # Main chat interface
├── styles/
│ └── globals.css # Global Tailwind CSS styles
├── tailwind.config.js # Tailwind configuration
└── package.json # Project dependencies
```

## Customization

To use your own AI model or backend:

Update the fetch URL in handleSubmit with the endpoint of your API.
Modify the body to match your API’s input format.

## Contributing

Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch for your feature:

```bash
git checkout -b feature-name
```

Commit your changes and push:

```bash
git commit -m "Add feature-name"
git push origin feature-name
```

Create a pull request.

## License

This project is open-source and available under the MIT License.
