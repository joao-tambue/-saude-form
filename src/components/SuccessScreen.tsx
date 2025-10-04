import React from 'react';
import { CheckCircle, FileText } from 'lucide-react';

interface SuccessScreenProps {
  onNewReport: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ onNewReport }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Reportagem Enviada!
        </h1>
        
        <p className="text-gray-600 mb-2">
          Sua reportagem foi recebida com sucesso e está em análise.
        </p>
        
        <p className="text-gray-600 mb-8">
          Entraremos em contato se precisarmos de mais informações.
        </p>

        <div className="bg-blue-50 rounded-lg p-4 mb-8">
          <div className="flex items-center justify-center space-x-2 text-blue-700 mb-2">
            <FileText className="w-4 h-4" />
            <span className="font-semibold">Próximos Passos</span>
          </div>
          <p className="text-sm text-blue-600">
            Nossa equipe irá verificar as informações e publicará a reportagem em até 24 horas.
          </p>
        </div>

        <button
          onClick={onNewReport}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-200"
        >
          Fazer Nova Reportagem
        </button>
      </div>
    </div>
  );
};

export default SuccessScreen;