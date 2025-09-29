import Image from "next/image"

type ProfilePhotoProps = {
  src?: string
  size?: number
  className?: string
  alt?: string
}

export default function ProfilePhoto({
  src = "/placeholder-user.jpg",
  size = 104,
  className = "",
  alt = "Portrait of Srivishnavi Chebrolu",
}: ProfilePhotoProps) {
  return (
    <div
      className={`relative rounded-full overflow-hidden border border-[var(--ovo-olive,#556B2F)] shadow-sm ${className}`}
      style={{ width: size, height: size }}
      aria-hidden={alt ? undefined : true}
    >
      <Image src={src || "/placeholder.svg"} alt={alt} fill sizes={`${size}px`} className="object-cover" priority />
    </div>
  )
}
