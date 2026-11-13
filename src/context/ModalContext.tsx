import { createContext, useContext } from 'react';
import { SurfPackage } from '../types';

export interface ModalActions {
  openBooking: (item?: string) => void;
  openPackageDetail: (pkg: SurfPackage) => void;
}

export const ModalContext = createContext<ModalActions | null>(null);

export const useModals = (): ModalActions => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('useModals must be used inside ModalContext.Provider');
  return ctx;
};
