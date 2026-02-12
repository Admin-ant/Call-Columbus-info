const sgMail = require('@sendgrid/mail');

// SendGrid API Key instellen
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// E-mail template
const getEmailContent = (recipientName) => {
  const name = recipientName || 'Relatie';
  
  return {
    subject: 'Informatie over AI Nexus Telecom - Uw Telecom & AI Partner',
    
    text: `
Beste ${name},

Hartelijk dank voor uw interesse in AI Nexus Telecom!

Zoals besproken stuur ik u graag meer informatie over onze diensten en oplossingen.

ONZE DIENSTEN
-------------
AI Nexus Telecom is een wereldwijde organisatie die innovatieve telecom- en AI-oplossingen biedt:

🔹 Telecomoplossingen - ainexustelecom.nl
   Moderne telecominfrastructuur en diensten

🔹 CRM-tools - ainexuscrm.nl
   Klantenrelatiebeheersystemen op maat

🔹 Cloud-diensten - ainexuscloud.nl
   Schaalbare en veilige cloudoplossingen

🔹 Webontwikkeling - ainexusweb.nl
   Professionele webapplicaties en websites

🔹 Portaal-toegang - ainexusportal.nl
   Gecentraliseerde portaaloplossingen

ONZE INNOVATIE: AI GESLACHTSANALYSE EN -IDENTIFICATIE
------------------------------------------------------
Een van onze meest innovatieve projecten is onze AI-oplossing voor genderdetectie.

AFSPRAAK MAKEN
--------------
Wilt u graag meer weten of een vrijblijvend gesprek plannen?
Maak direct een afspraak via: https://calendly.com/ainexus-contact/30min

Met vriendelijke groet,

Inge Visser
AI Nexus Telecom
+31 6 39 29 13 40
    `,
    
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    h1 { color: #0066cc; border-bottom: 2px solid #0066cc; padding-bottom: 10px; }
    h2 { color: #0066cc; margin-top: 25px; }
    .service { margin: 15px 0; padding: 10px; background: #f5f5f5; border-left: 4px solid #0066cc; }
    .service-title { font-weight: bold; color: #0066cc; }
    .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; }
    a { color: #0066cc; text-decoration: none; }
    .button { display: inline-block; padding: 12px 24px; background: #0066cc; color: white !important; text-decoration: none; border-radius: 5px; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <h1>AI Nexus Telecom</h1>
    
    <p>Beste ${name},</p>
    
    <p>Hartelijk dank voor uw interesse in AI Nexus Telecom!</p>
    
    <p>Zoals besproken stuur ik u graag meer informatie over onze diensten en oplossingen.</p>
    
    <h2>Onze Diensten</h2>
    
    <div class="service">
      <div class="service-title">🔹 Telecomoplossingen</div>
      <div>Moderne telecominfrastructuur en diensten</div>
      <div><a href="https://ainexustelecom.nl">ainexustelecom.nl</a></div>
    </div>
    
    <div class="service">
      <div class="service-title">🔹 CRM-tools</div>
      <div>Klantenrelatiebeheersystemen op maat</div>
      <div><a href="https://ainexuscrm.nl">ainexuscrm.nl</a></div>
    </div>
    
    <div class="service">
      <div class="service-title">🔹 Cloud-diensten</div>
      <div>Schaalbare en veilige cloudoplossingen</div>
      <div><a href="https://ainexuscloud.nl">ainexuscloud.nl</a></div>
    </div>
    
    <div class="service">
      <div class="service-title">🔹 Webontwikkeling</div>
      <div>Professionele webapplicaties en websites</div>
      <div><a href="https://ainexusweb.nl">ainexusweb.nl</a></div>
    </div>
    
    <div class="service">
      <div class="service-title">🔹 Portaal-toegang</div>
      <div>Gecentraliseerde portaaloplossingen</div>
      <div><a href="https://ainexusportal.nl">ainexusportal.nl</a></div>
    </div>
    
    <h2>Onze Innovatie: AI Geslachtsanalyse</h2>
    
    <p>Een van onze meest innovatieve projecten is onze AI-oplossing voor genderdetectie, ontwikkeld om de genderkloof in toegang en gebruik van mobiele telefoons te verkleinen.</p>
    
    <p><strong>De Technologie:</strong><br>
    Docker, Node.js, React, Python, Machine Learning (Scikit-learn, LightGBM, XGBoost)</p>
    
    <h2>Afspraak Maken</h2>
    
    <p>Wilt u graag meer weten of een vrijblijvend gesprek plannen?</p>
    
    <a href="https://calendly.com/ainexus-contact/30min" class="button">Maak een Afspraak</a>
    
    <div class="footer">
      <p><strong>Met vriendelijke groet,</strong></p>
      <p>
        <strong>Inge Visser</strong><br>
        AI Nexus Telecom<br>
        +31 6 39 29 13 40
      </p>
      
      <p style="font-size: 12px; color: #666; margin-top: 20px;">
        Voor meer informatie:<br>
        <a href="https://ainexustelecom.nl">ainexustelecom.nl</a> | 
        <a href="https://ainexuscrm.nl">ainexuscrm.nl</a> | 
        <a href="https://ainexuscloud.nl">ainexuscloud.nl</a>
      </p>
    </div>
  </div>
</body>
</html>
    `
  };
};

// Main handler voor Vercel
module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle OPTIONS voor CORS
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const { function_name, parameters } = req.body || {};
    
    // Check welke functie wordt aangeroepen
    if (function_name === 'send_company_info_email') {
      const { recipient_email, recipient_name } = parameters || {};
      
      // Valideer e-mailadres
      if (!recipient_email || !recipient_email.includes('@')) {
        return res.status(400).json({
          success: false,
          error: 'Ongeldig e-mailadres'
        });
      }
      
      // Haal e-mail content op
      const emailContent = getEmailContent(recipient_name);
      
      // Verstuur e-mail via SendGrid
      const msg = {
        to: recipient_email,
        from: {
          email: 'info@ainexus.nl',
          name: 'Inge Visser - AI Nexus Telecom'
        },
        subject: emailContent.subject,
        text: emailContent.text,
        html: emailContent.html,
        trackingSettings: {
          clickTracking: { enable: true },
          openTracking: { enable: true }
        }
      };
      
      await sgMail.send(msg);
      
      console.log(`E-mail succesvol verstuurd naar: ${recipient_email}`);
      
      return res.status(200).json({
        success: true,
        message: `E-mail succesvol verstuurd naar ${recipient_email}`,
        recipient: recipient_email
      });
    }
    
    // Onbekende functie
    return res.status(400).json({
      success: false,
      error: `Onbekende functie: ${function_name}`
    });
    
  } catch (error) {
    console.error('Webhook error:', error);
    
    return res.status(500).json({
      success: false,
      error: 'Er is een fout opgetreden bij het versturen van de e-mail',
      details: error.message
    });
  }
};
