export default function CenteredLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow p-4">
      {children}
    </div>
  )
}