import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  // Lembre-se: styleUrl removido pois estamos usando styles.css global
})
export class AppComponent {
  title = 'parceria-digicert';

  // Cards principais (já existentes)
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
}