import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";  // Import useNavigate for redirect
import { AuthContext } from "../../../contexts/AuthProvider";  // Assuming you have an AuthContext for user authentication

const AddService = () => {
  const { user } = useContext(AuthContext);  // Get user info from context
  const navigate = useNavigate();  // For redirecting to "My Products" page

  // Handle adding a product
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const condition = form.condition.value;
    const mobile = form.mobile.value;
    const location = form.location.value;
    const category = form.category.value;
    const description = form.description.value;
    const image = form.image.files[0];

    if (!image) {
      return toast.error("Image Is Required!");
    }

    // Check if the user is authenticated
    if (!user || !user.email) {
      return toast.error("Please log in to add a product.");
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("condition", condition);
    formData.append("mobile", mobile);
    formData.append("location", location);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("image", image);

    fetch("https://ajker-bazar-zeta.vercel.app/add-service", {
    //  fetch("http://localhost:3000/add-service", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product Added Successfully!");
          form.reset();
          navigate("/dashboard/my-product");  // Redirect to "My Products" page after success
        }
      })
      .catch((error) => {
        toast.error("Something went wrong. Please try again.");
        console.error(error);
      });
  }; 

  return (
    <div>
      <h1 className="text-2xl">Add a Product</h1>
      <div className="modal-box flex flex-col justify-center items-center min-h-screen">
        <form onSubmit={handleAddService}>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            className="input input-bordered w-full mt-2"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="input input-bordered w-full mt-2"
            required
          />
          <select name="condition" className="input input-bordered w-full mt-2">
            <option value="excellent">Condition Type</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
          </select>
          <input
            type="number"
            name="mobile"
            placeholder="Mobile Number"
            className="input input-bordered w-full mt-2"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location Name"
            className="input input-bordered w-full mt-2"
          />
          <input
            type="text"
            name="category"
            placeholder="Category Name"
            className="input input-bordered w-full mt-2"
          />

          <input
            accept="image/*"
            type="file"
            name="image"
            placeholder="Add your file here"
            className="input input-bordered w-full mt-2"
          />
          <textarea
            type="text"
            placeholder="Add product description here"
            name="description"
            className="input input-bordered w-full h-20 mt-2"
          />
          <input
            className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-full mt-2"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </div>
  );
};

export default AddService;
