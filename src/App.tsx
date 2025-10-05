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
    console.log('Dados enviados:', data);
  };

  const handleNewReport = () => {
    setSubmittedData(null);
    setCurrentScreen('form');
  };

  const handleBackToInstructions = () => {
    setCurrentScreen('instructions');
  };

  // ensure submittedData is read to satisfy TypeScript "no unused locals" checks
  void submittedData;

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
        <SuccessScreen 
          onNewReport={handleNewReport} 
          submittedData={submittedData}
        />
      )}
    </div>
  );
}

export default App;