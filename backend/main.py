from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI()

# Allow requests from your React app
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for production deployment
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

if __name__ == "__main__":
    import uvicorn
    # Run the app with host 0.0.0.0 and port from environment variable (render environment)
    uvicorn.run(app, host="0.0.0.0", port=int(os.environ.get("PORT", 8000)))
