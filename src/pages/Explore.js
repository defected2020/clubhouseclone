import React from "react";
import style from "../style/explore.module.css";
import { DownOutlined, FireOutlined } from "@ant-design/icons";
import data from "../data/explore.json";
import { Input } from "antd";
import SubHeader from "../components/SubHeader";

export default function Explore() {
  const { people, conversation } = data;

  return (
    <div className={style.exploreContainer}>
      <div className={style.header}>
        <SubHeader pageTitle="EXPLORE" />
        <Input
          style={{
            backgroundColor: "#f4f4f4",
            borderRadius: "0.8em",
            padding: "0.3em 1em",
            border: "none",
            boxShadow: "none"
          }}
          size="large"
          placeholder="Find people and Clubs"
          prefix={<img src="images/search.png" width="15px" />}
        ></Input>
      </div>
      <h4>PEOPLE TO FOLLOW</h4>
      <div className={style.peopleContainer}>
        {people.map(item => (
          <div className="p-2">
            <div className="d-flex align-items-center">
              <img src="/images/usr-img-2.jpeg" alt="" className="" />
              <div>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
            <button>Follow</button>
          </div>
        ))}

        <button className={style.showMore}>
          Show more people <DownOutlined />
        </button>
      </div>
      <h4>FIND CONVERSATIONS ABOUT...</h4>
      <div className="row mx-0">
        {conversation.map(item => (
          <div className="col-6 px-2 mb-3">
            <div className={style.conversationCard}>
              <h6>
                <FireOutlined />
                {item.title}
              </h6>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
