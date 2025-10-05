// components/ReportForm.tsx
import React, { useState } from 'react';
import { User, MapPin, FileText, ArrowLeft, Send } from 'lucide-react';
import type { ReportFormData, ReportFormProps } from '../types/Report';

const ReportForm: React.FC<ReportFormProps> = ({ onSubmit, onBack }) => {
  const [formData, setFormData] = useState<ReportFormData>({
    name: '',
    location: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.location && formData.description) {
      onSubmit(formData);
    }
  };

  const handleChange = (field: keyof ReportFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          handleChange('location', `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`);
        },
        () => {
          alert('Não foi possível obter a localização atual. Por favor, insira manualmente.');
        }
      );
    } else {
      alert('Geolocalização não suportada neste navegador.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            {onBack && (
              <button
                onClick={onBack}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition duration-200"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
            )}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Reportagem
              </h1>
              <p className="text-gray-600">Preencha os dados abaixo</p>
            </div>
          </div>
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <FileText className="w-6 h-6 text-blue-600" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2">
              <User className="w-4 h-4 text-blue-500" />
              <span>Nome da Organização/Indivíduo *</span>
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="Ex: Prefeitura Municipal, João Silva..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            />
          </div>

          {/* Location Field */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="location" className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                <MapPin className="w-4 h-4 text-green-500" />
                <span>Localização *</span>
              </label>
              <button
                type="button"
                onClick={getCurrentLocation}
                className="text-xs bg-green-100 hover:bg-green-200 text-green-700 px-3 py-1 rounded-lg transition duration-200"
              >
                Usar local atual
              </button>
            </div>
            <input
              type="text"
              id="location"
              value={formData.location}
              onChange={(e) => handleChange('location', e.target.value)}
              placeholder="Ex: Rua Principal, 123 - Centro, Cidade - Estado"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
              required
            />
          </div>

          {/* Description Field */}
          <div>
            <label htmlFor="description" className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2">
              <FileText className="w-4 h-4 text-purple-500" />
              <span>Descrição da Reportagem *</span>
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              placeholder="Descreva detalhadamente o que está ocorrendo, incluindo informações relevantes como data, hora, pessoas envolvidas, etc."
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200 resize-none"
              required
            />
          </div>

          {/* Character Counter */}
          <div className="text-right">
            <span className={`text-sm ${
              formData.description.length > 500 ? 'text-red-500' : 'text-gray-500'
            }`}>
              {formData.description.length}/500 caracteres
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!formData.name || !formData.location || !formData.description}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition duration-200 flex items-center justify-center space-x-2"
          >
            <Send className="w-5 h-5" />
            <span>Enviar Reportagem</span>
          </button>
        </form>

        {/* Footer Note */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Todos os campos marcados com * são obrigatórios. Sua reportagem será analisada antes da publicação.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReportForm;