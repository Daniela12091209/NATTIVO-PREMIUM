import { User } from 'lucide-react'

function LoginButton({ onClick, label = 'Login' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-2 rounded-full border border-white/60 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
    >
      <User size={16} />
      {label}
    </button>
  )
}

export default LoginButton
