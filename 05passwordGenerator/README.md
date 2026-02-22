🔐 Password Generator (React + TailwindCSS)

A simple and customizable Password Generator built using React Hooks and styled with TailwindCSS.

This app allows users to generate secure passwords with adjustable length and optional inclusion of numbers and special characters.

🚀 Features

🔢 Adjustable password length (6–50)

🔘 Option to include numbers

🔣 Option to include special characters

📋 One-click copy to clipboard

⚡ Auto-generates password when settings change

🎨 Styled using TailwindCSS

🛠️ Built With

React

useState

useEffect

useCallback

useRef

TailwindCSS

Vite

📂 Project Structure
05passwordGenerator/
│
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
└── README.md
🧠 How It Works
Password Generation Logic

Base characters:

ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz

If numbers are enabled:

0123456789

If special characters are enabled:

!@#$%^&*()_+{}~

A random character is selected based on chosen options and desired length.

📦 Installation & Setup

1️⃣ Clone the repository:

git clone https://github.com/your-username/reactlearning.git

2️⃣ Navigate into the project folder:

cd reactlearning/05passwordGenerator

3️⃣ Install dependencies:

npm install

4️⃣ Run development server:

npm run dev
📋 Available Scripts
Command	Description
npm run dev	Start development server
npm run build	Build for production
npm run preview	Preview production build
🎯 Future Improvements

Add password strength indicator

Add dark/light theme toggle

Add toast notification after copying

Improve random generation logic

Add animations

📸 Preview

Generates secure passwords instantly with customizable options and clean UI.

👨‍💻 Author

Developed as part of React learning practice.