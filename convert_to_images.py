import pypdfium2 as pdfium
import os
from PIL import Image

pdf_path = "brochure.pdf"
output_dir = "brochure_images"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

def convert_pdf_to_images(pdf_path, output_dir, max_pages=10):
    try:
        pdf = pdfium.PdfDocument(pdf_path)
        num_pages = min(len(pdf), max_pages)
        print(f"Converting {num_pages} pages to images...")
        
        for i in range(num_pages):
            page = pdf[i]
            bitmap = page.render(
                scale=2, # Higher scale for better OCR later
                rotation=0,
            )
            pil_image = bitmap.to_pil()
            image_path = os.path.join(output_dir, f"page_{i+1}.jpg")
            pil_image.save(image_path, "JPEG", quality=85)
            print(f"Saved {image_path}")
        
        return "Conversion finished."
    except Exception as e:
        return f"Error occurred: {str(e)}"

if __name__ == "__main__":
    convert_pdf_to_images(pdf_path, output_dir, max_pages=16) # Max 16 for see_image in one call
