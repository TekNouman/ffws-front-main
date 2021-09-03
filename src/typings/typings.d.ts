declare module '*.scss';
declare module '*.mp4';
declare module '*.webm';

declare namespace NodeJS {
  interface ProcessEnv {
    readonly DOMAIN: string;
    readonly DOMAIN_SCHEME: string;
  }
}

interface Window {
  isMobile: boolean;
}
