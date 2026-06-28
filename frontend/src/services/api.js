import axios from "axios";

// Change this when your backend is ready
const API = axios.create({
  baseURL: "http://localhost:8000",
});

export const analyzeTranscript = async (transcript) => {
  // Mock response for now
  return {
    data: {
      context: {
        crm: {
          customer_name: "John Doe",
          tier: "Gold",
          account_status: "Active",
        },
      },
      recommendations: [
        "Escalate issue to Tier-2 Support",
        "Offer 20% renewal discount",
        "Schedule a follow-up call",
      ],
      explanation: [
        "Customer has repeated complaints.",
        "Renewal is due soon.",
        "Customer is a Gold-tier account.",
      ],
      confidence: 92,
    },
  };

  // Uncomment this when backend is ready
  /*
  return API.post("/analyze", {
    transcript,
  });
  */
};