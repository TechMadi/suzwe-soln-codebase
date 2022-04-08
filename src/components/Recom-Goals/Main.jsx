import Title from "../Typography/Title";
import Goal from "./Goal";
import React from "react";
import Form from "./Form";

const RecommendationsAndGoals = () => {
  const goals = [
    {
      goal: "Reduce  gas emissions",
      description:
        "Crop producers can change nutrient management practices to reduce emissions from  fertilizers, fungicides and pesticides",
    },
    {
      goal: "Making Fertilizers more accessible",
      description:
        "Get fertilizers at  subsidized rates. We  will deliver  it at your door step . Contact us for more information ",
    },
    {
      goal: "Help your fellow farmer ",
      description:
        "Take part in community initiatives to  bring change to  your community",
    },
    {
      goal: "Efficient farming recommendations",
      description:
        "We are planning to teach 3K+ farmers on efficient farming methods and best fertilizers and pesticides to use before the end of 2022.",
    },
  ];
  return (
    // when a radom place outside the formis clicked, the form is supposed to hide and that is why am attaching the function for hiding the form on the body holding the form
    <section className="recom-goals">
      <Title
        style={{ color: "#fff" }}
        mainTitle="Farming Tips"
        subTitle="Get new farming tips"
      />
      <div className="recom-goals__wrapper">
        <div className="goals">
          <Goal
            title="Efficient farming recommendations"
            description="We are planning to teach 3K+ farmers on efficient farming methods and best fertilizers and pesticides to use before the end of 2022."
          />
        </div>

        <div className="form__wrapper--main">
          <p className=" recom-goals__statement">
            Let us give you personal recommendations on what you should do and
            use.
          </p>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default RecommendationsAndGoals;
