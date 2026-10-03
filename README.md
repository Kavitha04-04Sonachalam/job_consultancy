# GlobalFly Overseas Recruitment & Consultancy

**GlobalFly** is a premier India-based overseas recruitment and consultancy web application specializing in **Germany** career pathways, nursing, chef opportunities, driving & logistics, skilled trades, IT engineering, university study programs, and dual vocational **Ausbildung** training.

---

## 🚀 Technology Stack

### Frontend
- **Framework**: React 19 + JavaScript (JSX)
- **Bundler**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM v7
- **API Service**: Axios (with standalone offline mock fallbacks)
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **SEO & Metadata**: React Helmet Async

### Backend
- **Framework**: Python 3.11+ & FastAPI
- **Validation**: Pydantic v2
- **ORM & Migrations**: SQLAlchemy 2.0 & Alembic
- **Database**: PostgreSQL (with SQLite zero-config fallback)
- **Security**: JWT Authentication & CORS

---

## 📁 Project Structure

```
Job_Consultancy/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/       # Header.jsx, Footer.jsx
│   │   │   ├── home/         # Hero.jsx, SearchSection.jsx, Categories.jsx, FeaturedJobs.jsx, etc.
│   │   │   ├── jobs/         # JobCard.jsx, ApplyModal.jsx
│   │   │   ├── forms/        # EligibilityForm.jsx, CandidateForm.jsx, EmployerForm.jsx, ContactForm.jsx
│   │   │   └── ui/           # Button.jsx, Card.jsx, Badge.jsx, Modal.jsx, Accordion.jsx, Input.jsx, Select.jsx
│   │   ├── pages/            # Home.jsx, Jobs.jsx, JobDetails.jsx, WorkInGermany.jsx, StudyInGermany.jsx, etc.
│   │   ├── data/             # categories.js, jobs.js, services.js, faq.js
│   │   ├── services/         # api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
└── backend/
    ├── app/
    │   ├── main.py
    │   ├── core/             # config.py, security.py
    │   ├── database/         # connection.py, base.py
    │   ├── models/
    │   ├── schemas/
    │   └── routes/
    ├── requirements.txt
    └── .env.example
```

---

## 🛠️ Local Setup & Running Instructions

### 1. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```
The application will launch at `http://localhost:5173`.

### 2. Backend Setup

```bash
cd backend
python -m venv venv
```

**Windows Activation:**
```bash
venv\Scripts\activate
```

**Install Dependencies:**
```bash
pip install -r requirements.txt
```

**Run FastAPI Server:**
```bash
uvicorn app.main:app --reload
```
Interactive API documentation will be available at:
`http://localhost:8000/docs`

---

## ⚖️ Legal & Compliance Disclaimer

> **GlobalFly provides recruitment and consultancy support. Visa, immigration and work permit decisions are made by the relevant authorities and depend on individual circumstances. No visa, job, admission or placement outcome is guaranteed.**
