interface FormSelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  error?: string;
  required?: boolean;
  helperText?: string;
}

export default function FormSelect({
  label,
  name,
  value,
  onChange,
  options,
  placeholder = '-Select-',
  error,
  required = true,
  helperText,
}: FormSelectProps) {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block text-sm font-bold text-grey-dark mb-2">
        {label}{required && '*'}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-3 text-[15px] text-grey-dark border cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 ${
          error ? 'border-red-500' : 'border-grey-medium focus:border-primary'
        }`}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {helperText && (
        <p className="mt-1 text-xs text-grey italic">{helperText}</p>
      )}
      {error && (
        <p className="mt-1 text-sm text-red-600" role="alert">{error}</p>
      )}
    </div>
  );
}
