
// import React, { useState } from "react";
// import useMessagesStore from "../../store/Messagesstore";
// // import useMessagesStore from "./useMessagesStore"; // Adjust the path if needed

// const Createmessagesform = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const { createMessage, loading } = useMessagesStore();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { name, email, message } = formData;

//     if (!name || !email || !message) {
//       alert("Please fill out all fields.");
//       return;
//     }

//     const responseMessage = await createMessage(name, email, message);
//     if (responseMessage) {
//       alert(responseMessage);
//       setFormData({ name: "", email: "", message: "" });
//     }
//   };

//   return (
//     <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
//       <h2>Send a Message</h2>
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: "10px" }}>
//           <label htmlFor="name">Name:</label>
//           <input
//             id="name"
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//             style={{ width: "100%", padding: "8px", margin: "5px 0" }}
//           />
//         </div>
//         <div style={{ marginBottom: "10px" }}>
//           <label htmlFor="email">Email:</label>
//           <input
//             id="email"
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter your email"
//             style={{ width: "100%", padding: "8px", margin: "5px 0" }}
//           />
//         </div>
//         <div style={{ marginBottom: "10px" }}>
//           <label htmlFor="message">Message:</label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Enter your message"
//             style={{ width: "100%", padding: "8px", margin: "5px 0" }}
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           style={{
//             padding: "10px 15px",
//             backgroundColor: "#4CAF50",
//             color: "white",
//             border: "none",
//             cursor: "pointer",
//           }}
//           disabled={loading}
//         >
//           {loading ? "Submitting..." : "Submit"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Createmessagesform;


import React, { useState } from "react";
import useMessagesStore from "../../store/Messagesstore";
// import useMessagesStore from "./useMessagesStore"; // Adjust the path if needed

const Createmessagesform = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { createMessage, loading } = useMessagesStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    const responseMessage = await createMessage(name, email, message);
    if (responseMessage) {
      alert(responseMessage);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>Send a Message</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="name" style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "16px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email" style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "16px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="message" style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "16px",
              minHeight: "100px",
            }}
          ></textarea>
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px 20px",
            backgroundColor: "#161717",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#272729")}
          // onMouseOut={(e) => (e.target.style.backgroundColor = "#0c0c0d")}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Createmessagesform;