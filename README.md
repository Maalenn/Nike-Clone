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

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://git.clp.kr/anbschool/2nd/tech-a/khun-malen/khunmalen-nike-clone.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd khunmalen-nike-clone
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Run the development server:**

    ```bash
    npm start
    ```

    The project should now be running on `http://localhost:3000`.

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
