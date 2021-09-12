import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./details.module.scss";
import { getFullInfo } from "../../components/fetcher/fetcher";
import CardListItem from "../../components/CardListItem";
import AsideHeader from "../../components/AsideHeader";
import HeaderLayout from "../../components/HeaderLayout";
import {useRouter} from "next/router";

const DetailsPage = () => {
    const router = useRouter()
    const [info, setInfo] = useState({});

    useEffect(() => {
        getFullInfo(router.query.id).then((data) => {
            setInfo(...data);
        });
    }, []);

    return (
        <div className={styles.back}>
            <HeaderLayout>
                <AsideHeader />
            </HeaderLayout>
            <div className={styles.detailsContainer}>
                <CardListItem data={info} onAdd={() => {}} shouldAdd={false} />
            </div>
        </div>
    );
};

DetailsPage.propTypes = {
    itemId: PropTypes.string,
};


export default DetailsPage
