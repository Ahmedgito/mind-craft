import React, { useEffect } from "react";
import "./cursor.css";
import paper from "paper";

const AnimatedCursor = () => {
  useEffect(() => {
    // Cursor position tracking
    let clientX = -100, clientY = -100;
    const innerCursor = document.querySelector(".cursor--small");

    const initCursor = () => {
      document.addEventListener("mousemove", (e) => {
        clientX = e.clientX;
        clientY = e.clientY;
      });

      const render = () => {
        if (innerCursor) {
          innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
        }
        requestAnimationFrame(render);
      };
      requestAnimationFrame(render);
    };

    initCursor();

    // Initialize Canvas
    const canvas = document.querySelector(".cursor--canvas");
    if (canvas) {
      const shapeBounds = { width: 10, height: 10 }; // Reduced size
      paper.setup(canvas);

      const polygon = new paper.Path.RegularPolygon(new paper.Point(0, 0), 8, 15); // Smaller radius
      polygon.strokeColor = new paper.Color("#87CEEB"); // Light Sky Blue color
      polygon.strokeWidth = 3; // Slightly thinner stroke
      polygon.shadowColor = new paper.Color("#87CEEB"); // Add shadow glow with the same color
      polygon.shadowBlur = 15; // Glow intensity
      polygon.smooth();

      const group = new paper.Group([polygon]);
      group.applyMatrix = false;

      let lastX = 0, lastY = 0;
      paper.view.onFrame = () => {
        lastX += (clientX - lastX) * 0.2;
        lastY += (clientY - lastY) * 0.2;
        group.position = new paper.Point(lastX, lastY);
      };
    }

    return () => {
      // Cleanup event listeners
      document.removeEventListener("mousemove", initCursor);
    };
  }, []);

  return (
    <div>
      <div className="cursor cursor--small"></div>
      <canvas className="cursor cursor--canvas"></canvas>
    </div>
  );
};

export default AnimatedCursor;
