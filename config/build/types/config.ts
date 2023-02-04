export type BuildMode = 'production' | 'development';

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface BuildDev {
  mode: BuildMode;
  port: number;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: Boolean;
  port: number;
}
