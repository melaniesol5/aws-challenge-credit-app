import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Checkbox } from 'primereact/checkbox';
import { Message } from 'primereact/message';

const BANK_CODES = {
  'Banco BBVA': '017',
  'Banco Santander': '072',
  'Banco Galicia': '007',
  'Banco Nacion': '011',
  'Banco Macro': '285',
  'Banco Comafi': '299',
  'Banco ICBC': '150'
};

const INTEREST_RATES = {
  3: 0.15,
  6: 0.25,
  9: 0.35,
  12: 0.45
};

const OfferApproval = ({ formData, onAccept }) => {
  const [amount, setAmount] = useState(300000);
  const [installments, setInstallments] = useState(3);
  const [cbu, setCbu] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errors, setErrors] = useState({});

  const calculateMonthlyPayment = () => {
    const rate = INTEREST_RATES[installments];
    const totalAmount = amount * (1 + rate);
    return (totalAmount / installments).toFixed(2);
  };

  const validateCbu = () => {
    if (cbu.length !== 22) {
      return 'El CBU debe tener exactamente 22 dígitos';
    }

    const bankCode = cbu.substring(0, 3);
    const expectedCode = BANK_CODES[formData.banco];
    
    if (bankCode !== expectedCode) {
      return 'El CBU no corresponde al banco seleccionado';
    }

    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const cbuError = validateCbu();
    if (cbuError) {
      setErrors({ cbu: cbuError });
      return;
    }

    if (!acceptTerms) {
      setErrors({ terms: 'Debe aceptar los términos y condiciones' });
      return;
    }

    setErrors({});
    onAccept({
      amount,
      installments,
      monthlyPayment: calculateMonthlyPayment(),
      cbu,
      interestRate: INTEREST_RATES[installments]
    });
  };

  const installmentOptions = [
    { label: '3 cuotas (15% interés)', value: 3 },
    { label: '6 cuotas (25% interés)', value: 6 },
    { label: '9 cuotas (35% interés)', value: 9 },
    { label: '12 cuotas (45% interés)', value: 12 }
  ];

  return (
    <div className="offer-approval">
      <Card className="approval-message">
        <h2 className="text-center">¡Su oferta fue aprobada!</h2>
        <h3 className="text-center">Hola {formData.nombre}</h3>
      </Card>

      <Card title="Detalles de la Oferta" className="mt-3">
        <form onSubmit={handleSubmit} className="p-fluid">
          <div className="field">
            <label htmlFor="amount">Monto del crédito (máximo $300.000)</label>
            <InputNumber
              id="amount"
              value={amount}
              onValueChange={(e) => setAmount(Math.min(300000, e.value))}
              mode="currency"
              currency="ARS"
              locale="es-AR"
              max={300000}
              min={1000}
              step={1000}
            />
          </div>

          <div className="field">
            <label htmlFor="installments">Cantidad de cuotas</label>
            <Dropdown
              id="installments"
              value={installments}
              options={installmentOptions}
              onChange={(e) => setInstallments(e.value)}
            />
          </div>

          <Card className="payment-summary">
            <p><strong>Cuota mensual: ${calculateMonthlyPayment()}</strong></p>
            <p>Tasa de interés: {(INTEREST_RATES[installments] * 100)}%</p>
          </Card>

          <div className="field mt-4">
            <label htmlFor="cbu">CBU (22 dígitos)</label>
            <InputText
              id="cbu"
              value={cbu}
              onChange={(e) => setCbu(e.target.value.replace(/\D/g, '').slice(0, 22))}
              placeholder="Ingrese su CBU de 22 dígitos"
              maxLength={22}
            />
            {errors.cbu && <Message severity="error" text={errors.cbu} className="mt-2" />}
          </div>

          <div className="field-checkbox mt-4">
            <Checkbox
              inputId="terms"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.checked)}
            />
            <label htmlFor="terms" className="ml-2">Acepto los términos y condiciones</label>
            {errors.terms && <Message severity="error" text={errors.terms} className="mt-2" />}
          </div>

          <Button type="submit" label="Aceptar Oferta" icon="pi pi-check" className="mt-3" />
        </form>
      </Card>
    </div>
  );
};

export default OfferApproval;