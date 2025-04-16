from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow requests from your React app
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, set this to your frontend domain
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactForm(BaseModel):
    name: str
    email: str
    message: str

@app.post("/contact")
def contact(form: ContactForm):
    # You can save this to a database or trigger email notifications later
    print("Received contact form:", form)
    return {"message": f"Thank you, {form.name}. We’ll be in touch!"}
