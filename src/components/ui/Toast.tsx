"use client";

import { CircleCheck, CircleX, Info, X } from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import styles from "./Toast.module.css";

export type ToastVariant = "default" | "success" | "error" | "info";

export type ToastProps = {
  message: string;
  variant?: ToastVariant;
  onClose: () => void;
};

const variantIcons = {
  default: Info,
  success: CircleCheck,
  error: CircleX,
  info: Info,
} as const;

export function Toast({ message, variant = "default", onClose }: ToastProps) {
  const Icon = variantIcons[variant];

  return (
    <div
      className={[styles.toast, styles[variant]].join(" ")}
      role="status"
      aria-live="polite"
    >
      <Icon className={styles.icon} aria-hidden="true" />
      <div className={styles.content}>
        <p className={styles.message}>{message}</p>
      </div>
      <button
        type="button"
        className={styles.close}
        onClick={onClose}
        aria-label="Dismiss notification"
      >
        <X className={styles.closeIcon} aria-hidden="true" />
      </button>
    </div>
  );
}

type ToastItem = {
  id: string;
  message: string;
  variant: ToastVariant;
  duration: number;
};

type ShowToastOptions = {
  variant?: ToastVariant;
  /** Auto-dismiss duration in ms. Pass 0 to disable. Default: 4000. */
  duration?: number;
};

type ToastContextValue = {
  showToast: (message: string, options?: ShowToastOptions) => void;
  dismissToast: (id: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

function ToastContainer({
  toasts,
  onDismiss,
}: {
  toasts: ToastItem[];
  onDismiss: (id: string) => void;
}) {
  if (toasts.length === 0) {
    return null;
  }

  return (
    <div className={styles.container} aria-label="Notifications">
      {toasts.map((toast) => (
        <ToastItemWithTimer
          key={toast.id}
          toast={toast}
          onDismiss={onDismiss}
        />
      ))}
    </div>
  );
}

function ToastItemWithTimer({
  toast,
  onDismiss,
}: {
  toast: ToastItem;
  onDismiss: (id: string) => void;
}) {
  useEffect(() => {
    if (toast.duration <= 0) {
      return;
    }

    const timer = window.setTimeout(() => {
      onDismiss(toast.id);
    }, toast.duration);

    return () => {
      window.clearTimeout(timer);
    };
  }, [toast.id, toast.duration, onDismiss]);

  return (
    <Toast
      message={toast.message}
      variant={toast.variant}
      onClose={() => onDismiss(toast.id)}
    />
  );
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const dismissToast = useCallback((id: string) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback(
    (message: string, options?: ShowToastOptions) => {
      const id = crypto.randomUUID();
      const toast: ToastItem = {
        id,
        message,
        variant: options?.variant ?? "default",
        duration: options?.duration ?? 4000,
      };

      setToasts((current) => [...current, toast]);
    },
    [],
  );

  const value = useMemo(
    () => ({ showToast, dismissToast }),
    [showToast, dismissToast],
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextValue {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
}
