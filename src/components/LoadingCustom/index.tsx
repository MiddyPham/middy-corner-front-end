"use client";
import {
  LoadingContainer,
  LoadingCard,
  LoadingSpinner,
  LoadingText,
  LoadingSubtext,
  LoadingDots,
  Dot,
} from "./loadingCustomStyle";

const LoadingCustom = () => {
  return (
    <LoadingContainer>
      <LoadingCard>
        <LoadingSpinner />
        <LoadingText>Từ từ, đang kiểm tra ngươi là ai??? </LoadingText>
        <LoadingSubtext>Chờ đi, tí thôi...</LoadingSubtext>
        <LoadingDots>
          <Dot delay={0} />
          <Dot delay={0.2} />
          <Dot delay={0.4} />
        </LoadingDots>
      </LoadingCard>
    </LoadingContainer>
  );
};

export default LoadingCustom;
