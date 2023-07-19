import React, { useState } from "react";
import axios from "axios";

import classes from "./Ide.module.css";

const Ide = () => {
  const boilerPlate = `
#include <bits/stdc++.h>
using namespace std;

int sum(int a, int b)
{
  //write your code here
}`;

  const [code, setCode] = useState(boilerPlate);
  const [output, setOutput] = useState([]);
  const [isError, setIsError] = useState(null);

  const submitHandler = async (ev) => {
    ev.preventDefault();

    const payload = {
      language: "cpp",
      code,
    };

    try {
      const { data } = await axios.post("/users", payload);

      if (data.status == "success") setOutput(data.data);
      if (data.status == "fail") setIsError(data.message);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section>
      <form onSubmit={submitHandler} className={classes.form}>
        <textarea
          className={classes["form-control"]}
          name='code'
          cols='30'
          rows='10'
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
          }}
        />
        <button className='btn btn-ok'>Submit</button>
      </form>
      <div className={classes.result}>
        {isError && <div>{isError}</div>}
        {output.length > 0 &&
          output.map((curr) => {
            return (
              <p key={Math.random()} className='btn'>{`${
                curr ? "passed" : "test failed"
              }`}</p>
            );
          })}
      </div>
    </section>
  );
};

export default Ide;
