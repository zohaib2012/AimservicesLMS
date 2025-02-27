

import { create } from 'zustand';
import axios from 'axios';

const useMessagesStore = create((set) => ({
  messages: [],
  loading: false,

  createMessage: async (name, email, message) => {
    set({ loading: true });
    try {
      const response = await axios.post('http://localhost:5000/api/createmessage', { name, email, message });
      set((state) => ({
        messages: [...state.messages, response.data],
        loading: false,
      }));
      return response.data.message; // Success message
    } catch (error) {
      console.error('Error creating message:', error);
      set({ loading: false });
    }
  },

  fetchMessages: async () => {
    set({ loading: true });
    try {
      const response = await axios.get('http://localhost:5000/api/fetchmessages');
      set({ messages: response.data.getallmessages, loading: false });
    } catch (error) {
      console.error('Error fetching messages:', error);
      set({ loading: false });
    }
  },
}));

export default useMessagesStore;
