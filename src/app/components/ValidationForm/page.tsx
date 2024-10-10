"use client";
import React, { useState } from "react";
import {
  validateEmail,
  validatePassword,
  validatePhone,
  validateCreditCard,
  validateExpiryDate,
  validateCVV,
  validatePostalCode,
} from "@/app/utils/validations";

const ValidationForm: React.FC = () => {
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    phone: "",
    creditCard: "",
    expiryDate: "",
    cvv: "",
    postalCode: "",
    birthdate: "",
    gender: "",
    terms: "",
  });
  const [selectedGender, setSelectedGender] = useState('')
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newErrors = { ...errors };

    // Validate each field
    newErrors.email = validateEmail(formData.get("email") as string)
      ? ""
      : "Por favor, ingrese un email válido.";
    newErrors.password = validatePassword(formData.get("password") as string)
      ? ""
      : "La contraseña no cumple con los requisitos.";
    newErrors.phone = validatePhone(formData.get("phone") as string)
      ? ""
      : "Por favor, ingrese un número de teléfono válido.";
    newErrors.creditCard = validateCreditCard(
      formData.get("creditCard") as string
    )
      ? ""
      : "Por favor, ingrese un número de tarjeta válido.";
    newErrors.expiryDate = validateExpiryDate(
      formData.get("expiryDate") as string
    )
      ? ""
      : "Formato incorrecto. Ingrese MM/AA.";
    newErrors.cvv = validateCVV(formData.get("cvv") as string)
      ? ""
      : "El CVV debe tener 3 dígitos.";
    newErrors.postalCode = validatePostalCode(
      formData.get("postalCode") as string
    )
      ? ""
      : "Por favor, ingrese un código postal válido.";

    const birthdate = new Date(formData.get("birthdate") as string);
    newErrors.birthdate =
      birthdate.getFullYear() > new Date().getFullYear()
        ? "La fecha de nacimiento no puede ser en el futuro."
        : "";

    newErrors.gender = formData.get("gender")
      ? ""
      : "Por favor, seleccione su género.";
    newErrors.terms = formData.get("terms")
      ? ""
      : "Debe aceptar los términos y condiciones.";

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      console.log("Form is valid");
      // Here you would typically send the form data to your server
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Email Card */}
      <div className="bg-gray-700 p-4 rounded-lg">
        <label htmlFor="email" className="block mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-2 bg-gray-600 rounded"
          required
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email}</span>
        )}
      </div>

      {/* Password Card */}
      <div className="bg-gray-700 p-4 rounded-lg">
        <label htmlFor="password" className="block mb-2">
          Contraseña:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full p-2 bg-gray-600 rounded"
          required
        />
        <div className="text-sm text-gray-400 mt-2">
          <p>La contraseña debe tener al menos 6 caracteres, incluyendo:</p>
          <ul className="list-disc list-inside mt-1">
            <li>1 letra mayúscula</li>
            <li>1 letra minúscula</li>
            <li>1 número</li>
          </ul>
        </div>
        {errors.password && (
          <span className="text-red-500 text-sm">{errors.password}</span>
        )}
      </div>

      {/* Phone Card */}
      <div className="bg-gray-700 p-4 rounded-lg">
        <label htmlFor="phone" className="block mb-2">
          Teléfono:
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full p-2 bg-gray-600 rounded"
          required
        />
        {errors.phone && (
          <span className="text-red-500 text-sm">{errors.phone}</span>
        )}
      </div>

      {/* Credit Card Card */}
      <div className="bg-gray-700 p-4 rounded-lg">
        <label htmlFor="creditCard" className="block mb-2">
          Tarjeta de Crédito:
        </label>
        <input
          type="text"
          id="creditCard"
          name="creditCard"
          className="w-full p-2 bg-gray-600 rounded"
          maxLength={16}
          required
        />
        {errors.creditCard && (
          <span className="text-red-500 text-sm">{errors.creditCard}</span>
        )}

        <label htmlFor="expiryDate" className="block mt-4 mb-2">
          Fecha Expiración (MM/AA):
        </label>
        <input
          type="text"
          id="expiryDate"
          name="expiryDate"
          className="w-full p-2 bg-gray-600 rounded"
          maxLength={5}
          required
        />
        {errors.expiryDate && (
          <span className="text-red-500 text-sm">{errors.expiryDate}</span>
        )}

        <label htmlFor="cvv" className="block mt-4 mb-2">
          CVV:
        </label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          className="w-full p-2 bg-gray-600 rounded"
          maxLength={3}
          required
        />
        {errors.cvv && (
          <span className="text-red-500 text-sm">{errors.cvv}</span>
        )}
      </div>

      {/* Postal Code Card */}
      <div className="bg-gray-700 p-4 rounded-lg">
        <label htmlFor="postalCode" className="block mb-2">
          Código Postal:
        </label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          className="w-full p-2 bg-gray-600 rounded"
          required
        />
        {errors.postalCode && (
          <span className="text-red-500 text-sm">{errors.postalCode}</span>
        )}
      </div>

      {/* Birthdate Card */}
      <div className="bg-gray-700 p-4 rounded-lg">
        <label htmlFor="birthdate" className="block mb-2">
          Fecha de Nacimiento:
        </label>
        <input
          type="date"
          id="birthdate"
          name="birthdate"
          className="w-full p-2 bg-gray-600 rounded"
          required
        />
        {errors.birthdate && (
          <span className="text-red-500 text-sm">{errors.birthdate}</span>
        )}
      </div>

      {/* Gender Card */}
      <div className="bg-gray-700 p-4 rounded-lg">
        <p className="mb-2">Género:</p>
        <div className="flex space-x-4">
          {['male', 'female', 'other'].map((gender) => (
            <label key={gender} className="inline-flex items-center">
              <input 
                type="radio" 
                name="gender" 
                value={gender} 
                className="hidden" 
                onChange={() => setSelectedGender(gender)}
              />
              <span className={`px-4 py-2 rounded-full cursor-pointer transition-all duration-200 ease-in-out
                               ${selectedGender === gender ? 'bg-orange-500 shadow-lg shadow-orange-500/50' : 'bg-gray-600'}
                               hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/50`}>
                {gender === 'male' ? 'Hombre' : gender === 'female' ? 'Mujer' : 'Otro'}
              </span>
            </label>
          ))}
        </div>
        {errors.gender && <span className="text-red-500 text-sm mt-2 block">{errors.gender}</span>}
      </div>

      {/* Terms and Conditions Card */}
      <div className="bg-gray-700 p-4 rounded-lg">
        <label className="inline-flex items-center cursor-pointer group">
          <input type="checkbox" name="terms" className="hidden peer" />
          <span
            className="w-6 h-6 border-2 border-gray-400 rounded-md mr-2 flex items-center justify-center
                             transition-all duration-200 ease-in-out
                             group-hover:border-orange-500
                             peer-checked:bg-orange-500 peer-checked:border-orange-500
                             peer-checked:shadow-orange-500/50 peer-checked:shadow-lg"
          >
            <svg
              className="w-4 h-4 text-white fill-current hidden peer-checked:block"
              viewBox="0 0 20 20"
            >
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </svg>
          </span>
          <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
            Acepto los términos y condiciones.
          </span>
        </label>
        {errors.terms && (
          <span className="text-red-500 text-sm block mt-2">
            {errors.terms}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 text-white p-4 rounded-lg hover:bg-orange-600 transition-colors"
      >
        Enviar
      </button>
    </form>
  );
};

export default ValidationForm;
