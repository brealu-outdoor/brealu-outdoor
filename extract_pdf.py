import pdfplumber
import os

pdf_path = "brochure.pdf"
output_path = "brochure_extracted.txt"

def extract_pdf_content(pdf_path, output_path):
    if not os.path.exists(pdf_path):
        return f"File not found: {pdf_path}"
    
    try:
        with pdfplumber.open(pdf_path) as pdf:
            all_text = []
            for i, page in enumerate(pdf.pages):
                text = page.extract_text()
                if text:
                    all_text.append(f"--- Page {i+1} ---\n{text}")
                
                # Also try to extract tables
                tables = page.extract_tables()
                if tables:
                    for table in tables:
                        all_text.append(f"--- Table on Page {i+1} ---")
                        for row in table:
                            # Filter out None and join with |
                            row_str = " | ".join([str(item).replace('\n', ' ') if item is not None else "" for item in row])
                            all_text.append(row_str)
            
            full_text = "\n".join(all_text)
            with open(output_path, "w", encoding="utf-8") as f:
                f.write(full_text)
            
            return f"Successfully extracted text and tables from {len(pdf.pages)} pages to {output_path}."
    except Exception as e:
        return f"Error occurred: {str(e)}"

if __name__ == "__main__":
    result = extract_pdf_content(pdf_path, output_path)
    print(result)
