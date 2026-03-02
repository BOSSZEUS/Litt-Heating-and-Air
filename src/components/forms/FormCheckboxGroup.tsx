interface CheckboxOption {
  value: string;
  label: string;
}

interface FormCheckboxGroupProps {
  legend: string;
  options: CheckboxOption[];
  selected: string[];
  onChange: (selected: string[]) => void;
  error?: string;
}

export default function FormCheckboxGroup({
  legend,
  options,
  selected,
  onChange,
  error,
}: FormCheckboxGroupProps) {
  const handleToggle = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <fieldset className="mb-6">
      <legend className="block text-sm font-bold text-grey-dark mb-3">{legend}*</legend>
      <div className="space-y-2.5">
        {options.map((opt) => (
          <label
            key={opt.value}
            className="flex items-center gap-3 text-sm text-grey-dark cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selected.includes(opt.value)}
              onChange={() => handleToggle(opt.value)}
              className="w-[18px] h-[18px] accent-primary cursor-pointer shrink-0"
            />
            {opt.label}
          </label>
        ))}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600" role="alert">{error}</p>
      )}
    </fieldset>
  );
}
