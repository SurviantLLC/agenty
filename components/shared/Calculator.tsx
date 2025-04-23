import { useState } from 'react';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export interface CalculatorProps {
  onCalculate?: (result: number) => void;
  className?: string;
}

export function Calculator({ onCalculate, className }: CalculatorProps) {
  const [value1, setValue1] = useState<string>('');
  const [value2, setValue2] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);
    if (!isNaN(num1) && !isNaN(num2)) {
      const calculatedResult = num1 + num2;
      setResult(calculatedResult);
      onCalculate?.(calculatedResult);
    }
  };

  return (
    <Card className={`p-4 ${className}`}>
      <div className="space-y-4">
        <Input
          type="number"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
          placeholder="Enter first value"
        />
        <Input
          type="number"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          placeholder="Enter second value"
        />
        <Button onClick={handleCalculate} className="w-full">
          Calculate
        </Button>
        {result !== null && (
          <div className="text-center font-medium">Result: {result}</div>
        )}
      </div>
    </Card>
  );
}
