export {};

declare global {
  interface Window {
    Telegram?: {
      WebApp: {
        openLink: (url: string) => void;
        openTelegramLink: (url: string) => void;
        ready: () => void;
        expand: () => void;
      };
    };
  }
}