// App.tsx
import { useState } from 'react';
import InstructionScreen from './components/InstructionScreen';
import ReportForm from './components/ReportForm';
import SuccessScreen from './components/SuccessScreen';
import type { ReportFormData } from './types/Report';

type AppState = 'instructions' | 'form' | 'success';

function App() {
  const [currentScreen, setCurrentScreen] = useState<AppState>('instructions');
  const [submittedData, setSubmittedData] = useState<ReportFormData | null>(null);

  const handleFormSubmit = (data: ReportFormData) => {
    setSubmittedData(data);
    setCurrentScreen('success');
    // Aqui você faria a chamada API para enviar os dados
    console.log('Dados enviados:', data);
  };

  const handleNewReport = () => {
    setSubmittedData(null);
    setCurrentScreen('form');
  };

  const handleBackToInstructions = () => {
    setCurrentScreen('instructions');
  };

  return (
    <div className="App">
      {currentScreen === 'instructions' && (
        <InstructionScreen onContinue={() => setCurrentScreen('form')} />
      )}
      
      {currentScreen === 'form' && (
        <ReportForm 
          onSubmit={handleFormSubmit}
          onBack={handleBackToInstructions}
        />
      )}
      
      {currentScreen === 'success' && (
        <SuccessScreen onNewReport={handleNewReport} />
      )}
    </div>
  );
}

export default App;