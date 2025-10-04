export interface ReportFormData {
  name: string;
  location: string;
  description: string;
}

export interface ReportFormProps {
  onSubmit: (data: ReportFormData) => void;
  onBack?: () => void;
}