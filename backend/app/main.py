import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="GlobalFly Overseas Recruitment API",
    description="Backend API for GlobalFly overseas recruitment & consultancy platform focusing on Germany.",
    version="1.0.0"
)

# CORS Configuration
origins = os.getenv("CORS_ORIGINS", "http://localhost:5173,http://127.0.0.1:5173").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/health")
async def health_check():
    return {"status": "ok", "service": "GlobalFly API", "version": "1.0.0"}

# Mock endpoints for standalone backend execution
@app.get("/api/jobs")
async def get_jobs():
    return {"status": "ok", "data": [], "message": "Jobs endpoint ready."}

@app.post("/api/candidates")
async def create_candidate():
    return {"status": "ok", "success": True, "message": "Candidate registration submitted successfully!"}

@app.post("/api/applications")
async def create_application():
    return {"status": "ok", "success": True, "message": "Job application received successfully!"}

@app.post("/api/eligibility")
async def create_eligibility():
    return {"status": "ok", "success": True, "message": "Your information has been submitted for an eligibility assessment."}

@app.post("/api/employer-enquiries")
async def create_employer_enquiry():
    return {"status": "ok", "success": True, "message": "Employer hiring request submitted successfully!"}

@app.post("/api/contact")
async def create_contact():
    return {"status": "ok", "success": True, "message": "Thank you for reaching out. We will get back to you shortly!"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
