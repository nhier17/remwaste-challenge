"use client";

import React, { useState, useEffect } from "react";
import StepsHeader from "./StepsHeader";
import { steps } from "../constants";

const API_URL = 'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft';

const SkipSelectorPage = () => {
    const [skipOptions, setSkipOptions] = useState([]);

    useEffect(() => {
        const fetchSkipOptions = async () => {
            const response = await fetch(API_URL);
            const data = await response.json();
            setSkipOptions(data);
        }
        fetchSkipOptions();
    }, []);

  return (
    <section className="py-16">
        <StepsHeader steps={steps} />
    </section>
  )
}

export default SkipSelectorPage