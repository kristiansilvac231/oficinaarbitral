import { ImageResponse } from 'next/og'
import type { NextRequest } from 'next/server'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') ?? SITE_NAME
  const desc = searchParams.get('desc') ?? 'Gestión profesional de juicios arbitrales en Chile'

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '1200px',
          height: '630px',
          background: 'linear-gradient(135deg, #0e1f35 0%, #1e3a5f 60%, #2d5a9e 100%)',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(201, 162, 39, 0.08)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-120px',
            left: '-60px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'rgba(201, 162, 39, 0.05)',
          }}
        />

        {/* Gold accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '5px',
            background: 'linear-gradient(90deg, #c9a227, #e8b840)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '64px 72px 52px',
            height: '100%',
          }}
        >
          {/* Site name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                background: '#c9a227',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
              }}
            >
              ⚖
            </div>
            <span style={{ color: '#e8b840', fontSize: '22px', fontWeight: '700', letterSpacing: '-0.02em' }}>
              {SITE_NAME}
            </span>
          </div>

          {/* Main content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '900px' }}>
            <h1
              style={{
                color: '#ffffff',
                fontSize: title.length > 50 ? '44px' : '52px',
                fontWeight: '900',
                lineHeight: '1.1',
                letterSpacing: '-0.03em',
                margin: 0,
              }}
            >
              {title}
            </h1>
            <p
              style={{
                color: 'rgba(255,255,255,0.72)',
                fontSize: '22px',
                lineHeight: '1.5',
                margin: 0,
              }}
            >
              {desc}
            </p>
          </div>

          {/* Footer */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ color: 'rgba(255,255,255,0.40)', fontSize: '18px' }}>
              {SITE_URL.replace('https://', '')}
            </span>
            <div
              style={{
                padding: '10px 24px',
                background: '#c9a227',
                borderRadius: '6px',
                color: '#0e1f35',
                fontSize: '16px',
                fontWeight: '700',
              }}
            >
              Solicitar información →
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}
