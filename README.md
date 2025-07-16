# HOPn Models Platform (Frontend MVP)

🌐 **Model-as-a-Service Web Application**  
A sleek frontend prototype where fashion models can showcase their portfolio and clients can browse, view, and book them — complete with embedded content and QR code support.

## 🚀 Project Overview

HOPn Models is a **frontend-only MVP** for a modeling platform. It provides a clean, responsive UI for model discovery, profile viewing, and simple submissions — with features like QR code linking, embedded videos/photos, and multilingual support.

---

## ✨ Features

- 🏠 Clean and modern **Landing Page**
- 👗 **Model Gallery** with filters (gender, city, model type, price)
- 📄 **Individual Model Profiles** with embedded media and QR code
- 📝 **Submit a Model** form 
- 🌐 **Multilingual Support**: English + German/Arabic
- 📱 **Shareable QR Code** per model profile

---


## 📦 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) / [React](https://reactjs.org/)
- **Styling**: Tailwind CSS / CSS Modules
- **QR Code Generator**: [`react-qr-code`](https://www.npmjs.com/package/react-qr-code) or `qrcode.react`
- **Multilingual Support**: [`react-i18next`](https://react.i18next.com/)

---

# 🛠️ Installation

## Clone the repository
```bash
git clone https://github.com/RoshanNandasana/iHOPn-Models.git
cd ihopn-models
```


## Install dependencies
```bash
npm install
```


## Run the development server
```bash
npm run dev
```

## 🤖 QR Code Feature
Each model profile includes a QR code generated using an open-source library.

Links to profile route: /model/<model-id>

Use  [`react-qr-code`](https://www.npmjs.com/package/react-qr-code) or similar libraries.


## 👤 Author
Roshan Nandasana

GitHub: @RoshanNandasana
