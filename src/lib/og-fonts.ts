import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const ogFontFamily =
  'Inter, ui-sans-serif, system-ui, sans-serif';

export async function getOgFonts() {
  const fontsDir = join(process.cwd(), 'src/fonts');
  const [regular, semibold, bold] = await Promise.all([
    readFile(join(fontsDir, 'Inter-Regular.ttf')),
    readFile(join(fontsDir, 'Inter-SemiBold.ttf')),
    readFile(join(fontsDir, 'Inter-Bold.ttf')),
  ]);

  return [
    { name: 'Inter', data: regular, weight: 400 as const, style: 'normal' as const },
    { name: 'Inter', data: semibold, weight: 600 as const, style: 'normal' as const },
    { name: 'Inter', data: bold, weight: 700 as const, style: 'normal' as const },
  ];
}
