import type { ReactNode } from 'react';
import Radio from './Radio';
import Divider from './Divider';

export interface RadioGroupCardOption<T = string> {
  value: T;
  label: string;
  /** Example output shown on the right (e.g. "14:42" or "2:42 PM"). */
  example?: ReactNode;
}

export interface RadioGroupCardProps<T = string> {
  value?: T;
  onChange?: (value: T) => void;
  options: RadioGroupCardOption<T>[];
  name?: string;
  className?: string;
  disabled?: boolean;
}

/**
 * Radio group styled as a card: options in rows with dividers and optional
 * example output on the right. Single-click selection. Matches Figma Settings
 * time-format pattern (node 828:324183).
 */
function RadioGroupCard<T extends string>({
  value,
  onChange,
  options,
  name,
  className,
  disabled = false,
}: RadioGroupCardProps<T>) {
  return (
    <div className={className}>
      <Radio.Group
        name={name}
        value={value}
        onChange={(e) => onChange?.(e.target.value as T)}
        disabled={disabled}
        className="!block !w-full"
      >
        <div
          className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900 overflow-hidden"
          role="radiogroup"
          aria-label={name}
        >
        {options.map((option, index) => {
          const isSelected = value === option.value;
          const textClass = isSelected
            ? '!text-white'
            : '!text-neutral-300';
          return (
            <div key={option.value}>
              {index > 0 && (
                <div className="px-3">
                  <Divider className="!my-0 !border-neutral-800" />
                </div>
              )}
              <label
                className={`flex cursor-pointer items-center justify-between gap-2 px-3 py-3 transition-colors hover:bg-neutral-800/50 ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
              >
                <div className="flex min-w-0 flex-1 items-center gap-2">
                  <Radio
                    value={option.value}
                    className={textClass}
                  >
                    <span className={`text-sm font-medium leading-6 ${textClass}`}>
                      {option.label}
                    </span>
                  </Radio>
                </div>
                {option.example != null && (
                  <span
                    className={`shrink-0 text-sm font-medium leading-6 ${textClass}`}
                  >
                    {option.example}
                  </span>
                )}
              </label>
            </div>
          );
        })}
        </div>
      </Radio.Group>
    </div>
  );
}

export default RadioGroupCard;
