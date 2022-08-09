import Link from 'next/link'
import Image from 'next/image'
export default function Home() {
  return (
  <div className='bg-red-200'>
      <Link href='/blog'>
      <a>ブログページ（next/link）</a>
      </Link>
      <Image
        src='/paletty.png'
        width={500}
        height={500}
        alt='パレッティ公式キャラクター'
      />
    <img src='/vercel.svg' />
    <div>main ブランチにプッシュしてみる!</div>
    <div>Hello Next.js!</div>
  </div>
  )
}