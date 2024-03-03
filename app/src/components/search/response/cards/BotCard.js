// File: BotCard.js
// Description: This file defines the BotCard component, representing a card displaying information about a specific bot.

import React from "react";
import "./BotCard.css";
import eth from "../../../../assets/icons/eth.png";
import avax from "../../../../assets/icons/avax.png";
import matic from "../../../../assets/icons/matic.png";
import op from "../../../../assets/icons/op.png";
import celo from "../../../../assets/icons/celo.png";
import arb from "../../../../assets/icons/arb.png";
import bsc from "../../../../assets/icons/bsc.png";
import ftm from "../../../../assets/icons/ftm.png";

// Functional component BotCard, displaying details of a specific bot.
export const BotCard = ({ id, name, chain_ids, description }) => {
  // URL for the bot's dedicated page.
  const botUrl = `https://app.forta.network/bot/${id}`;

  // chain ID to icon image mapping
  const getIconFileName = (chainId) => {
    const fileNameMapping = {
        1: eth,
        42114: avax,
        5: eth,
        137: matic,
        10: op,
        43114: avax,
        42220: celo,
        42161: arb,
        56: bsc,
        250: ftm
    };
    return fileNameMapping[chainId] || "forta-logo-white-circle.png";
};

  // Render the BotCard with details such as name, description, id, and chain_ids.
  return (
    // Inside the BotCard component's return statement
    <div className="wrapper">
      <div className="title-container">
        <a
          className="BotCard__title"
          href={botUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Bot Name */}
          {name}
        </a>

        {/* Blockchain Logo */}
        <div className="logo">
          {chain_ids.map((chainId, index) => (
            <img
              key={index}
              src={getIconFileName(chainId)}
              alt={`Icon for ${chainId}`}
              width={25}
              height={25}
            />
          ))}
        </div>
      </div>

      {/* Bot ID */}
      <div className="BotCard__id">{id}</div>

      {/* Description of the Bot */}
      <div className="BotCard__description">{description}</div>
    </div>
  );
};