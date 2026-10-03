import axios from 'axios';
import { jobsData } from '../data/jobs';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

// Helper for offline / dev mock fallback
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
      if (params.experience && params.experience !== 'All') {
        filtered = filtered.filter(j => j.experience === params.experience);
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

export const submitApplication = async (formData) => {
  return handleMockFallback(
    () => apiClient.post('/applications', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }),
    async () => {
      return { success: true, message: 'Your application has been received successfully!' };
    }
  );
};

export const registerCandidate = async (formData) => {
  return handleMockFallback(
    () => apiClient.post('/candidates', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }),
    async () => {
      return { success: true, message: 'Candidate registration submitted successfully!' };
    }
  );
};

export const submitEligibility = async (data) => {
  return handleMockFallback(
    () => apiClient.post('/eligibility', data),
    async () => {
      return { success: true, message: 'Your information has been submitted for an eligibility assessment.' };
    }
  );
};

export const submitEmployerEnquiry = async (data) => {
  return handleMockFallback(
    () => apiClient.post('/employer-enquiries', data),
    async () => {
      return { success: true, message: 'Employer hiring request submitted successfully!' };
    }
  );
};

export const submitContact = async (data) => {
  return handleMockFallback(
    () => apiClient.post('/contact', data),
    async () => {
      return { success: true, message: 'Thank you for reaching out. We will get back to you shortly!' };
    }
  );
};

export default apiClient;
