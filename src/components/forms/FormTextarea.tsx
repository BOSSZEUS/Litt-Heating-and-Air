interface FormTextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  rows?: number;
  required?: boolean;
}

export default function FormTextarea({
  label,
  name,
  value,
  onChange,
  error,
  rows = 5,
  required = true,
}: FormTextareaProps) {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block text-sm font-bold text-grey-dark mb-2">
        {label}{required && '*'}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className={`w-full px-4 py-3 text-[15px] text-grey-dark border resize-vertical min-h-[120px] transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 ${
          error ? 'border-red-500' : 'border-grey-medium focus:border-primary'
        }`}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600" role="alert">{error}</p>
      )}
    </div>
  );
}
