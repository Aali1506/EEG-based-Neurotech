import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Patient, Admin, QuizResult } from '../types/quiz';

interface AuthContextType {
  patient: Patient | null;
  admin: Admin | null;
  quizResults: QuizResult[];
  loginAsPatient: (patient: Patient) => void;
  loginAsAdmin: (username: string, password: string) => boolean;
  logout: () => void;
  addQuizResult: (result: QuizResult) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const VALID_ADMINS = [
  { username: 'Aadithya', password: '1234' },
  { username: 'Arjun', password: '5678' },
  { username: 'Varun', password: '900' },
];

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);

  // Load saved session and quiz results on first render
  useEffect(() => {
    const savedPatient = localStorage.getItem('patient');
    const savedAdmin = localStorage.getItem('admin');
    const savedResults = localStorage.getItem('quizResults');

    if (savedPatient) setPatient(JSON.parse(savedPatient));
    if (savedAdmin) setAdmin(JSON.parse(savedAdmin));
    if (savedResults) setQuizResults(JSON.parse(savedResults));
  }, []);

  // Persist changes to localStorage
  useEffect(() => {
    if (patient) localStorage.setItem('patient', JSON.stringify(patient));
    else localStorage.removeItem('patient');
  }, [patient]);

  useEffect(() => {
    if (admin) localStorage.setItem('admin', JSON.stringify(admin));
    else localStorage.removeItem('admin');
  }, [admin]);

  useEffect(() => {
    localStorage.setItem('quizResults', JSON.stringify(quizResults));
  }, [quizResults]);

  const loginAsPatient = (patientData: Patient) => {
    setPatient(patientData);
    setAdmin(null);
    localStorage.setItem('patient', JSON.stringify(patientData));
  };

  const loginAsAdmin = (username: string, password: string): boolean => {
    const validAdmin = VALID_ADMINS.find(
      (a) => a.username === username && a.password === password
    );

    if (validAdmin) {
      const newAdmin = { username: validAdmin.username };
      setAdmin(newAdmin);
      setPatient(null);
      localStorage.setItem('admin', JSON.stringify(newAdmin));
      return true;
    }
    return false;
  };

  const logout = () => {
    setPatient(null);
    setAdmin(null);
    localStorage.removeItem('patient');
    localStorage.removeItem('admin');
  };

  const addQuizResult = (result: QuizResult) => {
    setQuizResults((prev) => {
      const updated = [...prev, result];
      localStorage.setItem('quizResults', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <AuthContext.Provider
      value={{
        patient,
        admin,
        quizResults,
        loginAsPatient,
        loginAsAdmin,
        logout,
        addQuizResult,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
