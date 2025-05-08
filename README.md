# 🚀 Real-Time Crypto Price Tracker

A responsive real-time cryptocurrency price tracker built with **React**, **Redux Toolkit**, **TypeScript**, and **Recharts**. This app simulates live crypto price updates and manages all state via Redux.

## 📋 Features

* Real-time price updates (simulated using `setInterval`)
* Color-coded price changes (green for positive, red for negative)
* Responsive table layout
* 7-day historical price chart for each asset
* Clean and modern UI

## 🛠️ Tech Stack

* **React** - UI components
* **Redux Toolkit** - State management
* **TypeScript** - Static typing
* **Recharts** - Data visualization for 7-day charts

## 🗂️ Project Structure

```
src/
├── components/
│   ├── CryptoTable.tsx
│   ├── CryptoRow.tsx
│   └── SevenDayChart.tsx
│
├── redux/
│   ├── store.ts
│   └── cryptoSlice.ts
│
├── App.tsx
├── index.tsx
├── styles.css
└── types/
    └── crypto.d.ts
```

## 🧑‍💻 Getting Started

### Prerequisites

Ensure you have **Node.js** installed. You can check your Node.js version with:

```
node -v
```

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/crypto-price-tracker.git
cd crypto-price-tracker
```

2. Install the dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

### Building for Production

To build the project for production:

```bash
npm run build
```

## 🚀 Usage

Once the project is running, the app will display a real-time table of cryptocurrency prices, with simulated price updates every 1-2 seconds.

## 📝 File Descriptions

* **App.tsx** - Main application component.
* **CryptoTable.tsx** - Renders the main crypto data table.
* **CryptoRow\.tsx** - Renders individual rows for each crypto asset.
* **SevenDayChart.tsx** - Displays a 7-day line chart for each asset.
* **cryptoSlice.ts** - Redux slice for managing crypto state.
* **store.ts** - Configures the Redux store.
* **crypto.d.ts** - TypeScript type definitions for crypto assets.

## 📊 Future Enhancements

* Integrate real-time WebSocket data from Binance API
* Add filtering and sorting options
* Dark mode toggle
* Unit tests for reducers and selectors

## 🤝 Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.

## 📄 License

This project is licensed under the MIT License.

## 📧 Contact

For support or questions, please reach out via [your-email@example.com](mailto:your-email@example.com) or create an issue in this repository.

---

Made with ❤️ by \[Your Name]
