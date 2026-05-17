"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import api from "@/app/utils/apis";
import { useAppDispatch, useAppSelector } from "@/app/store/Hooks";
import { createProduct, fetchProducts, updateProduct } from "@/app/store/Slices/productSlice";
import toast from "react-hot-toast";

export default function UserModal({ onClose }: any) {

    const dispatch = useAppDispatch();

    const { register, handleSubmit, reset, setValue } = useForm();
    const { items, loading, formModalOpen, productsById } = useAppSelector((state: any) => state.products);
    const id = productsById?._id;
    console.log("id", id)
    const [preview, setPreview] = React.useState<string | null>(null);
    const [file, setFile] = React.useState<File | null>(null);

    const onSubmit = async (data: any) => {
        try {
            const formData = new FormData();

            formData.append("name", data.name);
            formData.append("price", data.price);
            formData.append("description", data.description);
            formData.append("category", data.category);
            formData.append("stock", data.stock);

            if (file) formData.append("image", file);

            let action;

            if (id) {
                action = await dispatch(updateProduct({ id, formData }));

                if (updateProduct.fulfilled.match(action)) {
                    toast.success("Product updated");
                }
            } else {
                action = await dispatch(createProduct(formData));

                if (createProduct.fulfilled.match(action)) {
                    toast.success("Product created");
                }
            }

            dispatch(fetchProducts());

            reset();
            setPreview(null);
            setFile(null);

            onClose(); // ✅ only one close handler
        } catch (err: any) {
            toast.error(err.response?.data?.message || "Something went wrong");
        }
    };
    useEffect(() => {
        if (productsById) {
            setValue("name", productsById.name);
            setValue("price", productsById.price);
            setValue("description", productsById.description);
            setValue("category", productsById.category);
            setValue("stock", productsById.stock);
            setFile(productsById.image);
            setPreview(productsById.image);
        }
    }, [productsById]);
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">

            <h2 className="text-xl font-bold">Add Product</h2>

            <input {...register("name")} placeholder="Name" className="border p-2 w-full" />
            <input {...register("price")} placeholder="Price" className="border p-2 w-full" />
            <input {...register("category")} placeholder="Category" className="border p-2 w-full" />
            <input {...register("stock")} placeholder="Stock" className="border p-2 w-full" />
            <textarea {...register("description")} placeholder="Description" className="border p-2 w-full" />

            <input
                type="file"
                onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) {
                        setFile(f);
                        setPreview(URL.createObjectURL(f));
                    }
                }}
            />

            {preview && (
                <div className="relative w-fit">
                    <img src={preview} className="h-24 w-24 rounded" />
                    <button
                        type="button"
                        onClick={() => {
                            setFile(null);
                            setPreview(null);
                        }}
                        className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 rounded"
                    >
                        ✕
                    </button>
                </div>
            )}

            <button className="w-full bg-black text-white p-2 rounded">
                Save Product
            </button>

        </form>
    );
}