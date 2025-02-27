import React, { useState } from "react";
import { stderollemntstore } from "../../store/stdenrollemntstore";
// import { stderollemntstore } from "../store/stdenrollemntstore";

const GenerateLoginid = () => {
  const { generateloginid, loginid, password, loading } = stderollemntstore();
  const [email, setEmail] = useState("");
  const [credentials, setCredentials] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await generateloginid(email); // Generate login ID and password
    setCredentials({ loginid, password });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Generate Login Credentials</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          {loading ? "Generating..." : "Generate Login"}
        </button>
        
        {credentials && (
          <div className="mt-4">
            <p className="text-green-600 font-semibold">Login ID: {credentials.loginid}</p>
            <p className="text-green-600 font-semibold">Password: {credentials.password}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default GenerateLoginid;
