import os
from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional

app = FastAPI(
    title="GlobalFly Consultancy Pvt Ltd API",
    description="Backend API for GlobalFly overseas recruitment & consultancy platform focusing on Germany.",
    version="1.1.0"
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
    return {"status": "ok", "service": "GlobalFly Consultancy API", "version": "1.1.0"}

# Jobs Endpoint (Retaining 3 Core Job Categories)
@app.get("/api/jobs")
async def get_jobs():
    jobs = [
        {
            "id": "nursing",
            "title": "Nurse / Nursing Professional",
            "category": "Healthcare",
            "route": "/jobs/nursing",
            "ctaText": "View Nursing Opportunities"
        },
        {
            "id": "chef",
            "title": "Professional Chef",
            "category": "Chef & Kitchen",
            "route": "/jobs/chef",
            "ctaText": "View Chef Opportunities"
        },
        {
            "id": "engineering",
            "title": "Engineering Professional",
            "category": "Engineering",
            "route": "/jobs/engineering",
            "ctaText": "View Engineering Opportunities"
        }
    ]
    return {"status": "ok", "data": jobs, "count": len(jobs)}

# Dedicated Nursing Application Endpoint
@app.post("/api/nursing-applications")
async def create_nursing_application(
    fullName: str = Form(...),
    email: str = Form(...),
    phone: str = Form(...),
    currentCityCountry: str = Form(...),
    qualification: str = Form(...),
    graduationYear: str = Form(...),
    workExperience: str = Form(...),
    germanLevel: str = Form(...),
    passportAvailability: str = Form(...),
    contactMethod: Optional[str] = Form(None),
    resume: Optional[UploadFile] = File(None)
):
    # Validate resume file extension if provided
    if resume and resume.filename:
        ext = resume.filename.split(".")[-1].lower()
        if ext not in ["pdf", "doc", "docx"]:
            raise HTTPException(status_code=400, detail="Invalid file type. Only PDF, DOC, and DOCX files are allowed.")
    
    return {
        "status": "ok",
        "success": True,
        "message": "Your Nursing Application has been received successfully!"
    }

# Dedicated Chef Application Endpoint (NaviVisa inspired)
@app.post("/api/chef-applications")
async def create_chef_application(
    fullName: str = Form(...),
    email: str = Form(...),
    phone: str = Form(...),
    currentLocation: str = Form(...),
    currentJobTitle: str = Form(...),
    cuisineSpecialisation: str = Form(...),
    otherCuisine: Optional[str] = Form(None),
    yearsOfExperience: str = Form(...),
    qualification: str = Form(...),
    germanLevel: str = Form(...),
    englishLevel: str = Form(...),
    preferredRole: Optional[str] = Form(None),
    additionalMessage: Optional[str] = Form(None),
    resume: Optional[UploadFile] = File(None)
):
    # Validate resume file extension if provided
    if resume and resume.filename:
        ext = resume.filename.split(".")[-1].lower()
        if ext not in ["pdf", "doc", "docx"]:
            raise HTTPException(status_code=400, detail="Invalid file type. Only PDF, DOC, and DOCX files are allowed.")
    
    return {
        "status": "ok",
        "success": True,
        "message": "Your Chef Details have been sent successfully!"
    }

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
