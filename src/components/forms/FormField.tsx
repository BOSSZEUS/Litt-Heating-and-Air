interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel';
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
}

export default function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  required = true,
}: FormFieldProps) {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block text-sm font-bold text-grey-dark mb-2">
        {label}{required && '*'}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-3 text-[15px] text-grey-dark border transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 ${
          error ? 'border-red-500' : 'border-grey-medium focus:border-primary'
        }`}
        autoComplete={type === 'email' ? 'email' : type === 'tel' ? 'tel' : 'name'}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600" role="alert">{error}</p>
      )}
    </div>
  );
}
