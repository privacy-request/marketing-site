import React from "react";
import styled from "styled-components";
import { RichText } from "prismic-reactjs";
import Close from "../../../../assets/close.svg";

const Notification = styled.div`
  background: ${({ theme }) => theme.colour.blue.dark};
  height: fit-content;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.paragraph.xsmall};
  padding-bottom: 0.3rem;

  a {
    color: ${({ theme }) => theme.colour.yellow};
  }
`;

const TextWrapper = styled.div`
  margin: auto;
  padding: 1rem 3rem;
`;

const CloseButton = styled.div`
  cursor: pointer;
  margin-right: 4.5rem;
`;

const NotificationBar = ({
  notificationBarRichText,
  setDisplayNotification,
  notificationBarRef,
}) => {
  return (
    <Notification ref={notificationBarRef}>
      <TextWrapper>
        <RichText render={notificationBarRichText} />
      </TextWrapper>
      <CloseButton
        onClick={() => {
          setDisplayNotification(false);
        }}
      >
        <Close />
      </CloseButton>
    </Notification>
  );
};

export default NotificationBar;
