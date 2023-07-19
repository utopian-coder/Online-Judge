import axios from "axios";
import React, { useEffect, useState } from "react";

import classes from "./Problem.module.css";

const Problem = () => {
  const [problem, setProblem] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/problems");

        if (data.status != "success") {
          return (
            <p>Some error happened while loading the problem, try again!</p>
          );
        }

        setProblem(data.data);
      } catch (error) {
        return <p>Some error happened while loading the problem, try again!</p>;
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      {Object.keys(problem).length == 0 && <p>Loading...</p>}
      {Object.keys(problem).length != 0 && (
        <div className={classes["problem-container"]}>
          <h5>{problem.title}</h5>
          <p>{problem.problemStatement}</p>
          <div className={classes.example}>
            <div>
              <p className={classes["example-heading"]}>Input</p>
              <p>{problem.exampleInput}</p>
            </div>
            <div>
              <p className={classes["example-heading"]}>Output</p>
              <p>{problem.exampleOutput}</p>
            </div>
            <div>
              <p className={classes["example-heading"]}>Explanation</p>
              <p>{problem.exampleExplanation}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Problem;
