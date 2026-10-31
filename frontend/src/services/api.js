import axios from 'axios';
import { jobsData } from '../data/jobs';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000, // Increased from 5s → 15s to avoid spurious timeouts
});

// ── Read-only helpers (mock fallback is safe — no data is lost) ───────────────

const handleMockFallback = async (apiCall, mockFn) => {
  try {
    const response = await apiCall();
    return response.data;
  } catch (error) {
    console.warn('Backend API unavailable. Using frontend mock fallback.', error?.message);
    return await mockFn();
  }
};

export const getJobs = async (params = {}) => {
  return handleMockFallback(
    () => apiClient.get('/jobs', { params }),
    async () => {
      let filtered = [...jobsData];
      if (params.category && params.category !== 'All') {
        filtered = filtered.filter(j => j.category.toLowerCase().includes(params.category.toLowerCase()));
      }
      if (params.search) {
        const query = params.search.toLowerCase();
        filtered = filtered.filter(j => j.title.toLowerCase().includes(query) || j.category.toLowerCase().includes(query));
      }
      return { data: filtered, count: filtered.length };
    }
  );
};

export const getJobBySlug = async (slug) => {
  return handleMockFallback(
    () => apiClient.get(`/jobs/${slug}`),
    async () => {
      const job = jobsData.find(j => j.slug === slug || j.id === slug);
      if (!job) throw new Error('Job not found');
      return { data: job };
    }
  );
};

// ── Form submission helpers (NO silent mock — errors must surface to the user) ─
// These functions throw on failure so NursingForm/ChefForm/etc. can show the
// real error message instead of pretending the submission succeeded.

export const submitNursingApplication = async (formData) => {
  const response = await apiClient.post('/nursing-applications', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};

export const submitChefApplication = async (formData) => {
  const response = await apiClient.post('/chef-applications', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};

export const submitEngineeringApplication = async (formData) => {
  const response = await apiClient.post('/engineering-applications', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};

export const submitContact = async (data) => {
  const response = await apiClient.post('/contact', data);
  return response.data;
};

export const submitApplication = async (formData) => {
  const response = await apiClient.post('/applications', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};

export const registerCandidate = async (formData) => {
  const response = await apiClient.post('/candidates', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};

export const submitEligibility = async (data) => {
  const response = await apiClient.post('/eligibility', data);
  return response.data;
};

export const submitEmployerEnquiry = async (data) => {
  const response = await apiClient.post('/employer-enquiries', data);
  return response.data;
};

export default apiClient;
