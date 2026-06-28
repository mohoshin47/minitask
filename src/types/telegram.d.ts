declare global {
  interface Window {
    Telegram?: {
      WebApp: {
        initData: string;

        initDataUnsafe: {
          query_id?: string;

          start_param?: string;

          user?: {
            id: number;
            first_name?: string;
            last_name?: string;
            username?: string;
            photo_url?: string;
          };
        };

        openTelegramLink(url: string): void;
        openLink(url: string): void;
        close(): void;
        ready(): void;
        expand(): void;
      };
    };
  }
}

export {};