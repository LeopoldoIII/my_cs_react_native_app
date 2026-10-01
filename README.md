# React Native Automation Test App

## Objective

This project is a React Native test application designed specifically for UI automation testing and component interaction. It serves as a playground to validate end-to-end (E2E) testing frameworks (like Maestro, Appium, or Detox) against common native UI components such as buttons, sliders, switches, and date pickers. Every interactive component is tagged with a unique `testID` to ensure reliable element location during automated testing.

## Screenshots

![App Home Screen](/Users/user/.gemini/antigravity-ide/brain/50d8f057-1b60-430b-bef0-89baf4cb0e5d/react_native_app_mockup_1790383983363.jpg)

## Architecture: Feature First

The project strictly follows a **Feature First** architecture. Instead of grouping files by type (e.g., placing all screens in one folder and all styles in another), the codebase is organized by feature. Each feature module encapsulates its own screens, local components, and logic.

This approach ensures scalability, high maintainability, and prevents tight coupling across different parts of the application. The navigation routing is managed at the top level via **Expo Router** inside the `src/app` directory, which directly loads the decoupled feature screens.

![Feature First Architecture](https://github.com/user-attachments/assets/6204ccd7-7eea-4d6a-9207-576f802b8754)

## Environment Setup

To run this React Native (Expo) project locally, you need to set up your development environment. Below are the steps for macOS and Windows.

### macOS

#### 1. Install Node.js and Watchman
We recommend using [Homebrew](https://brew.sh/) to install the required packages.
1. Open **Terminal**.
2. Run the following command to install Node.js and Watchman:
   ```sh
   brew install node
   brew install watchman
   ```
*Note: Watchman is a tool by Meta for watching changes in the filesystem. It is highly recommended for React Native for better performance.*

#### 2. Installing Xcode & CocoaPods (For iOS Development)
If you want to run the app on an iOS Simulator:
1. Open the **App Store**, search for **Xcode**, and install it.
2. Once installed, open Xcode and agree to the license agreement.
3. Install Xcode Command Line Tools:
   ```sh
   xcode-select --install
   ```
4. Install CocoaPods (useful if you eventually create a native build):
   ```sh
   brew install cocoapods
   ```

#### 3. Installing Android Studio (For Android Development)
If you want to run the app on an Android Emulator:
1. Install Android Studio via Homebrew:
   ```sh
   brew install --cask android-studio
   ```
2. Open Android Studio, go to **Settings > Languages & Frameworks > Android SDK**, and install the **Android SDK Command-line Tools**.
3. Add the Android environment variables to your `~/.zshrc`:
   ```sh
   export ANDROID_HOME=$HOME/Library/Android/sdk
   export PATH=$PATH:$ANDROID_HOME/emulator
   export PATH=$PATH:$ANDROID_HOME/tools
   export PATH=$PATH:$ANDROID_HOME/tools/bin
   export PATH=$PATH:$ANDROID_HOME/platform-tools
   ```
4. Reload the configuration: `source ~/.zshrc`

---

<details>
<summary><b>Windows Setup Guide</b> (click)</summary>

### Windows

#### 1. Install Node.js
1. Download and install [Node.js](https://nodejs.org/) (LTS version is recommended).
2. Alternatively, install via Chocolatey in PowerShell:
   ```powershell
   choco install nodejs-lts
   ```

#### 2. Installing Android Studio
To run the app on an Android Emulator on Windows:
1. Download and install [Android Studio](https://developer.android.com/studio).
2. Set up the Environment Variables:
   - Add `ANDROID_HOME` pointing to your Android SDK path (usually `C:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk`).
   - Add `%ANDROID_HOME%\platform-tools` and `%ANDROID_HOME%\emulator` to your system `PATH`.

</details>

---

## How to Execute the Project

### Running the App
To start the development server, run the following command in the root of the project:

```bash
npx expo start
```

## Testing Architecture

This repository contains tests implemented across multiple levels of the testing pyramid. The architecture keeps tests organized directly inside their respective feature folders for high cohesion.

### 1. Component & Unit Tests (Jest & React Native Testing Library)
We use `jest-expo` and `@testing-library/react-native` to render and interact with components purely in-memory (Level 2 tests, equivalent to Flutter's Widget Tests).

**Folder Structure:**
Tests live alongside their screens inside the `tests/` folder of each feature:
```
src/features/button_feature/
 ├── screens/
 │    └── ButtonScreen.js
 └── tests/
      └── ButtonScreen.test.js
```

**Running Component Tests:**
```bash
npm run test
```

### 2. End-to-End Tests (Maestro)
For full-flow E2E testing (Level 3), we use **Maestro**, an incredibly fast, black-box testing framework. Maestro tests live at the root of the project in the `.maestro/` folder as `.yaml` files.

**Folder Structure:**
```
.maestro/
 └── components_flow.yaml
```

**Running Maestro Tests:**
Maestro tests are run externally. Ensure you have your Emulator/Simulator open and the app running via Expo Go or a development build.
```bash
maestro test .maestro/components_flow.yaml
```

### Understanding the Development Environment

#### Why `npx expo start`?
Running `npx expo start` triggers the Expo CLI to start the development server. We use `npx` (Node Package Execute) to ensure we are always running the latest version of the Expo CLI provided by the local project dependencies without needing to install it globally on your system. It also ensures compatibility with the exact SDK version defined in the project.

#### What is Metro?
When you run the start command, you will see a message saying "Starting Metro Bundler". **Metro** is the official JavaScript bundler for React Native. Its job is to take all your JavaScript files, assets, and dependencies, and compile them into a single optimized file (a bundle) that the React Native engine on the mobile device can execute. 

#### What does the QR Code do?
Once the Metro bundler starts, it displays a **QR code** in your terminal. This is a highly convenient feature of Expo:
- Instead of dealing with complex native builds and USB cables, you simply open the **Expo Go** app on your physical iOS or Android device.
- Scan the QR code using your device's camera (or directly within the Expo Go app on Android).
- The Expo Go app will connect to your local Metro server over Wi-Fi, download the JavaScript bundle, and run your app instantly.

#### What is Web?
In the terminal, you might also see a URL for **Web** (e.g., `http://localhost:8081`). React Native, combined with Expo, supports cross-platform development out-of-the-box, meaning the exact same React Native code can be rendered in a standard web browser using the `react-native-web` library. Pressing `w` in the terminal will bundle your app for the web and open it in your default browser.
