const REPOSITORY_BASE_PATH = '/multiplepage-portfolio';

export function assetPath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const normalizedPath = path.startsWith(REPOSITORY_BASE_PATH)
    ? path.slice(REPOSITORY_BASE_PATH.length)
    : path;

  return `${basePath}${normalizedPath}`;
}
