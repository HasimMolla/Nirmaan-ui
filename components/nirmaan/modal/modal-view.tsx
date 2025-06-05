"use client";

import { useState } from "react";
import { Button } from "@/components/nirmaan/button/button";
import { Modal } from "@/components/nirmaan/modal/modal";

export default function CrazyUIModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>What is Nirmaan UI?</Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="What is Crazy UI?"
        description="A beautifully reusable and fully customizable UI component system."
        size="default"
        footer={
          <Button onClick={() => setIsOpen(false)} variant="primary">
            Close
          </Button>
        }
      >
        <p>
          Nirmaan UI is a component library built with performance,
          accessibility, and full design freedom in mind. Whether you’re
          building a dashboard, marketing site, or something wild — it’s ready.
        </p>
      </Modal>
    </>
  );
}
