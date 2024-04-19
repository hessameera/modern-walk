
"use client";


import ClotingButton from "./(component)/clotingButton";
import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, increment } from "./(Redux)/slices/userSlice";
import { AppDispatch, RootState } from "./(Redux)/store/store";
import Cards from './(component)/card'

export default function Home() {

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
          <p className="title">Flash Sales</p>
          <div className="bottomWrap">

            {loading ? (
              <h1>Loading...</h1>
            ) : (
              entities.slice(0, 5)?.map((user: any) => {
                return (<Cards title={user.title} price={user.price} image={user.image} description={user.description} category={user.category} />
                )
              })
            )}

          </div>
        </div>
        <div>
          <p className="title">Categories</p>
          <div className="bottomWrap">
            <ClotingButton text="Men's Clothing" />
            <ClotingButton text="Women's Clothing" />
          </div>
        </div>
      </div>
    </main>
  );
}
