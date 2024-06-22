import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../Store/Slices/ProductSlice";

function AddProduct() {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const onSubmitFn = (data) => {
    console.log(data);
    dispatch(addProduct(data));
    reset();
  };

  return (
    <div className="mt-[100px]">
      <form
        onSubmit={handleSubmit((data) => onSubmitFn(data))}
        className="max-w-sm mx-auto"
      >
        <h1 className="text-center text-[20px] my-[10px]">Add Product page</h1>
        <div className="mb-5">
          <input
            type="text"
            id="email"
            className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Img URL"
            required
            autoComplete="off"
            {...register("productImg")}
          />
        </div>
        <div className="mb-5">
          <input
            type="text"
            id="email"
            className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Product Name"
            required
            autoComplete="off"
            {...register("productName")}
          />
        </div>
        <div className="mb-5">
          <input
            type="number"
            className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            placeholder="Product Price Dollar"
            autoComplete="off"
            {...register("productPrice")}
          />
        </div>{" "}
        <div className="mb-5">
          <input
            type="text"
            className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            placeholder="Product Description"
            autoComplete="off"
            {...register("productDescription")}
          />
        </div>
        <div className="mb-5">
          <select
            {...register("productCategory")}
            className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option defaultChecked value="mobile">
              Mobile
            </option>
            <option value="pc">PC</option>
            <option value="accasuars">Accasuars</option>
          </select>
        </div>{" "}
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
