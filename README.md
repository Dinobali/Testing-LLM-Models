# Testing-LLM-Models

## Project Description

Testing-LLM-Models is a web-based application designed to manage and track a set of questions for testing or evaluating language models. This tool provides an intuitive interface for users to view, edit, and manage a list of questions, along with their current status (PASS, FAIL, or NONE).

Key features of the application include:

1. Display questions in a responsive table format
2. Edit questions in-place
3. Copy question text to clipboard
4. Update the status of each question (PASS, FAIL, NONE)
5. Remove questions from the list
6. Automatic saving of changes to a configuration file

The application is built using HTML, CSS, and JavaScript for the frontend, with a lightweight Express.js server handling the backend operations.

## How to Use

1. **View Questions**: Upon loading the page, you'll see a table displaying all questions, their current status, and available actions.

2. **Edit a Question**: 
   - Click the "Edit" button next to a question.
   - The question text will become editable.
   - Make your changes and click "Save" to confirm.

3. **Copy a Question**: 
   - Click the "Copy" button to copy the question text to your clipboard.

4. **Update Status**: 
   - Use the dropdown menu in the "PASS/FAIL" column to change a question's status.
   - The row color will update to reflect the new status (green for PASS, red for FAIL).

5. **Remove a Question**: 
   - Click the "Remove" button to delete a question from the list.

6. **Automatic Saving**: All changes (edits, status updates, removals) are automatically saved to the `config.json` file.

## How to Run Locally

To run this project on your local machine, follow these steps:

1. Ensure you have Node.js installed on your computer.

2. Clone the repository to your local machine:
   ```
   git clone https://github.com/Dinobali/Testing-LLM-Models.git
   cd Testing-LLM-Models
   ```

3. Install the required dependencies:
   ```
   npm install express
   ```

4. Start the server:
   ```
   node server.js
   ```

5. Open your web browser and navigate to `http://localhost:3000`

The application should now be running locally on your machine. Any changes you make will be saved to the `config.json` file in the project directory.

## Project Structure

- `index.html`: The main HTML file containing the structure and scripts for the web application.
- `server.js`: A simple Express.js server that serves the static files and handles saving the configuration.
- `config.json`: The configuration file that stores the questions and their statuses.

## Customization

You can easily customize the questions by editing the `config.json` file directly or through the web interface. The application will automatically load any changes made to this file on refresh.

## Dependencies

- Express.js: For serving the application and handling file operations.
- Modern web browser: The application uses ES6+ features and should be run on an up-to-date browser for the best experience.
