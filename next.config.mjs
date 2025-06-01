// @ts-check
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

/** @type {import('next').NextConfig} */
export default (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const repoName = 'soft-skills-app'; // Substitua pelo nome do seu repositório

  return {
    reactStrictMode: true,
    images: {
      unoptimized: true, // Desativa a otimização de imagens para exportação estática
    },
    assetPrefix: isDev ? '' : `/${repoName}/`,
    basePath: isDev ? '' : `/${repoName}`,
  };
};
