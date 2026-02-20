import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X, CheckCircle, AlertTriangle, AlertCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const modalVariants = cva(
  "fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-8 border bg-white p-6 shadow-[0px_20px_24px_-4px_rgba(10,13,18,0.08),0px_8px_8px_-4px_rgba(10,13,18,0.03)] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
  {
    variants: {
      size: {
        sm: "max-w-[400px]",
        default: "max-w-[400px]",
        md: "max-w-[480px]",
        lg: "max-w-[512px]",
        xl: "max-w-[544px]",
      },
      alignment: {
        center: "text-center",
        left: "text-left",
      },
    },
    defaultVariants: {
      size: "default",
      alignment: "left",
    },
  },
);

const modalIconVariants = cva(
  "flex h-12 w-12 items-center justify-center rounded-full border-8",
  {
    variants: {
      variant: {
        success: "bg-ds-success-100 border-ds-success-50",
        warning: "bg-ds-warning-100 border-ds-warning-50",
        error: "bg-ds-error-100 border-ds-error-50",
        info: "bg-ds-brand-100 border-ds-brand-50",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  },
);

const modalIconColorVariants = {
  success: "text-ds-success-600",
  warning: "text-ds-warning-600",
  error: "text-ds-error-600",
  info: "text-ds-brand-600",
};

function Modal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root {...props} />;
}

function ModalTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger {...props} />;
}

function ModalPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal {...props} />;
}

function ModalClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close {...props} />;
}

function ModalOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      className={cn(
        "fixed inset-0 z-50 bg-ds-gray-900/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className,
      )}
      {...props}
    />
  );
}

interface ModalContentProps
  extends
    React.ComponentProps<typeof DialogPrimitive.Content>,
    VariantProps<typeof modalVariants> {
  showCloseButton?: boolean;
}

function ModalContent({
  className,
  children,
  showCloseButton = false,
  size,
  alignment,
  ...props
}: ModalContentProps) {
  return (
    <ModalPortal>
      <ModalOverlay />
      <DialogPrimitive.Content
        className={cn(modalVariants({ size, alignment, className }))}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ds-brand-600 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-ds-gray-100 data-[state=open]:text-ds-gray-500">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </ModalPortal>
  );
}

interface ModalIconProps extends VariantProps<typeof modalIconVariants> {
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
}

function ModalIcon({
  variant = "info",
  icon: IconComponent,
  className,
  ...props
}: ModalIconProps) {
  const iconColorClass = modalIconColorVariants[variant!];

  return (
    <div className={cn(modalIconVariants({ variant }), className)} {...props}>
      {IconComponent && (
        <IconComponent className={cn("h-6 w-6", iconColorClass)} />
      )}
    </div>
  );
}

function ModalHeader({
  className,
  alignment,
  ...props
}: React.ComponentProps<"div"> & { alignment?: "center" | "left" }) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-2",
        alignment === "center"
          ? "items-center text-center"
          : "items-start text-left",
        className,
      )}
      {...props}
    />
  );
}

function ModalBody({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col space-y-5", className)} {...props} />
  );
}

function ModalFooter({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & { variant?: "default" | "between" }) {
  return (
    <div
      className={cn(
        "flex gap-3 w-full",
        variant === "between" ? "justify-between items-center" : "justify-end",
        className,
      )}
      {...props}
    />
  );
}

function ModalTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      className={cn(
        "text-lg font-semibold leading-7 text-ds-gray-900",
        className,
      )}
      {...props}
    />
  );
}

function ModalDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      className={cn("text-sm leading-5 text-ds-gray-600", className)}
      {...props}
    />
  );
}

// Pre-built Modal Variants
interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  variant?: "success" | "warning" | "error" | "info";
  confirmText?: string;
  cancelText?: string;
  alignment?: "center" | "left";
}

function AlertModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  variant = "info",
  confirmText = "Confirm",
  cancelText = "Cancel",
  alignment = "left",
}: AlertModalProps) {
  const getIcon = () => {
    switch (variant) {
      case "success":
        return CheckCircle;
      case "warning":
        return AlertTriangle;
      case "error":
        return AlertCircle;
      default:
        return CheckCircle;
    }
  };

  return (
    <Modal open={isOpen} onOpenChange={onClose}>
      <ModalContent size="sm" alignment={alignment}>
        <ModalHeader alignment={alignment}>
          <ModalIcon variant={variant} icon={getIcon()} />
          <div className="space-y-2">
            <ModalTitle>{title}</ModalTitle>
            <ModalDescription>{description}</ModalDescription>
          </div>
        </ModalHeader>
        <ModalFooter>
          <Button variant="outline" onClick={onClose} className="flex-1">
            {cancelText}
          </Button>
          <Button
            variant={variant === "error" ? "destructive" : "default"}
            onClick={onConfirm}
            className="flex-1"
          >
            {confirmText}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

interface ConfirmModalProps extends Omit<AlertModalProps, "variant"> {
  destructive?: boolean;
  showCheckbox?: boolean;
  checkboxLabel?: string;
  onCheckboxChange?: (checked: boolean) => void;
}

function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  destructive = false,
  confirmText = "Confirm",
  cancelText = "Cancel",
  alignment = "left",
  showCheckbox = false,
  checkboxLabel = "Don't show again",
  onCheckboxChange,
}: ConfirmModalProps) {
  const [checked, setChecked] = React.useState(false);

  const handleCheckboxChange = (newChecked: boolean) => {
    setChecked(newChecked);
    onCheckboxChange?.(newChecked);
  };

  return (
    <Modal open={isOpen} onOpenChange={onClose}>
      <ModalContent size="xl" alignment={alignment}>
        <ModalBody>
          <div className="flex gap-6">
            <ModalIcon
              variant={destructive ? "error" : "warning"}
              icon={destructive ? AlertCircle : AlertTriangle}
            />
            <div className="flex-1 space-y-8">
              <div className="space-y-2">
                <ModalTitle>{title}</ModalTitle>
                <ModalDescription>{description}</ModalDescription>
              </div>
              <ModalFooter variant={showCheckbox ? "between" : "default"}>
                {showCheckbox && (
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="modal-checkbox"
                      checked={checked}
                      onCheckedChange={handleCheckboxChange}
                    />
                    <Label htmlFor="modal-checkbox">{checkboxLabel}</Label>
                  </div>
                )}
                <div className="flex gap-3 w-full">
                  <Button
                    variant="outline"
                    onClick={onClose}
                    className="flex-1"
                  >
                    {cancelText}
                  </Button>
                  <Button
                    variant={destructive ? "destructive" : "default"}
                    onClick={onConfirm}
                    className="flex-1"
                  >
                    {confirmText}
                  </Button>
                </div>
              </ModalFooter>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  submitText?: string;
  cancelText?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

function FormModal({
  isOpen,
  onClose,
  onSubmit,
  title,
  description,
  children,
  submitText = "Submit",
  cancelText = "Cancel",
  icon,
}: FormModalProps) {
  return (
    <Modal open={isOpen} onOpenChange={onClose}>
      <ModalContent size="md" alignment="left">
        <ModalHeader alignment="left">
          {icon && <ModalIcon variant="info" icon={icon} />}
          <div className="space-y-2">
            <ModalTitle>{title}</ModalTitle>
            {description && <ModalDescription>{description}</ModalDescription>}
          </div>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button variant="outline" onClick={onClose} className="flex-1">
            {cancelText}
          </Button>
          <Button onClick={onSubmit} className="flex-1">
            {submitText}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export {
  Modal,
  ModalTrigger,
  ModalPortal,
  ModalClose,
  ModalOverlay,
  ModalContent,
  ModalIcon,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalTitle,
  ModalDescription,
  AlertModal,
  ConfirmModal,
  FormModal,
  modalVariants,
};

export type { AlertModalProps, ConfirmModalProps, FormModalProps };
