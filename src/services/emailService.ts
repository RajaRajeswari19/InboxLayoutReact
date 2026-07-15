import axios from "axios";

const API_URL ="https://6a48b029a033dcb98d64cc52.mockapi.io/api/layout/comments";

export const getEmails = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createEmail = async (
  emailData: {
    name: string;
    email: string;
    body: string;
  }
) => {
  const response = await axios.post(API_URL,
    {
      ...emailData,
      isDeleted: false,
    }
  );

  return response.data;
};

export const moveToTrash = async (
  id: string
) => {
  await axios.put(`${API_URL}/${id}`, {
    isDeleted: true,
  });
};

export const deleteEmail = async (
  id: string
) => {
  await axios.delete(`${API_URL}/${id}`);
};