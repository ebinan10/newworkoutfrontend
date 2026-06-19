import React, { useState, useContext } from "react";
import Axios from "../api/Axios";
import { UserDetailContext } from "../hooks/ApiContext";
import "./App.css";

function CreateWorkout() {
  const { token } = useContext(UserDetailContext);

  const [formData, setFormData] = useState({
    title: "",
    reps: "",
    load: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, reps, load } = formData;

    if (!title.trim() || !reps || !load) {
      return setError("Please fill all fields");
    }

    try {
      setLoading(true);
      setError("");

      const response = await Axios.post(
        "/workouts",
        {
          title,
          reps: Number(reps),
          load: Number(load),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);

      setFormData({
        title: "",
        reps: "",
        load: "",
      });
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to create workout"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="workout-form">
      <form onSubmit={handleSubmit}>
        <h2>Create Workout</h2>

        <input
          type="text"
          name="title"
          placeholder="Workout Title"
          value={formData.title}
          onChange={handleChange}
        />

        <input
          type="number"
          name="reps"
          placeholder="Reps"
          value={formData.reps}
          onChange={handleChange}
          min="1"
        />

        <input
          type="number"
          name="load"
          placeholder="Load (kg)"
          value={formData.load}
          onChange={handleChange}
          min="0"
        />

        {error && <p className="error">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Workout"}
        </button>
      </form>
    </div>
  );
}

export default CreateWorkout;