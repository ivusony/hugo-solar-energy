import { useRef, useEffect } from "react";

export default function ElectricCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouse = { x: 0, y: 0 };
    const bolts = [];

    const maxBolts = 20;

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      bolts.push({
        x: mouse.x,
        y: mouse.y,
        life: 20 + Math.random() * 10,
      });

      if (bolts.length > maxBolts) bolts.shift();
    };

    const drawBolt = (bolt) => {
      ctx.strokeStyle = `rgba(0, 255, 255, ${bolt.life / 30})`;
      ctx.beginPath();
      ctx.moveTo(bolt.x, bolt.y);

      let segments = 4;
      let prevX = bolt.x;
      let prevY = bolt.y;
      for (let i = 0; i < segments; i++) {
        const offsetX = (Math.random() - 0.5) * 30;
        const offsetY = (Math.random() - 0.5) * 30;
        ctx.lineTo(prevX + offsetX, prevY + offsetY);
        prevX += offsetX;
        prevY += offsetY;
      }

      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bolts.forEach((bolt, i) => {
        drawBolt(bolt);
        bolt.life -= 1;
        if (bolt.life <= 0) bolts.splice(i, 1);
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
    ></canvas>
  );
}
