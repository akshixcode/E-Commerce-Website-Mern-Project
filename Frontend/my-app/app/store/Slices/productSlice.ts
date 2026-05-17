import api from "@/app/utils/apis";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { set } from "react-hook-form";
import toast from "react-hot-toast";

// ================= INITIAL STATE =================
const initialState = {
  items: [],
  selectedProduct: null,
  productsById: {}, // ✅ FIXED (added itemsById)
  loading: false,
  error: null,
  formModalOpen: false,
};

// ================= GET PRODUCTS =================
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const res = await api.get("/getProducts");

      return res.data.products; // ✅ FIXED (standard naming)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  },
);

// ================= CREATE PRODUCT =================
export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (formData: any, thunkAPI) => {
    try {
      const res = await api.post("/createProducts", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.success) {
        return res.data.product; // OR res.data.data (depends on backend)
      }

      return thunkAPI.rejectWithValue("Product not created");
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  },
);

// ================= DELETE PRODUCT =================
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, thunkAPI) => {
    try {
      await api.delete(`/deleteProducts/${id}`);
      return id;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  },
);

// ================= UPDATE PRODUCT =================
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, formData }: { id: string; formData: FormData }, thunkAPI) => {
    try {
      const res = await api.put(`/updateProducts/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  },
);

// ================= SLICE =================
const productSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
    setProductsById: (state, action) => {
      state.productsById = action.payload;
    },
    setFormModal: (state, action) => {
      state.formModalOpen = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder

      // GET
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
      })

      // CREATE
      .addCase(createProduct.fulfilled, (state, action) => {
        state.items.unshift(action.payload); // latest first
      })

      // DELETE
      .addCase(deleteProduct.fulfilled, (state, action: any) => {
        state.items = state.items.filter((p: any) => p._id !== action.payload);
      })

      // UPDATE
      .addCase(updateProduct.fulfilled, (state, action: any) => {
        state.items = state.items.map((p: any) =>
          p._id === action.payload._id ? action.payload : p,
        );
      });
  },
});

export const {
  setSelectedProduct,
  setFormModal,
  setProductsById,
  clearSelectedProduct,
} = productSlice.actions;

export default productSlice.reducer;
