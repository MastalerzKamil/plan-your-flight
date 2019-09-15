import React from "react";
import OffersList from "../components/OffersList";

export default {
  title: "Offers List"
};

export const Displays = () => (
  <div className="OffersList--tight">
    <OffersList />
  </div>
);
export const ResponsiveList = () => <OffersList />;
