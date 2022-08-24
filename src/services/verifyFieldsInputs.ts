import React from 'react';

export const verifyFieldInputs = (fields: React.RefObject<HTMLInputElement>[]) => {
  const errorCases = fields.map((field) => {
    const value = field.current?.value;
    return !value?.length;
  });

  return errorCases.some((errorCase) => errorCase);
};