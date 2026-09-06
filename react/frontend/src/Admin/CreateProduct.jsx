import React, { useState } from "react";
import axios from "axios";

const CreateProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Hill Station Packages",
  });

  const [image, setImage] = useState(null);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const categories = ['Hill Station Packages', 'Beach Packages', 'Heritage & Culture', 'Pilgrimage Tours'];

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (!image) {
      setErrorMsg("Please upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("description", productData.description);
    formData.append("price", productData.price);
    formData.append("category", productData.category);
    formData.append("image", image);

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:3000/api/products", formData);
      setSuccessMsg("✅ Product created successfully!");
      setProductData({ name: "", description: "", price: "", category: "Hill Station Packages" });
      setImage(null);
    } catch (error) {
      setErrorMsg(
        error.response?.data?.message || "❌ Error creating product. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      maxWidth: "500px",
      margin: "40px auto",
      marginTop:'90px',
      padding: "24px",
      backgroundColor:"skyblue",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      borderRadius: "8px",
      marginLeft:'100px'
    
    }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>
        🛒 Add New Package
      </h2>

      {successMsg && <p style={{ color: "green", marginBottom: "12px" }}>{successMsg}</p>}
      {errorMsg && <p style={{ color: "red", marginBottom: "12px" }}>{errorMsg}</p>}

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div style={{ marginBottom: "16px" }}>
          <input
            type="text"
            name="name"
            placeholder="Package Name"
            value={productData.name}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc"
            }}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <textarea
            name="description"
            placeholder="Package Description"
            value={productData.description}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc"
            }}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={productData.price}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc"
            }}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <select
            name="category"
            value={productData.category}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc"
            }}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
            style={{ width: "100%" }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            backgroundColor: loading ? "#3b82f6aa" : "#2563eb",
            color: "#fff",
            padding: "12px",
            borderRadius: "4px",
            border: "none",
            cursor: loading ? "not-allowed" : "pointer",
            fontWeight: "bold"
          }}
        >
          {loading ? "Uploading..." : "Add Package"}
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
