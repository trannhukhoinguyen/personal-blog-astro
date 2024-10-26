interface ImportMetaEnv {
  readonly DB_URL: string;
  readonly REDIS_URL: string;
  readonly REDIS_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
