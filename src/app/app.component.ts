import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from './translation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  translationService = inject(TranslationService);
  t = this.translationService.t;

  title = 'parceria-digicert';

  languages = [
    { code: 'PT', flagUrl: 'https://flagcdn.com/w40/br.png', name: 'Português' },
    { code: 'EN', flagUrl: 'https://flagcdn.com/w40/us.png', name: 'English' },
    { code: 'ES', flagUrl: 'https://flagcdn.com/w40/es.png', name: 'Español' }
  ];

  currentLang = this.languages[0];
  isLangMenuOpen = false;

  toggleLangMenu() {
    this.isLangMenuOpen = !this.isLangMenuOpen;
  }

setLanguage(lang: any) {
    this.currentLang = lang;
    this.isLangMenuOpen = false;
    this.translationService.setLanguage(lang.code);
  }

  isModalOpen = false;

  formData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: ''
  };

  solutions = [
    {
      title: 'Certificados Code Signing',
      icon: '🔐',
      description: 'Garanta a integridade do seu software. Assine executáveis e scripts para evitar alertas de segurança.',
      link: '#code-signing'
    },
    {
      title: 'Certificados SSL/TLS',
      icon: '🛡️',
      description: 'Criptografia robusta para sites e servidores. Do DV básico ao EV para máxima confiança.',
      link: '#ssl-tls'
    },
    {
      title: 'Document Signing',
      icon: '✍️',
      description: 'Assinaturas digitais juridicamente vinculativas para PDFs e documentos corporativos.',
      link: '#doc-signing'
    }
  ];

  products = [
    { category: 'SSL/TLS', name: 'Single Domain', description: 'Proteção padrão para um único domínio (FQDN).' },
    { category: 'SSL/TLS', name: 'Multi Domain (SAN)', description: 'Proteja múltiplos domínios e subdomínios em um único certificado.' },
    { category: 'SSL/TLS', name: 'Wildcard Domain', description: 'Segurança ilimitada para um domínio e todos os seus subdomínios (*.site.com).' },
    { category: 'Assinatura', name: 'Code Signing', description: 'Assinatura digital para desenvolvedores de software e drivers.' },
    { category: 'Assinatura', name: 'Document Signing', description: 'Assinatura confiável para Adobe PDF, Microsoft Office e DocuSign.' },
    { category: 'E-mail', name: 'S/MIME Email', description: 'Criptografia ponta-a-ponta e identidade verificada para comunicações.' },
    { category: 'Identidade', name: 'Mark Certificates (VMC)', description: 'Exiba seu logotipo verificado no e-mail do cliente (Padrão BIMI).' }
  ];

  scrollToSolutions() {
    const element = document.getElementById('solutions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openModal(interestContext: string = 'Geral') {
    this.formData.interest = interestContext;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  submitForm() {
    const subject = `Cotação All4Sec (${this.currentLang.code}): ${this.formData.interest}`;
    const body = `
      Olá! Gostaria de realizar uma cotação.
      Idioma: ${this.currentLang.name}
      ----------------
      Nome: ${this.formData.name}
      Empresa: ${this.formData.company}
      E-mail: ${this.formData.email}
      Telefone: ${this.formData.phone}
      Interesse: ${this.formData.interest}
      `;

      const mailtoLink = `mailto:apricio@all4sec.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
      this.closeModal();
      alert('Seu cliente de e-mail foi aberto para finalizar o envio!');
  }
}