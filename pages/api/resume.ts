import { readFile } from 'node:fs/promises';
import path from 'node:path';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method not allowed');
  }

  const resumePath = path.join(process.cwd(), 'public', 'resume.pdf');
  const resume = await readFile(resumePath);

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="Sakthivel-S-Resume.pdf"');
  res.setHeader('Content-Length', resume.length);
  return res.status(200).send(resume);
}
