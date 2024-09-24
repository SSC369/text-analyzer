# Real-Time Text Analyzer

A React-based application that allows users to analyze text in real-time. The app provides unique word count, character count (excluding spaces and punctuation), and a dynamic string replacement feature.

## Features

- **Real-Time Analysis:**
  - Displays the number of unique words in the text, case-insensitively.
  - Shows the character count excluding spaces and punctuation.

- **String Replacement:**
  - Replace all occurrences of a specified string with another string using the "Replace All" button.
  - Replacement is case-sensitive.

- **Bonus Features:**
  - Highlights all replaced words in the textarea after the replacement.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SSC369/text-analyzer.git
   cd text-analyzer


2. **Install dependencies:**

   Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed. Then, run the following command:

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   This will start the Vite development server. By default, the application will be available at [http://localhost:5173](http://localhost:5173).

## Usage

- Open the app in your browser at [http://localhost:5173](http://localhost:5173).
- Type or paste your text into the large textarea.
- The app will automatically update the word and character counts as you type.
- To replace a string:
  - Enter the string you want to search for in the first input field below the textarea.
  - Enter the string you want to replace it with in the second input field.
  - Click the "Replace All" button to replace all occurrences of the search string in the textarea.
- Any replaced text will be highlighted for easy identification.

## Bonus Features

- **Text Highlighting:**
  - Replaced words are highlighted in the textarea after using the "Replace All" button.

## Technologies Used

- **React:** For building the user interface.
- **Vite:** As the build tool and development server.
- **Tailwind CSS:** For styling the application.




