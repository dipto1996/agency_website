from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow requests from your React app
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactForm(BaseModel):
    name: str
    email: str
    message: str

@app.post("/contact")
def contact(form: ContactForm):
    # You can save this to DB or email later
    print("Received contact form:", form)
    return {"message": f"Thank you, {form.name}. We’ll be in touch!"}
