import React from "react";

const SingleNews = (news) => {};

const HorizontalNews = (news) => {};

const OverlayNews = (news) => {};

const ModeOneCard = (news) => {};

const ModeTwoCard = (news) => {};

export default function Card({ mode, news }) {
  if (mode === 1) ModeOneCard(news);
  if (mode == 2) ModeTwoCard(news);
}
