import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = -100, my = -100
    let rx = -100, ry = -100
    let raf: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      dot.style.left = mx + 'px'
      dot.style.top = my + 'px'
    }
    document.addEventListener('mousemove', onMove)

    const tick = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      raf = requestAnimationFrame(tick)
    }
    tick()

    const grow = () => { ring.style.width = '50px'; ring.style.height = '50px'; ring.style.borderColor = 'rgba(255,255,255,0.7)' }
    const shrink = () => { ring.style.width = '36px'; ring.style.height = '36px'; ring.style.borderColor = 'rgba(255,255,255,0.35)' }
    document.querySelectorAll('a,button,[data-hover]').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0' })
    document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '1' })

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] w-[6px] h-[6px] bg-white rounded-full -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-200"
        style={{ top: -100, left: -100 }}
      />
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          top: -100, left: -100,
          width: 36, height: 36,
          border: '1.5px solid rgba(255,255,255,0.35)',
          transition: 'width .3s, height .3s, border-color .3s, opacity .3s',
        }}
      />
    </>
  )
}
