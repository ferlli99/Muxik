import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MusicProvider } from "./Context/MusicContext";
import { PlayerProvider } from "./Context/PlayerContext";
import { LoginProvider } from "./Context/LoginContext";
import { LikedSongsProvider } from "./Context/LikedSongsContext";
import { HistoryProvider } from "./Context/HistoryContext";
import { RegisterProvider } from "./Context/RegisterContext";
import { ForgotPasswordProvider } from "./Context/ResetPasswordContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RegisterProvider>
      <ForgotPasswordProvider>
        <LoginProvider>
          <MusicProvider>
            <HistoryProvider>
              <PlayerProvider>
                <LikedSongsProvider>
                  <App />
                </LikedSongsProvider>
              </PlayerProvider>
            </HistoryProvider>
          </MusicProvider>
        </LoginProvider>
      </ForgotPasswordProvider>
    </RegisterProvider>
  </React.StrictMode>
);
