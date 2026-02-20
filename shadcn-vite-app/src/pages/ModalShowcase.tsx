import { useState } from "react";
import {
  Modal,
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
} from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CreditCard,
  UserPlus,
  Upload,
  User,
  Crown,
  Shield,
  Image,
  Settings,
} from "lucide-react";

const ModalShowcase = () => {
  const [modalStates, setModalStates] = useState<Record<string, boolean>>({});

  const openModal = (id: string) => {
    setModalStates((prev) => ({ ...prev, [id]: true }));
  };

  const closeModal = (id: string) => {
    setModalStates((prev) => ({ ...prev, [id]: false }));
  };

  const handleConfirm = (id: string) => {
    console.log(`Confirmed: ${id}`);
    closeModal(id);
  };

  return (
    <div className="p-8 space-y-12 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-ds-gray-900 mb-4">
          Modal Component Showcase
        </h1>
        <p className="text-lg text-ds-gray-600 mb-8">
          A comprehensive collection of modal variants extracted from Figma
          designs.
        </p>
      </div>

      {/* Alert Modals */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-ds-gray-900">
          Alert Modals
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button onClick={() => openModal("success-alert")}>
            Success Alert
          </Button>
          <Button onClick={() => openModal("warning-alert")}>
            Warning Alert
          </Button>
          <Button onClick={() => openModal("error-alert")}>Error Alert</Button>
          <Button onClick={() => openModal("info-alert")}>Info Alert</Button>
        </div>

        <AlertModal
          isOpen={modalStates["success-alert"]}
          onClose={() => closeModal("success-alert")}
          onConfirm={() => handleConfirm("success-alert")}
          title="Payment successful"
          description="Your payment has been successfully submitted. We've sent you an email with all of the details of your order."
          variant="success"
          confirmText="View order"
          alignment="left"
        />

        <AlertModal
          isOpen={modalStates["warning-alert"]}
          onClose={() => closeModal("warning-alert")}
          onConfirm={() => handleConfirm("warning-alert")}
          title="Unsaved changes"
          description="You have unsaved changes. Are you sure you want to leave this page?"
          variant="warning"
          confirmText="Leave page"
          alignment="left"
        />

        <AlertModal
          isOpen={modalStates["error-alert"]}
          onClose={() => closeModal("error-alert")}
          onConfirm={() => handleConfirm("error-alert")}
          title="Delete account"
          description="Are you sure you want to delete your account? This action cannot be undone."
          variant="error"
          confirmText="Delete account"
          alignment="left"
        />

        <AlertModal
          isOpen={modalStates["info-alert"]}
          onClose={() => closeModal("info-alert")}
          onConfirm={() => handleConfirm("info-alert")}
          title="Feature update"
          description="We've updated the dashboard with new features. Check them out now!"
          variant="info"
          confirmText="Explore features"
          alignment="left"
        />
      </section>

      {/* Confirmation Modals */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-ds-gray-900">
          Confirmation Modals
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Button onClick={() => openModal("delete-confirm")}>
            Delete Item
          </Button>
          <Button onClick={() => openModal("leave-confirm")}>Leave Team</Button>
          <Button onClick={() => openModal("checkbox-confirm")}>
            With Checkbox
          </Button>
        </div>

        <ConfirmModal
          isOpen={modalStates["delete-confirm"]}
          onClose={() => closeModal("delete-confirm")}
          onConfirm={() => handleConfirm("delete-confirm")}
          title="Delete project"
          description="Are you sure you want to delete this project? This action cannot be undone and will remove all associated data."
          destructive={true}
          confirmText="Delete project"
          alignment="left"
        />

        <ConfirmModal
          isOpen={modalStates["leave-confirm"]}
          onClose={() => closeModal("leave-confirm")}
          onConfirm={() => handleConfirm("leave-confirm")}
          title="Leave team"
          description="Are you sure you want to leave this team? You'll lose access to all team resources and data."
          confirmText="Leave team"
          alignment="left"
        />

        <ConfirmModal
          isOpen={modalStates["checkbox-confirm"]}
          onClose={() => closeModal("checkbox-confirm")}
          onConfirm={() => handleConfirm("checkbox-confirm")}
          title="Clear all data"
          description="This will permanently delete all your data from our servers. This action cannot be undone."
          destructive={true}
          confirmText="Clear data"
          showCheckbox={true}
          checkboxLabel="I understand this action is permanent"
          alignment="left"
        />
      </section>

      {/* Form Modals */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-ds-gray-900">Form Modals</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Button onClick={() => openModal("invite-modal")}>Invite User</Button>
          <Button onClick={() => openModal("payment-modal")}>
            Add Payment
          </Button>
          <Button onClick={() => openModal("upload-modal")}>Upload File</Button>
        </div>

        <FormModal
          isOpen={modalStates["invite-modal"]}
          onClose={() => closeModal("invite-modal")}
          onSubmit={() => handleConfirm("invite-modal")}
          title="Invite user"
          description="Send an invitation to a new team member"
          icon={UserPlus}
          submitText="Send invitation"
        >
          <div className="space-y-4">
            <div>
              <Label className="mb-2">Email address</Label>
              <Input type="email" placeholder="Enter email address" />
            </div>
            <div>
              <Label className="mb-2">Role</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="member">Member</SelectItem>
                  <SelectItem value="viewer">Viewer</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </FormModal>

        <FormModal
          isOpen={modalStates["payment-modal"]}
          onClose={() => closeModal("payment-modal")}
          onSubmit={() => handleConfirm("payment-modal")}
          title="Add payment method"
          description="Add a new payment method to your account"
          icon={CreditCard}
          submitText="Add payment method"
        >
          <div className="space-y-4">
            <div>
              <Label className="mb-2">Card number</Label>
              <Input type="text" placeholder="1234 5678 9012 3456" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="mb-2">Expiry date</Label>
                <Input type="text" placeholder="MM/YY" />
              </div>
              <div>
                <Label className="mb-2">CVC</Label>
                <Input type="text" placeholder="123" />
              </div>
            </div>
          </div>
        </FormModal>

        <FormModal
          isOpen={modalStates["upload-modal"]}
          onClose={() => closeModal("upload-modal")}
          onSubmit={() => handleConfirm("upload-modal")}
          title="Upload files"
          description="Choose files to upload to your workspace"
          icon={Upload}
          submitText="Upload files"
        >
          <div className="space-y-4">
            <div className="border-2 border-dashed border-ds-gray-300 rounded-lg p-8 text-center">
              <Upload className="h-8 w-8 mx-auto mb-4 text-ds-gray-400" />
              <p className="text-sm text-ds-gray-600 mb-2">
                Drag and drop files here, or click to browse
              </p>
              <Button variant="outline" size="sm">
                Browse files
              </Button>
            </div>
          </div>
        </FormModal>
      </section>

      {/* Custom Modals */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-ds-gray-900">
          Custom Modals
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button onClick={() => openModal("team-modal")}>Team Modal</Button>
          <Button onClick={() => openModal("plan-modal")}>
            Plan Selection
          </Button>
          <Button onClick={() => openModal("verification-modal")}>
            Verification
          </Button>
          <Button onClick={() => openModal("image-modal")}>Image Modal</Button>
        </div>

        {/* Team Modal */}
        <Modal
          open={modalStates["team-modal"]}
          onOpenChange={(open) => {
            if (!open) {
              closeModal("team-modal");
            }
          }}
        >
          <ModalContent size="lg" alignment="left">
            <ModalBody>
              <div className="flex gap-6">
                <ModalIcon variant="info" icon={User} />
                <div className="flex-1 space-y-8">
                  <div className="space-y-2">
                    <ModalTitle>Create team</ModalTitle>
                    <ModalDescription>
                      Invite your team members to collaborate on projects and
                      share resources.
                    </ModalDescription>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label className="mb-2">Team name</Label>
                      <Input type="text" placeholder="Enter team name" />
                    </div>

                    <div>
                      <Label className="mb-2">Team members</Label>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 border border-ds-gray-300 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 bg-ds-brand-100 rounded-full flex items-center justify-center">
                              <span className="text-sm font-medium text-ds-brand-700">
                                JD
                              </span>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-ds-gray-900">
                                John Doe
                              </p>
                              <p className="text-xs text-ds-gray-500">
                                john@example.com
                              </p>
                            </div>
                          </div>
                          <span className="text-xs font-medium text-ds-gray-500 bg-ds-gray-100 px-2 py-1 rounded">
                            Owner
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ModalFooter>
                    <Button
                      variant="outline"
                      onClick={() => closeModal("team-modal")}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={() => handleConfirm("team-modal")}
                      className="flex-1"
                    >
                      Create team
                    </Button>
                  </ModalFooter>
                </div>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>

        {/* Plan Selection Modal */}
        <Modal
          open={modalStates["plan-modal"]}
          onOpenChange={() => closeModal("plan-modal")}
        >
          <ModalContent size="xl" alignment="left">
            <ModalHeader alignment="left">
              <ModalIcon variant="info" icon={Crown} />
              <div className="space-y-2">
                <ModalTitle>Upgrade your plan</ModalTitle>
                <ModalDescription>
                  Choose the perfect plan for your needs. Upgrade or downgrade
                  at any time.
                </ModalDescription>
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="hover:border-ds-brand-600 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Pro</CardTitle>
                      <span className="text-2xl font-bold text-ds-gray-900">
                        $29
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-ds-gray-600">
                      <li>✓ Unlimited projects</li>
                      <li>✓ 10 team members</li>
                      <li>✓ Advanced analytics</li>
                      <li>✓ Priority support</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-2 border-ds-brand-600 bg-ds-brand-50 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Enterprise</CardTitle>
                      <span className="text-2xl font-bold text-ds-gray-900">
                        $99
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-ds-gray-600">
                      <li>✓ Everything in Pro</li>
                      <li>✓ Unlimited team members</li>
                      <li>✓ Custom integrations</li>
                      <li>✓ Dedicated support</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                variant="outline"
                onClick={() => closeModal("plan-modal")}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={() => handleConfirm("plan-modal")}
                className="flex-1"
              >
                Upgrade now
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* Verification Modal */}
        <Modal
          open={modalStates["verification-modal"]}
          onOpenChange={() => closeModal("verification-modal")}
        >
          <ModalContent size="sm" alignment="left">
            <ModalHeader alignment="left">
              <ModalIcon variant="info" icon={Shield} />
              <div className="space-y-2">
                <ModalTitle>Verify your email</ModalTitle>
                <ModalDescription>
                  We've sent a verification code to your email address.
                </ModalDescription>
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="space-y-4">
                <div className="flex gap-2 justify-center">
                  {[...Array(6)].map((_, i) => (
                    <Input
                      key={i}
                      type="text"
                      maxLength={1}
                      className="w-12 h-12 text-center text-lg font-semibold"
                    />
                  ))}
                </div>
                <p className="text-center text-sm text-ds-gray-600">
                  Didn't receive the code?{" "}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0 text-ds-brand-600 hover:underline hover:bg-transparent"
                  >
                    Resend
                  </Button>
                </p>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                variant="outline"
                onClick={() => closeModal("verification-modal")}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={() => handleConfirm("verification-modal")}
                className="flex-1"
              >
                Verify
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* Image Modal */}
        <Modal
          open={modalStates["image-modal"]}
          onOpenChange={() => closeModal("image-modal")}
        >
          <ModalContent size="lg" alignment="left">
            <ModalHeader alignment="left">
              <ModalIcon variant="info" icon={Image} />
              <div className="space-y-2">
                <ModalTitle>Choose profile image</ModalTitle>
                <ModalDescription>
                  Select an image or upload your own to customize your profile.
                </ModalDescription>
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="grid grid-cols-4 gap-4">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-ds-gray-100 rounded-lg flex items-center justify-center hover:bg-ds-gray-200 cursor-pointer transition-colors"
                  >
                    <Image className="h-8 w-8 text-ds-gray-400" />
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Button variant="outline" size="sm">
                  Upload custom image
                </Button>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                variant="outline"
                onClick={() => closeModal("image-modal")}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={() => handleConfirm("image-modal")}
                className="flex-1"
              >
                Save image
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </section>

      {/* Size Variants */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-ds-gray-900">
          Size Variants
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <Button onClick={() => openModal("size-sm")}>Small (400px)</Button>
          <Button onClick={() => openModal("size-default")}>
            Default (400px)
          </Button>
          <Button onClick={() => openModal("size-md")}>Medium (480px)</Button>
          <Button onClick={() => openModal("size-lg")}>Large (512px)</Button>
          <Button onClick={() => openModal("size-xl")}>XL (544px)</Button>
        </div>

        {["sm", "default", "md", "lg", "xl"].map((size) => (
          <Modal
            key={size}
            open={modalStates[`size-${size}`]}
            onOpenChange={() => closeModal(`size-${size}`)}
          >
            <ModalContent size={size as any} alignment="left">
              <ModalHeader alignment="left">
                <ModalIcon variant="info" icon={Settings} />
                <div className="space-y-2">
                  <ModalTitle>{size.toUpperCase()} Modal Size</ModalTitle>
                  <ModalDescription>
                    This modal demonstrates the {size} size variant with proper
                    spacing and layout.
                  </ModalDescription>
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="text-left text-sm text-ds-gray-600">
                  <p>
                    Max width:{" "}
                    {size === "sm" || size === "default"
                      ? "400px"
                      : size === "md"
                        ? "480px"
                        : size === "lg"
                          ? "512px"
                          : "544px"}
                  </p>
                  <p>Padding: 24px</p>
                  <p>Gap between sections: 32px</p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  variant="outline"
                  onClick={() => closeModal(`size-${size}`)}
                  className="flex-1"
                >
                  Close
                </Button>
                <Button
                  onClick={() => handleConfirm(`size-${size}`)}
                  className="flex-1"
                >
                  Confirm
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        ))}
      </section>
    </div>
  );
};

export default ModalShowcase;
