import React from "react";
import Card from "./Card";
import "./App.css"


function App() {
  return (
    <div className="wrapper">
      <Card
        img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        title="Salad"
        description="300"
        rating="4.9"
        coupon="Monday Happy"
        couponname="#Monhap"
      />

      <Card
        img="https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        title="Risotto"
        description="200"
        rating="4.9"
        coupon="Sunday Happy"
        couponname="#Monhap"
      />

      <Card
        img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        title="Baked Cod"
        description="700"
        rating="4.9"
        coupon="Blackday Happy"
        couponname="#Monhap"
      />
      <Card
        img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        title="Baked Cod"
        description="700"
        rating="4.9"
        coupon="Blackday Happy"
        couponname="#Monhap"
      />
    </div>
  );
}

export default App;
