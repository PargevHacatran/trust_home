import React, { useEffect, useRef } from "react";

import styles from "../../../styles/developer.module.css";

const data = [50, 45, 33, 15, 54, 13, 20, 17, 58, 10, 48, 33, 50, 39, 19, 26, 55, 18, 51, 33, 31, 23, 27, 28, 32, 37, 59, 55, 90, 100, 87];

export const BezieLine = () => {
    const canvasRef = useRef(null);

    const date = new Date();
    const currentMonth = date.getMonth() + 1;
    const currentYear = date.getFullYear();
    const currentDate = new Date(currentYear, currentMonth, 0);
    const labels = [...Array(currentDate.getDate())].map((_, i) => i + 1);

    const drawBezieLine = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        const padding = 0; 

        ctx.clearRect(0, 0, width, height);

        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, height - padding);
        ctx.lineTo(width - padding, height - padding);
        ctx.strokeStyle = "transparent";
        ctx.stroke();

        const maxData = Math.max(...data);
        const xStep = (width - 2 * padding) / (labels.length - 1);
        const yStep = (height - 2 * padding) / maxData; 

        const points = data.map((value, index) => {
            const x = padding + index * xStep;
            const y = height - padding - value * yStep;
            return { x, y };
        });

        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let i = 0; i < points.length - 1; i++) {
            const current = points[i];
            const next = points[i + 1];

            const controlX1 = (current.x + next.x) / 2;
            const controlY1 = current.y;
            const controlX2 = (current.x + next.x) / 2;
            const controlY2 = next.y;

            ctx.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, next.x, next.y);
        }

        ctx.lineTo(points[points.length - 1].x, height - padding);

        ctx.lineTo(points[0].x, height - padding);

        ctx.closePath();

        ctx.fillStyle = "rgba(29, 78, 216, 0.2)";
        ctx.fill();

        ctx.strokeStyle = '#1D4ED8';
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.width = 400;
            canvas.height = 220;
            drawBezieLine();
        }

        document.querySelector("#bezie-canvas")?.classList.add('bezie-line');
    }, []);

    return (
        <div className={styles.bezie_line_wrapper}>
            <canvas id="bezie-canvas" ref={canvasRef} className={styles.bezie_line}></canvas>
        </div>
    );
}
