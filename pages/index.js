import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavbarHeader from "../components/NavbarHeader";

export default function Home() {
  const [isNext, setNext] = useState(false);
  const [isReview, setReview] = useState(false);
  const [isDump, setDump] = useState(false);

  const toggleClass = () => {
    setNext(!isNext);
  };

  const toggleYellow = () => {
    setReview(!isReview);
  };
  const toggleWhite = () => {
    setDump(!isDump);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>Demo Online Test</div>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.wrapperLeft}>
            <div className={styles.top}>
              <NavbarHeader />
            </div>
            <div className={styles.middle}>
              <Image
                src="/screen1.png"
                width="600"
                height="380"
                alt="screen"
              ></Image>
            </div>
            <div className={styles.bottom}>
              <nav className={styles.navbar}>
                <li className={styles.li}>
                  <button className={styles.button}>Clear Response</button>
                </li>
                <li className={styles.li}>
                  <button className={styles.button} onClick={toggleYellow}>
                    Review
                  </button>
                </li>
                <li className={styles.li}>
                  <button className={styles.button} onClick={toggleWhite}>
                    Dump
                  </button>
                </li>
                <li className={styles.li}>
                  <button className={styles.button}>Previous</button>
                </li>
                <li className={styles.li}>
                  <button className={styles.button} onClick={toggleClass}>
                    Next
                  </button>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightTop}>
            <div
              style={{
                width: "200px",
                height: "150px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Image
                src="/image2.jpg"
                width="180"
                height="120"
                alt="photo"
                style={styles.image2}
              ></Image>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <p style={{ marginRight: "15px" }}>Time Left</p>
                  <p>02:39:29</p>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <p style={{ marginRight: "15px" }}>Name</p>
                  <p>Ashish Kumar</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightMiddle}>
            <div
              style={{
                background: "blue",
                color: "white",
                marginBottom: "5px",
              }}
            >
              Question Pallette
            </div>

            <div>
              <div className={styles.rightbutton}>
                <button
                  className={
                    isNext
                      ? styles.green
                      : isReview
                      ? styles.yellow
                      : isDump
                      ? styles.white
                      : styles.rightNumber
                  }
                >
                  1
                </button>
                <button
                  className={
                    isNext
                      ? styles.green
                      : isReview
                      ? styles.yellow
                      : isDump
                      ? styles.white
                      : styles.rightNumber
                  }
                >
                  2
                </button>
                <button
                  className={
                    isNext
                      ? styles.green
                      : isReview
                      ? styles.yellow
                      : isDump
                      ? styles.white
                      : styles.rightNumber
                  }
                >
                  3
                </button>
                <button
                  className={
                    isNext
                      ? styles.green
                      : isReview
                      ? styles.yellow
                      : isDump
                      ? styles.white
                      : styles.rightNumber
                  }
                >
                  4
                </button>
                <button
                  className={
                    isNext
                      ? styles.green
                      : isReview
                      ? styles.yellow
                      : isDump
                      ? styles.white
                      : styles.rightNumber
                  }
                >
                  5
                </button>
                <button
                  className={
                    isNext
                      ? styles.green
                      : isReview
                      ? styles.yellow
                      : isDump
                      ? styles.white
                      : styles.rightNumber
                  }
                >
                  6
                </button>
                <button
                  className={
                    isNext
                      ? styles.green
                      : isReview
                      ? styles.yellow
                      : isDump
                      ? styles.white
                      : styles.rightNumber
                  }
                >
                  7
                </button>
                <button
                  className={
                    isNext
                      ? styles.green
                      : isReview
                      ? styles.yellow
                      : isDump
                      ? styles.white
                      : styles.rightNumber
                  }
                >
                  8
                </button>
                <button
                  className={
                    isNext
                      ? styles.green
                      : isReview
                      ? styles.yellow
                      : isDump
                      ? styles.white
                      : styles.rightNumber
                  }
                >
                  9
                </button>
                <button
                  className={
                    isNext
                      ? styles.green
                      : isReview
                      ? styles.yellow
                      : isDump
                      ? styles.white
                      : styles.rightNumber
                  }
                >
                  10
                </button>
              </div>
            </div>
          </div>
          <div className={styles.rightBottom}>
            <div
              style={{
                background: "blue",
                color: "white",
                marginBottom: "5px",
              }}
            >
              Legend (Click to View)
            </div>
            <div>
              <div className={styles.rightAnsbutton}>
                <button className={styles.rightAns}>4 Answer </button>
                <button className={styles.rightAns}>2 No Answer</button>
                <button className={styles.rightAns}>1 Review + Ans</button>
                <button className={styles.rightAns}>1 Review - Ans</button>
                <button className={styles.rightAns}>1 Dump</button>
                <button className={styles.rightAns}>1 No Visit</button>
              </div>
            </div>
            <div
              style={{
                background: "blue",
                color: "black",
                marginBottom: "5px",
                width: "100%",
                paddingLeft: "35px",
              }}
            >
              10 All Questions
            </div>
          </div>
          <div className={styles.rightFooter}>
            <button className={styles.rightbtn}>Profile </button>
            <button className={styles.rightbtn}>Instr</button>
            <button className={styles.rightbtn}>Question</button>
            <button className={styles.rightbtn}>Submit</button>
          </div>
        </div>
      </div>
      <div className={styles.footer}> © Addmen</div>
    </div>
  );
}
