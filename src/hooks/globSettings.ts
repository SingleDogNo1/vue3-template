import { GlobEnvConfig } from '#/config'

export const useGlobSetting = (): any => {
  const ENV = import.meta.env as unknown as GlobEnvConfig

  const glob = {
    title: ENV.VITE_GLOB_APP_TITLE,
    apiUrl: ENV.VITE_GLOB_API_URL,
    urlPrefix: ENV.VITE_GLOB_API_URL_PREFIX,
    uploadUrl: ENV.VITE_GLOB_UPLOAD_URL,
  }

  return glob
}
