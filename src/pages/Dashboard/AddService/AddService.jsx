import React from "react";
import toast from "react-hot-toast";

const AddService = () => {
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const description = form.description.value;
    const image = form.image.files[0];

    if (!image) {
      return toast.error("Image Is Required!");
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);

    fetch("https://ajker-bazar-zeta.vercel.app/add-service", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Service Added Successfully Done!");
          form.reset();
        }
      });

    // console.log(name, description, image);
  };

  return (
    <div>
      <h1 className="text-2xl">Add Services</h1>
      <div className="modal-box">
        <form onSubmit={handleAddService}>
          <input
            type="text"
            name="name"
            placeholder="service name here"
            className="input input-bordered w-full mt-4"
          />
          <input
            accept="image/*"
            type="file"
            name="image"
            placeholder="Add your file here"
            className="input input-bordered w-full mt-4"
          />
          <textarea
            type="text"
            placeholder="add service description here"
            name="description"
            className="input input-bordered w-full h-28 mt-4"
          />
          <input
            className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-full mt-4"
            type="submit"
            value="Add Service"
          />
        </form>
      </div>
    </div>
  );
};

export default AddService;
