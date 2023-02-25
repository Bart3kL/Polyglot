declare namespace NodeJS {
  interface ProcessEnv {
    GITHUB_ID: string;
    GITHUB_SECRET: string;
    GOOGLE_ID: string;
    GOOGLE_SECRET: string;
    FACEBOOK_ID: string;
    FACEBOOK_SECRET: string;
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
    CONTENTFUL_SPACE_ID: string;
    CONTENTFUL_PREVIEW_ACCESS_TOKEN: string;
  }
}
