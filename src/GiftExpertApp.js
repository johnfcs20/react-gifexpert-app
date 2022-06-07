import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GiftExpertApp = ({defaultCategory = []}) => {

     const [categories, setCategories] =  useState (defaultCategory);
     
    return (
        <>
            <h1>GiftExpertApp</h1>
            <AddCategory setCategories={setCategories}/>
            <hr />
            <ol>
                {
                    categories.map(category =>
                     <GifGrid key={category} category={category} />
                    )
                }
            </ol>

        </>
    )
}