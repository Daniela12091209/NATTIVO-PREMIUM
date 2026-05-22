import { User } from 'lucide-react'

function LoginButton({ onClick, label = 'Login' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-2 rounded-lg border border-white/30 bg-red-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-red-700 uppercase tracking-[0.1em]"
    >
      <User size={14} />
      {label}
    </button>
  )
}

export default LoginButton
