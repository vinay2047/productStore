import {create } from "zustand"
import { updateProduct } from "../../../backend/controllers/product.controller";
export const useProductStore = create((set) => ({
	products: [],
	setProducts: (products) => set({ products }),
    createProduct:async (product)=>{
        if(!product.name|| !product.price || !product.image){
            return {success:false,message:"Please fill in all fields"}
        }
        const res= await fetch('/api/products',{
             method:"POST",
             headers:{
                "Content-Type":"application/json"
             },
             body:JSON.stringify(product)
        })
        const data=await res.json();
        set((state)=>({products:[...state.products,data.data]}))
        return {success:true,message:"Product created successfully"}


    },
    fetchProducts:async ()=>{
        const res=await fetch('/api/products');
        const data=await res.json();
        set({products:data.data});
    },
    deleteProduct:async(pid)=>{
        const res=await fetch(`/api/products/${pid}`,{
            method:"DELETE"
        });
        const data=await res.json();
        if(!data.success){
            return {success:false,message:data.message}
        }
        set((state)=>({products:state.products.filter((product)=>{
            return product._id!==pid;
        })}))
        return {success:true,message:data.message};
    },
    updateProduct:async(pid,updatedProduct)=>{
        const res=await fetch(`/api/products/${pid}`,{
            method:"PUT",
            headers:{

                "Content-Type":"application/json",
            },
            body:JSON.stringify(updatedProduct)
        })
        const data=await res.json();
        if(!data.success){
            return {success:false,message:data.message}
        }
        set((state)=>({products:state.products.map((product)=>{
            if(product._id!==pid) return product;
            return {...product,...updatedProduct};
        })}))
        return {success:true,message:data.message};
    },
    
}));
