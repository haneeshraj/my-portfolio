"use client";

import Container from "../Container/Container";
import Navbar from "../Navbar/Navbar";
import SmoothScroller from "../SmoothScroller/SmoothScroller";

export default function ClientContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScroller>
      <Container>
        <Navbar />
        {children}
      </Container>
    </SmoothScroller>
  );
}
