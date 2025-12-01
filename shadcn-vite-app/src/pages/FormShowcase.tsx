import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mail,
  Lock,
  User,
  Phone,
  DollarSign,
  HelpCircle,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

export default function FormShowcase() {
  const [email, setEmail] = useState("");
  const [hasError, setHasError] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("free");

  const validateEmail = (value: string) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setHasError(!isValid && value.length > 0);
  };

  return (
    <div className="p-8 md:p-12">
      <div className="mx-auto max-w-7xl space-y-12 md:space-y-16">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-ds-gray-900 md:text-5xl">
            Form Components
          </h1>
          <p className="text-lg text-ds-gray-600">
            Comprehensive form elements following Figma design specifications
          </p>
        </div>

        {/* Input & Select Sizes */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-ds-gray-900">
              Input & Select Sizes
            </h2>
            <p className="mt-1 text-sm text-ds-gray-600">
              Four consistent sizes across input and select components (sm:
              36px, default: 40px, lg: 44px, xl: 48px)
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:gap-10 lg:gap-12 lg:grid-cols-2">
            {/* Input Sizes */}
            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Input Sizes
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="input-sm">Small (36px)</Label>
                  <Input
                    id="input-sm"
                    size="sm"
                    type="email"
                    placeholder="Small input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="input-default">Default (40px)</Label>
                  <Input
                    id="input-default"
                    size="default"
                    type="email"
                    placeholder="Default input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="input-lg">Large (44px)</Label>
                  <Input
                    id="input-lg"
                    size="lg"
                    type="email"
                    placeholder="Large input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="input-xl">Extra Large (48px)</Label>
                  <Input
                    id="input-xl"
                    size="xl"
                    type="email"
                    placeholder="Extra large input"
                  />
                </div>
              </div>
            </div>

            {/* Select Sizes */}
            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Select Sizes
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="select-sm">Small (36px)</Label>
                  <Select>
                    <SelectTrigger id="select-sm" size="sm">
                      <SelectValue placeholder="Small select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Option 1</SelectItem>
                      <SelectItem value="2">Option 2</SelectItem>
                      <SelectItem value="3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="select-default">Default (40px)</Label>
                  <Select>
                    <SelectTrigger id="select-default" size="default">
                      <SelectValue placeholder="Default select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Option 1</SelectItem>
                      <SelectItem value="2">Option 2</SelectItem>
                      <SelectItem value="3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="select-lg">Large (44px)</Label>
                  <Select>
                    <SelectTrigger id="select-lg" size="lg">
                      <SelectValue placeholder="Large select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Option 1</SelectItem>
                      <SelectItem value="2">Option 2</SelectItem>
                      <SelectItem value="3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="select-xl">Extra Large (48px)</Label>
                  <Select>
                    <SelectTrigger id="select-xl" size="xl">
                      <SelectValue placeholder="Extra large select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Option 1</SelectItem>
                      <SelectItem value="2">Option 2</SelectItem>
                      <SelectItem value="3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Input Fields */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-ds-gray-900">
              Input Fields
            </h2>
            <p className="mt-1 text-sm text-ds-gray-600">
              Text inputs with various states and configurations
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:gap-10 lg:gap-12 lg:grid-cols-2">
            {/* Basic Input */}
            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Basic Input
              </h3>
              <div className="space-y-2">
                <Label htmlFor="email-basic">Email</Label>
                <Input
                  id="email-basic"
                  type="email"
                  placeholder="olivia@untitledui.com"
                />
                <p className="text-sm text-ds-gray-600">
                  This is a hint text to help user.
                </p>
              </div>
            </div>

            {/* Input with Icon */}
            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Input with Icon
              </h3>
              <div className="space-y-2">
                <Label htmlFor="email-icon">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 size-5 -translate-y-1/2 text-ds-gray-500" />
                  <Input
                    id="email-icon"
                    type="email"
                    placeholder="olivia@untitledui.com"
                    className="pl-10"
                  />
                  <HelpCircle className="absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-ds-gray-400" />
                </div>
                <p className="text-sm text-ds-gray-600">
                  This is a hint text to help user.
                </p>
              </div>
            </div>

            {/* Error State */}
            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Error State
              </h3>
              <div className="space-y-2">
                <Label htmlFor="email-error">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 size-5 -translate-y-1/2 text-ds-gray-500" />
                  <Input
                    id="email-error"
                    type="email"
                    placeholder="olivia@untitledui.com"
                    className="pl-10 pr-10"
                    aria-invalid="true"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      validateEmail(e.target.value);
                    }}
                  />
                  {hasError && (
                    <AlertCircle className="absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-ds-error-500" />
                  )}
                </div>
                {hasError && (
                  <p className="text-sm text-ds-error-500">
                    This is an error message.
                  </p>
                )}
              </div>
            </div>

            {/* Disabled State */}
            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Disabled State
              </h3>
              <div className="space-y-2">
                <Label htmlFor="email-disabled">Email</Label>
                <Input
                  id="email-disabled"
                  type="email"
                  placeholder="olivia@untitledui.com"
                  disabled
                />
                <p className="text-sm text-ds-gray-600">
                  This field is currently disabled.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Input Variants */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-ds-gray-900">
              Input Variants
            </h2>
            <p className="mt-1 text-sm text-ds-gray-600">
              Different input types and configurations
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:gap-10 lg:gap-12 lg:grid-cols-2">
            {/* Phone Input */}
            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Phone Number
              </h3>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone number</Label>
                <div className="flex gap-2">
                  <div className="relative shrink-0">
                    <Input id="country" value="US" className="w-20" readOnly />
                  </div>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="flex-1"
                  />
                </div>
                <p className="text-sm text-ds-gray-600">
                  This is a hint text to help user.
                </p>
              </div>
            </div>

            {/* Amount Input */}
            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Sale Amount
              </h3>
              <div className="space-y-2">
                <Label htmlFor="amount">Sale amount</Label>
                <div className="flex gap-2">
                  <div className="relative shrink-0">
                    <DollarSign className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-ds-gray-500" />
                    <Input value="$" className="w-16 pl-8" readOnly />
                  </div>
                  <Input
                    id="amount"
                    type="text"
                    placeholder="1,000.00"
                    className="flex-1"
                  />
                  <div className="relative shrink-0">
                    <Input value="USD" className="w-20" readOnly />
                  </div>
                </div>
                <p className="text-sm text-ds-gray-600">
                  This is a hint text to help user.
                </p>
              </div>
            </div>

            {/* Website Input */}
            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Website URL
              </h3>
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <div className="flex gap-2">
                  <div className="relative shrink-0">
                    <Input value="http://" className="w-24" readOnly />
                  </div>
                  <Input
                    id="website"
                    type="url"
                    placeholder="www.untitledui.com"
                    className="flex-1"
                  />
                </div>
                <p className="text-sm text-ds-gray-600">
                  This is a hint text to help user.
                </p>
              </div>
            </div>

            {/* Password Input */}
            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Password Field
              </h3>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 size-5 -translate-y-1/2 text-ds-gray-500" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10"
                  />
                </div>
                <p className="text-sm text-ds-gray-600">
                  Must be at least 8 characters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Textarea */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-ds-gray-900">
              Textarea
            </h2>
            <p className="mt-1 text-sm text-ds-gray-600">
              Multi-line text input for longer content
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:gap-10 lg:gap-12 lg:grid-cols-2">
            {/* Basic Textarea */}
            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Basic Textarea
              </h3>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter a description..."
                />
                <p className="text-sm text-ds-gray-600">
                  This is a hint text to help user.
                </p>
              </div>
            </div>

            {/* Error Textarea */}
            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Textarea with Error
              </h3>
              <div className="space-y-2">
                <Label htmlFor="description-error">Description</Label>
                <Textarea
                  id="description-error"
                  placeholder="Enter a description..."
                  aria-invalid="true"
                />
                <p className="text-sm text-ds-error-500">
                  This is an error message.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Checkboxes */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-ds-gray-900">
              Checkboxes
            </h2>
            <p className="mt-1 text-sm text-ds-gray-600">
              Binary choices with various states
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:gap-10 lg:gap-12 lg:grid-cols-2">
            {/* Checkbox States */}
            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Checkbox States
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Checkbox id="unchecked" />
                  <Label htmlFor="unchecked" className="cursor-pointer">
                    Unchecked
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="checked" checked />
                  <Label htmlFor="checked" className="cursor-pointer">
                    Checked
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="disabled" disabled />
                  <Label htmlFor="disabled" className="cursor-not-allowed">
                    Disabled
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="disabled-checked" checked disabled />
                  <Label
                    htmlFor="disabled-checked"
                    className="cursor-not-allowed"
                  >
                    Disabled & Checked
                  </Label>
                </div>
              </div>
            </div>

            {/* Checkbox with Description */}
            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Checkbox with Description
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Checkbox
                    id="terms"
                    checked={agreedToTerms}
                    onCheckedChange={(checked) =>
                      setAgreedToTerms(checked as boolean)
                    }
                  />
                  <div className="space-y-0.5">
                    <Label htmlFor="terms" className="cursor-pointer">
                      I agree to the terms and conditions
                    </Label>
                    <p className="text-sm text-ds-gray-600">
                      By checking this box, you agree to our Terms of Service
                      and Privacy Policy.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Checkbox
                    id="newsletter"
                    checked={newsletter}
                    onCheckedChange={(checked) =>
                      setNewsletter(checked as boolean)
                    }
                  />
                  <div className="space-y-0.5">
                    <Label htmlFor="newsletter" className="cursor-pointer">
                      Subscribe to newsletter
                    </Label>
                    <p className="text-sm text-ds-gray-600">
                      Get weekly updates about new features and improvements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Radio Buttons */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-ds-gray-900">
              Radio Buttons
            </h2>
            <p className="mt-1 text-sm text-ds-gray-600">
              Single-choice selection from multiple options
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:gap-10 lg:gap-12 lg:grid-cols-2">
            {/* Basic Radio Group */}
            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Radio Group
              </h3>
              <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan}>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="free" id="free" />
                  <Label htmlFor="free" className="cursor-pointer">
                    Free Plan
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="pro" id="pro" />
                  <Label htmlFor="pro" className="cursor-pointer">
                    Pro Plan
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="enterprise" id="enterprise" />
                  <Label htmlFor="enterprise" className="cursor-pointer">
                    Enterprise Plan
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Radio with Descriptions */}
            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-ds-gray-700">
                Radio with Descriptions
              </h3>
              <RadioGroup defaultValue="option1">
                <div className="flex gap-3">
                  <RadioGroupItem value="option1" id="option1" />
                  <div className="space-y-0.5">
                    <Label htmlFor="option1" className="cursor-pointer">
                      Option 1
                    </Label>
                    <p className="text-sm text-ds-gray-600">
                      This is the first option with a description.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <RadioGroupItem value="option2" id="option2" />
                  <div className="space-y-0.5">
                    <Label htmlFor="option2" className="cursor-pointer">
                      Option 2
                    </Label>
                    <p className="text-sm text-ds-gray-600">
                      This is the second option with a description.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <RadioGroupItem value="option3" id="option3" />
                  <div className="space-y-0.5">
                    <Label htmlFor="option3" className="cursor-pointer">
                      Option 3
                    </Label>
                    <p className="text-sm text-ds-gray-600">
                      This is the third option with a description.
                    </p>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>
        </section>

        {/* Complete Form Example */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-ds-gray-900">
              Complete Form Example
            </h2>
            <p className="mt-1 text-sm text-ds-gray-600">
              All form elements combined in a practical example
            </p>
          </div>
          <div className="rounded-xl border border-ds-gray-200 bg-white p-8 shadow-sm">
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Form submitted!");
              }}
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 size-5 -translate-y-1/2 text-ds-gray-500" />
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 size-5 -translate-y-1/2 text-ds-gray-500" />
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email-form">Email address</Label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 size-5 -translate-y-1/2 text-ds-gray-500" />
                  <Input
                    id="email-form"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone-form">Phone number</Label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 size-5 -translate-y-1/2 text-ds-gray-500" />
                  <Input
                    id="phone-form"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={4}
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Checkbox id="terms-form" required />
                  <div className="space-y-0.5">
                    <Label htmlFor="terms-form" className="cursor-pointer">
                      I agree to the terms and conditions
                    </Label>
                    <p className="text-sm text-ds-gray-600">
                      You must agree before submitting.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button type="button" variant="outline">
                  Cancel
                </Button>
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </div>
        </section>

        {/* Design Specifications */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-ds-gray-900">
              Design Specifications
            </h2>
            <p className="mt-1 text-sm text-ds-gray-600">
              Technical details and implementation notes
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-ds-gray-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-ds-gray-50 text-xs uppercase text-ds-gray-700">
                  <tr>
                    <th className="px-6 py-4">Component</th>
                    <th className="px-6 py-4">Height</th>
                    <th className="px-6 py-4">Padding</th>
                    <th className="px-6 py-4">Border Radius</th>
                    <th className="px-6 py-4">Border</th>
                    <th className="px-6 py-4">Font Size</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ds-gray-200">
                  <tr className="hover:bg-ds-gray-25">
                    <td className="px-6 py-4 font-medium text-ds-gray-900">
                      Input
                    </td>
                    <td className="px-6 py-4 text-ds-gray-700">
                      36px / 40px / 44px / 48px
                    </td>
                    <td className="px-6 py-4 text-ds-gray-700">
                      Varies by size (12-16px horizontal, 8-12px vertical)
                    </td>
                    <td className="px-6 py-4 text-ds-gray-700">8px</td>
                    <td className="px-6 py-4 text-ds-gray-700">1px Gray/300</td>
                    <td className="px-6 py-4 text-ds-gray-700">14px / 16px</td>
                  </tr>
                  <tr className="hover:bg-ds-gray-25">
                    <td className="px-6 py-4 font-medium text-ds-gray-900">
                      Select
                    </td>
                    <td className="px-6 py-4 text-ds-gray-700">
                      36px / 40px / 44px / 48px
                    </td>
                    <td className="px-6 py-4 text-ds-gray-700">
                      Varies by size (12-16px horizontal, 8-12px vertical)
                    </td>
                    <td className="px-6 py-4 text-ds-gray-700">8px</td>
                    <td className="px-6 py-4 text-ds-gray-700">1px Gray/300</td>
                    <td className="px-6 py-4 text-ds-gray-700">14px / 16px</td>
                  </tr>
                  <tr className="hover:bg-ds-gray-25">
                    <td className="px-6 py-4 font-medium text-ds-gray-900">
                      Textarea
                    </td>
                    <td className="px-6 py-4 text-ds-gray-700">120px min</td>
                    <td className="px-6 py-4 text-ds-gray-700">
                      14px horizontal, 10px vertical
                    </td>
                    <td className="px-6 py-4 text-ds-gray-700">8px</td>
                    <td className="px-6 py-4 text-ds-gray-700">1px Gray/300</td>
                    <td className="px-6 py-4 text-ds-gray-700">16px</td>
                  </tr>
                  <tr className="hover:bg-ds-gray-25">
                    <td className="px-6 py-4 font-medium text-ds-gray-900">
                      Checkbox
                    </td>
                    <td className="px-6 py-4 text-ds-gray-700">16px</td>
                    <td className="px-6 py-4 text-ds-gray-700">-</td>
                    <td className="px-6 py-4 text-ds-gray-700">4px</td>
                    <td className="px-6 py-4 text-ds-gray-700">1px Gray/300</td>
                    <td className="px-6 py-4 text-ds-gray-700">-</td>
                  </tr>
                  <tr className="hover:bg-ds-gray-25">
                    <td className="px-6 py-4 font-medium text-ds-gray-900">
                      Radio
                    </td>
                    <td className="px-6 py-4 text-ds-gray-700">16px</td>
                    <td className="px-6 py-4 text-ds-gray-700">-</td>
                    <td className="px-6 py-4 text-ds-gray-700">Full</td>
                    <td className="px-6 py-4 text-ds-gray-700">1px Gray/300</td>
                    <td className="px-6 py-4 text-ds-gray-700">-</td>
                  </tr>
                  <tr className="hover:bg-ds-gray-25">
                    <td className="px-6 py-4 font-medium text-ds-gray-900">
                      Label
                    </td>
                    <td className="px-6 py-4 text-ds-gray-700">Auto</td>
                    <td className="px-6 py-4 text-ds-gray-700">-</td>
                    <td className="px-6 py-4 text-ds-gray-700">-</td>
                    <td className="px-6 py-4 text-ds-gray-700">-</td>
                    <td className="px-6 py-4 text-ds-gray-700">14px</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-base font-semibold text-ds-gray-900">
                Focus States
              </h3>
              <ul className="space-y-2 text-sm text-ds-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 shrink-0 text-ds-success-500 mt-0.5" />
                  <span>
                    <strong>Ring:</strong> 4px Brand/100 ring
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 shrink-0 text-ds-success-500 mt-0.5" />
                  <span>
                    <strong>Border:</strong> Brand/300
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 shrink-0 text-ds-success-500 mt-0.5" />
                  <span>
                    <strong>Transition:</strong> Smooth color transitions
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-ds-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-base font-semibold text-ds-gray-900">
                Error States
              </h3>
              <ul className="space-y-2 text-sm text-ds-gray-700">
                <li className="flex items-start gap-2">
                  <AlertCircle className="size-4 shrink-0 text-ds-error-500 mt-0.5" />
                  <span>
                    <strong>Border:</strong> Error/300
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="size-4 shrink-0 text-ds-error-500 mt-0.5" />
                  <span>
                    <strong>Text:</strong> Error/500 for messages
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="size-4 shrink-0 text-ds-error-500 mt-0.5" />
                  <span>
                    <strong>Icon:</strong> Alert circle in Error/500
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
