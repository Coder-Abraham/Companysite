import { CheckCircle, X } from 'lucide-react'
import { useEffect, useState } from 'react'

interface MessageProps {
  isVisible: boolean
  onClose?: () => void
  title?: string
  message?: string
}

const Message = ({ 
  isVisible, 
  onClose,
  title = 'Success!', 
  message = 'Your message has been sent successfully. We will get back to you soon!' 
}: MessageProps) => {
  const [showMessage, setShowMessage] = useState(isVisible)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShowMessage(isVisible)
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowMessage(false)
        if (onClose) {
          onClose()
        }
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  if (!showMessage) return null

  const handleClose = () => {
    setShowMessage(false)
    if (onClose) {
      onClose()
    }
  }


  return (
    <div className='fixed inset-0 flex items-center justify-center p-4 z-50 pointer-events-none'>
      <div className='animate-fade-in pointer-events-auto'>
        <div className='bg-linear-to-r from-green-900 via-green-800 to-green-900 border-2 border-green-400 rounded-2xl p-8 max-w-md w-full shadow-2xl'>
          <div className='flex items-start gap-4'>
            <div className='shrink-0'>
              <CheckCircle className='w-8 h-8 text-green-300 animate-pulse' />
            </div>
            <div className='flex-1'>
              <h3 className='text-2xl font-bold text-white mb-2'>{title}</h3>
              <p className='text-green-100 leading-relaxed'>{message}</p>
            </div>
            <button
              onClick={handleClose}
              className='shrink-0 text-green-300 hover:text-green-100 transition-colors duration-200'
            >
              <X size={24} />
            </button>
          </div>

          {/* Progress bar */}
          <div className='mt-4 h-1 bg-green-700 rounded-full overflow-hidden'>
            <div className='h-full bg-green-300 animate-shrink-width'></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shrink-width {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-shrink-width {
          animation: shrink-width 2s linear forwards;
        }
      `}</style>
    </div>
  )
}

export default Message
