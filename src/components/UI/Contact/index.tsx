'use client';
import { useState } from 'react';
import {
  Wrapper,
  Inner,
  Header,
  Content,
  ContactInfo,
  ContactItem,
  ContactTitle,
  ContactValue,
  ContactDescription,
  FormContainer,
  Form,
  FormRow,
  FormGroup,
  Label,
  Input,
  Select,
  TextArea,
  SubmitButton,
  SuccessMessage,
  ErrorMessage,
} from './styles';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  mobileHeaderPhrase,
  mobileParagraphPhrase,
  contactInfo,
  formFields,
} from './constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const isMobile = useIsMobile();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Wrapper id="contact">
      <Inner>
        <Header>
          {isMobile ? (
            <>
              <MaskText phrases={mobileHeaderPhrase} tag="h1" />
              <MaskText phrases={mobileParagraphPhrase} tag="p" />
            </>
          ) : (
            <>
              <MaskText phrases={desktopHeaderPhrase} tag="h1" />
              <MaskText phrases={desktopParagraphPhrase} tag="p" />
            </>
          )}
        </Header>

        <Content>
          <ContactInfo>
            <h3>Contact Information</h3>
            {contactInfo.map((info, index) => (
              <ContactItem key={index}>
                <ContactTitle>{info.title}</ContactTitle>
                <ContactValue>{info.value}</ContactValue>
                <ContactDescription>{info.description}</ContactDescription>
              </ContactItem>
            ))}
          </ContactInfo>

          <FormContainer>
            <Form onSubmit={handleSubmit}>
              {submitStatus === 'success' && (
                <SuccessMessage>
                  Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                </SuccessMessage>
              )}
              
              {submitStatus === 'error' && (
                <ErrorMessage>
                  Sorry, there was an error sending your message. Please try again.
                </ErrorMessage>
              )}

              <FormRow>
                {formFields.slice(0, 2).map((field) => (
                  <FormGroup key={field.name}>
                    <Label htmlFor={field.name}>
                      {field.label} {field.required && '*'}
                    </Label>
                    {field.type === 'select' ? (
                      <Select
                        id={field.name}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleInputChange}
                        required={field.required}
                      >
                        <option value="">{field.placeholder}</option>
                        {field.options?.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </Select>
                    ) : (
                      <Input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleInputChange}
                        placeholder={field.placeholder}
                        required={field.required}
                      />
                    )}
                  </FormGroup>
                ))}
              </FormRow>

              <FormRow>
                {formFields.slice(2, 4).map((field) => (
                  <FormGroup key={field.name}>
                    <Label htmlFor={field.name}>
                      {field.label} {field.required && '*'}
                    </Label>
                    {field.type === 'select' ? (
                      <Select
                        id={field.name}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleInputChange}
                        required={field.required}
                      >
                        <option value="">{field.placeholder}</option>
                        {field.options?.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </Select>
                    ) : (
                      <Input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleInputChange}
                        placeholder={field.placeholder}
                        required={field.required}
                      />
                    )}
                  </FormGroup>
                ))}
              </FormRow>

              <FormRow>
                {formFields.slice(4, 6).map((field) => (
                  <FormGroup key={field.name}>
                    <Label htmlFor={field.name}>
                      {field.label} {field.required && '*'}
                    </Label>
                    {field.type === 'select' ? (
                      <Select
                        id={field.name}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleInputChange}
                        required={field.required}
                      >
                        <option value="">{field.placeholder}</option>
                        {field.options?.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </Select>
                    ) : (
                      <Input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleInputChange}
                        placeholder={field.placeholder}
                        required={field.required}
                      />
                    )}
                  </FormGroup>
                ))}
              </FormRow>

              <FormGroup>
                <Label htmlFor="message">
                  Project Details 
                </Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                />
              </FormGroup>

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </SubmitButton>
            </Form>
          </FormContainer>
        </Content>
      </Inner>
    </Wrapper>
  );
};

export default Contact;
