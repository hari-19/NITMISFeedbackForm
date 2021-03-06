import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

export async function createpdf(docDefinition: any, filename: string): Promise<void> {
    pdfMake.createPdf(docDefinition).download(filename);
}
