import { Helmet } from 'react-helmet-async'

interface PageMetaProps {
  title: string
  description: string
  path: string
}

const BASE_URL = 'https://maiaviaggi.it'

export function PageMeta({ title, description, path }: PageMetaProps) {
  const url = `${BASE_URL}${path}`
  const fullTitle = path === '/' ? title : `${title} - MAIA Viaggi`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
    </Helmet>
  )
}
