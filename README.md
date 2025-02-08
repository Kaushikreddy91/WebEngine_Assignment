# WebEngine Assignment

This Assignment is an Express.js application that fetches data from JSONPlaceholder, merges it, and generates a CSV file. The API provides an endpoint (/generate-csv) to create and save the CSV file locally.

## 📚 Table of Contents

- [Features](#Features)
- [Installation & Setup](#Installation&Setup)
- [API Usage](#APIUsage)
- [Project Structure](#ProjectStructure)
- [Requirements](#Requirements)
  
## 📌 Features
- Fetches users, posts, and comments from JSONPlaceholder API.
- Merges data based on user IDs.
- Generates a CSV file and saves it locally.
- Provides an endpoint to trigger CSV generation.

## 🛠️ Installation & Setup

Instructions on how to install and setup the Project.

#### 1️⃣ Clone the Repository:
```bash
  git clone https://github.com/kaushikreddy91/WebEngine_Assignment.git
  cd WebEngine_Assignment
```

#### 2️⃣ Install Dependencies
 Ensure you have Node.js (v16 or later) installed, then install the required packages:
```bash
  npm install
```
#### 3️⃣ Start the Server
```bash
  npm start
```
By default, the server will start at http://localhost:4000.

## 📝 API Usage
#### Generate CSV File

```
  GET /generate-csv
```
 - Description: Fetches data from APIs, merges it, and generates a CSV file.
- Response Example:

```json
  {
    "message": "CSV file generated successfully",
    "filePath": "/absolute/path/to/output.csv"
  }
```
#### Test in Browser
- Open your browser.
- Send a GET request to: 
👉 http://localhost:4000/generate-csv
- If successful, check the generated output.csv file inside the project directory.

## 📂 Project Structure

```graphql
  WebEngine_Assignment/
  │── node_modules/        # Installed dependencies
  │── output.csv           # Generated CSV file (after API call)
  │── index.js             # Main Express server file
  │── package.json         # Project dependencies & scripts
  │── README.md            # Documentation

```

## ✅ Requirements
- Node.js (v16+)
- npm (v7+)
