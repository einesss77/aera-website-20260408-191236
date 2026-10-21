import { createHash, timingSafeEqual } from 'node:crypto'
import { NextRequest, NextResponse } from 'next/server'

function privateResponse(response: NextResponse) {
  response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive')
  response.headers.set('Cache-Control', 'private, no-store, max-age=0')
  response.headers.set('Vary', 'Authorization')
  return response
}

export function proxy(request: NextRequest) {
  // Crawlers must be able to revisit URLs to discover their protected status.
  if (request.nextUrl.pathname === '/robots.txt') {
    return privateResponse(new NextResponse('User-agent: *\nAllow: /\n', {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    }))
  }

  const password = process.env.SITE_PASSWORD
  // An unconfigured deployment stays closed rather than exposing the site.
  if (!password) {
    return privateResponse(new NextResponse('Site fermé.', { status: 503 }))
  }

  const authorization = request.headers.get('authorization') ?? ''
  let suppliedPassword = ''
  if (authorization.startsWith('Basic ')) {
    try {
      const credentials = atob(authorization.slice(6))
      const separator = credentials.indexOf(':')
      if (separator !== -1) {
        suppliedPassword = new TextDecoder().decode(
          Uint8Array.from(credentials.slice(separator + 1), (character) => character.charCodeAt(0)),
        )
      }
    } catch {
      // Malformed credentials receive the same challenge as a wrong password.
    }
  }

  const digest = (value: string) => createHash('sha256').update(value).digest()
  if (!timingSafeEqual(digest(suppliedPassword), digest(password))) {
    return privateResponse(new NextResponse('Site fermé. Mot de passe requis.', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Site prive", charset="UTF-8"',
        'Content-Type': 'text/plain; charset=utf-8',
      },
    }))
  }

  return privateResponse(NextResponse.next())
}
