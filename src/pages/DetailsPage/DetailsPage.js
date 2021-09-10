import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./DetailsPage.scss";
import { getFullInfo } from "../../components/fetcher/fetcher";
import CardListItem from "../../components/CardListItem";
import AsideHeader from "../../components/AsideHeader";
import HeaderLayout from "../../components/HeaderLayout";

export const DetailsPage = (props) => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    getFullInfo(props.itemId).then((data) => {
      setInfo(...data);
    });
  }, []);

  return (
    <div>
      <HeaderLayout>
        <AsideHeader />
      </HeaderLayout>
      <div className="details-container">
        <CardListItem data={info} onAdd={() => {}} shouldAdd={false} />
      </div>
    </div>
  );
};

DetailsPage.propTypes = {
  itemId: PropTypes.string,
};
