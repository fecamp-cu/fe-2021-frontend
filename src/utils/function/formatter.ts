export const getYouTubeEmbedFormat = (youtubeUrl: string): string => {
    if (youtubeUrl.includes('embed')) return youtubeUrl
    if (youtubeUrl.includes('youtu.be'))
      return youtubeUrl.replace('youtu.be', 'www.youtube.com/embed')
    if (youtubeUrl.includes('watch?v=')) return youtubeUrl.replace('watch?v=', 'embed/')
    throw new Error(`Invalid youtube url: ${youtubeUrl}`)
  }