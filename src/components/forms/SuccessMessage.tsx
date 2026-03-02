import { CheckCircle } from 'lucide-react';

interface SuccessMessageProps {
  message?: string;
  onReset?: () => void;
}

export default function SuccessMessage({
  message = 'Thank you! We will be in touch within 24 hours.',
  onReset,
}: SuccessMessageProps) {
  return (
    <div className="text-center py-12">
      <CheckCircle size={64} className="mx-auto text-green-600 mb-4" />
      <h3 className="text-2xl font-bold text-dark mb-2">Submitted Successfully!</h3>
      <p className="text-grey mb-6">{message}</p>
      {onReset && (
        <button
          onClick={onReset}
          className="px-6 py-2 border-2 border-primary text-primary font-bold uppercase text-sm tracking-wider hover:bg-primary hover:text-white transition-all"
        >
          Submit Another Request
        </button>
      )}
    </div>
  );
}
