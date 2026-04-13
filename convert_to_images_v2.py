import pypdfium2 as pdfium
import os
from PIL import Image

pdf_path = "brochure.pdf"
output_dir = "brochure_images"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

def convert_pdf_to_images(pdf_path, output_dir, start_page=16, max_pages=19):
    try:
        pdf = pdfium.PdfDocument(pdf_path)
        total_pages = len(pdf)
        end_page = min(start_page + max_pages, total_pages)
        print(f"Converting pages {start_page+1} to {end_page} to images...")
        
        for i in range(start_page, end_page):
            page = pdf[i]
            bitmap = page.render(
                scale=2,
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
    convert_pdf_to_images(pdf_path, output_dir)
