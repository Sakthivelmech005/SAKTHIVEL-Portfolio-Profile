const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const outputPath = path.resolve(__dirname, '../public/resume.pdf');
const document = new PDFDocument({ size: 'A4', margins: { top: 42, right: 46, bottom: 42, left: 46 } });
const output = fs.createWriteStream(outputPath);
const accent = '#087E9B';
const ink = '#18232D';
const muted = '#52616B';

document.pipe(output);

function addSection(title) {
  document.moveDown(0.7);
  document.fillColor(accent).font('Helvetica-Bold').fontSize(10).text(title.toUpperCase());
  document.moveDown(0.25);
  document.moveTo(document.page.margins.left, document.y)
    .lineTo(document.page.width - document.page.margins.right, document.y)
    .lineWidth(0.6)
    .strokeColor('#C7D5DB')
    .stroke();
  document.moveDown(0.4);
}

function addEntry(title, subtitle, description) {
  document.fillColor(ink).font('Helvetica-Bold').fontSize(9.5).text(title, { continued: true });
  document.fillColor(muted).font('Helvetica').fontSize(8.5).text(`  |  ${subtitle}`);
  if (description) {
    document.fillColor(ink).font('Helvetica').fontSize(8.7).text(description, { indent: 8, paragraphGap: 2 });
  }
  document.moveDown(0.35);
}

function addSkill(label, content) {
  document.fillColor(ink).font('Helvetica-Bold').fontSize(8.7).text(label, { continued: true });
  document.fillColor(muted).font('Helvetica').text(`  ${content}`, { paragraphGap: 3 });
}

function addBullet(text) {
  document.fillColor(ink).font('Helvetica').fontSize(8.7).text(`- ${text}`, {
    indent: 8,
    paragraphGap: 3,
  });
}

document.fillColor(ink).font('Helvetica-Bold').fontSize(24).text('SAKTHIVEL S');
document.moveDown(0.15);
document.fillColor(accent).font('Helvetica-Bold').fontSize(10).text(
  'MECHANICAL ENGINEERING | CAD DESIGN | PRODUCT DEVELOPMENT',
);
document.moveDown(0.5);
document.fillColor(muted).font('Helvetica').fontSize(8.7).text(
  '+91 90 800 39 122  |  sakthiveldesigner05@gmail.com  |  Hosur, Tamil Nadu, India',
);
document.text('Portfolio: https://sakthiveldesigner.vercel.app/');

addSection('Professional Summary');
document.fillColor(ink).font('Helvetica').fontSize(9).text(
  'Mechanical Engineering undergraduate specializing in CAD modelling, product design, and manufacturing engineering. Proficient in CATIA V5, SolidWorks, AutoCAD, and 3DEXPERIENCE for design and engineering analysis. Experienced in multidisciplinary projects involving robotic welding, electric mobility, hydrogen production, and AI applications. AICTE Innovation Student Ambassador and Best Research Paper Award recipient, passionate about innovative engineering solutions.',
  { lineGap: 2 },
);

addSection('Education');
addEntry('B.E. Mechanical Engineering', 'Anna University | 2027', 'Er. Perumal Manimekalai College of Engineering, Hosur | CGPA: 7.5');
addEntry('HSC (XII)', 'Tamil Nadu State Board | 2023', 'Govt. Hr. Sec. School, Panjappalli, Dharmapuri | 61%');
addEntry('SSLC (X)', 'Tamil Nadu State Board | 2021', 'Govt. Hr. School, D. Rathinagiri, Dhadikal, Krishnagiri | All Pass');

addSection('Technical Skills');
addSkill('CAD', 'CATIA V5 (Part Design, Generative Shape Design, Assembly Design, Drafting), SolidWorks, AutoCAD, 3DEXPERIENCE.');
addSkill('Engineering', 'Engineering drawings, GD&T fundamentals, component design, material selection, DFM/DFA, basic FEA.');
addSkill('Manufacturing', 'Machining, welding, casting, forging, automation fundamentals.');
addSkill('Digital', 'MS Excel, PowerPoint, technical documentation; exposure to AI workflow automation and computer vision.');

addSection('Selected Academic Projects');
addEntry('Automated Multi-Process Welding Robot', 'Design Concept', 'Designed a system concept with interchangeable end-effectors; explored arm design, workspace planning, tool changing, and motion automation.');
addEntry('Self-Charging Electric Vehicle Concept', 'Electric Mobility', 'Studied auxiliary energy recovery, battery monitoring, energy management, and regenerative braking.');
addEntry('Hydrogen Production System', 'SIH 2025', 'Explored water electrolysis, renewable energy integration, process automation, and hydrogen storage concepts.');
addEntry('CAD-Based Mechanical Design & Simulation', 'Mechanical Design', 'Created component models and engineering drawings using CATIA V5, SolidWorks, and AutoCAD; focused on assembly fitment and manufacturability.');
addEntry('AI Application Concepts', 'Workflow Automation & Computer Vision', 'Designed concepts for an agentic business assistant and CCTV-based smart attendance system using workflow automation and computer vision.');

document.addPage();
addSection('Internship & Industrial Training');
addEntry('Virya Industries Pvt. Ltd.', 'Hosur | Dec 2025–Jan 2026', 'Exposure to industrial operations, production planning, workflow coordination, documentation, and process improvement.');
addEntry('Adroid Automation India Pvt. Ltd.', 'Hosur | Mar 2024', 'Exposure to industrial automation, equipment operation, manufacturing workflows, and technical reporting.');

addSection('Certifications');
addBullet('CATIA V5 and 3DEXPERIENCE Certifications - Dassault Systèmes / TANCAM.');
addBullet('AICTE Innovation Student Ambassador.');
addBullet('Best Research Paper Award - Annamalai University.');

addSection('Achievements');
addBullet('EDP Student Innovation Ambassador: Supported entrepreneurship activities, student pitching, and an eight-hour startup challenge.');
addBullet('Innovation Student Coordinator: Supported innovation and intellectual property awareness.');

addSection('Soft Skills');
document.fillColor(muted).font('Helvetica').fontSize(8.7).text(
  'Problem-solving; analytical thinking; product development; innovation; teamwork; leadership; project coordination; technical communication; continuous learning; Vibe Coding.',
  { lineGap: 2 },
);

document.end();
output.on('finish', () => console.log(`Generated ${outputPath}`));