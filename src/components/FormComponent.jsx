// src/components/FormComponent.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";
const FormComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",

    phoneNo: "",
    country: "",
    city: "",
    panNo: "",
    aadharNo: "",
  });
  useEffect(() => {
    if (Object.keys(errors).length === 0) return;
    setErrors(validate());
  }, [formData]);
  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.phoneNo) newErrors.phoneNo = "Phone No. is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.panNo) newErrors.panNo = "Pan No. is required";
    if (!formData.aadharNo) newErrors.aadharNo = "Aadhar No. is required";
    return newErrors;
  };
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    delete validate().name,
      setFormData({
        ...formData,
        [name]: value,
      });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      navigate("/success", { state: formData });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>React Form</h1>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <span>{errors.firstName}</span>}
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span>{errors.lastName}</span>}
        </div>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <span>{errors.username}</span>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Password</label>
          <div className="password">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <div>
              <button type="button" onClick={handleTogglePassword}>
                {!showPassword ? (
                  <RiEyeFill size={20} color="white" />
                ) : (
                  <RiEyeCloseFill size={20} color="white" />
                )}
              </button>
            </div>
          </div>
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div>
          <label>Phone No.</label>
          <input
            type="number"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
          />
          {errors.phoneNo && <span>{errors.phoneNo}</span>}
        </div>
        <div>
          <label>Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
          </select>
          {errors.country && <span>{errors.country}</span>}
        </div>
        <div>
          <label>City</label>
          <select name="city" value={formData.city} onChange={handleChange}>
            <option value="">Select City</option>
            {formData.country === "India" && (
              <>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                {/* Add more Indian cities */}
              </>
            )}
            {formData.country === "USA" && (
              <>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                {/* Add more USA cities */}
              </>
            )}
          </select>
          {errors.city && <span>{errors.city}</span>}
        </div>
        <div>
          <label>Pan No.</label>
          <input
            type="alphanumeric"
            name="panNo"
            value={formData.panNo}
            onChange={handleChange}
          />
          {errors.panNo && <span>{errors.panNo}</span>}
        </div>
        <div>
          <label>Aadhar No.</label>
          <input
            type="text"
            name="aadharNo"
            value={formData.aadharNo}
            onChange={handleChange}
          />
          {errors.aadharNo && <span>{errors.aadharNo}</span>}
        </div>
        <button type="submit" disabled={Object.keys(errors).length > 0}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormComponent;
