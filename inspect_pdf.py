import pypdfium2 as pdfium
import os

pdf_path = "brochure.pdf"

def inspect_pdf(pdf_path):
    if not os.path.exists(pdf_path):
        return f"File not found: {pdf_path}"
    
    try:
        pdf = pdfium.PdfDocument(pdf_path)
        num_pages = len(pdf)
        print(f"Total pages: {num_pages}")
        
        for i in range(num_pages):
            page = pdf[i]
            text_page = page.get_textpage()
            text = text_page.get_text_range()
            if text and text.strip():
                print(f"--- Page {i+1} Text Found: {len(text)} characters ---")
                print(text[:500]) # First 500 chars
            else:
                print(f"--- Page {i+1} No Text Found ---")
        
        return "Inspection finished."
    except Exception as e:
        return f"Error occurred: {str(e)}"

if __name__ == "__main__":
    inspect_pdf(pdf_path)
