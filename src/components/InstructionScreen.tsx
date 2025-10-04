// components/InstructionScreen.tsx
import React from 'react';
import { MapPin, User, FileText, ArrowRight } from 'lucide-react';

interface InstructionScreenProps {
  onContinue: () => void;
}

const InstructionScreen: React.FC<InstructionScreenProps> = ({ onContinue }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Sistema de Reportagens
          </h1>
          <p className="text-gray-600 text-lg">
            Ajude-nos a manter a comunidade informada
          </p>
        </div>

        {/* Instructions */}
        <div className="space-y-6 mb-8">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Identificação</h3>
              <p className="text-gray-600">
                Informe o nome da organização ou indivíduo relacionado à reportagem
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Localização</h3>
              <p className="text-gray-600">
                Forneça a localização exata onde o evento ocorreu ou está ocorrendo
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Descrição Detalhada</h3>
              <p className="text-gray-600">
                Descreva com precisão os fatos, incluindo data, hora e detalhes relevantes
              </p>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
          <h4 className="font-semibold text-yellow-800 mb-2">Importante:</h4>
          <ul className="text-yellow-700 text-sm space-y-1">
            <li>• Forneça informações precisas e verificáveis</li>
            <li>• Mantenha um tom profissional e objetivo</li>
            <li>• Evite informações pessoais sensíveis</li>
            <li>• Sua reportagem será revisada antes da publicação</li>
          </ul>
        </div>

        {/* Continue Button */}
        <button
          onClick={onContinue}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition duration-200 flex items-center justify-center space-x-2"
        >
          <span>Iniciar Reportagem</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default InstructionScreen;