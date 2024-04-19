"use client";

import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, increment } from "../(Redux)/slices/userSlice";
import { AppDispatch, RootState } from "../(Redux)/store/store";
import Cards from '../(component)/card'

const mensClothing = () => {
    const userRef = useRef(false);

    const { entities, loading, value } = useSelector(
        (state: RootState) => state.user
    );

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (userRef.current === false && entities.length === 0) {
            dispatch(fetchUsers());
        }
        return () => {
            userRef.current = true;
        };
    }, []);
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-20">
            <div className="mainWraper">
                <div>
                    <p className="title">Men's Clothing</p>
                    <div className="bottomWrap">
                        {loading ? (
                            <h1>Loading...</h1>
                        ) : (
                            entities?.filter((e: any) => e.category === "men's clothing").map((user: any) => {
                                return (<Cards title={user.title} price={user.price} image={user.image} description={user.description} category={user.category} />)
                            })
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}
export default mensClothing;