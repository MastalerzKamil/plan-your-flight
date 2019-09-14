import React from "react";
import QuestionForm from "../components/QuestionForm";

export default {
  title: "Question Form"
};

export const DefaultState = () => <QuestionForm counter={0} />;

export const FirstState = () => <QuestionForm counter={1} />;

export const SecondState = () => <QuestionForm counter={2} />;

export const FinalState = () => <QuestionForm counter={3} />;
