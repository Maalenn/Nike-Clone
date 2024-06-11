# KhunMalen Nike Clone

Welcome to the KhunMalen Nike Clone project! This project aims to replicate the design and functionality of a Nike website, providing a learning platform for web development and design.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Branching Strategy](#branching-strategy)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The KhunMalen Nike Clone is a web application built with modern web technologies. It aims to mimic the design and functionality of the official Nike website, including product displays, user interactions, and responsive design.


## Features

- **Home Page:** A replica of the Nike homepage.
- **Product Listings:** Display of products with details.
- **User Interactions:** Interactive elements such as buttons and forms.
- **Responsive Design:** Ensuring the site is usable on various devices.
- **Member Benefits:** Information about member benefits with a slideshow feature.

## Project Structure

```plaintext
KhunMalen-Nike-Clone/
├── assets/
│   ├── css/
│   ├── Image/
│   ├── js/
│   │   ├── component/
│   │   ├── data/
│   │   ├── addChart.js
│   │   ├── index.js
│   │   ├── joinUs.js
│   │   └── main.js
│   └── Video/
├── fresh_clone/
├── node_modules/
├── public/
│   ├── addChart.html
│   ├── index.html
│   ├── joinUs.html
│   └── new-feature.html
├── src/
├── .gitignore
├── .reviewboardrc
├── package-lock.json
├── package.json
├── README.md
└── tailwind.config.js 
This project is a frontend clone using HTML, CSS, JavaScript, and Tailwind CSS, with GitLab for version control.

## Technologies

- **HTML**: Markup language for creating web pages.
- **CSS**: Stylesheet language for describing the presentation of a document.
- **JavaScript**: Programming language for interactive web pages.
- **Tailwind CSS**: Utility-first CSS framework for building custom user interfaces.
- **GitLab**: Web-based DevOps lifecycle tool providing Git repository management, wiki, issue-tracking, and CI/CD pipeline features.

## Project Setup and Steps

### 1. Setting Up Your Project Environment

1. **Install Node.js and npm**: Download and install from [Node.js official website](https://nodejs.org/).

2. **Create a Project Directory**:
    ```bash
    mkdir frontend-clone
    cd frontend-clone
    ```

3. **Initialize a Git Repository**:
    ```bash
    git init
    ```

4. **Initialize npm**:
    ```bash
    npm init -y
    ```

5. **Install Tailwind CSS**:
    ```bash
    npm install tailwindcss
    npx tailwindcss init
    ```

### 2. Setting Up Tailwind CSS

1. **Configure Tailwind CSS**: Open `tailwind.config.js` and set up the content paths.
    ```javascript
    module.exports = {
      content: [
        './*.html',
        './src/**/*.js',
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

2. **Create CSS File for Tailwind**: Create a `src/styles.css` file and add the following lines:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

3. **Build Tailwind CSS**: Add a script in `package.json` to build your CSS:
    ```json
    "scripts": {
      "build:css": "tailwindcss build src/styles.css -o public/styles.css"
    }
    ```
    Then, run the build:
    ```bash
    npm run build:css
    ```

### 3. Creating HTML, CSS, and JavaScript Files

1. **Create an HTML File**: Create an `index.html` file in the root directory.
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Frontend Clone</title>
      <link rel="stylesheet" href="public/styles.css">
    </head>
    <body>
      <div class="container mx-auto">
        <!-- Your content here -->
      </div>
      <script src="src/main.js"></script>
    </body>
    </html>
    ```

2. **Create a JavaScript File**: Create a `src/main.js` file for your JavaScript code.
    ```javascript
    console.log("Hello, Frontend Clone!");
    ```

### 4. Using GitLab for Version Control

1. **Create a Repository on GitLab**: Go to GitLab and create a new project/repository.

2. **Connect Your Local Repository to GitLab**:
    ```bash
    git remote add origin <your-gitlab-repo-url>
    git branch -M main
    git push -u origin main
    ```

3. **Add and Commit Your Changes**:
    ```bash
    git add .
    git commit -m "Initial commit"
    git push
    ```

### 5. Workflow

1. **Develop Your Frontend**: Use HTML for structure, Tailwind CSS for styling, and JavaScript for interactivity. Continuously build your Tailwind CSS when you make changes to the CSS:
    ```bash
    npm run build:css
    ```

2. **Commit and Push Changes**:
    ```bash
    git add .
    git commit -m "Describe your changes"
    git push
    ```

3. **Deploy**: You can use GitLab CI/CD pipelines to automate the build and deployment process.

## Example HTML Structure

Here's a simple example to get you started:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Frontend Clone</title>
  <link rel="stylesheet" href="public/styles.css">
</head>
<body>
  <header class="bg-blue-500 text-white p-4">
    <h1 class="text-3xl">Frontend Clone</h1>
  </header>
  <main class="p-4">
    <section class="my-4">
      <h2 class="text-2xl font-bold">Welcome to the Frontend Clone Project</h2>
      <p>This is a basic setup using HTML, CSS, JavaScript, and Tailwind CSS.</p>
    </section>
  </main>
  <script src="src/main.js"></script>
</body>
</html>

## Installation

Installation
    A/. Prerequisites
        Git install: You need to install git control system in your computer if you don’t have it but, if you have already had it in your computer just check it in terminal git -- version 
        Document to download: https://git-scm.com/downloads.

    B/. Steps:
        1./ Create a Repository
            – You have to create Repository
        2./ Clone a Repository
            – Create new folder 
            – Open folder with VSCode and open new terminal then use the git clone command followed by  the URL of the remote repository you cloned from (e.g., GitHub, GitLab):

        3./ Install Dependencies
            – Navigate to the cloned project directory
            – Since node_modules is likely excluded in the .gitignore file, you'll need to reinstall the project's dependencies using npm: npm install
            – This command downloads and installs all the necessary packages listed in 
            the package.json file, including Tailwind CSS and any other project dependencies.
        4./ Run/Build the project
            – If your project uses a build process to optimize and compile assets (usually for production 
            environments), check the package.json file for a script named build or similar. If present, run: npm run build
        5./ View the Website:
            – Open the index.html file in your text editor or code editor.
            – Right-click on the index.html file and select "Open with" or "Open in Browser" (depending 
            on your operating system).

## Usage

### Git Flow for Feature Development

1. **Start a new feature:**

    ```bash
    git flow feature start 'your-feature-name'
    ```

2. **Work on your feature and commit changes:**

    ```bash
    git add .
    git commit -m "Add description of your changes"
    ```

3. **Publish your feature branch:**

    ```bash
    git flow feature publish 'your-feature-name'
    ```

4. **Finish your feature and merge it into develop:**

    ```bash
    git flow feature finish 'your-feature-name'
    ```

## Branching Strategy

We use Git Flow as our branching strategy. The main branches are:

- `main`: The production branch.
- `develop`: The development branch where features are integrated.
- `feature/*`: Feature branches derived from `develop`.
- `release/*`: Release preparation branches derived from `develop`.
- `hotfix/*`: Hotfix branches derived from `main`.

## Contributing

We welcome contributions to the project! If you have any ideas, suggestions, or bug reports, please create an issue or submit a pull request. Make sure to follow our branching strategy and code style guidelines.

### Setting Up Git Username and Email

Ensure your Git username and email are set up correctly:

```bash
git config --global user.name "Malen"
git config --global user.email "malen8622@gmail.com"


