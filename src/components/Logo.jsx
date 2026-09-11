// export default function LogoSvg({ size = 34 }) {
//   return (
//     // <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
//     //   <circle cx="18" cy="18" r="17" stroke={color} strokeWidth="1.4" />
//     //   <path
//     //     d="M18 9c-3.3 0-6 2.2-7 5.2-1.6.1-3 1.6-3 3.6 0 2.4 1.8 4.2 3.8 4.2.6 2.6 2.5 4.3 4 5.1v1.9h4.4v-1.9c1.5-.8 3.4-2.5 4-5.1 2 0 3.8-1.8 3.8-4.2 0-2-1.4-3.5-3-3.6-1-3-3.7-5.2-7-5.2z"
//     //     fill={color}
//     //     fillOpacity=".18"
//     //     stroke={color}
//     //     strokeWidth="1.1"
//     //   />
//     // </svg>
//     <img src="/Logo.jpg" width={size} height={size} alt="Logo" />
//   )
// }
import Image from 'next/image'

export default function Logo({ size = 75 }) {
  return (
    <Image
      src="/logo.png"
      width={size}
      height={size}
      alt="Logo"
    />
  )
}
