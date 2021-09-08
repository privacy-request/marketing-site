import React from "react";
import Table from "./Table";
import RichTextSection from "./RichTextSection";
import Heading from "./Heading";
import BookADemoBanner from "../BookADemoBanner/BookADemoBanner";

const SliceZone = ({ slices, bookADemoBannerData }) => {
  return slices.map((slice, index) => {
    if (!slice) return null;
    switch (slice.slice_type) {
      case "heading":
        return <Heading key={index} data={slice} />;
      case "rich_text_section":
        return <RichTextSection key={index} data={slice} />;
      case "table2Col":
      case "table5Col":
        return <Table key={index} data={slice} />;
      case "book_a_demo_banner":
        return <BookADemoBanner {...bookADemoBannerData} />;
      case "media":
        return <></>;
      default:
        return null;
    }
  });
};

export default SliceZone;
